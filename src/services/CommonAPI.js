import { api } from "./config/axiosConfig";
import { defineCancelApiObject } from "./config/axiosUtils";

export const CommonApi = {
  GetReports: async (params, cancel = false) => {
    const response = await api.request({
      url: "/reports",
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      params,
      signal: cancel
        ? cancelApiObject[this.get.name].handleRequestCancellation().signal
        : undefined,
    });

    return response.data;
  },
};

const cancelApiObject = defineCancelApiObject(CommonApi);
