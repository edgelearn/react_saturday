import React, { useState } from 'react'
import Button from '@material-ui/core/Button';

export const Calculator = () => {
    const [calc, setCalc] = useState({
        input: '',
        output: '',
        history: []
    })

    const handleSubmit = (calcInput) => {
      const calcOutput = eval(calcInput)

      setCalc({...calc, output: calcOutput, input: '', history: [{input: calcInput, output: calcOutput}, ...calc.history]})
    }

    return (
        <div>
            { calc.input ?
              <p>{calc.input}</p>
              :
              <p>{calc.output ? calc.output : 0}</p>
            }

            <div>
            <Button onClick={() => setCalc({...calc, input: calc.input + '-' })} variant="contained" color="secondary">
              -
            </Button>
            <Button onClick={() => setCalc({...calc, input: calc.input + '+' })} variant="contained" color="secondary">
              +
            </Button>
            <Button onClick={() => setCalc({...calc, input: calc.input + '*' })} variant="contained" color="secondary">
              *
            </Button>
            <Button onClick={() => setCalc({...calc, input: calc.input + '/' })} variant="contained" color="secondary">
              /
            </Button>
            <Button onClick={() => setCalc({...calc, input: calc.input + '(' })} variant="contained" color="secondary">
              (
            </Button>
            <Button onClick={() => setCalc({...calc, input: calc.input + ')' })} variant="contained" color="secondary">
              )
            </Button>
            </div>
            <div>
            <Button onClick={() => handleSubmit(calc.input)} variant="contained" color="grey">
              =
            </Button>
            <Button onClick={() => setCalc({...calc, input: '' , output: ''})} variant="contained" color="grey">
              Clear
            </Button>
            <Button variant="contained" color="grey">
              Back
            </Button>
            </div>
            <br/>
            <Button onClick={() => setCalc({...calc, input: calc.input + '1' })} variant="contained" color="primary">
              1
            </Button>
            <Button onClick={() => setCalc({...calc, input: calc.input + '2' })} variant="contained" color="primary">
              2
            </Button>
            <Button onClick={() => setCalc({...calc, input: calc.input + '3' })} variant="contained" color="primary">
              3
            </Button>
            <br/>
            <Button onClick={() => setCalc({...calc, input: calc.input + '4' })} variant="contained" color="primary">
              4
            </Button>
            <Button onClick={() => setCalc({...calc, input: calc.input + '5' })} variant="contained" color="primary">
              5
            </Button>
            <Button onClick={() => setCalc({...calc, input: calc.input + '6' })} variant="contained" color="primary">
              6
            </Button>
            <br/>
            <Button onClick={() => setCalc({...calc, input: calc.input + '7' })} variant="contained" color="primary">
              7
            </Button>
            <Button onClick={() => setCalc({...calc, input: calc.input + '8' })} variant="contained" color="primary">
              8
            </Button>
            <Button onClick={() => setCalc({...calc, input: calc.input + '9' })} variant="contained" color="primary">
              9
            </Button>
            <br/>
            <Button onClick={() => setCalc({...calc, input: calc.input + '0' })} variant="contained" color="primary">
              0
            </Button>
            <Button onClick={() => setCalc({...calc, input: calc.input + '.' })} variant="contained" color="primary">
              .
            </Button>

          {calc.history.map(calculation => (
            <p>{calculation.input} = {calculation.output}</p>
          ))}

        </div>
    )
}

export default Calculator
