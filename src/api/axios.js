import axios from 'axios';

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "b1e0d5e162433113fccb1d86dc271bcf",
    language: "ko-KR"
  }
})

export default instance;
