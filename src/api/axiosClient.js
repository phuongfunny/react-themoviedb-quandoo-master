import axios from "axios";
import queryString from "query-string";
import { API_URL } from "../constant";
//set up dafault config for http requests here
// Please heva a look at here /github axios
const getToken = () => {
  return localStorage.getItem("token_user") || "";
};
const token = getToken();
const axiosClient = axios.create({
  baseURL: API_URL,
  headers: {
    "content-type": "application/json",
    Authorization: "Bearer " + token,
  },
  paramsSerializer: (params) => queryString.stringify(params),
});
axiosClient.interceptors.request.use(async (config) => {
  return config;
});
axiosClient.interceptors.response.use(
  (response) => {
    //handle token here
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  (error) => {
    //handle errors
    throw error;
  }
);
export default axiosClient;
