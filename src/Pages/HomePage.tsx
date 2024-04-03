import Caret from '../Components/Caret'
import HiddenInput from '../Components/HiddenInput'
import TypeField from '../Components/TypeField'
import Timer from '../Components/Timer'
import { useSelector } from 'react-redux'
import { RootState } from '../State/Store'

function HomePage() {
  const gameState = useSelector((state: RootState) => state.gameState.value)

  return (
    <>
      <HiddenInput />
      <div
        style={{
          height: '30px',
        }}
      >
        {gameState === 'start' && <Timer time={30} />}
      </div>
      <TypeField>
        <Caret />
      </TypeField>
    </>
  )
}

export default HomePage
