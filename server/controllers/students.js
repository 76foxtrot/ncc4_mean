var mongoose = require('mongoose');
var Students = mongoose.model('Students');
var Hours = mongoose.model('Hours');
var _ = require('lodash-node');
var moment = require('moment');

module.exports.findAll = findAll;
module.exports.findAllHours = findAllHours;
module.exports.findOne = findOne;
module.exports.findOnesHours = findOnesHours;
module.exports.deleteOne = deleteOne;
module.exports.addOne = addOne;
module.exports.updateOne = updateOne;
module.exports.addHours = addHours;

function findAll (user, callback) {
    Students.find({ instructorId: user }, function (err, data) {
        if (err) { console.log(err); return undefined;}
        if (callback) { callback(data); }
    });
};

function findAllHours (user, callback) {
    Students.find({ instructorId: user }, function (err, data) {
        if (err) { console.log(err); return undefined;}
        var hours = _.map(data, function(std) {
            var hr  = _.map(std.hours, function(hr) {
                return {
                    id: hr._id,
                    flight: hr.flight,
                    ground: hr.ground,
                    tailNumber: hr.tailNumber,
                    comments: hr.comments,
                    date: hr.date,
                    studentId: std.id,
                    name: std.name
                };
            });
            return hr;
        });
        if (callback) { callback(hours); }
    });
};

function findOne(user, id, callback) {
    var oid = mongoose.Types.ObjectId(id);
    Students.find({ instructorId: user, _id: oid }, function(err, student) {
        if(err) { console.log('student ' + id + ' not found'); }
        if (callback) { callback(student); }
    });
};
function findOnesHours(user, id, date, callback) {
    var oid = mongoose.Types.ObjectId(id);
    date = date === undefined ? moment() : date;
    var eolm = moment(date).day(0);
    var eom = moment(date).add('month', 1).day(1);
    Students.find({ instructorId: user, _id: oid }, function(err, student) {
        if(err) { console.log('student ' + id + ' not found'); }
        var hours = _.filter(student.hours, function(hr) {
            return moment(hr.date).isBefore(eom) && moment(hr.date).isAfter(eolm);
        });
        if (callback) { callback(student.hours); }
    });
};
function addOne(user, student, callback) {
    var newStudent = new Students({
        instructorId: user,
        name: student.name,
        email: student.email
    });
    newStudent.save(function(err, val){
        if (err) { console.log('error adding student ' + err );}
        if (callback) { callback(val); }
    });
};
function updateOne(user, id, data, callback) {
    var oid = mongoose.Types.ObjectId(id);
    var options = { new: true, upsert: false};
    Students.findOneAndUpdate({ instructorId: user, _id: oid }, data, options, function(err, student) {
        var ret = undefined;
        if(err) { console.log('student ' + id + ' not found'); }
        else { ret = {}; }
        if (callback) { callback(ret); }
    });
};
function deleteOne(user, id, callback) {
    var oid = mongoose.Types.ObjectId(id);
    Students.findOneAndRemove({ instructorId: user, _id: oid }, function(err, student) {
        var ret = undefined;
        if(err) { console.log('student ' + id + ' not found'); }
        else { ret = {}; }
        if (callback) { callback(ret); }
    });
};
function addHours(user, id, hours, callback) {
    var oid = mongoose.Types.ObjectId(id);
    Students.update(
        { instructorId: user, _id: oid },
        { $push: { hours: hours } },
        {},
        function(err, num, raw) {
            var ret = undefined;
            if(err) { console.log('student ' + id + ' not found'); }
            else { ret = {}; }
        if (callback) { callback(ret); }
    });
};
