import { useState } from 'react'
import './ClickCounter.css'

export default function ClickCounter() {
    const [count, setCount] = useState(0);

    return (
        <button
            type="button"
            className="counter"
            onClick={() => setCount((count) => count + 1)}
        >
            Count is {count}
        </button>
    )
}