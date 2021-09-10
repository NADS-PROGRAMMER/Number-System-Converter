"use strict"

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

export const formatBinary = (binary) => {

    let formattedBinary = sliceValue(binary, 4).reverse()
    let result = ''

    for (let i = 0; i < formattedBinary.length; i++) {

        let currentBits = ''
        for (let j = 0; j < formattedBinary[i].length; j++) {

            currentBits += formattedBinary[i][j]
        }

        result += (currentBits.length < 4) ? currentBits.padStart(4, "0") + ' ' : currentBits + ' '
    }
    return result
}

export const formatDecimal = (decimal) => {

    // formatter to have a comma.
    const formatter = new Intl.NumberFormat('en-US')

    return decimal !== '' ? formatter.format(decimal) : ''
}

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