import { useDispatch, useSelector } from 'react-redux'
import { updateInput } from '../State/Slices/inputSlice'
import { useEffect, useRef } from 'react'
import { RootState } from '../State/Store'
import { updateWordIndex } from '../State/Slices/currentWordIndexSlice'
import { resetCorrectLetters } from '../State/Slices/correctLettersSlice'

const HiddenInput = () => {
  const input = useSelector((state: RootState) => state.input.value)
  const dispatch = useDispatch()

  const inputRef = useRef<HTMLInputElement>(null)
  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  const handleInputChange = (inputValue: string) => {
    if (inputValue.includes(' ')) {
      dispatch(updateWordIndex())
      dispatch(updateInput(''))
      dispatch(resetCorrectLetters())
    } else {
      dispatch(updateInput(inputValue))
    }
  }

  return (
    <>
      <input
        style={{ opacity: '1', position: 'absolute', top: '0' }}
        ref={inputRef}
        type="text"
        value={input}
        onInput={(e) => handleInputChange(e.currentTarget.value)}
      />
    </>
  )
}

export default HiddenInput
