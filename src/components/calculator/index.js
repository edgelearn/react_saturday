import React, { useState } from 'react'
import calculate from '../../calc-logic/calculate'

export const Calculator = () => {
    const [calc, setCalc] = useState({
        input: '',
        output: '',
    })

    console.log(calculate('4/2*2+1'))

    return (
        <div>
            <p>input: {calc.input ? calc.input : 0}</p>

            <p>output: {calc.output ? calc.output : '...'}</p>
        </div>
    )
}

export default Calculator