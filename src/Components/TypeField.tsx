import { ReactNode } from 'react'
import { vocabularyList } from '../vocabularyList'
import styles from './TypeField.module.css'
import Word from './Word'

const TypeField = ({children}: {children: ReactNode}) => {


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
      {children}
    </div>
  )
}

export default TypeField
