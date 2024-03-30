import { useEffect, useState } from 'react'
import './App.css'
import Caret from './Components/Caret'
import HiddenInput from './Components/HiddenInput'
import ResetButton from './Components/ResetButton'
import TypeField from './Components/TypeField'
import { shuffle } from './Utils/ShuffleArray'
import { vocabularyList } from './vocabularyList'

function App() {
  const [paragraph, setParagraph] = useState<string[]>([])
  useEffect(() => {
    setParagraph(shuffle(vocabularyList))
  }, [])

  return (
    <div className="container">
      <HiddenInput />
      <TypeField paragraph={paragraph}>
        <Caret />
      </TypeField>
      <ResetButton setParagraph={setParagraph}/>
    </div>
  )
}

export default App
