#!/usr/bin/env node
const init = require('initit')

const [ name ] = process.argv.slice(2)

const template = 'goldhand/create-frontend-microservice/templates/default'

init({ name, template })
  .then(res => {
    process.exit(0)
  })
  .catch(err => {
    console.log(err)
    process.exit(1)
  })
