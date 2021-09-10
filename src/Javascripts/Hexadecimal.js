"use strict"

import Decimal from './Decimal'

class Hexadecimal {
    
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

    static toBinary = (hexadecimal) => {

        let decimal = Hexadecimal.toDecimal(hexadecimal)

        return Decimal.toBinary(decimal)
    }

     static toDecimal = (hexadecimal) => {

        const BASE = 16
        let decimal = 0
        let pow = 0

        for (let i = hexadecimal.length - 1; i >= 0; i--) {
            decimal += (Hexadecimal.getHex(String(hexadecimal[i].toUpperCase())) * Math.pow(BASE, pow))
            pow++
        }
        return decimal !== 0 ? decimal : ''
     }

     static toOctal = (hexadecimal) => {
         
        let decimal = Hexadecimal.toDecimal(hexadecimal)

        return Decimal.toOctal(decimal)
     }
}

export default Hexadecimal