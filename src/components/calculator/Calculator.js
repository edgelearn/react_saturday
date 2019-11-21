import React, { useState } from 'react'

export const Calculator = () => {
    const [calc, setCalc] = useState({
        input: '',
        output: '',
    })

    return (
        <div>
            Calculator
        </div>
    )
}

export default Calculator