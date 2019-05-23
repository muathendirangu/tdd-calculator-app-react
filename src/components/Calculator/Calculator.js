import React, { Component } from 'react';
import './Calculator.css';

class Calculator extends Component {
    state = {
        // value to be displayed in the display component <Display />
        displayValue : '0',
        // Values to be displayed as number in the key component <Key />
        numbers : [],
        // values to be displayed as the operator in the key component <Key />
        operators : [],
        // variable to store the selected  math operation
        selectedOperator: '',
        // stored value to be used for math operation
        storedValue: '',
    }

    callOperator = () => {
        console.log('execute math operation');        
    }

    setOperator = () => {
        console.log('choose appropriate operator');
    }
    
    updateDisplay = () => {
        console.log('modify display');
    }

    render = () => {
        return (
            <div className="calculator-container"/>
        );
    }
}

export default Calculator;