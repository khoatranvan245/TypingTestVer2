import { configureStore } from '@reduxjs/toolkit'
import inputReducer from './Slices/inputSlice'
import wordIndexReducer from './Slices/currentWordIndexSlice'
import caretPositionReducer from './Slices/caretPositionSlice'
import wrongwordInputReducer from './Slices/wrongWordInputSlice'
import gameStateReducer from './Slices/gameState'

export const store = configureStore({
  reducer: {
    input: inputReducer,
    currentWordIndex: wordIndexReducer,
    caretPosition: caretPositionReducer,
    wrongWordInput: wrongwordInputReducer,
    gameState: gameStateReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
