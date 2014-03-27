var mongoose = require('mongoose');

var hoursSchema = mongoose.Schema({
    date: {
        type: Date,
        default: Date.now,
        index: true
    },
    flight: {
        type: Number
    },
    ground: {
        type: Number
    },
    tailNumber: {
        type: String
    },
    comments: {
        type: String
    }
});

var studentSchema = mongoose.Schema({
    created: {
        type: Date,
        default: Date.now
    },
    instructorId: {
        type: String,
        required: true,
        trim: true
    },
    name: {
        type: String,
        required: true,
        default: '',
        trim: true
    },
    email: {
        type: String,
        default: '',
        trim: true,
        required: true,
        index: true
    },
    hours: [hoursSchema]
});

studentSchema.path('name').validate(function(name) { return name && name.length; },
    'Student Name can not be blank.'
);

studentSchema.path('email').validate(function(email) {
        //var emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        var emailRegex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return emailRegex.test(email);
    },
    'Invalid email address.'
);

studentSchema.index( { create: 1 });

var students = mongoose.model('Students', studentSchema);
var hours = mongoose.model('Hours', studentSchema);
