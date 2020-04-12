const axios = require("axios");

export const makeRequest = async (payload) => {
  const { url, method, data, header } = payload;

  const dataOrParams = ["GET", "DELETE"].includes(method) ? "params" : "data";

  await axios
    .request({
      url,
      method,
      [dataOrParams]: data,
      headers: header,
    })
    .then((data) => {
      //Execute the onSuccess funciton that was passed in the payload, usually a function of the normal action format
      //dispatch(onSuccess(data.data));
      return data;
    })
    .catch((error) => {
      console.log(error.message);
    })
    .finally(() => {
      //Something to do on done
    });
};
