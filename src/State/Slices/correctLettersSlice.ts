import { PayloadAction, createSlice } from '@reduxjs/toolkit'

type correctLettersType = {
  value: number
}

const initialState: correctLettersType = {
  value: 0,
}

const correctLettersSlice = createSlice({
  name: 'correctLetters',
  initialState: initialState,
  reducers: {
    increaseCorrectLetters: (state) => {
      state.value++
    },
    decreaseCorrectLetters: (state) => {
      state.value--
    },
    resetCorrectLetters: (state) => {
      state.value = 0
    },
    updateCorrectLetters: (state, action: PayloadAction<number>) => {
      state.value = action.payload
    }
  },
})

export const { increaseCorrectLetters, decreaseCorrectLetters, resetCorrectLetters, updateCorrectLetters } =
  correctLettersSlice.actions
export default correctLettersSlice.reducer

