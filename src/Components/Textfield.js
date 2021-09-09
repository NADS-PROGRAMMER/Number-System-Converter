import React, {useEffect} from 'react'

function Textfield({dropdownValue, textfieldValue, setTextfieldValue}) {

    useEffect(() => {
        if (dropdownValue ==='Binary' &&  textfieldValue.match(/[^10]/ig)) {
            setTextfieldValue(prevValue => prevValue.slice(0, prevValue.length - 1))
        }
    }, [textfieldValue])
    return (
        <section className="textfield-section">
            <label htmlFor="">{"Pleae Enter a value: "}</label>
            <input value={textfieldValue} onInput={(e) => {
                setTextfieldValue(e.target.value)
            }} type="text" name="input-field" id="textfield" placeholder={dropdownValue + " here..."}/>
        </section>
    )
}
export default Textfield
