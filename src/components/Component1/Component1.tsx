import { useState } from 'react'
import Component2 from '../Component2/Component2.tsx'
import Component3 from '../Component3/Component3.tsx';

export default function Component1() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <Component2
                onIncrement={() => setCount(prev => prev + 1)}
            />
            <Component3
                currentCount = {count}
            />
        </div>
    )
}