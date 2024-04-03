import styles from './Timer.module.css'

import { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { setGameState } from '../State/Slices/gameState'

const Timer = ({ time }: { time: number }) => {
  const [countdown, setCountDown] = useState(time)
  const timerId = useRef<number>()

  const dispatch = useDispatch()

  useEffect(() => {
    timerId.current = setInterval(() => {
      setCountDown((prev) => prev - 1)
    }, 1000)

    return () => {
      clearInterval(timerId.current)
    }
  }, [])

  useEffect(() => {
    if (countdown < 0) {
      clearInterval(timerId.current)
      dispatch(setGameState({
        value: 'end'
      }))
    }
  }, [countdown])
  return <div className={styles.timer}>{countdown}</div>
}

export default Timer
