"use strict"

import Decimal from './Decimal'

class Octal {

    static toBinary = (octal) => {

        let decimal = Octal.toDecimal(octal)

        return Decimal.toBinary(decimal)
    }

    static toDecimal = (octal) => {

        const BASE = 8
        const octalInString = String(octal)
        let pow = 0;
        let decimal = 0;

        for (let i = octalInString.length - 1; i >= 0; i--) {

            decimal += (Number(octalInString[i]) * Math.pow(BASE, pow))
            pow++;
        }
        return decimal !== 0 ? decimal : ''
    }

    static toHexadecimal = (octal) => {

        let decimal = Octal.toDecimal(octal)

        return Decimal.toHexadecimal(decimal)
    }
}

export default Octal