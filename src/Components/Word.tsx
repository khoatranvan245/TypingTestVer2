import { useDispatch, useSelector } from 'react-redux'
import { StringToChar } from '../Utils/StringToChar'
import styles from './Word.module.css'
import { RootState } from '../State/Store'
import { useEffect, useState } from 'react'
import { updateCaretPosition } from '../State/Slices/caretPositionSlice'
import { addWrongWordInput, resetWrongWordInput } from '../State/Slices/wrongWordInputSlice'
import { updateResult } from '../State/Slices/resultSlice'
type WordType = {
  word: string
  wordIndex: number
  paragraph: string[]
}

const Word = ({ word, wordIndex, paragraph }: WordType) => {
  const input: string = useSelector((state: RootState) => state.input.value)
  const currentWordIndex = useSelector((state: RootState) => state.currentWordIndex.value)

  const [currentWord, setCurrentWord] = useState(word)
  const [wordInput, setWordInput] = useState('')

  const dispatch = useDispatch()

  //Update word display
  useEffect(() => {
    if (currentWordIndex == wordIndex) {
      let extraLetters = ''
      if (input.length >= word.length) {
        for (let i = word.length; i < input.length; i++) {
          extraLetters += input[i]
        }
      }
      setCurrentWord(word + extraLetters)
    }
  }, [input, currentWordIndex])

  //Change letter color and change caret position
  useEffect(() => {
    if (currentWordIndex === wordIndex) {
      setWordInput(input)

      if (input == '') {
        const currentWord: HTMLElement = document.querySelector(`.word${currentWordIndex}`)!
        dispatch(
          updateCaretPosition({
            top: currentWord.offsetTop,
            left: currentWord.offsetLeft,
          })
        )
      } else {
        if (document.querySelector(`.word${wordIndex}letter${input.length - 1}`)) {
          const lattestLetter: HTMLElement = document.querySelector(
            `.word${wordIndex}letter${input.length - 1}`
          )!
          dispatch(
            updateCaretPosition({
              top: lattestLetter.offsetTop,
              left: lattestLetter.offsetLeft + lattestLetter.offsetWidth,
            })
          )
        }
      }

      for (let i = 0; i < currentWord.length; i++) {
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
    }
  }, [input, currentWordIndex, currentWord])

  //Check word after typing
  useEffect(() => {
    if (currentWordIndex == wordIndex) {
      document.querySelector(`.word${wordIndex}`)?.classList.remove(styles.wrongWord)
      setCurrentWord(word)
    }
    if (currentWordIndex == wordIndex + 1) {
      if (wordInput !== word) {
        document.querySelector(`.word${wordIndex}`)?.classList.add(styles.wrongWord)
        dispatch(addWrongWordInput(wordInput + ' '))
      } else dispatch(resetWrongWordInput())

      dispatch(
        updateResult({
          index: wordIndex,
          value: {
            word: word,
            typeWord: wordInput,
          },
        })
      )
    }
  }, [currentWordIndex])

  //Reset letter when change paragraph
  useEffect(() => {
    for (let i = 0; i < currentWord.length; i++) {
      document
        .querySelector(`.word${wordIndex}letter${i}`)
        ?.classList.remove(styles.correct, styles.wrong)
    }
    setCurrentWord(word)
    setWordInput('')
    document.querySelector(`.word${wordIndex}`)?.classList.remove(styles.wrongWord)
  }, [paragraph])

  const letterList = StringToChar(currentWord)

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
