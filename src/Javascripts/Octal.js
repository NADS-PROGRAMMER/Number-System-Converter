"use strict"

import Decimal from './Decimal' // We import the Decimal class to reuse some of its functions.

class Octal {

    /**
     * ===============================
     * A function that converts an Octal value
     * to a Decimal value.
     */
    static toBinary = (octal) => {

        let decimal = Octal.toDecimal(octal)

        return Decimal.toBinary(decimal)
    }

    /**
     * ===============================
     * A function that converts an Octal value
     * to a Decimal value.
     */
    static toDecimal = (octal) => {

        const BASE = 8
        const octalInString = String(octal)
        let pow = 0;
        let decimal = 0;

        for (let i = octalInString.length - 1; i >= 0; i--) {

            // We need to cast to a number because it is a string by default.
            decimal += (Number(octalInString[i]) * Math.pow(BASE, pow))
            pow++;
        }
        return decimal !== 0 ? decimal : ''
    }

    /**
     * ===============================
     * A function that converts an Octal value
     * to a Hexadecimal value.
     */
    static toHexadecimal = (octal) => {

        let decimal = Octal.toDecimal(octal)

        return Decimal.toHexadecimal(decimal)
    }
}

export default Octal