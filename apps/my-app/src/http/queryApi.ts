import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const host = process.env.REACT_APP_API_HOST
const port = process.env.REACT_APP_API_PORT

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: `http://${host}:${port}` }),
  endpoints: () => ({}),
})
