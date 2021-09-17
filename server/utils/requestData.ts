import axios from 'axios';

const requestData = async (
  uri: string | null | undefined,
  parameters?: { [key: string]: number | string }
) => {
  if (uri) {
    return axios.get(uri, { params: parameters })
    .then(res => res.data)
    .catch(err => {
      console.log(err.message);
      return null;
    });
  }
};

export default requestData;
