const makeRequest = payload => {
  const { url, method, data, onSuccess } = action.payload;

  const dataOrParams = ["GET", "DELETE"].includes(method) ? "params" : "data";

  axios
    .request({
      url,
      method,
      [dataOrParams]: data
    })
    .then(data => {
      //Execute the onSuccess funciton that was passed in the payload, usually a function of the normal action format
      //dispatch(onSuccess(data.data));
      return data;
    })
    .catch(error => {
      console.log(error.message);
    })
    .finally(() => {
      //Something to do on done
    });
};
