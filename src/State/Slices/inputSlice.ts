import { createSlice } from '@reduxjs/toolkit'

type InputState = {
  value: ''
}
const initialState: InputState = {
  value: '',
}
const inputSlice = createSlice({
  name: 'input',
  initialState: initialState,
  reducers: {
    updateInput: (state, action) => {
      state.value = action.payload
    },
  },
})

export const { updateInput } = inputSlice.actions
export default inputSlice.reducer
