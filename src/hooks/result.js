import { useMutation } from "@tanstack/react-query";
import { API } from "../api";
import { AxiosSecure } from "../lib/AxiosSecure";

export const useAddResult = () => {
  return useMutation({
    mutationKey: ["result"],
    mutationFn: async (payload) => {
      const { data } = await AxiosSecure.post(API.result, payload);
      return data;
    },
  });
};
