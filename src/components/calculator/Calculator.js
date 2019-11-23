import React, { useState } from 'react'
import Button from '@material-ui/core/Button';

export const Calculator = () => {
    const [calc, setCalc] = useState({
        input: '',
        output: '',
    })

    return (
        <div>
            Calculator
            <Button variant="contained" color="primary">
              +
            </Button>
        </div>
    )
}

export default Calculator
