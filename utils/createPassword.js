const alphabets = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
const nums = '0123456789'
const symbols = '!@#$%^&*_-+='

const createPassword = (length = 8, hasNums = true, hasSymbols = true) => {
    let chars = alphabets 
    hasNums ? (chars += nums) : ''
    hasSymbols ? (chars += symbols) : ''
    return generatePswd(length, chars)
}

const generatePswd = (length, chars) => {
    let password = ''
    for(let i = 0; i < length; i++) {
        password += chars.charAt(Math.floor(Math.random() *  chars.length))
    }
    return password
}

module.exports = createPassword