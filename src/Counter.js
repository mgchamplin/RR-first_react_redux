import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount } from './features/counterSlice'

function Counter() {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()
    const [offsetInput, setOffset] = useState(0)

    const addAmount = (e) => {
        e.preventDefault()
        dispatch(incrementByAmount(Number(offsetInput)))
    }

    console.log("COUNTER input " + offsetInput + " count " + count)

    return (
        <div>
            <h1>Counter is {count}</h1>
            <button
                aria-label="Increment value"
                onClick={() => dispatch(increment())}>
                Increment
            </button>
            <button
                aria-label="Decrement value"
                onClick={() => dispatch(decrement())}>
                Decrement
            </button>
            <form onSubmit={(e) => addAmount(e)}>
                <input type="number" onChange={(e) => setOffset(e.target.value)} />
                <button type="submit">Add Offset</button>
            </form>
        </div>
    )
}

export default Counter
