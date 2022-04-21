const { ENCODE } = require('./Enums')
const readline = require('readline');

const NewsletterFile = require('./NewsletterFile')

function template(className) {
    return `
// [ICreateTemplate] garante que os metodos template createFile seja implementados
// [NewsletterFile] possui metodos para criaçao de arquivos com encode compativel em newsletter
const ICreateTemplate = require('../core/ITemplate')
const NewsletterFile = require('../core/NewsletterFile')


// TODO: OBS para utilizacao e melhor organizacao após criar seu template
// registre o mesmo no arquivo ./index.js

class ${className} extends ICreateTemplate {
    constructor() {
        super()
    }

    template() {
        // TODO: IMPLEMENTAR TEMPLATE
    }

    createFile(data) {
       // TODO: IMPLEMENTAR CREATE-FILE
    }
}

module.exports = ${className}
    `
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite o nome do arquivo de Template Ex: colunaTemplate: \n', (name) => {
    NewsletterFile.createFile('./templates/', template(name), name, 'js', ENCODE.UTF8)
    rl.close();
})

rl.on('close', function () {
    console.log('\nArquivo criado com sucesso !!!')
})