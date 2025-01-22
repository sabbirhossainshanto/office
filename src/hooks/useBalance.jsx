import { useQuery } from "@tanstack/react-query";
import { API } from "../api";
import { handleLogOut } from "../utils/handleLogOut";
import { AxiosSecure } from "../lib/AxiosSecure";
import { useSelector } from "react-redux";

const useBalance = () => {
  const { token } = useSelector((state) => state.auth);
  const { data: balanceData, refetch: refetchBalance } = useQuery({
    queryKey: ["balance"],

    queryFn: async () => {
      const res = await AxiosSecure.post(API.balance, {});
      if (res?.data?.success === false && token) {
        handleLogOut();
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
