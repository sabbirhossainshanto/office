import { useQuery } from "@tanstack/react-query";
import { API } from "../api";
import { AxiosSecure } from "../lib/AxiosSecure";

export const useGetOpenOrders = (payload) => {
  return useQuery({
    queryKey: ["openOrders", payload],
    queryFn: async () => {
      const { data } = await AxiosSecure.post(API.openOrders, payload);
      return data;
    },
    gcTime: 0,
  });
};
