import { useEffect } from 'react'

import Caret from '../Components/Caret'
import HiddenInput from '../Components/HiddenInput'
import TypeField from '../Components/TypeField'
import Timer from '../Components/Timer'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../State/Store'
import { setParagraph } from '../State/Slices/paragraphSlice'

function HomePage() {
  const gameState = useSelector((state: RootState) => state.gameState.value)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setParagraph())
  }, [])

  return (
    <>
      <HiddenInput />
      {gameState === 'start' && <Timer time={30} />}
      <TypeField>
        <Caret />
      </TypeField>
    </>
  )
}

export default HomePage
