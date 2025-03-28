import axios from "axios";

const api = axios.create({
  headers: {
    'Authorization': `Bearer ${import.meta.env.VITE_API_TOKEN}`
  }
});


export const getData = async (endpoint, baseURL = import.meta.env.VITE_API_BASE_URL) => {

  const apiResult = api
    .get(endpoint, { baseURL })
    .then((response) => {
      //Bu kısımda global error handling yapılabilir.
      //Normalde projelerimde ayrı bir fonksiyon ile tek bir yerden
      //Hata yönetimi yapıp ilgili mesajı ekranda gösteriyorum
      response?.data?.success ? null : console.error(response?.data?.message);

      return response?.data || response;
    })
    .catch((err) => {
      throw err;
    });

  return apiResult;
};

export const postData = async (endpoint, data, baseURL = import.meta.env.VITE_API_BASE_URL) => {

  const apiResult = api
    .post(endpoint, data, { baseURL })
    .then((response) => {
      response?.data?.success ? null : console.error(response?.data?.message);
      return response?.data || response;
    })
    .catch((err) => {
      throw err;
    });

  return apiResult;
};
