"use strict"

class Decimal {

    static reverse = (value) => {
        let reversedValue = ''

        for (let i = value.length - 1; i >= 0; i--) {

            reversedValue += value[i]
        }
        return reversedValue
    }

    static divide = (decimal, BASE) => {

        let newValue = ''

        while (decimal > 0) {

            newValue += (decimal % BASE)
            decimal = (Math.trunc(decimal / BASE))
        }
        return newValue
    } 

    static toBinary = (decimal) => {

        const BASE = 2

        return Decimal.reverse(Decimal.divide(decimal, BASE))
    }

    static toOctal = (decimal) => {

        const BASE = 8

        return Decimal.reverse(Decimal.divide(decimal, BASE))
    }

    static toHexadecimal = (decimal) => {

        const BASE = 16
        let hexadecimal = ''

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