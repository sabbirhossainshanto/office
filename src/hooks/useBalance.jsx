import { useQuery } from "@tanstack/react-query";
import useContextState from "./useContextState";
import { API } from "../api";
import { handleLogOut } from "../utils/handleLogOut";
import { AxiosSecure } from "../lib/AxiosSecure";

const useBalance = () => {
  const token = localStorage.getItem("adminToken");
  const { setGetToken } = useContextState();
  const { data: balanceData, refetch: refetchBalance } = useQuery({
    queryKey: ["balance"],

    queryFn: async () => {
      const res = await AxiosSecure.post(API.balance, {});
      if (res?.data?.success === false && token) {
        handleLogOut();
        setGetToken((prev) => !prev);
      } else if (res?.data?.success && token) {
        const data = res.data?.result;
        return data;
      }
    },
    gcTime: 0,
  });

  return { balanceData, refetchBalance };
};

export default useBalance;
