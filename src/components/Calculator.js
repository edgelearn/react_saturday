import React, { useState } from 'react'

export const Calculator = () => {
    const [calc, setCalc] = useState({
        userInput: '',
        output: '',
    })

    return (
        <div>
            Calculator
        </div>
    )
}

export default Calculator