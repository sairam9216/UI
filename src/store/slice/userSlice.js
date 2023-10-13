import { createSlice } from '@reduxjs/toolkit';
export const userSlice = createSlice({
  name: 'userData',
  initialState: {
    loading: false,
    user: null,
    error: null,
    theme: null
  },
  reducers: {
    setUserData(state, action) {
      state.user = action.payload;
    },
    setTheme(state, action) {
      state.theme = action.payload;
    }
  }
});

export const { setUserData, setTheme } = userSlice.actions;

export default userSlice.reducer;
