import { AxiosRequestConfig, AxiosResponse } from "axios"
import { instance } from "./instance"

function validateStatus(status: any) {
  return Number(status) >= 200 && status < Number(300)
}

export function post<T = any, R = AxiosResponse<T>>(
  url: string,
  data?: T,
  config?: AxiosRequestConfig<T>
): Promise<R> {
  return instance.post(url, data, { ...config, validateStatus })
}
