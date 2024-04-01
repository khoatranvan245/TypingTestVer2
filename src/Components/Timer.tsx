import { useContext, useEffect, useRef, useState } from 'react'
import { gameStateContext } from '../App'

const Timer = ({ time }: { time: number }) => {
  const [countdown, setCountDown] = useState(time)
  const timerId = useRef<number>()

  const gameStateValue = useContext(gameStateContext)
  const setGameState = gameStateValue!.setGameState

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
      setGameState('end')
    }
  }, [countdown])
  return <h1>{countdown}</h1>
}

export default Timer
