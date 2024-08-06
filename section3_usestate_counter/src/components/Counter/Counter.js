import './Counter.css'
import { useState } from "react"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Counter = () => {
    const [count, setCount] = useState(0)

    const addCount = () => {
        setCount(count + 1)
    }
    const subCount = () => {
        count <= 0 ? toast("Count cannot be less than 0!") : setCount(count - 1)
    }
    const resetCount = () => {
        setCount(0)
    }

    return (
        <div>
            <div className='box'>
                <h1>{count}</h1>
                <button className='add' onClick={addCount}>ADD</button>
                <button className='sub' onClick={subCount}>SUB</button>
                <button className='reset' onClick={resetCount}>RESET</button>
            </div>
            <ToastContainer theme="dark" />
        </div>
    )
}
