import HomePage from './Pages/HomePage'
import ResultPage from './Pages/ResultPage'
import { createContext, useState } from 'react'

type gameStateType = 'not-started' | 'start' | 'end'

export const gameStateContext = createContext<{
  gameState: gameStateType
  setGameState: React.Dispatch<React.SetStateAction<gameStateType>>
} | null>(null)

function App() {
  const [gameState, setGameState] = useState<gameStateType>('not-started')
  return (
    <gameStateContext.Provider value={{ gameState, setGameState }}>
      {gameState == 'end' ? <ResultPage /> : <HomePage />}
    </gameStateContext.Provider>
  )
}

export default App
