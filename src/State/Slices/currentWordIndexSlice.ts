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
    increaseWordIndex: (state) => {
      state.value += 1
    },
    decreaseWordIndex: (state) => {
      state.value -= 1
    }
  },
})

export const {increaseWordIndex, decreaseWordIndex} = currentWordIndexSlice.actions
export default currentWordIndexSlice.reducer
