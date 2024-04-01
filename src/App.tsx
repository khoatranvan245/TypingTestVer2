import { useSelector } from 'react-redux'
import HomePage from './Pages/HomePage'
import ResultPage from './Pages/ResultPage'
import { RootState } from './State/Store'

function App() {
  const gameState = useSelector((state: RootState) => state.gameState.value)
  
  return gameState == 'end' ? <ResultPage /> : <HomePage />
}

export default App
