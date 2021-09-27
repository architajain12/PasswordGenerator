const program = require('commander')
const chalk = require('chalk')
const createPassword = require('./utils/createPassword')

program.version('1.0.0').description('Password generator')

program
    .option('-l, --length <number>', 'length of the password', '8')
    .option('-s, --save', 'saves the password to passwords.txt')
    .option('-nn, --no-nums', 'does not include numbers')
    .option('-ns, --no-symbols', 'does not include symbols')
    .parse()

const { length, save, nums, symbols } = program.opts()

const generatedPswd = createPassword(length, nums, symbols)
console.log(chalk.cyan('Generated Password: ') + chalk.bold(generatedPswd))
