import React, { useEffect, useState } from 'react'

const StopWatch = () => {

    const [time, setTime] = useState(0)
    const [isRunning, setIsRunning] = useState(false)

    useEffect(() => {
        let interval
        if (isRunning) {
            interval = setInterval(() => {
                setTime((t) => t + 1)

            }, 1000)

        }

        return () => clearInterval(interval)

    }, [isRunning])

    return (

        <div className='container text-center mt-5 '>

            <h2>{time}</h2>
            <button className="btn btn-primary m-2" onClick={() => setIsRunning(true)}>Start
            </button>
            <button className="btn btn-danger m-2" onClick={() => setIsRunning(false)}>Stop
            </button>
            <button className="btn btn-secondary" onClick={() => { setTime(0); setIsRunning(false) }}>Reset
            </button>

        </div>
    )
}

export default StopWatch