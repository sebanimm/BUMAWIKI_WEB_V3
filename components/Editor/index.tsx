"use client";

import React, { useCallback, useState } from "react";
import { decodeContent, getYear } from "@/utils";
import { ArrowIcon } from "@/assets";
import { useDocs } from "@/hooks/useDocs";
import { useCreateDocsMutation, useUploadImageMutation } from "@/services/docs/docs.mutation";
import { useRouter } from "next/navigation";
import * as styles from "./style.css";
import DragDropUpload from "../DragDropUpload";

const wikiExampleList = [
  [
    { name: "색상", example: "<빨강>빨간</빨강> 사과" },
    { name: "어록", example: "<어록>있는 그대로 있어줘</어록>" },
    { name: "링크", example: "사건의 <링크 문서={박우빈}>용의자</링크>" },
  ],
  [
    { name: "항목", example: "<항목>노트북 챙기기</항목>" },
    { name: "소제목", example: "<소제목>개요</소제목>" },
    { name: "삐슝빠슝", example: "<삐슝빠슝>우와앙</삐슝빠슝>" },
  ],
  [
    { name: "취소선", example: "<취소선>사실 그런 적 없다</취소선>" },
    { name: "강조", example: "매우 <강조>중요한</강조>" },
    { name: "빙글빙글", example: "<빙글빙글>호와악</빙글빙글>" },
  ],
  [
    {
      name: "사진",
      example: "<사진 {80px}>https://buma.wiki/api/image/display/이윤찬/example.png</사진>",
    },
    {
      name: "비디오",
      example: "<비디오 {120px}>https://buma.wiki/api/image/display/이윤찬/video.mp4</비디오>",
    },
  ],
];

const Editor = () => {
  const [isExampleOpen, setIsExampleOpen] = useState(false);
  const { autoClosingTag, getDocsTypeByClassify } = useDocs();
  const { mutateAsync: create } = useCreateDocsMutation();
  const { mutateAsync: upload } = useUploadImageMutation();
  const router = useRouter();
  const [cursorPosition, setCursorPosition] = useState(0);
  const [docs, setDocs] = useState({
    enroll: 0,
    title: "",
    contents: "",
    docsType: "",
  });

  const uploadImage = async (file: File) => {
    if (!file) return;
    const { url } = await upload(file);
    setDocs((prev) => {
      const { contents } = prev;
      const first = contents.substring(0, cursorPosition);
      const middle = `<사진 {200px}>${url}</사진>`;
      const last = contents.substring(cursorPosition, contents.length);
      return {
        ...prev,
        contents: `${first}${middle}${last}`,
      };
    });
  };

  const onDragDropUpload = useCallback(
    (file: File) => {
      uploadImage(file);
    },
    [uploadImage],
  );

  const handleCreateDocsClick = async () => {
    if (!docs.title.trim()) return alert("제목을 입력해주세요!");
    if (!docs.enroll) return alert("문서 연도를 선택해주세요!");
    if (!docs.docsType) return alert("문서 분류를 선택해주세요!");
    if (!docs.contents.trim()) return alert("내용을 입력해주세요!");
    try {
      await create({ ...docs, docsType: getDocsTypeByClassify(docs.docsType) });
      alert("성공!");
      router.push(`/docs/${docs.title}`);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.editorBox}>
          <input
            onChange={({ target: { value } }) => setDocs((prev) => ({ ...prev, title: value }))}
            value={docs.title}
            placeholder="제목을 입력해주세요"
            className={styles.titleInput}
          />
          <div className={styles.enrollList}>
            |
            {getYear().map((year) => (
              <div key={year}>
                <span
                  onClick={() => setDocs((prev) => ({ ...prev, enroll: year }))}
                  className={styles.year[String(year === docs.enroll)]}
                >
                  &nbsp;{year}&nbsp;
                </span>
                |
              </div>
            ))}
          </div>
          <div className={styles.separator} />
          <div className={styles.docsTypeList}>
            {[
              "사건",
              "일반선생님",
              "전공선생님",
              "멘토선생님",
              "전공동아리",
              "사설동아리",
              "틀",
            ].map((docsType) => (
              <button
                onClick={() => setDocs((prev) => ({ ...prev, docsType }))}
                key={docsType}
                className={styles.docsType[String(docsType === docs.docsType)]}
              >
                {docsType}
              </button>
            ))}
          </div>
          <textarea
            onKeyDown={(e) => setCursorPosition((e.target as HTMLTextAreaElement).selectionStart)}
            onChange={(e) => setDocs((prev) => ({ ...prev, contents: autoClosingTag(e) }))}
            value={docs.contents}
            placeholder="문서 내용을 입력해주세요. 사진 또는 동영상을 넣으려면 파일을 드래그&드롭하세요..."
            className={styles.textarea[String(isExampleOpen)]}
          />
        </div>
        {/* eslint-disable-next-line react/no-danger */}
        <div
          className={styles.previewBox}
          dangerouslySetInnerHTML={{ __html: decodeContent(docs.contents) }}
        />
        <button onClick={handleCreateDocsClick} className={styles.writeButton}>
          생성하기
        </button>
        <header
          onClick={() => setIsExampleOpen((prev) => !prev)}
          className={styles.wikiBoxHeader[String(isExampleOpen)]}
        >
          <span className={styles.wikiTitle}>부마위키 문법 예제 보기</span>
          <ArrowIcon direction="down" fill="white" width={16} height={16} viewBox="0 0 26 30" />
        </header>
        {isExampleOpen && (
          <main className={styles.footer.body}>
            {wikiExampleList.map((list, index) => (
              <div className={styles.footer.wrap} key={index}>
                {list.map((ex) => (
                  <article className={styles.footer.box} key={ex.name}>
                    <hgroup className={styles.footer.tHead}>{ex.name}</hgroup>
                    <section className={styles.footer.tItem}>
                      <figure className={styles.footer.tCell.top}>{ex.example}</figure>
                      <figure
                        className={styles.footer.tCell.bottom}
                        // eslint-disable-next-line react/no-danger
                        dangerouslySetInnerHTML={{ __html: decodeContent(ex.example) }}
                      />
                    </section>
                  </article>
                ))}
              </div>
            ))}
          </main>
        )}
      </div>
      <DragDropUpload onUpload={onDragDropUpload} />
    </>
  );
};

export default Editor;
