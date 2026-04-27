import { createSlice } from "@reduxjs/toolkit";

const connectionsSlice = createSlice({
  name: "Connection",
  // Change 'intialState' to 'initialState'
  initialState: null,
  reducers: {
    addConnection: (state, action) => action.payload,
    removeConnection: () => null,
  },
});

export const { addConnection, removeConnection } = connectionsSlice.actions;

export default connectionsSlice.reducer;
