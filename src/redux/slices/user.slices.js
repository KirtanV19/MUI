import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../api/client";

export const fetchUsers = createAsyncThunk(
  "users/fetchuser",
  async (data, { rejectWithValue }) => {
    try {
      const response = await api.USERS.getAll(data);
      const totalHeader = response.headers["x-total-count"];
      const total = !isNaN(Number(totalHeader))
        ? Number(totalHeader)
        : response.data.length;

      console.log("response:", response);
      console.log("✔️ total:", total);

      return {
        data: response.data,
        total,
      };
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
    total: 0,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        console.log("action:- ", action);
        state.items = action.payload.data;
        state.total = action.payload.total;
        state.loading = false;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default users.reducer;
