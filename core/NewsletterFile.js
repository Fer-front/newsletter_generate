const fs = require('fs');

const ENCODE = {
    UTF8: 'utf8',
    ASCII: 'ascii',
    ISO_8859_1: 'binary',
    HEX: 'hex'
}

class NewsletterFile {

    constructor(columnists = []) {
        this._columnists = columnists
    }

    /**
     *  Método seta nome
     *  
     * @param  {} name
     * @param  {} extension='xml'
     */
    static composeFileName(name, extension = 'xml') {
        return `${name}.${extension}`
    }
    
    /**
     *  Método criar um arquivo no caminho setado no paramentro
     * 
     * @param  String output_path
     * @param  String content
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
     * Método responsavel por criar pasta no path como o nome igual ao slug passado por paramentro
     * @param  String path
     * @param  String slug
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
