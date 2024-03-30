import { useDispatch } from 'react-redux'
import styles from './ResetButton.module.css'
import { updateInput } from '../State/Slices/inputSlice'
import { resetWrongWordInput } from '../State/Slices/wrongWordInputSlice'
import { resetWordIndex } from '../State/Slices/currentWordIndexSlice'
import { shuffle } from '../Utils/ShuffleArray'
import { vocabularyList } from '../vocabularyList'
const ResetButton = ({setParagraph} : {setParagraph: React.Dispatch<React.SetStateAction<string[]>>}) => {
  const dispatch = useDispatch()
  const resetPage = () => {
    dispatch(updateInput(''))
    dispatch(resetWrongWordInput())
    dispatch(resetWordIndex())
    setParagraph(shuffle(vocabularyList))

    document.querySelector('input')?.focus()
  }
  return (
    <button className={styles.resetButton} onClick={resetPage}>
      <i className="fa-solid fa-arrow-rotate-right"></i>
    </button>
  )
}

export default ResetButton
