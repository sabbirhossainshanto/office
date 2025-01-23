import { useQuery } from "@tanstack/react-query";
import { API } from "../api";
import { AxiosSecure } from "../lib/AxiosSecure";

export const useGetTV = () => {
  return useQuery({
    queryKey: ["tv"],
    queryFn: async () => {
      const { data } = await AxiosSecure.get(API.tv);
      return data;
    },
    gcTime: 0,
  });
};
