import { createSlice } from "@reduxjs/toolkit"

type caretPositionType = {
    top: number
    left: number
}

const initialState: caretPositionType = {
    top: 0,
    left: 0
}

const caretPositionSlice = createSlice({
    name: 'caretPosition',
    initialState: initialState,
    reducers: {
        updateCaretPosition: (state, action) => {
            state.left = action.payload.left
            state.top = action.payload.top
        }
    }
})

export default caretPositionSlice.reducer
export const {updateCaretPosition} = caretPositionSlice.actions