import { useSelector } from 'react-redux'
import styles from './Caret.module.css'
import { RootState } from '../State/Store'
import { useEffect, useRef } from 'react'
const Caret = () => {
  const caretPosition = useSelector((state: RootState) => state.caretPosition)
  const input = useSelector((state: RootState) => state.input.value)

  const caretRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (caretRef.current) {
      caretRef.current.style.top = caretPosition.top + 'px'
      caretRef.current.style.left = caretPosition.left + 'px'
    }
  }, [caretPosition])

  return (
    <div
      className={styles.caret}
      ref={caretRef}
    ></div>
  )
}

export default Caret
