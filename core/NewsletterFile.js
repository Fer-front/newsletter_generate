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
        this._data = dataList
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
    static createFile(output_path, content, name = 'newsletter', extension = 'xml', encode = ENCODE.ISO_8859_1) {
        const fileName = NewsletterFile.composeFileName(name, extension)

        fs.appendFile(`${output_path}${fileName}`, content, encode, function (err) {
            if (err) throw err

            console.log(`Arquivo criado com sucesso ${fileName} : salvo!`)
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
        const dir = `${path}${slug}/`

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
     */
    createFiles(template, output_path = './ARQUIVOS-GERADOS/') {
        
        // verificacao param param obrigatorio: template
        if(template == null || (typeof template !== 'function')) 
            throw new Error('[Param:template] paramentro obrigatÓrio do tipo [FUNCTION]!')

        // param omitido
        if(output_path === './ARQUIVOS-GERADOS/') 
            NewsletterFile.createFolder('./', 'ARQUIVOS-GERADOS')

        this._data.forEach((obj) => {
            try {
                const pathFolder = NewsletterFile.createFolder(output_path, obj.slug)
                const content = template(obj)

                NewsletterFile.createFile(pathFolder, content)
            } catch (error) {
                console.error('Error : ', error)
            }
        });
    }
}

module.exports = NewsletterFile;
