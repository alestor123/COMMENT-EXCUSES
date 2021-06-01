#!/usr/bin/env node

const chalk = require('chalk')
const mn = require('./App')

mn(process.argv[2])
console.log(chalk.greenBright.bold('You are really lazy stop it get some help !! 😴'))
