import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { post } from "../../http/instanceMethods"

const name = "auth"

export const fetchSomeData = createAsyncThunk(
  `${name}/dummy`,
  async (payload, { rejectWithValue }) => {
    try {
      const response = await post("/feed/post", {
        title: "My",
        content: "This is my post content",
      })
      return response
    } catch (err: any) {
      return rejectWithValue(err.response.data)
    }
  }
)

export const slice = createSlice({
  name,
  initialState: {},
  reducers: {},
  extraReducers: {},
})

export default slice.reducer
