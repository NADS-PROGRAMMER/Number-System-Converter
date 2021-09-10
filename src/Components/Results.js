import Binary from '../Javascripts/Binary'
import Decimal from '../Javascripts/Decimal'
import Octal from '../Javascripts/Octal'
import Hexadecimal from '../Javascripts/Hexadecimal'
import {formatBinary, formatDecimal, formatOctal, formatHexadecimal} from '../Javascripts/Format'

function Results({dropdownValue, textfieldValue, setBinary, setDecimal, setOctal, setHexadecimal}) {


    return (
        <div className="result"  >

            {/* The converted value will change depending on the selected dropdown */}
            <Result title="Binary" dropdownValue={dropdownValue} convertedValue={

                dropdownValue === 'Decimal' ? formatBinary(Decimal.toBinary(textfieldValue)) : dropdownValue === 'Octal' ? formatBinary(Octal.toBinary(textfieldValue)) : 
                dropdownValue === 'Hexadecimal' ? formatBinary(Hexadecimal.toBinary(textfieldValue)) : ''
            } onChange={() => console.log('wow')}/>

            <Result title="Decimal" dropdownValue={dropdownValue} convertedValue={

                dropdownValue === 'Binary' ? formatDecimal(Binary.toDecimal(textfieldValue)) : dropdownValue === 'Octal' ? formatDecimal(Octal.toDecimal(textfieldValue)) : 
                dropdownValue === 'Hexadecimal' ? formatDecimal(Hexadecimal.toDecimal(textfieldValue)) : ''
            }/>
            <Result title="Octal" dropdownValue={dropdownValue} convertedValue={

                dropdownValue === 'Binary' ? formatOctal(Binary.toOctal(textfieldValue)) : dropdownValue === 'Decimal' ? formatOctal(Decimal.toOctal(textfieldValue)) : 
                dropdownValue === 'Hexadecimal' ? formatOctal(Hexadecimal.toOctal(textfieldValue)) : ''
            }/>
            <Result title="Hexadecimal" dropdownValue={dropdownValue} convertedValue={

                dropdownValue === 'Binary' ? formatHexadecimal(Binary.toHexadecimal(textfieldValue)) : dropdownValue === 'Octal' ? formatHexadecimal(Octal.toHexadecimal(textfieldValue)) :
                dropdownValue === 'Decimal' ? formatHexadecimal(Decimal.toHexadecimal(textfieldValue)) : ''
            }/>
        </div>
    )
}

function Result({title, dropdownValue, convertedValue, onChange}) {

    return (
        <section style={dropdownValue === title ? {display: 'none'} : {display: 'block'}}>
            <p>{title}: </p>
            <section className="result-section">
                <small onChange={onChange}>Result: </small>
                <small>{convertedValue}</small>
            </section>
        </section>
    )
}
export default Results
