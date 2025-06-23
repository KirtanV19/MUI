import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../api/client";

const users = createSlice({
  name: "users",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
});

export default users.reducer;
