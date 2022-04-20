const fs = require('fs');

const ENCODE = {
    UTF8: 'utf8',
    ASCII: 'ascii',
    ISO_8859_1: 'binary',
    HEX: 'hex'
}

class NewsletterFile {
    /**
     * @param  Array dataList=[]
     */
    constructor(dataList = []) {
    }

    /**
     *  Método seta compoem nome apartir de slug e uma extensao
     *  
     * @param  String name : obrigatorio
     * @param  String extension : caso omitido padrao é xml
     * 
     * @returns String 
     */
    static composeFileName(name, extension = 'xml') {
        return `${name}.${extension}`
    }
    
    /**
     *  Método criar um arquivo no caminho setado no paramentro
     * 
     * @param  String output_path : obrigatorio
     * @param  String content : obrigatorio
     * @param  String name : caso omitido padrao é newsletter
     * @param  String encode : caso omitido padrao é iso-8859-1
     * 
     * @returns blob
     * 
     */
    static createFile(output_path, content) {
        const fileName = NewsletterFile.composeFileName('newsletter')

        fs.appendFile(`${output_path}${fileName}`, content, ENCODE.ISO_8859_1, function (err) {
            if (err) throw err

            console.log(`Newsletter : salvo!`)
        })
    }

    /**
     * Método responsável por criar pasta no path como o nome 
     * igual ao slug passado por paramentro
     * 
     * @example
     *  
     *  Newsletter.createFile('./documentos/', 'nome-pasta')  retorno : './documentos/nome-pasta'
     * 
     * @param  String path : obrigatorio
     * @param  String slug : obrigatorio
     * 
     * @returns String 
     */
    static createFolder(path, slug) {
        const dir = `${path}uol-${slug}/`

        if (!fs.existsSync(dir)) fs.mkdirSync(dir)

        return dir 
    }
    
    /**
     *  Método reponsável por criar arquivos de newsletter
     *  pasta como o nome no formato de slug e arquivo newsletter.
     * 
     *  @example 
     *      ./coluna-juca/newsletter.xml
     * 
     * @param  Function template : obrigatorio
     * @param  String output_path
     * @param  Function template
     */
    createFiles(output_path, template) {
        this._columnists.forEach((columnist) => {
            try {
                const pathFolder = NewsletterFile.createFolder(output_path, columnist.slug)
                const content = template(columnist)

                NewsletterFile.createFile(pathFolder, content)
            } catch (error) {
                console.error('Error : ', error)
            }
        });
    }
}

module.exports = NewsletterFile;
