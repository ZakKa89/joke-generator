const alphabet = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
]

export default input => {
    const result = {
        isWithinLimit: input.length <= 32,
        isLowerCase: input === input.toLowerCase(),
        hasThreeAlphabetic: false,
        hasPairs: false,
        noIOL: false === /[iOl]/.test(input),
    }

    const errorMessages = {
        isWithinLimit: `Your input is ${input.length - 32} characters over the allowed limit`,
        isLowerCase: 'Your input needs to be lower case',
        hasThreeAlphabetic: 'You need at least 3 characters in alphabetic order',
        hasPairs: 'You need at least 2 pairs',
        noIOL: 'The letters i, O or l or not allowed',
    }

    let amountAlphabetic = 0

    input.split('').forEach((letter, i) => {
        const nextInAlphabet = alphabet[alphabet.indexOf(letter) + 1]
        const nextLetter = input[i + 1]

        if (nextInAlphabet === nextLetter && amountAlphabetic < 2) {
            amountAlphabetic++

            if (amountAlphabetic === 2) {
                result.hasThreeAlphabetic = true
            }
        }

        if (letter === nextLetter) {
            //alternative regex: /[^\w\s]|(.)\1/gi, but I'm already looping so it doesn't matter.
            result.hasPairs = true
        }
    })

    return {
        isValid: Object.values(result).every(Boolean), //ES2017
        errorMessages: Object.keys(errorMessages).map((item, i) => {
            return !result[item] ? errorMessages[item] : null
        }),
    }
}
