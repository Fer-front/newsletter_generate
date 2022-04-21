function methodNoImplemented(nameMethod) {
    return new Error(`Metodo [ ${nameMethod} ] deve ser implementado! \n\n`)
}

class ITemplate {
    constructor() {
    }

    template() {
        throw methodNoImplemented('template')
    }

    createFile() {
        throw methodNoImplemented('createFile')
    }
}

module.exports = ITemplate

