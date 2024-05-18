'use client'
import React, {useEffect, useState} from 'react'
const page = () => {
    const lotteryItems = [
        'Car',
        'X',
        'Bike',
        'X',
        'X',
        'X',
        'TV',
        'X',
        'X',
        'X'
    ]
    const [lotteryId, setLotteryId] = useState(null)
    const [isPaused, setIsPaused] = useState(false)
    useEffect(()=>{
        if(!isPaused){
            setTimeout(()=>{
                let randomNum = Math.ceil(Math.random()*lotteryItems.length)
                if(randomNum === lotteryId){
                    randomNum = randomNum+1
                }
                setLotteryId(randomNum)
            }, 100);
        }
    },[lotteryId, isPaused])
    const pauseGame = () =>{
        setIsPaused(!isPaused)
    }
    const generateResult = ()=>{
        if(lotteryItems[lotteryId] !== 'X' && isPaused){
            return <div>Congratulations!!You won</div>
        }else if(lotteryItems[lotteryId] == 'X' && isPaused)
            return <div>You Lost</div>
    }
  return (
    <div>
        {
            lotteryItems.map((item, id)=>{
                return <div key = {id} style={{backgroundColor: id===lotteryId ? 'red' : null}} className='w-32 shadow-lg m-2 p-2'>{item}</div>
            })
        }
        {generateResult()}
        <button onClick={pauseGame}>{isPaused ? 'start' : 'Pause'}</button>
    </div>
  )
}
export default page