const axios = require('axios')
const { appendFileSync } = require('fs')
module.exports = async fname => appendFileSync(fname, `\n// ${(await axios.get('https://api.devexcus.es/')).data.text}`)
