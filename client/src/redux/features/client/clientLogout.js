
import { createSlice } from "@reduxjs/toolkit";

const clientLogout = createSlice({
  name: 'clientLogout',
  initialState: { user: null, status: 'idle', error: null },
  reducers: {
    logoutUser: (state) => {
      state.user = null;
      state.status = 'idle';
      state.error = null;
    },
  },
});

export const { logoutUser } = clientLogout.actions;
export default clientLogout.reducer;