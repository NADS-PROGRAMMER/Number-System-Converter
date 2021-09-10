"use strict"

import Decimal from './Decimal' // We need to import the Decimal class to reuse some of its functions.

class Hexadecimal {
    
    /**
     * A function that evaluates the hexadecimal value.
     */
    static getHex = (hex) => {

        switch(hex) {
            case 'A': return 10; 
            case 'B': return 11; 
            case 'C': return 12;
            case 'D': return 13;
            case 'E': return 14; 
            case 'F': return 15;  
        }
        return hex;
    }

    /**
     * ===============================
     * A function that converts the Hexadecimal value
     * to Binary value.
     * ===============================
     */
    static toBinary = (hexadecimal) => {

        let decimal = Hexadecimal.toDecimal(hexadecimal)

        return Decimal.toBinary(decimal)
    }

    /**
     * ===============================
     * A function that converts the Hexadecimal value
     * to Decimal value.
     * ===============================
     */
     static toDecimal = (hexadecimal) => {

        const BASE = 16
        let decimal = 0
        let pow = 0

        for (let i = hexadecimal.length - 1; i >= 0; i--) {
            // We need to uppercase to still evaluate when the user inputs a lowercase letters.
            decimal += (Hexadecimal.getHex(String(hexadecimal[i].toUpperCase())) * Math.pow(BASE, pow))
            pow++
        }
        return decimal !== 0 ? decimal : ''
     }

     /**
      * ===============================
      * A function that converts the Hexadecimal value
      * to an Octal value.
      * ===============================
      */
     static toOctal = (hexadecimal) => {
         
        let decimal = Hexadecimal.toDecimal(hexadecimal)

        return Decimal.toOctal(decimal)
     }
}

export default Hexadecimal