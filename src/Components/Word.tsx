import { useSelector } from 'react-redux'
import { StringToChar } from '../Utils/StringToChar'
import styles from './Word.module.css'
import { RootState } from '../State/Store'
import { useEffect, useState } from 'react'
type WordType = {
  word: string
  wordIndex: number
}

const Word = ({ word, wordIndex }: WordType) => {
  const input = useSelector((state: RootState) => state.input.value)
  const currentWordIndex = useSelector((state: RootState) => state.currentWordIndex.value)

  const [correctLetterCounter, setCorrectLetterCounter] = useState(0)

  useEffect(() => {
    if (currentWordIndex === wordIndex) {
      for (let i = 0; i < word.length; i++) {
        document
          .querySelector(`.word${wordIndex}letter${i}`)
          ?.classList.remove(styles.correct, styles.wrong)
      }

      for (let i = 0; i < input.length; i++) {
        if (input[i] === word[i]) {
          document.querySelector(`.word${wordIndex}letter${i}`)?.classList.add(styles.correct)
          setCorrectLetterCounter(correctLetterCounter + 1)
        } else {
          document.querySelector(`.word${wordIndex}letter${i}`)?.classList.add(styles.wrong)
          setCorrectLetterCounter(correctLetterCounter - 1)
        }
      }
    }
  }, [input])

  if (currentWordIndex > wordIndex && correctLetterCounter < word.length) {
    document.querySelector(`.word${wordIndex}`)?.classList.add(styles.wrongWord)
  }

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
