import React from 'react'

function Textfield({dropdownValue, textfieldValue, setTextfieldValue}) {
    return (
        <section className="textfield-section">
            <label htmlFor="">{"Pleae Enter a value: "}</label>
            <input value={textfieldValue} onChange={(e) => {
                setTextfieldValue(e.target.value)
            }} type="text" name="input-field" id="textfield" placeholder={dropdownValue + " here..."}/>
        </section>
    )
}
export default Textfield
