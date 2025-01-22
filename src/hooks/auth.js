import { useMutation, useQuery } from "@tanstack/react-query";
import { AxiosSecure } from "../lib/AxiosSecure";
import { API } from "../api";

export const useLoginUser = () => {
  return useMutation({
    mutationKey: ["login"],
    mutationFn: async (payload) => {
      const { data } = await AxiosSecure.post(API.login, payload);
      return data;
    },
  });
};

export const useVerifyUser = () => {
  const token = localStorage.getItem("adminToken");
  return useQuery({
    queryKey: ["validateUser"],
    enabled: token ? true : false,
    queryFn: async () => {
      const { data } = await AxiosSecure.get(API.auth);
      return data;
    },
    refetchInterval: 10000,
    gcTime: 0,
  });
};
