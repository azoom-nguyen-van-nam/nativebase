import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLoading: false,
  isLoggedIn: false
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setLoading: (state, { payload }) => {
      state.isLoading = payload
    },
    setLoggedIn: (state, { payload }) => {
      state.isLoggedIn = payload
    }
  }
})

export const { setLoading, setLoggedIn } = appSlice.actions

export default appSlice.reducer
