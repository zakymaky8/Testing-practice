//capitalization

function capitalize(word)  {
    return word[0].toUpperCase() + word.slice(1,).toLowerCase()
}

// reverseString

function reverseString(string) {
    let word = '';
    for (i=string.length-1; i>=0; i--) {
        word += string[i]
    }
    return word
}

// doing calculation

const calculator = {
    add(a, b) {
        return a + b
    },
    subtract(a, b) {
        return a - b
    },
    multiply(a, b) {
        return a * b
    },
    divide(a, b) {
        if (b !==0) {
            return a / b
        }
        else {
            return undefined
        }
    }
}

// cipher caesar

function cipherEach(ciphered, letter, alpbts, shift) {
    let ind = alpbts.indexOf(letter)
    if ((ind + shift) > 25) {
        ciphered += alpbts[(ind + shift)-26]
        return ciphered
    }
    else {
        ciphered += alpbts[ind + shift]
        return ciphered
    }
}

function cipher(word, shift) {
    let lower = 'abcdefghijklmnopqrstuvwxyz'
    let upper = lower.toUpperCase()
    let cipheredText = ''

    for (l of word) {
        if (lower.includes(l))
            cipheredText += cipherEach("", l, lower, shift)

        else if (upper.includes(l))
            cipheredText += cipherEach("", l, upper, shift)

        else if (!((lower + upper).includes(l)))
            cipheredText += l

    }
    return cipheredText
}
// Analysing array
function analyseArray(arr) {
    return {
        length: arr.length,
        average: (arr.reduce((prev, cur)=>prev + cur)) / arr.length,
        min: min = Math.min(...arr),
        max: Math.max(...arr)
    }
}

module.exports = {capitalize, reverseString, calculator, cipher, analyseArray}