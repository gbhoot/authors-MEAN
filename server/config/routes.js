var path = require('path'),
    authors = require('../controllers/authors.js');

module.exports = function(app) {
    // Get all the authors
    app.get('/db/v1/authors', function(req, res) {
        authors.getAll(req, res);
    });

    // Get one author via id
    app.get('/db/v1/authors/:id', function(req, res) {
        authors.getOne(req, res);
    });

    // Create new author
    app.post('/db/v1/authors', function(req, res) {
        authors.create(req, res);
    });

    // Update author via id
    app.put('/db/v1/authors/:id', function(req, res) {
        authors.update(req, res);
    });

    // Remove all authors
    app.delete('/db/v1/authors', function(req, res) {
        authors.destroyAll(req, res);
    });

    // Remove one author via id
    app.delete('/db/v1/authors/:id', function(req, res) {
        authors.destroyOne(req, res);
    });

    // Remaining routes direct to Angular
    app.all("**", function(req, res, next) {
        res.sendFile(path.resolve(__dirname, '../../public/dist/public/index.html'));
    });
}