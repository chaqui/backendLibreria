'use-strict'
const debug = require('debug')('platzoverse:db:setup')
const inquirer = require('inquirer')
const chalk = require('chalk')
const db = require('./')

const prompt = inquirer.createPromptModule()
async function setup () {
  const answer = await prompt([
    {
      type: 'confirm',
      name: 'setup',
      message: 'la ejecución de este script elimina la bd. ¿Lo desea ejecutar?'
    }
  ])
  if (!answer.setup) {
    return console.log('finalizo el setup')
  }
  const config = {
    database: process.env.DB_NAME || 'libreria_db',
    username: process.env.DB_USER || 'root',
    password: process.env.DB_PASS || 'root',
    host: process.env.DB_HOST || 'localhost',
    dialect: 'mysql',
    logging: s => debug(s),
    setup: true
  }

  await db(config).catch(handleFatalError)
  console.log('Success!')
  process.exit(0)

  function handleFatalError (err) {
    console.error(`${chalk.red('[fatal error]')} ${err.message}`)
    console.error(err.stack)
    process.exit(1)
  }
}
setup()
