import './App.css'
import Caret from './Components/Caret'
import HiddenInput from './Components/HiddenInput'
import TypeField from './Components/TypeField'

function App() {

  return (
    <div className="container">
      <HiddenInput />
      <TypeField>
        <Caret/>
      </TypeField>
    </div>
  )
}

export default App
