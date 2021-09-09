import React from 'react'
import {toDecimal, toHexadecimal, toOctal} from '../Javascripts/Binary';

function Results({dropdownValue, textfieldValue}) {

    /** It must have a condition if it is Binary or Octal or other number system is selected. */
    return (
        <div className="result"  >
            <Result title="Binary" dropdownValue={dropdownValue}/>
            <Result title="Decimal" dropdownValue={dropdownValue} convertedValue={toDecimal(textfieldValue)}/>
            <Result title="Octal" dropdownValue={dropdownValue} convertedValue={toOctal(textfieldValue)}/>
            <Result title="Hexadecimal" dropdownValue={dropdownValue} convertedValue={toHexadecimal(textfieldValue)}/>
        </div>
    )
}

function Result({title, dropdownValue, convertedValue}) {

    return (
        <section style={dropdownValue === title ? {display: 'none'} : {display: 'block'}}>
            <p>{title}: </p>
            <small>Result: {convertedValue}</small>
        </section>
    )
}
export default Results
