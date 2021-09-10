import React, {useEffect} from 'react'

function Textfield({dropdownValue, textfieldValue, setTextfieldValue}) {

    /**
     * ===============================
     * useEffect that triggers when the dropdown value
     * changes. It sets a new regex pattern for every 
     * number system to prevent the user to input an
     * invalid value based on the selected number system.
     * 
     * Example is: Binary Number System only accepts
     * '1' and '0' value.
     * 
     * so the regex /[^10]/ig correspons to match the
     * value that is not within the square brackets.
     * 
     * If the both condition is true, then the 
     * textfield value changes to its previous value.
     * =============================== */
    useEffect(() => {
        if (dropdownValue ==='Binary' &&  textfieldValue.match(/[^10]/ig)) {
            setTextfieldValue(prevValue => prevValue.slice(0, prevValue.length - 1))
        } else if (dropdownValue === 'Decimal' && textfieldValue.match(/[^0-9]/ig)) {
            setTextfieldValue(prevValue => prevValue.slice(0, prevValue.length - 1))
        } else if (dropdownValue === 'Octal' && textfieldValue.match(/[^0-7]/ig)) {
            setTextfieldValue(prevValue => prevValue.slice(0, prevValue.length - 1))
        } else if (dropdownValue === 'Hexadecimal' && textfieldValue.match(/[^0-9A-F]/ig)) {
            setTextfieldValue(prevValue => prevValue.slice(0, prevValue.length - 1))
        }
    }, [textfieldValue])

    return (
        <section className="textfield-section">

            <label htmlFor="">{dropdownValue === 'Binary' ? 'Input a valid binary value:' : dropdownValue === 'Decimal' ? 'Input a valid decimal value:' :
                dropdownValue === 'Octal' ? 'Input a valid octal value: (Ranging 0-7 only)' : 
                dropdownValue === 'Hexadecimal' ? 'Input a valid hexadecimal value. Ranging from 0-9 and A-F: ' : ''}</label>

            <input value={textfieldValue} onInput={(e) => {
                setTextfieldValue(e.target.value)
            }} type="text" name="input-field" id="textfield" placeholder={
                dropdownValue === 'Binary' ? 'Ex. 10110' : dropdownValue === 'Decimal' ? 'Ex. 142' :
                dropdownValue === 'Octal' ? 'Ex. 167' : 
                dropdownValue === 'Hexadecimal' ? 'Ex. 1FB' : ''
            }
            maxLength="20" autoComplete="off"/>
        </section>
    )
}
export default Textfield
