import React from 'react'

function Dropdown({setDropDownValue}) {

    const options = ['Binary', 'Octal', 'Decimal', 'Hexadecimal']

    return (
        <section className="dropdown-section">
            <label htmlFor="">Choose a Number System: </label>
            <select className="dropdown" onChange={(e) => {setDropDownValue(e.currentTarget.value) 
                }}>
                {options.map((option, index) => <option key={index} value={option}>{option}</option>)}
            </select>
        </section>
    )
}

export default Dropdown
