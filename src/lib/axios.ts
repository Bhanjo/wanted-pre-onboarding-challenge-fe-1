import axios from 'axios';

const Axios = axios.create({
  baseURL: process.env.REACT_APP_WANTED_API,
});

export default Axios;
