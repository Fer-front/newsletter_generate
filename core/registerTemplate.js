var fs = require('fs');
 
module.exports = function registerTemplate(nameTemplate) {

    console.log('passou aqui!')    

    fs.readFile('./templates/index.js', 'utf-8', function(err, data) {
        if (err) throw err;
     
        const _name = nameTemplate.replace(/template|Template/mg, '')
        const _import = `const ${_name} = require('./${nameTemplate}')`

        var newValue = data
            .replace(/\/\/newTemplateImport/gim,  `${_import} \n\/\/newTemplateImport`)
            .replace(/\/\/newTemplateRegister/gim, `${_name}, \n\/\/newTemplateRegister`)

     
        fs.writeFile('./templates/index.js', newValue, 'utf-8', function(err, data) {
            if (err) throw err;
            console.log(`Template ${nameTemplate} registrado com sucesso!`);
        })
    })
}

