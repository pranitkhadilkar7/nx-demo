import axios from "axios"
import { RequestInterceptor } from "./interceptors"

const host = process.env.REACT_APP_API_HOST
const port = process.env.REACT_APP_API_PORT

export const instance = axios.create({
  baseURL: `http://${host}:${port}`,
  timeout: 1000,
  headers: { "Content-Type": "application/json" },
})

instance.interceptors.request.use(RequestInterceptor)
