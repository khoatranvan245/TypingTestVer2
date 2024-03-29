import { useDispatch, useSelector } from 'react-redux'
import { updateInput } from '../State/Slices/inputSlice'
import { useEffect, useRef } from 'react'
import { RootState } from '../State/Store'
import { decreaseWordIndex, increaseWordIndex } from '../State/Slices/currentWordIndexSlice'
import { removeWrongWordInput } from '../State/Slices/wrongWordInputSlice'

const HiddenInput = () => {
  const input = useSelector((state: RootState) => state.input.value)
  const wrongWordInput = useSelector((state: RootState) => state.wrongWordInput.value)
  const dispatch = useDispatch()

  const inputRef = useRef<HTMLInputElement>(null)
  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  const handleInputChange = (inputValue: string) => {
    if (inputValue.includes(' ')) {
      dispatch(increaseWordIndex())
      dispatch(updateInput(''))
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

  console.log(wrongWordInput)

  return (
    <>
      <input
        style={{ opacity: '1', position: 'absolute', top: '0' }}
        ref={inputRef}
        type="text"
        value={input}
        onInput={(e) => handleInputChange(e.currentTarget.value)}
        onKeyDown={(e) => handleBackSpace(e.key)}
      />
    </>
  )
}

export default HiddenInput
