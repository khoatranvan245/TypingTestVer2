import { useDispatch } from 'react-redux'
import styles from './ResetButton.module.css'
import { updateInput } from '../State/Slices/inputSlice'
import { resetWrongWordInput } from '../State/Slices/wrongWordInputSlice'
import { resetWordIndex } from '../State/Slices/currentWordIndexSlice'
import { setGameState } from '../State/Slices/gameState'
import { setParagraph } from '../State/Slices/paragraphSlice'
const ResetButton = () => {
  const dispatch = useDispatch()
  const resetPage = () => {
    document.querySelector('input')?.focus()

    dispatch(
      setGameState({
        value: 'not-started',
      })
    )
    dispatch(updateInput(''))

    dispatch(resetWrongWordInput())
    dispatch(resetWordIndex())

    dispatch(setParagraph())
  }
  return (
    <button
      className={styles.resetButton}
      onClick={resetPage}
    >
      <i className="fa-solid fa-arrow-rotate-right"></i>
    </button>
  )
}

export default ResetButton
