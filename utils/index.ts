import { details, summary } from "@/components/Accordion/style.css";
import dayjs from "dayjs";
import "dayjs/locale/ko";

export const decodeContent = (content: string) => {
  const decoded = content
    .replaceAll(
      "<틀>",
      `<details class="frame_details"><table class="frame_table" style="width:100%;" >`,
    )
    .replaceAll("</틀>", `</table></details>`)
    .replaceAll("<틀제목", `<summary class="frame_caption" `)
    .replaceAll("</틀제목>", `<br><span>[ 펼치기 · 접기 ]</span></summary>`)

    .replace(/<행>(.*?)<\/행>/gi, "<tr>$1</tr>")
    .replace(/<열/gi, `<td class="frame_td" `)
    .replace(/스타일={{/gi, `style="`)
    .replace(/배경색=\(/gi, `;background-color:`)
    .replace(/글자색=\(/gi, `;color:`)
    .replace(/<\/열>/gi, `</td>`)
    .replace(/가로병합={{/gi, ` colspan="`)
    .replace(/세로병합={{/gi, ` rowspan="`)

    .replace(/}}/gi, `"`)
    .replace(/\);/gi, "")

    .replace(/<항목>(.*?)<\/항목>/gi, "<li style='list-style: disc';>$1</li>")
    .replace(/<어록>(.*?)<\/어록>/gi, "<div class='analects';>$1</div>")
    .replace(/<블록>(.*?)<\/블록>/gi, "<div class='block';>$1</div>")
    .replace(/<강조>(.*?)<\/강조>/gi, "<strong>$1</strong>")
    .replace(/<빨강>(.*?)<\/빨강>/gi, "<span style='color: red;'>$1</span>")
    .replace(/<주황>(.*?)<\/주황>/gi, "<span style='color: orange;'>$1</span>")
    .replace(/<노랑>(.*?)<\/노랑>/gi, "<span style='color: yellow;'>$1</span>")
    .replace(/<초록>(.*?)<\/초록>/gi, "<span style='color: green;'>$1</span>")
    .replace(/<파랑>(.*?)<\/파랑>/gi, "<span style='color: blue;'>$1</span>")
    .replace(/<보라>(.*?)<\/보라>/gi, "<span style='color: purple;'>$1</span>")
    .replace(/<하양>(.*?)<\/하양>/gi, "<span style='color: white;'>$1</span>")
    .replace(/<취소선>(.*?)<\/취소선>/gi, "<del style='color: #ccc;'>$1</del>")
    .replace(/<링크 문서=\{(.*?)\}>(.*?)<\/링크>/g, '<a href="/docs/$1">$2</a>')
    .replace(/<외부링크 문서=\{(.*?)\}>(.*?)<\/외부링크>/g, '<a href="$1">$2</a>')
    .replace(
      /<비디오 크기=\{(.*?)\}>(.*?)<\/비디오>/g,
      '<video style="width: $1" src="$2" controls />',
    )
    .replace(/<사진 크기=\{(.*?)\}>(.*?)<\/사진>/g, '<img style="width: $1" src="$2" alt="$2" />')
    .replace(
      /<소제목>(.*?)<\/소제목>/gi,
      `</details><details open class="${details}"><summary class="${summary}">$1</summary>`,
    )

    // deprecated
    .replace(/<<사진>>:{.*?}/gi, `<div class="image-preview">$1</div>`)
    .replace(
      /(?<=<<<|<<|>>|>>>)\s*http:\/\/bumawiki\.kro\.kr\/api\/\s*/g,
      process.env.NEXT_PUBLIC_SERVER_URL || "",
    )
    .replace(/(?<=<<<|<<)\s+|\s+(?=>>>|>>)/g, "%20")
    .replace(/<</gi, `<img src="`)
    .replace(/>>:{/gi, `" alt='' style="width:`)
    .replace(/}/gi, `%; !important"/>`)
    .replace(/&#.*;/gi, ``);

  return decoded;
};

export const dateText = (date: Date) => {
  return dayjs(date).locale("ko").format("YYYY년 M월 D일 A h시 m분");
};

export const translateAuthority = (authority: string) => {
  switch (authority) {
    case "ADMIN":
      return "관리자";
    case "USER":
      return "유저";
    case "READONLY":
      return "읽기전용 사용자";
    default:
      return authority;
  }
};
