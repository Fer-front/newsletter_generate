
const { colunist } = require('./templates')

const dadosTemplateColunista = [{
        title: 'Juliana Dal Piva',
        station: 'noticias',
        slug: 'juliana-dal-piva',
        slug_dinamize: 'notificacoes-juliana-dal-piva',
        cmp: 'cmp70',
        facebook: '',
        twitter: 'https://twitter.com/julianadalpiva',
        instagram: 'https://www.instagram.com/juliana.dalpiva/',
        youtube: '',
        flipboard: '',
        pinterest: ''
    },
    {
        title: 'Fernando j',
        station: 'noticias',
        slug: 'fernando-j',
        slug_dinamize: 'notificacoes-fernando-j',
        cmp: 'cmp12',
        facebook: '',
        twitter: 'https://twitter.com/fernandoj',
        instagram: 'https://www.instagram.com/fernando.j/',
        youtube: '',
        flipboard: '',
        pinterest: ''
    },
    {
        title: 'Liara pereira',
        station: 'esporte',
        slug: 'liara-pereira',
        slug_dinamize: 'notificacoes-liara-pereira',
        cmp: 'cmp54',
        facebook: '',
        twitter: 'https://twitter.com/liara-pereira',
        instagram: 'https://www.instagram.com/juliana.dalpiva/',
        youtube: '',
        flipboard: '',
        pinterest: ''
    },
]

const exemploNewsletterColunista = new colunist()
exemploNewsletterColunista.createFiles(dadosTemplateColunista)