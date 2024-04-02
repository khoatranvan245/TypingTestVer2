import { useSelector } from 'react-redux'
import HomePage from './Pages/HomePage'
import ResultPage from './Pages/ResultPage'
import { RootState } from './State/Store'
import './App.css'
import ResetButton from './Components/ResetButton'

function App() {
  const gameState = useSelector((state: RootState) => state.gameState.value)

  return <div className="container">
    {gameState == 'end' ? <ResultPage /> : <HomePage />}
    <ResetButton/>
    <div className='footer'></div>
  </div>
}

export default App
