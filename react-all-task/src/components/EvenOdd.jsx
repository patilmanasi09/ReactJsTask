import React from 'react'
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

const EvenOdd = () => {
    const [count, setCount] = useState(0)
    return (
        <div className='container text-center mt-5 '>


            <button className="btn btn-primary" onClick={() => setCount(count + 1)}>+</button>
            <p>Count: {count}</p>

            <button className="btn btn-danger" onClick={() => setCount(count - 1)}>-</button>
            <p>{count % 2 == 0 ? 'even' : 'odd'}</p>

        </div>
    )
}

export default EvenOdd