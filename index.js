const program = require('commander')
const clipboardy = require('clipboardy')
const chalk = require('chalk')
const createPassword = require('./utils/createPassword')
const savePassword = require('./utils/savePassword')

program.version('1.0.0').description('Password generator')

program
    .option('-l, --length <number>', 'length of the password', '8')
    .option('-s, --save', 'saves the password to passwords.txt')
    .option('-nn, --no-nums', 'does not include numbers')
    .option('-ns, --no-symbols', 'does not include symbols')
    .parse()

const { length, save, nums, symbols } = program.opts()

const generatedPswd = createPassword(length, nums, symbols)

//copying the generated password to clipboard
clipboardy.writeSync(generatedPswd)

//saves password to passwords.txt
if(save) {
    savePassword(generatedPswd)
}

console.log(chalk.cyan('Generated Password: ') + chalk.bold(generatedPswd))
console.log(chalk.green('Password copied to clipboard!'))
