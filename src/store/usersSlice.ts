import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "Users";

const initialState: Array<IUser> = [];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser(state, action) {
      state.push(action.payload);
    },
  },
});

export const { addUser } = usersSlice.actions;
export const usersReducer = usersSlice.reducer;
