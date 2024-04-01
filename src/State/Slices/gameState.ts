import { PayloadAction, createSlice} from "@reduxjs/toolkit"

type gameState = {
  value: 'not-started' | 'start' | 'end'
}

const initialState: gameState = {
  value: 'start',
}

const gameStateSlice = createSlice({
    name: 'gameState', 
    initialState: initialState,
    reducers: {
        setGameState: (state, action: PayloadAction<gameState>) => {
            state = action.payload
        }
    }
})

export default gameStateSlice.reducer
export const {setGameState} = gameStateSlice.actions
