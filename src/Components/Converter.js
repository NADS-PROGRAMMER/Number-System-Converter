import React, {useState, useEffect} from 'react'
import Dropdown from './Dropdown'
import Textfield from './Textfield'
import Results from './Results'

function Converter() {

    const [dropdownValue, setDropDownValue] = useState('Binary')
    const [textfieldValue, setTextfieldValue] = useState('');

    
    
    return (
        <div className="converter">
            <Dropdown dropdownValue={dropdownValue} setDropDownValue={setDropDownValue} />       
            <Textfield dropdownValue={dropdownValue} textfieldValue={textfieldValue} setTextfieldValue={setTextfieldValue}/>
            <Results dropdownValue={dropdownValue} textfieldValue={textfieldValue}/>
        </div>
    )
}

export default Converter
