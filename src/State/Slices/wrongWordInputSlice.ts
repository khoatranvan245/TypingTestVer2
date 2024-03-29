import { createSlice } from "@reduxjs/toolkit"

type wrongwordInputType = {
    value: string[]
}

const initialState: wrongwordInputType = {
    value: []
}

const wrongwordInputSlice = createSlice({
    name: 'wrongWordInput',
    initialState: initialState,
    reducers: {
        addWrongWordInput :(state, actions) => {
            state.value.push(actions.payload)
        },
        removeWrongWordInput: (state) => {
            state.value.pop()
        },
        resetWrongWordInput: (state) => {
            state.value = []
        }
    }
})

export default wrongwordInputSlice.reducer
export const {addWrongWordInput, removeWrongWordInput, resetWrongWordInput} = wrongwordInputSlice.actions