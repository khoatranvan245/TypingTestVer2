import { useDispatch, useSelector } from 'react-redux'
import { updateInput } from '../State/Slices/inputSlice'
import { useEffect, useRef } from 'react'
import { RootState } from '../State/Store'
import { decreaseWordIndex, increaseWordIndex } from '../State/Slices/currentWordIndexSlice'
import { removeWrongWordInput } from '../State/Slices/wrongWordInputSlice'
import { setGameState } from '../State/Slices/gameState'

const HiddenInput = () => {
  const input = useSelector((state: RootState) => state.input.value)
  const wrongWordInput = useSelector((state: RootState) => state.wrongWordInput.value)
  const gameState = useSelector((state: RootState) => state.gameState.value)
  const dispatch = useDispatch()

  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  useEffect(() => {
    if (input !== '' && gameState !== 'start') {
      dispatch(
        setGameState({
          value: 'start',
        })
      )
    }
  }, [input])

  const handleInputChange = (inputValue: string) => {
    if (inputValue.includes(' ') && inputValue[0] !== '') {
      setTimeout(() => {
        dispatch(increaseWordIndex())
        dispatch(updateInput(''))
      }, 0)
    } else {
      dispatch(updateInput(inputValue))
    }
  }

  const handleBackSpace = (keyPress: string) => {
    if (keyPress === 'Backspace' && input === '') {
      if (wrongWordInput.length > 0) {
        dispatch(decreaseWordIndex())
        dispatch(updateInput(wrongWordInput[wrongWordInput.length - 1]))
        dispatch(removeWrongWordInput())
      }
    }
  }

  return (
    <>
      <input
        style={{ opacity: '0', position: 'absolute', top: '0' }}
        ref={inputRef}
        type="text"
        value={input}
        onChange={(e) => handleInputChange(e.currentTarget.value)}
        onKeyDown={(e) => handleBackSpace(e.key)}
      />
    </>
  )
}

export default HiddenInput
