const tpl = require('../helps/tpl')
const { ENCODE } = require('../helps/Enums')

const registerTemplate = require('./registerTemplate')
const NewsletterFile = require('./NewsletterFile')

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite o nome do Template Ex: colunaTemplate: \n', (name) => {
    NewsletterFile.createFile('./templates/', tpl(name), name, 'js', ENCODE.UTF8)
    registerTemplate(name)

    rl.close();
})

rl.on('close', function () {
    console.log('\nTemplate gerado com sucesso !!!\n')
})