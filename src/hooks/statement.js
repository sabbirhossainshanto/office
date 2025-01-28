import { useMutation, useQuery } from "@tanstack/react-query";
import { API } from "../api";
import { AxiosSecure } from "../lib/AxiosSecure";

export const useStatement = () => {
  return useMutation({
    mutationKey: ["statement"],
    mutationFn: async (payload) => {
      const { data } = await AxiosSecure.post(API.statement, payload);
      return data;
    },
  });
};

export const useGetStatement = (payload) => {
  return useQuery({
    queryKey: ["get-statement", payload],
    queryFn: async () => {
      const { data } = await AxiosSecure.post(API.statement, payload);
      return data;
    },
  });
};
