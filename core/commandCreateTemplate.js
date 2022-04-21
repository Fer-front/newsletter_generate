const tpl = require('../helps/tpl')
const { ENCODE } = require('../helps/Enums')

const readline = require('readline');

const NewsletterFile = require('./NewsletterFile')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite o nome do arquivo de Template Ex: colunaTemplate: \n', (name) => {
    NewsletterFile.createFile('./templates/', tpl(name), name, 'js', ENCODE.UTF8)
    rl.close();
})

rl.on('close', function () {
    console.log('\nArquivo criado com sucesso !!!')
})