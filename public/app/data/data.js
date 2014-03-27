angular.module('app').factory('dataService', ['lodash', '$q', 'Restangular', dataService]);
function dataService(_, $q, api) {
    var cStudents = [];
    var cHours = [];
    var cPlanes = [];

    var dc = {
        currentHoursList: currentHoursList,
        myHours: myHours,
        addHours: addHours,
        removeHours: removeHours,
        getStudent: getStudent,
        getStudents: getStudents,
        getAllHours: getAllHours,
        addStudent: addStudent,
        updateStudent: updateStudent,
        removeStudent: removeStudent,
        planes: planes,
        refresh: init
    };
    init();
    return dc;

    function init() {
        // load students and instructors
        getStudents().then(function(d, h) {
                cStudents = d || [];
                cHours = h || [];
            }
        );
    };
    function currentHoursList() {
        // this months hours
        var ret = [];
        if (cHours && cHours.length) {
            var date = new Date();
            var firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
            var lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
            ret = _.filter(cHours, function(time){
                return time.date >= firstDay && time.date <= lastDay;
            });
        }
        return ret;
    };
    function planes() {
        var ret = cPlanes;
        if (cPlanes.length == 0 && cHours && cHours.length) {
            ret = _.pluck(_.uniq(cHours, 'tailNumber'), 'tailNumber');
            cPlanes = ret;
        }
        return ret;
    };
    function myHours() {
        // base hours + all student flight hours
        var ret = 0;
        if (cInstructors && cInstructors.length){
            ret += cInstructors[0].baseHours;
        }
        if (cHours && cHours.length){
            ret += _.reduce(_.pluck(cHours, 'flight'), function (tot, num){ return tot + num}, 0);
        }
        return ret;
    };
    function getAllHours() {
        var deferred = $q.defer();
        api.all('students').customGET('hours')
            .then(function(hours) {
                deferred.resolve(hours);
            });
        return deferred.promise;
    };
    function addHours(hours) {
        var deferred = $q.defer();
        var newHours = {
            date: hours.date,
            flight: hours.flight || 0,
            ground: hours.ground || 0,
            tailNumber: hours.tailNumber || '',
            comments: hours.comments || ''
        };
        api.one('student', hours.student.id).post('hours', newHours)
            .then(function(result) {
                if (hours.tailNumber !== "" && !cPlanes.indexOf(hours.tailNumber) > -1) {
                    cPlanes.push(hours.tailNumber);
                }
                cHours.push(hours);
                var student = _.find(cStudents, function(std) { return std.id == hours.student.id} );
                if (student) {
                    student.hours.push(hours);
                }
                currentHoursList();
                deferred.resolve();
            })
        return deferred.promise;
    };
    function removeHours(student, id) {
    };
    function getStudent(id) {
        var deferred = $q.defer();
        var ret = undefined;
        if (cStudents) {
            var student = _.find(cStudents, function(std) { return std.id == id} );
            ret = student;
        }
        if (ret) {
            deferred.resolve(ret);
        }
        else {
            api.one('students', id).get()
                .then(function(std){
                    deferred.resolve(std);
                }, function(err) { deferred.reject(err); });
        }
        return deferred.promise;
    };
    function addStudent(student) {
        var deferred = $q.defer();
        api.all('students')
            .post(student)
            .then(function(newStudent){
                cStudents = cStudents.push(newStudent);
                deferred.resolve(newStudent);
            },function(err) { deferred.reject(err); });
        return deferred.promise;
    };
    function updateStudent(student) {
        var deferred = $q.defer();
        var upd = api.one('student', student.id);
        upd.name = student.name;
        upd.email = student.email;
        upd.put()
            .then(function(){
                cStudents = _.reject(cStudents, function(stud) {
                    return stud.id === student.id;
                }).push(student);
                var upd = _.reject(cHours, function(time){
                    return time.studentId !== student.id;
                });
                var data = _.map(student.hours, function(hour){
                    return {
                        studentId: student.id,
                        name: student.name,
                        flight: hour.flight,
                        ground: hour.ground,
                        total: hour.flight + hour.ground
                    }
                });
                cHours = upd.concat(data);
                deferred.resolve();
            }, function(err) { deferred.reject(err);});
        return deferred.promise;
    }
    function removeStudent(id) {
        var deferred = $q.defer();
        api.one('student', id)
            .remove()
            .then(function() {
                cStudents = _.reject(cStudents, function(student){
                    return student.id === id;
                });
                cHours = _.reject(cHours, function(time){
                    return time.studentId !== id;
                });
                deferred.resolve();
            }, function(err) { deferred.reject(err); });
        return deferred.promise;
    };
    function getStudents() {
        var deferred = $q.defer();
        if (!cStudents || !cStudents.length) {
            api.one('students').getList()
                .then(function(list) {
                    cStudents = _.map(list, function(item) {
                        return {
                            id: item._id,
                            name: item.name,
                            email: item.email,
                            hours: item.hours
                        };
                    });
                    var hours = [];
                    _.each(cStudents, function(student){
                        var nn = student.name;
                        var data = _.map(student.hours, function(hour){
                            return {
                                date: new Date(hour.date),
                                name: nn,
                                tailNumber: hour.tailNumber,
                                flight: hour.flight,
                                ground: hour.ground,
                            }
                        });
                        hours = hours.concat(data);
                    });
                    cHours = hours;
                    var ch = currentHoursList();
                    deferred.resolve({ students: cStudents, hours: ch});
                });
        }
        else {
            deferred.resolve({ students: cStudents, hours: cHours});
        }
        return deferred.promise;
    };
};