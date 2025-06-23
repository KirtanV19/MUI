import { combineReducers } from "@reduxjs/toolkit";
import userSlice from "./slices/user.slices";
import taskSlice from "./slices/task.slices";

const rootReducer = combineReducers({
  users: userSlice,
  tasks: taskSlice,
});

export default rootReducer;
