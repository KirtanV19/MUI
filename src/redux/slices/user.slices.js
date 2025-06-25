import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../api/client";

export const fetchUsers = createAsyncThunk(
  "users/fetchuser",
  async (data, { rejectWithValue }) => {
    try {
      const response = await api.USERS.getAll(data);
      console.log("response: ", response);
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const users = createSlice({
  name: "users",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        console.log("action:- ", action);
        state.items = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default users.reducer;
