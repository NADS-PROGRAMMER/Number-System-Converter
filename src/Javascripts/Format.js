"use strict"

/**
 * ===============================
 * This is the functions that needed 
 * to format the result of the program.
 * ===============================
 */

/**
 * A function that slices the passed
 * value to a specified number of slices.
 */
function sliceValue(value, noOfSlice) {

    let divided = []
    let currArray = []

    for (let i = value.length - 1; i >= 0; i-=noOfSlice) { // 3

        currArray = []

        for (let j = i; j >= (i-(noOfSlice - 1)); j--) {

            if (value[j] === undefined)
                break;

            currArray.push(value[j])
        }
        
        divided.push(currArray.reverse())
    }
    return divided
}

/**
 * ===============================
 * A function that formats the binary value.
 * 
 * Ex. 
 * instead of 1001101
 * 
 * We're going to do this:
 * 
 * -> 0100 1101
 * ===============================
 */
export const formatBinary = (binary) => {

    let formattedBinary = sliceValue(binary, 4).reverse()
    let result = ''

    for (let i = 0; i < formattedBinary.length; i++) {

        let currentBits = ''
        for (let j = 0; j < formattedBinary[i].length; j++) {

            currentBits += formattedBinary[i][j]
        }

        // When the currentBits' length is less than 4, we have to pad zero to start based on the needed padding.
        result += (currentBits.length < 4) ? currentBits.padStart(4, "0") + ' ' : currentBits + ' '
    }
    return result
}

/**
 * A function that formats the given decimal value.
 * 
 * Ex:
 * instead of 1203
 * 
 * We do this:
 * 
 * -> 1,203
 */
export const formatDecimal = (decimal) => {

    // formatter to have a comma.
    const formatter = new Intl.NumberFormat('en-US')

    return decimal !== '' ? formatter.format(decimal) : ''
}

/**
 * ===============================
 * A function that formats the octal value
 * 
 * Ex: 
 * Instead of 6791
 * 
 * We do this:
 * 
 * -> 6 791
 * ===============================
 */
export const formatOctal = (octal) => {

    let formattedOctal = sliceValue(octal, 3).reverse()
    let result = ''

    for (let i = 0; i < formattedOctal.length; i++) {

        for (let j = 0; j < formattedOctal[i].length; j++) {
            
            result += formattedOctal[i][j]
        }
        result += ' '
    }
    return result;
}

/**
 * ===============================
 * A function that formats the hexadecimal value
 * 
 * Ex: 
 * instead of FFA1FFCD
 * 
 * We do this
 * 
 * -> FFA1 FFCD
 * ===============================
 */
export const formatHexadecimal = (hexadecimal) => {

    let formattedHexadecimal = sliceValue(hexadecimal, 4).reverse()
    let result = ''

    for (let i = 0; i < formattedHexadecimal.length; i++) {

        for (let j = 0; j < formattedHexadecimal[i].length; j++) {

            result += formattedHexadecimal[i][j]
        }
        result += ' '
    }
    return result
}