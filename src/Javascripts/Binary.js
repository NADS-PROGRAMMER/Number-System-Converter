"use strict"

function toDecimal(binary) {

    const BASE = 2;
    let pow = 0;
    let decimal = 0;

    for (let i = binary.length - 1; i >= 0; i--) {

        let bit = binary[i]

        if (bit === '1')
            decimal += Math.pow(BASE, pow)

        pow++
    }


    return decimal === 0 ? '' : decimal
}

function toOctal(binary) {

    let decimalValue = toDecimal(binary)
    let octal = '';

    while (decimalValue > 0) {

        octal += String(decimalValue % 8);
        console.log(decimalValue % 8)
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

export {toDecimal, toOctal};