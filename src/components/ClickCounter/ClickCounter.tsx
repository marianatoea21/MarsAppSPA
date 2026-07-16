import { useState, useEffect } from 'react'
import './ClickCounter.css'

export default function ClickCounter() {
    const [count, setCount] = useState<number>(() => {
        const savedCount = localStorage.getItem('nasa_click_count');
        return savedCount ? parseInt(savedCount, 10) : 0;
    });

    useEffect( () => {
        localStorage.setItem('nasa_click_count', count.toString())
    }, [count])

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