import React, { useState } from 'react'
import Button from '@material-ui/core/Button';

export const Calculator = () => {
    const [calc, setCalc] = useState({
        input: '',
        output: 'no output',
    })

    return (
        <div>
            <div>
              <p>{calc.input ? calc.input : 0}</p>
              <p>{calc.output}</p>
            </div>
            <div>
            <Button onClick={() => setCalc({...calc, input: calc.input + '-' })} variant="contained" value="-" color="secondary">
              -
            </Button>
            <Button onClick={() => setCalc({...calc, input: calc.input + '+' })} variant="contained" value="+" color="secondary">
              +
            </Button>
            <Button onClick={() => setCalc({...calc, input: calc.input + '*' })} variant="contained" value="*" color="secondary">
              *
            </Button>
            <Button onClick={() => setCalc({...calc, input: calc.input + '/' })} variant="contained" value="/" color="secondary">
              /
            </Button>
            <Button onClick={() => setCalc({...calc, input: calc.input + '(' })} variant="contained" value="/" color="secondary">
              (
            </Button>
            <Button onClick={() => setCalc({...calc, input: calc.input + ')' })} variant="contained" value="/" color="secondary">
              )
            </Button>
            </div>
            <div>
            <Button onClick={() => setCalc({...calc, output: eval(calc.input)})} variant="contained" value="=" color="grey">
              =
            </Button>
            <Button onClick={() => setCalc({...calc, input: '' , output: ''})} variant="contained" value="" color="grey">
              Clear
            </Button>
            <Button variant="contained" value="" color="grey">
              Back
            </Button>
            </div>
            <br/>
            <Button onClick={() => setCalc({...calc, input: calc.input + '1' })} variant="contained" value="1" color="primary">
              1
            </Button>
            <Button onClick={() => setCalc({...calc, input: calc.input + '2' })} variant="contained" value="2" color="primary">
              2
            </Button>
            <Button onClick={() => setCalc({...calc, input: calc.input + '3' })} variant="contained" value="3" color="primary">
              3
            </Button>
            <br/>
            <Button onClick={() => setCalc({...calc, input: calc.input + '4' })} variant="contained" value="4" color="primary">
              4
            </Button>
            <Button onClick={() => setCalc({...calc, input: calc.input + '5' })} variant="contained" value="5" color="primary">
              5
            </Button>
            <Button onClick={() => setCalc({...calc, input: calc.input + '6' })} variant="contained" value="6" color="primary">
              6
            </Button>
            <br/>
            <Button onClick={() => setCalc({...calc, input: calc.input + '7' })} variant="contained" value="7" color="primary">
              7
            </Button>
            <Button onClick={() => setCalc({...calc, input: calc.input + '8' })} variant="contained" value="8" color="primary">
              8
            </Button>
            <Button onClick={() => setCalc({...calc, input: calc.input + '9' })} variant="contained" value="9" color="primary">
              9
            </Button>
            <br/>
            <Button onClick={() => setCalc({...calc, input: calc.input + '0' })} variant="contained" value="10" color="primary">
              0
            </Button>
            <Button onClick={() => setCalc({...calc, input: calc.input + '.' })} variant="contained" value="." color="primary">
              .
            </Button>
        </div>
    )
}

export default Calculator
