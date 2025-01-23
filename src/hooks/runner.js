import { useQuery } from "@tanstack/react-query";
import { API } from "../api";
import { AxiosSecure } from "../lib/AxiosSecure";

export const useGetSingleRunner = (payload) => {
  return useQuery({
    queryKey: ["runner", payload],
    queryFn: async () => {
      const { data } = await AxiosSecure.post(API.runners, payload);
      return data;
    },
    gcTime: 0,
  });
};
