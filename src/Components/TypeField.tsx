import { ReactNode, useEffect, useRef } from 'react'
import { vocabularyList } from '../vocabularyList'
import styles from './TypeField.module.css'
import Word from './Word'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../State/Store'
import { updateCaretPosition } from '../State/Slices/caretPositionSlice'

const TypeField = ({ children }: { children: ReactNode }) => {
  const typeRef = useRef<HTMLDivElement>(null)
  const currentWordIndex = useSelector((state: RootState) => state.currentWordIndex.value)
  const dispatch = useDispatch()

  const caretBottomPosition = useSelector((state: RootState) => state.caretPosition.top) + 35

  useEffect(() => {
    if (caretBottomPosition == 115) {
      if (typeRef.current) {
        typeRef.current.style.top = '-35px'

        const currentWord: HTMLElement = document.querySelector(`.word${currentWordIndex}`)!
        dispatch(
          updateCaretPosition({
            top: currentWord.offsetTop,
            left: currentWord.offsetLeft,
          })
        )
      }
    }
  }, [caretBottomPosition])

  return (
    <div className={styles.typeField}>
      <p ref={typeRef}>
        {vocabularyList.map((word: string, index: number) => {
          return (
            <Word
              wordIndex={index}
              key={index}
              word={word}
            />
          )
        })}
        {children}
      </p>
      
    </div>
  )
}

export default TypeField
