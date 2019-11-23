import React, { useState } from 'react'
import Button from '@material-ui/core/Button';

export const Calculator = () => {
    const [calc, setCalc] = useState({
        input: 'input',
        output: 'output',
    })

    return (
        <div>
            <div>
            <Button variant="contained" value="-" color="secondary">
              -
            </Button>
            <Button variant="contained" value="+" color="secondary">
              +
            </Button>
            <Button variant="contained" value="*" color="secondary">
              *
            </Button>
            <Button variant="contained" value="/" color="secondary">
              /
            </Button>
            </div>
            <div>
            <Button variant="contained" value="=" color="grey">
              =
            </Button>
            <Button variant="contained" value="" color="grey">
              Clear
            </Button>
            </div>
            <br/>
            <Button variant="contained" value="1" color="primary">
              1
            </Button>
            <Button variant="contained" value="2" color="primary">
              2
            </Button>
            <Button variant="contained" value="3" color="primary">
              3
            </Button>
            <br/>
            <Button variant="contained" value="4" color="primary">
              4
            </Button>
            <Button variant="contained" value="5" color="primary">
              5
            </Button>
            <Button variant="contained" value="6" color="primary">
              6
            </Button>
            <br/>
            <Button variant="contained" value="7" color="primary">
              7
            </Button>
            <Button variant="contained" value="8" color="primary">
              8
            </Button>
            <Button variant="contained" value="9" color="primary">
              9
            </Button>
            <br/>
            <Button variant="contained" value="10" color="primary">
              0
            </Button>
            <Button variant="contained" value="." color="primary">
              .
            </Button>

        </div>
    )
}

export default Calculator
