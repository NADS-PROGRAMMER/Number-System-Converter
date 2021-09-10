// THESE ARE ALL MY IMPORTS
import React, {useState, useEffect} from 'react'
import Dropdown from './Dropdown'
import Textfield from './Textfield'
import Results from './Results'
import Binary from '../Javascripts/Binary'
import Decimal from '../Javascripts/Decimal'
import Octal from '../Javascripts/Octal'
import Hexadecimal from '../Javascripts/Hexadecimal'

function Converter() {

    /**
     * =================================
     * This state is for the previous value of 
     * the dropdown. Once the user changes the 
     * dropdown (<select> tag), the value
     * gets change.
     * ================================= */
    const [prevDropdownValue, setPreviousDropdownValue] = useState('Binary')

    /**
     * =================================
     * This state is for the current value
     * of the dropdown menu.
     * ================================= */
    const [dropdownValue, setDropDownValue] = useState('Binary')


    const [textfieldValue, setTextfieldValue] = useState('');

    /**
     * ================================
     * useEffect for changing the dropdown
     * value while textfield is not empty.
     * ================================ */
    useEffect(() => {

        setPreviousDropdownValue(dropdownValue)
        
        if (prevDropdownValue === 'Binary') {

            setTextfieldValue((prevValue) => 
                dropdownValue === 'Decimal' ? String(Binary.toDecimal(prevValue)) : 
                dropdownValue === 'Octal' ? String(Binary.toOctal(prevValue)) : 
                dropdownValue === 'Hexadecimal' ? String(Binary.toHexadecimal(prevValue)) : ''
            )
        } else if (prevDropdownValue === 'Decimal') {

            setTextfieldValue((prevValue) =>

                dropdownValue === 'Binary' ? String(Decimal.toBinary(prevValue)) : 
                dropdownValue === 'Octal' ? String(Decimal.toOctal(prevValue)) : 
                dropdownValue === 'Hexadecimal' ? String(Decimal.toHexadecimal(prevValue)) : ''
            )
        } else if (prevDropdownValue === 'Octal') {

            setTextfieldValue((prevValue) =>

                dropdownValue === 'Binary' ? String(Octal.toBinary(prevValue)) : 
                dropdownValue === 'Decimal' ? String(Octal.toDecimal(prevValue)) : 
                dropdownValue === 'Hexadecimal' ? String(Octal.toHexadecimal(prevValue)) : ''
            )
        } else {

            setTextfieldValue((prevValue) =>

                dropdownValue === 'Binary' ? String(Hexadecimal.toBinary(prevValue)) : 
                dropdownValue === 'Octal' ? String(Hexadecimal.toOctal(prevValue)) : 
                dropdownValue === 'Decimal' ? String(Hexadecimal.toDecimal(prevValue)) : ''
            )
        } 
    }, [dropdownValue])

    return (
        
        <div className="converter">
            <Dropdown setDropDownValue={setDropDownValue} />       
            <Textfield dropdownValue={dropdownValue} textfieldValue={textfieldValue} setTextfieldValue={setTextfieldValue}/>
            <Results dropdownValue={dropdownValue} textfieldValue={textfieldValue}/>
        </div>
    )
}

export default Converter
