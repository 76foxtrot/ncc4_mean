var studentCtrl = require('../controllers/students');

module.exports = function(app) {

    app.get('/api/students', function(req, res, next) {
        studentCtrl.findAll(function (std) {
            if (std == undefined) { res.send(500, 'The server is broke'); }
            else if (std.length == 0) { res.send(200, []); }
            else res.send(200, std);
        });
    });
    app.get('/api/students/hours', function(req, res, next) {
        studentCtrl.findAllHours(function (std) {
            if (std == undefined) { res.send(500, 'The server is broke'); }
            else if (std.length == 0) { res.send(200, []); }
            else res.send(200, std);
        });
    });
    app.post('/api/students', function(req, res, next) {
        var newStudent = {
            name: req.body.name,
            email: req.body.email
        }
        studentCtrl.addOne(newStudent, function(std) {
            if (std == undefined) { res.send(400, 'Bad Request'); }
            else res.send(200, { _id : std._id });
        });
    });
    app.get('/api/student/:id', function(req, res, next) {
        var id = req.params.id;
        if (id == undefined) { res.send(400, 'Bad Request') }
        else {
            studentCtrl.findOne(id, function(std) {
                if (std == undefined) { res.send(404, 'Resource not found'); }
                else res.send(200, std);
            });
        }
    });
    app.post('/api/student/:id/hours', function(req, res, next) {
        var id = req.params.id;
        if (id == undefined) { res.send(400, 'Bad Request'); }
        var hours = req.body;
        if (hours === undefined) {res.send(400, 'Bad Request'); }
        studentCtrl.addHours(id, hours, function(id) {
            if (id == undefined) { res.send(404, 'Resource not found'); }
            else res.send(204, 'No Content');
        });
    });
    app.put('/api/student/:id', function(req, res, next) {
        var id = req.params.id;
        if (id == undefined) { res.send(400, 'Bad Request') }
        //validate
        var upd = {
            name: req.body.name,
            email: req.body.email
        }
        studentCtrl.updateOne(id, upd, function(std) {
            if (std == undefined) { res.send(404, 'Resource not found'); }
            else res.send(204, 'No Content');
        });
    });
    app.delete('/api/student/:id', function(req, res, next) {
        var id = req.params.id;
        if (id == undefined) { res.send(400, 'Bad Request') }
        else {
            studentCtrl.deleteOne(id, function(std) {
                if (std == undefined) { res.send(404, 'Resource not found'); }
                else res.send(204, 'No Content');
            });
        }
    });
    app.get('/api/student/:id/hours/:date', function(req, res, next) {
        if (id == undefined) { res.send(400, 'Bad Request') }
        if (date == undefined || date == '') { res.send(400, 'Bad Request') }
        else {
            studentCtrl.findOnesHours(id, date, function(hours) {
                if (std == undefined) { res.send(404, 'Resource not found'); }
                else res.send(200, hours);
            });
        }
    });
}