
const entries = {};

const newEntries = [];

entries.renderIndex = (req, res) => {
    res.render('index', { entries: newEntries });
}

entries.renderNewEntry = (req, res) => {
    res.render('new-entry');
}

entries.createNewEntry = (req, res) => {
    const newEntry = {
        title: req.body.title,
        body: req.body.body,
        published: new Date()
    }
    newEntries.push(newEntry);
    res.redirect('/');
}

module.exports = entries;