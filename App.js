var axios = require('axios'),
{appendFileSync} = require('fs');
module.exports = async fname => {
appendFileSync(fname, `\n// ${(await axios.get('https://api.devexcus.es/')).data.text}`);
}
