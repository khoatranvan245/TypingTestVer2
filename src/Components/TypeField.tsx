import { ReactNode, useEffect, useRef, useState } from 'react'
import { vocabularyList } from '../vocabularyList'
import styles from './TypeField.module.css'
import Word from './Word'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../State/Store'
import { updateCaretPosition } from '../State/Slices/caretPositionSlice'
import { shuffle } from '../Utils/ShuffleArray'

const TypeField = ({ children }: { children: ReactNode }) => {
  const typeRef = useRef<HTMLDivElement>(null)

  const currentWordIndex = useSelector((state: RootState) => state.currentWordIndex.value)
  const dispatch = useDispatch()

  const [paragraph, setParagraph] = useState<string[]>([])

  const caretHeight = 30
  const caretBottomPosition =
    useSelector((state: RootState) => state.caretPosition.top) + caretHeight

  const [scrollTime, setScrollTime] = useState(1)

  useEffect(() => {
    if (caretBottomPosition > 70 + scrollTime * 30) {
      if (typeRef.current) {
        typeRef.current.style.top = -40 * scrollTime + 'px'

        const currentWord: HTMLElement = document.querySelector(`.word${currentWordIndex}`)!
        dispatch(
          updateCaretPosition({
            top: currentWord.offsetTop,
            left: currentWord.offsetLeft,
          })
        )

        setScrollTime(scrollTime + 1)
      }
    }
  }, [caretBottomPosition])

  useEffect(() => {
    setParagraph(shuffle(vocabularyList))
  }, [])

  return (
    <div className={styles.typeField}>
      <p ref={typeRef}>
        {paragraph.map((word: string, index: number) => {
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
