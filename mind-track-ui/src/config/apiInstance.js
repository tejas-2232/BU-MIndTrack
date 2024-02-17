import axios from "axios";

// const App_DATA = {
//   core: window.core,
//   APPLICATION: window.application,
// };

export const apiInstance = axios.create({
  // baseURL: `${App_DATA.core}`,
  baseURL: `http://127.0.0.1:8000/`
});

apiInstance.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem("accessToken") && localStorage.getItem("accessToken").replaceAll('"', '') 
  if (accessToken) {
    config.headers["Authorization"] = 'Bearer ' + accessToken;
  }
  return config;
});

apiInstance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error?.response?.status === 401) {
      localStorage.removeItem("accessToken");
      return Promise.reject(error);
    } else {
      return Promise.reject(error);
    }
  }
);
