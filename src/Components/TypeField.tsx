import { ReactNode, useEffect, useRef, useState } from 'react'
import styles from './TypeField.module.css'
import Word from './Word'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../State/Store'
import { updateCaretPosition } from '../State/Slices/caretPositionSlice'

type TypeFieldType = {
  children: ReactNode
  paragraph: string[]
}

const TypeField = ({ children, paragraph }: TypeFieldType) => {
  const typeRef = useRef<HTMLDivElement>(null)

  const currentWordIndex = useSelector((state: RootState) => state.currentWordIndex.value)
  const dispatch = useDispatch()

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
  }, [caretBottomPosition, paragraph])

  useEffect(() => {
    setScrollTime(1)
    typeRef.current!.style.top = 0 + 'px'
  }, [paragraph])


  return (
    <div className={[styles.typeField, 'typeField'].join(' ')}>
      <p ref={typeRef}>
        {paragraph.map((word: string, index: number) => {
          return (
            <Word
              paragraph={paragraph}
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
