import axios from "axios";
import { API, Settings } from "./index";

export const getSetApis = (setNoticeLoaded, baseUrl) => {
  const url = baseUrl ? `${baseUrl}/notice.json` : "/notice.json";

  axios
    .get(url)
    .then((res) => {
      const data = res.data;
      if (data?.result) {
        /* API */
        API.auth = data?.result?.endpoint?.auth;
        API.login = data?.result?.endpoint?.login;
        API.changePassword = data?.result?.endpoint?.changePassword;
        API.openMarket = data?.result?.endpoint?.openMarket;
        /* Settings */
        Settings.disabledDevtool = data?.result?.settings?.disabledDevtool;
        Settings.siteUrl = data?.result?.settings?.siteUrl;
        Settings.siteTitle = data?.result?.settings?.siteTitle;
        Settings.interval = data?.result?.settings?.interval;

        setNoticeLoaded(true);
      }
    })
    .catch((e) => {
      console.log(e);
    });
};
