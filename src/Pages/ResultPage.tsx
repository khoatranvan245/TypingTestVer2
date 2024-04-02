import { useSelector } from 'react-redux'
import { RootState } from '../State/Store'

import styles from './ResultPage.module.css'
const ResultPage = () => {
  const result = useSelector((state: RootState) => state.result)

  let correct: number = 0,
    incorrect: number = 0,
    extra: number = 0,
    missed: number = 0

  result.forEach(({ word, typeWord }) => {
    if (typeWord.length > word.length) extra = typeWord.length - word.length
    for (let i = 0; i < word.length; i++) {
      if (word[i] === typeWord[i]) correct++
      else if (typeWord[i] === undefined) missed++
      else incorrect++
    }
  })

  let wpm = Math.round(correct / 5 / (1 / 2))
  let acc = Math.round((correct / (correct + incorrect + missed + extra)) * 100)

  return (
    <div>
      <div className={styles.mainResult}>
        <div>
          <h1 className={styles.title}>wpm</h1>
          <h1 className={styles.result}>{wpm}</h1>
        </div>
        <div>
          <h1 className={styles.title}>acc</h1>
          <h1 className={styles.result}>{acc}%</h1>
        </div>
      </div>

      <div className={styles.subResult}>
        <div>
          <h1>correct</h1>
          <h1>{correct}</h1>
        </div>
        <div>
          <h1>incorrect</h1>
          <h1>{incorrect}</h1>
        </div>
        <div>
          <h1>missed</h1>
          <h1>{missed}</h1>
        </div>
        <div>
          <h1>extra</h1>
          <h1>{extra}</h1>
        </div>
      </div>
    </div>
  )
}

export default ResultPage
