"use strict"

class Decimal {

    /**
     * ===============================
     * A function that reverse the passed value.
     * ===============================
     */
    static reverse = (value) => {
        let reversedValue = ''

        for (let i = value.length - 1; i >= 0; i--) {

            reversedValue += value[i]
        }
        return reversedValue
    }

    /**
     * ===============================
     * A function that divides the
     * parameter based on the second parameter.
     * 
     * Example is when solving for Decimal to
     * Octal, the BASE must be 8.
     * ===============================
     */
    static divide = (decimal, BASE) => {

        let newValue = ''

        while (decimal > 0) {

            newValue += (decimal % BASE)
            decimal = (Math.trunc(decimal / BASE))
        }
        return newValue
    } 

    /**
     * ===============================
     * A function that converts the Decimal value to 
     * a Decimal value.
     * ===============================
     */
    static toBinary = (decimal) => {

        const BASE = 2

        return Decimal.reverse(Decimal.divide(decimal, BASE))
    }

    /**
     * ===============================
     * A function that converts the Decimal value
     * to an Octal value.
     * ===============================
     */
    static toOctal = (decimal) => {

        const BASE = 8

        return Decimal.reverse(Decimal.divide(decimal, BASE))
    }

    /**
     * ===============================
     * A function that converts the Decimal value
     * to a Hexadecimal value.
     * ===============================
     */
    static toHexadecimal = (decimal) => {

        const BASE = 16
        let hexadecimal = ''

        /**
         * Since the value is from Decimal
         * we need to evaluate the value as a hexadec
         * if it is greater than 9.
         * 
         * Example is 
         * A = 10
         * B = 11 and so on...
         */
        function getHex(decimal) {

            switch(decimal) {
                case 10: return 'A'; 
                case 11: return 'B'; 
                case 12: return 'C';
                case 13: return 'D';
                case 14: return 'E'; 
                case 15: return 'F';  
            }
            return decimal;
        }

        while (decimal > 0) {
            hexadecimal += getHex(decimal % BASE)
            decimal = Math.trunc(decimal / BASE)
        }
        return Decimal.reverse(hexadecimal)
    }
}

export default Decimal