import React from 'react'
import Button from '@material-ui/core/Button';

const CalcBtn = (props) => {
    return (
        <Button onClick={() => props.btnAction(props.value) } variant={props.variant} color={props.color}>
            {props.value}
        </Button>
    )
}

export default CalcBtn
