import '../App.css'
import { useContext, useEffect, useState } from 'react'

import Caret from '../Components/Caret'
import HiddenInput from '../Components/HiddenInput'
import ResetButton from '../Components/ResetButton'
import TypeField from '../Components/TypeField'
import { shuffle } from '../Utils/ShuffleArray'
import { vocabularyList } from '../vocabularyList'
import Timer from '../Components/Timer'
import { gameStateContext } from '../App'

function HomePage() {
  const [paragraph, setParagraph] = useState<string[]>([])
  const gameStateValue = useContext(gameStateContext)

  const gameState = gameStateValue?.gameState

  useEffect(() => {
    setParagraph(shuffle(vocabularyList))
  }, [])

  return (
    <div className="container">
      <HiddenInput />
      {gameState === 'start' && <Timer time={10} />}
      <TypeField paragraph={paragraph}>
        <Caret />
      </TypeField>
      <ResetButton setParagraph={setParagraph} />
    </div>
  )
}

export default HomePage
