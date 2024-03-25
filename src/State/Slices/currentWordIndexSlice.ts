import { createSlice } from '@reduxjs/toolkit'

type currentWordIndexType = {
  value: number
}

const initialState: currentWordIndexType = {
  value: 0,
}

const currentWordIndexSlice = createSlice({
  name: 'wordIndex',
  initialState: initialState,
  reducers: {
    updateWordIndex: (state) => {
      state.value += 1
    },
  },
})

export const {updateWordIndex} = currentWordIndexSlice.actions
export default currentWordIndexSlice.reducer
