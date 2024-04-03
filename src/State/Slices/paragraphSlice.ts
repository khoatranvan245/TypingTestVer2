import { createSlice } from "@reduxjs/toolkit"
import { vocabularyList } from "../../vocabularyList"
import { shuffle } from "../../Utils/ShuffleArray"

type paragraphType = {
    value: string[]
}

const initialValue: paragraphType = {
    value: shuffle(vocabularyList)
}

const paragraphSlice = createSlice({
    name: 'paragraph',
    initialState: initialValue,
    reducers: {
        setParagraph: (state) => {
            state.value = shuffle(vocabularyList)
        }
    }
})

export default paragraphSlice.reducer
export const {setParagraph} = paragraphSlice.actions