import { useMutation } from "@tanstack/react-query";
import { AxiosSecure } from "../lib/AxiosSecure";
import { API } from "../api";

export const useViewClients = () => {
  return useMutation({
    mutationKey: ["view-client"],
    mutationFn: async (payload) => {
      const { data } = await AxiosSecure.post(API.viewClient, payload);
      return data;
    },
  });
};
