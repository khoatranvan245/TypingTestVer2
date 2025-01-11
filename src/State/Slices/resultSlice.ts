import { PayloadAction, createSlice } from '@reduxjs/toolkit'

type resultType = {
  word: string
  typeWord: string
}[]

const initialState: resultType = []

const resultSlice = createSlice({
  name: 'result',
  initialState: initialState,
  reducers: {
    updateResult: (state, action: PayloadAction<{
        index: number
        value: {
            word: string
            typeWord: string
        }
    }>) => {
        state[action.payload.index] = action.payload.value
    },
    resetResult: (state) => {
      state = []
    }
  },
})

export default resultSlice.reducer
export const {updateResult, resetResult} = resultSlice.actions
