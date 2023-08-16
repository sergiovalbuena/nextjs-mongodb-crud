"use client"
import { useState } from "react"

export default function ColorDropdown() {
    const colors = ['red', 'green', 'blue']
    const [color, setColor] = useState('red')
    const possible = ['bg-red-400', 'bg-green-400', 'bg-blue-400']

    return (
        <select
            className={`bg-${color}-400`}
            value={color}
            onChange={(e) => setColor(e.target.value)}
        >
            <option value="">Choose</option>
            {colors.map((color) => {
                return <option value={color}>{color}</option>
            })}

        </select>
    )
}
