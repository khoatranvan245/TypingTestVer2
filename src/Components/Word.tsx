import { useDispatch, useSelector } from 'react-redux'
import { StringToChar } from '../Utils/StringToChar'
import styles from './Word.module.css'
import { RootState } from '../State/Store'
import { useEffect, useState } from 'react'
import { updateCaretPosition } from '../State/Slices/caretPositionSlice'
type WordType = {
  word: string
  wordIndex: number
}

const Word = ({ word, wordIndex }: WordType) => {
  const input: string = useSelector((state: RootState) => state.input.value)
  const currentWordIndex = useSelector((state: RootState) => state.currentWordIndex.value)

  const [wordInput, setWordInput] = useState('')

  const dispatch = useDispatch()

  useEffect(() => {
    if (currentWordIndex === wordIndex) {
      for (let i = 0; i < word.length; i++) {
        document
          .querySelector(`.word${wordIndex}letter${i}`)
          ?.classList.remove(styles.correct, styles.wrong)
      }

      for (let i = 0; i < input.length; i++) {
        const currentLetter: HTMLElement = document.querySelector(`.word${wordIndex}letter${i}`)!

        if (input[i] === word[i]) {
          currentLetter?.classList.add(styles.correct)
        } else {
          currentLetter?.classList.add(styles.wrong)
        }
      }

      if (input == '') {
        const currentWord: HTMLElement = document.querySelector(`.word${currentWordIndex}`)!
        dispatch(
          updateCaretPosition({
            top: currentWord.offsetTop,
            left: currentWord.offsetLeft,
          })
        )
      } else {
        const lattestLetter: HTMLElement = document.querySelector(
          `.word${wordIndex}letter${input.length - 1}`
        )!
        dispatch(
          updateCaretPosition({
            top: lattestLetter.offsetTop - 3,
            left: lattestLetter.offsetLeft + lattestLetter.offsetWidth,
          })
        )
      }

      setWordInput(input)
    }

    if (currentWordIndex > wordIndex) {
      if (wordInput !== word)
        document.querySelector(`.word${wordIndex}`)?.classList.add(styles.wrongWord)
      console.log(wordInput)
    }
  }, [input])

  const letterList = StringToChar(word)

  return (
    <span className={[styles.word, `word${wordIndex}`].join(' ')}>
      {letterList.map((letter, index) => {
        return (
          <span
            key={index}
            className={`word${wordIndex}letter${index}`}
          >
            {letter}
          </span>
        )
      })}
    </span>
  )
}

export default Word
