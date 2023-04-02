import axios from "axios";


const instance = axios.create ({
   baseURL: "http://localhost:3002/api",         // начальный URL
})

instance.interceptors.request.use(config => {
   config.headers.Authorization = window.localStorage.getItem("token")  // чтобы каждый раз при запросе записывать в headersAuth токен, если он есть

   return config
})


export default instance