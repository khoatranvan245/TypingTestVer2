import { useEffect } from 'react'
import styles from './Blur.module.css'

const Blur = () => {
  useEffect(() => {
    document.querySelector(`.${styles.blur}`)?.addEventListener('click', () => {
      document.querySelector('input')?.focus()
    })

    document.addEventListener('keydown', () => {
      document.querySelector('input')?.focus()
    })

    return () => {
      document.querySelector(`.${styles.blur}`)?.removeEventListener('click', () => {
        document.querySelector('input')?.focus()
      })
      document.removeEventListener('keydown', () => {
        document.querySelector('input')?.focus()
      })
    }
  }, [])

  return (
    <div className={styles.blur}>
      <h1>
        <i className="fa-solid fa-arrow-pointer"></i> Click here or press any button to focus
      </h1>
    </div>
  )
}

export default Blur
