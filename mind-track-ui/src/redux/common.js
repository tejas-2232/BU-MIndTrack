import { createSlice } from '@reduxjs/toolkit'
// import { getFromLocalStorage } from '../utils/localStorage';

const initialState = {
  showLoader: 0,
  showSnackbar: false,
  authorization: ''
}

const commonSlice = createSlice({
  name: 'commonSlice',
  initialState,
  reducers: {
    setLoader: (state, action) => {
      state.showLoader = action.payload;
    },
    setSnackbar: (state, action) => {
      state.snackbar = action.payload;
    },
    setAuthorization: (state, action) => {
      state.authorization = action.payload
    }
  },
});

export const { setLoader, setSnackbar, setAuthorization } = commonSlice.actions

export default commonSlice.reducer
