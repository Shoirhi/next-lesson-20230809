'use client'

import { useState } from 'react';

export default function Counter() {
    const [count, setCount] = useState(0);

    function makeCount() {
        setCount(count + 1);
    }

    return (
        <div>
            <p>{ count }回クリックされました</p>
            <button onClick={makeCount}>クリック</button>
        </div>
    )
}