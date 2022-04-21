
// [ICreateTemplate] garante que os metodos template createFile seja implementados
// [NewsletterFile] possui metodos para criaçao de arquivos com encode compativel em newsletter
const ICreateTemplate = require('../core/ITemplate')
const NewsletterFile = require('../core/NewsletterFile')


// TODO: OBS para utilizacao e melhor organizacao após criar seu template
// registre o mesmo no arquivo ./index.js

class NomeTemplate extends ICreateTemplate {
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

module.exports = NomeTemplate