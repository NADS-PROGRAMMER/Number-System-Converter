"use strict"

class Binary {

    /**
     * ===============================
     * A function that converts the Binary
     * value to Decimal.
     * ===============================
     */
    static toDecimal = (binary) => {

        const BASE = 2;
        let myBinary = Array.from(binary)
        let pow = 0;
        let decimal = 0;

        for (let i = myBinary.length - 1; i >= 0; i--) {

            let bit = myBinary[i]

            // Only 'ON' bit gets evaluated.
            if (bit === '1')
                decimal += Math.pow(BASE, pow)

            pow++
        }
        return decimal === 0 ? '' : decimal
    }


    /**
     * ================================
     * A function that converts the Binary
     * value into Octal.
     * ================================
     */
    static toOctal = (binary) => {

        let decimalValue = Binary.toDecimal(binary)
        let octal = '';

        while (decimalValue > 0) {

            octal += String(decimalValue % 8);
            decimalValue = Math.trunc(decimalValue/8)
        }

        function reverse(octal) {

            let reverseValue = ''

            for (let i = octal.length - 1; i >= 0; i--) {
                reverseValue += octal[i];
            }

            return reverseValue
        }
        return reverse(octal);
    }


    /**
     * ===============================
     * A function that converts the Binary
     * value into Hexadecimal.
     * ===============================
     */
    static toHexadecimal = (binary) => {

        /**
         * A function that slices the binary
         * into 4 pieces.
         * 
         * @returns a 2D array containing the sliced bits. */
        function sliceToBinary() {

            let divided = []
            let currArray = []

            for (let i = binary.length - 1; i >= 0; i-=4) {

                currArray = []

                for (let j = i; j >= (i-3); j--) {

                    if (binary[j] === undefined)
                        break;

                    currArray.push(binary[j])
                }
                
                divided.push(currArray)
            }
            return divided
        }
        
        /**
         * Since the hexadecimal has a different value,
         * this function evaluates the decimal value 
         * into its corresponding letter. */
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

        let hexadecimalValue = ''
        let divided = sliceToBinary()

        for (let i = divided.length - 1; i >= 0; i--) {

            hexadecimalValue += getHex(Binary.toDecimal(divided[i].reverse()))    
        }
        return hexadecimalValue
    }
}

export default Binary;