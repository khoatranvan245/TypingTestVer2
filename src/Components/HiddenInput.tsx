import { useDispatch} from 'react-redux'
import { updateInput } from '../State/Slices/inputSlice'
import { useEffect, useRef } from 'react'

const HiddenInput = () => {
  const dispatch = useDispatch()

  const inputRef = useRef<HTMLInputElement>(null)
  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  return (
    <>
      <input
        style={{opacity: '0'}}
        ref={inputRef}
        type="text"
        onChange={(e) => dispatch(updateInput(e.target.value))}
      />
    </>
  )
}

export default HiddenInput
