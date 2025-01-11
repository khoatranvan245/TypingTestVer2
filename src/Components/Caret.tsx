import { useSelector } from 'react-redux'
import styles from './Caret.module.css'
import { RootState } from '../State/Store'
import { useEffect, useRef } from 'react'
const Caret = () => {
  const caretPosition = useSelector((state: RootState) => state.caretPosition)
  const gameState = useSelector((state: RootState) => state.gameState.value)

  const caretRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (gameState == 'not-started')
      document.querySelector(`.${styles.caret}`)?.classList.add(styles.animation)
    else document.querySelector(`.${styles.caret}`)?.classList.remove(styles.animation)
  }, [gameState])

  useEffect(() => {
    if (caretRef.current) {
      caretRef.current.style.top = caretPosition.top + 'px'
      caretRef.current.style.left = caretPosition.left + 'px'
    }
  }, [caretPosition])

  console.log()

  return (
    <span
      className={[styles.caret, 'caret'].join(' ')}
      ref={caretRef}
    ></span>
  )
}

export default Caret
