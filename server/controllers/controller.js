// Controller
const controller = { }

// Data
const NAMES = [
    'David',
    'Leonel',
    'Gonzalo'
]

const SECOND_NAMES = [
    'Andres',
    'David',
    'Ezequiel'
]

const LAST_NAMES = [
    'Brizuela',
    'Rodriguez',
    'Lavagna'
]

const ARTICLES = [
    {
        id: 1,
        title: 'Article One',
        author: 'Leonel'
    },
    {
        id: 2,
        title: 'Article Two',
        author: 'David'
    },
    {
        id: 3,
        title: 'Article Three',
        author: 'Gonzalo'
    }
]

// Functions
controller.getNames = async (req, res) => {
    res.json(NAMES)
}

controller.getSecondNames = async (req, res) => {
    res.json(SECOND_NAMES)
}

controller.getLastnames = async (req, res) => {
    res.json(LAST_NAMES)
}

controller.getIndexView = async (req, res) => {
    res.render('index', {
        title: 'Hello',
        name: 'Leonel',
        articles: ARTICLES
    })
}

// Export
module.exports = controller
