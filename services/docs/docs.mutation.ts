import { useMutation } from "@tanstack/react-query";
import { requestCreateDocs, requestDeleteDocs, requestUpdateDocs } from "./docs.api";

export const useCreateDocsMutation = () => {
  return useMutation({
    mutationFn: requestCreateDocs,
  });
};

export const useUpdateDocsMutation = () => {
  return useMutation({
    mutationFn: requestUpdateDocs,
  });
};

export const useDeleteDocsMutation = () => {
  return useMutation({
    mutationFn: requestDeleteDocs,
    onSuccess: () => {
      alert("성공");
      window.location.href = "/";
    },
  });
};
