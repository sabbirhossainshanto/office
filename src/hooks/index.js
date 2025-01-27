import { useMutation } from "@tanstack/react-query";
import { API } from "../api";
import { AxiosSecure } from "../lib/AxiosSecure";

export const useIndex = () => {
  return useMutation({
    mutationKey: ["index"],
    mutationFn: async (payload) => {
      const { data } = await AxiosSecure.post(API.index, payload);
      return data;
    },
  });
};
