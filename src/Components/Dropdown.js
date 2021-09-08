import React from 'react'

function Dropdown({dropdownValue, setDropDownValue}) {

    const options = ['Binary', 'Octal', 'Decimal', 'Hexadecimal']

    return (
        <select className="dropdown" onChange={(e) => setDropDownValue(e.currentTarget.value)}>
            {options.map((option, index) => <option key={index} value={option}>{option}</option>)}
        </select>
    )
}

export default Dropdown
