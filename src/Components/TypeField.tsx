import { vocabularyList } from '../vocabularyList'
import styles from './TypeField.module.css'
import Word from './Word'

const TypeField = () => {


  return (
    <div className={styles.typeField}>
      <p>
        {vocabularyList.map((word: string, index: number) => {
          return (
            <Word
              wordIndex={index}
              key={index}
              word={word}
            />
          )
        })}
      </p>
    </div>
  )
}

export default TypeField
