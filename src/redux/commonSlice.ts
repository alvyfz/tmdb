import { createSlice } from '@reduxjs/toolkit'

const commonSlice = createSlice({
  name: 'common',
  initialState: {
    search: '',
  },
  reducers: {
    setSearch: (state, action) => {
      state.search = action.payload
    },
  },
})

export const { setSearch } = commonSlice.actions

export default commonSlice.reducer
