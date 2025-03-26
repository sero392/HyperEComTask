import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    headers:{
        'Authorization' : `Bearer ${import.meta.env.VITE_API_TOKEN}` 
    }
  });
  

  export const getData = async (endpoint) => {
    const apiResult = api
      .get(endpoint)
      .then((response) => {
        
        response?.data?.success ? null : console.error(response?.data?.message);

        return response?.data || response;
      })
      .catch((err) => {
        throw err;
      });
  
    return apiResult;
  };
  
  export const postData = async (endpoint, data) => {
  
    const apiResult = api
      .post(endpoint, data)
      .then((response) => {
        
        response?.data?.success ? null : console.error(response?.data?.message);

        return response?.data || response;
      })
      .catch((err) => {
        throw err;
      });
  
    return apiResult;
  };
  