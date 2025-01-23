import { useQuery } from "@tanstack/react-query";
import { API } from "../api";
import { AxiosSecure } from "../lib/AxiosSecure";

export const useGetOpenMarket = (payload) => {
  return useQuery({
    queryKey: ["openMarket", payload],
    queryFn: async () => {
      const { data } = await AxiosSecure.post(API.openMarket, payload);
      return data;
    },
    gcTime: 0,
  });
};
