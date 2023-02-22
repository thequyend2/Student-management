import axios from "axios";

const BASE_URL = "https://604b7294ee7cb900176a21a7.mockapi.io";

const axiosIntance = axios.create({
  baseURL: BASE_URL,
  headers: {},
});

const requestHelper = ({ method, options }) => {
  return axiosIntance({
    method,
    ...options
  });
};

const Request = {
  get(options) {
    return requestHelper({ method: "GET", options });
  },
  put(options) {
    return requestHelper({ method: "PUT", options });
  },
  post(options) {
    return requestHelper({ method: "POST", options });
  },
  patch(options) {
    return requestHelper({ method: "PATCH", options });
  },
  delete(options) {
    return requestHelper({ method: "DELETE", options });
  }
};

export default Request;
