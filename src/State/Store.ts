import { configureStore } from '@reduxjs/toolkit'
import inputReducer from './Slices/inputSlice'
import wordIndexReducer from './Slices/currentWordIndexSlice'
import correctLettersReducer from './Slices/correctLettersSlice'
import caretPositionReducer from './Slices/caretPositionSlice'

export const store = configureStore({
  reducer: {
    input: inputReducer,
    currentWordIndex: wordIndexReducer,
    correctLetter: correctLettersReducer,
    caretPosition: caretPositionReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
