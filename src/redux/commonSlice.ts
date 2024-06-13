import { createSlice } from "@reduxjs/toolkit";

const commonSlice = createSlice({
  name: "common",
  initialState: {
    isOpenSidebar: true,
  },
  reducers: {
    setIsOpenSidebar: (state, action) => {
      state.isOpenSidebar = action.payload;
    },
  },
});

export const { setIsOpenSidebar } = commonSlice.actions;

export default commonSlice.reducer;
