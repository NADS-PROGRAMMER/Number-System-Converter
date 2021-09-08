import React from 'react'
import {toDecimal, toOctal} from '../Javascripts/Binary';

function Results({dropdownValue, textfieldValue}) {

    return (
        <div className="result"  >
            <Result title="Binary" dropdownValue={dropdownValue}/>
            <Result title="Decimal" dropdownValue={dropdownValue} convertedValue={toDecimal(textfieldValue)}/>
            <Result title="Octal" dropdownValue={dropdownValue} convertedValue={toOctal(textfieldValue)}/>
            <Result title="Hexadecimal" dropdownValue={dropdownValue}/>
        </div>
    )
}

function Result({title, dropdownValue, convertedValue}) {

    return (
        <section style={dropdownValue === title ? {display: 'none'} : {display: 'block'}}>
            <p>{title}: </p>
            <p>Result: {convertedValue}</p>
        </section>
    )
}
export default Results
