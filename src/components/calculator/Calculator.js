import React, { useState } from 'react'
import Button from '@material-ui/core/Button';
import CalcBtn from './CalcBtn'

export const Calculator = () => {
  const [calc, setCalc] = useState({
      input: '',
      output: '',
      history: [],
      errors: []
  })

  const handleSubmit = () => {
    if (calc.input) {
      try {
          let calcOutput = eval(calc.input)

          //formats negative numbers for output
          if (calcOutput < 0) {
            calcOutput = '-(' + calcOutput.toString().substr(1) + ')'
          }

          setCalc({...calc, output: calcOutput, input: '', history: [{input: calc.input, output: calcOutput}, ...calc.history]})
          
        } catch (err) {
          
        const userError = 'Invalid input: ' + calc.input
        
        if(!calc.errors.includes(userError)) {
          setCalc({...calc, errors: [...calc.errors, userError]})
          
          setTimeout(() => {
            setCalc({...calc, errors: [calc.errors.slice(0, calc.errors - 1)]})
          }, 3000)
        }
        
      }
    } 
  }

  const handleClick = (value) => {
      setCalc({...calc, input: calc.input + value})
  }

  return (
    <div>
      {calc.errors.map(error => <p>{error}</p> )}

      { calc.input ?
        <p>{calc.input}</p>
        :
        <p>{calc.output ? calc.output : 0}</p>
      }

      <div>
      <CalcBtn variant="contained" color="secondary" value="-" btnAction={handleClick} />
      <CalcBtn variant="contained" color="secondary" value="+" btnAction={handleClick} />
      <CalcBtn variant="contained" color="secondary" value="*" btnAction={handleClick} />
      <br/>
      <CalcBtn variant="contained" color="secondary" value="/" btnAction={handleClick} />
      <CalcBtn variant="contained" color="secondary" value="(" btnAction={handleClick} />
      <CalcBtn variant="contained" color="secondary" value=")" btnAction={handleClick} />
      </div>
      <div>
      <Button onClick={handleSubmit} variant="contained" color="grey">
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
      <CalcBtn variant="contained" color="primary" value="1" btnAction={handleClick} />
      <CalcBtn variant="contained" color="primary" value="2" btnAction={handleClick} />
      <CalcBtn variant="contained" color="primary" value="3" btnAction={handleClick} />
      <br/>
      <CalcBtn variant="contained" color="primary" value="4" btnAction={handleClick} />
      <CalcBtn variant="contained" color="primary" value="5" btnAction={handleClick} />
      <CalcBtn variant="contained" color="primary" value="6" btnAction={handleClick} />
      <br/>
      <CalcBtn variant="contained" color="primary" value="7" btnAction={handleClick} />
      <CalcBtn variant="contained" color="primary" value="8" btnAction={handleClick} />
      <CalcBtn variant="contained" color="primary" value="9" btnAction={handleClick} />
      <br/>
      <CalcBtn variant="contained" color="primary" value="0" btnAction={handleClick} />
      <CalcBtn variant="contained" color="primary" value="." btnAction={handleClick} />

      {calc.history.map(calculation => (
        <p>{calculation.input} = {calculation.output}</p>
      ))}

    </div>
  )
}

export default Calculator