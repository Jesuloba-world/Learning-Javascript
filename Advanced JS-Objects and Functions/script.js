// normal way to create objects

/*
var john = {
    name: 'John',
    yearOfBirth: 1990,
    job: 'Teacher'
};
*/

/*

/////////////////////////////
// Function constructor

var Person = function (name, yearOfBirth, job) {   
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

// inheritance by prototype

// method in prototype
Person.prototype.calculateAge = function () {
    console.log(2020 - this.yearOfBirth);
}

// property in prototype
Person.prototype.lastName = 'Smith';

var john = new Person('John', 1999, 'Teacher');
console.log(john);
john.calculateAge();
console.log(john.name, john.lastName);


var jane = new Person('Jane', 2002, 'Designer');
console.log(jane);
jane.calculateAge();
console.log(jane.name, jane.lastName);

*/


///////////////////////////////////
// Object.create

/*
var personProto = {
    calculateAge : function () {
        console.log(2020 - this.yearOfBirth);
    }
};

var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'teacher';


var jane = Object.create(personProto, {
    name: { value: 'Jane' },
    yearOfBirth: { value: 2003 },
    job: { value: 'designer' }
});
*/


///////////////////////////////
// functions
// passing functions as arguments


/*
var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
    var arrRes = [];
    for (var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}


function calculateAge(el) {
    return 2020 - el;
}

function fullAge(el) {
    return el >= 18;
}

function maxHeartRate (el) {
    if (el >= 18 && el <= 81) {
        return Math.round(206.9 - (0.67 * el));
    } else {
        return -1;
    }
}

var ages = arrayCalc(years, calculateAge);
var fullAge = arrayCalc(ages, fullAge);
var maxHeartRate = arrayCalc(ages, maxHeartRate);

console.log(ages);
console.log(fullAge);
console.log(maxHeartRate);
*/


////////////////////////////////
// Functions
// Returning functions from functions

/*
function interviewQuestion(job) {
    if (job === 'designer') {
        return function(name) {
            console.log(name + ', can you please explain what UI design is?');
        }
    } else if (job === 'teacher') {
        return function(name) {
            console.log('What subject do you teach, ' + name + '?');
        }
    } else {
        return function(name) {
            console.log('Hello ' + name + ', what do you do?');
        }
    }
}


var teacherQuestions = interviewQuestion('teacher');
var designerQuestions = interviewQuestion('designer');

teacherQuestions('John');
designerQuestions('Jane');


interviewQuestion('rubbish')('Simon');
*/



//////////////////////////
// IIFE

/*
(function() {
    var score = Math.random() * 10;
    console.log(score >= 5);
}) ();



(function(goodLuck) {
    var score = Math.random() * 10;
    console.log(score >= 5 - goodLuck);
}) ();
*/



//////////////////////////
// Closures

/*
function retirement(retirementAge) {
    var a = ' years left until retirement.';
    return function(yearOfBirth) {
        var age = 2020 - yearOfBirth;
        console.log((retirementAge - age) + a);
    } 
}


var retirementUS = retirement(66);

retirementUS(1990);

retirement(65) (1985);


function interviewQuestion(job) {
    var question;
    return function(name) {
        if (job === 'designer') {
            question = 'can you please explain what UI design is?'
            console.log(name + ', ' + question);
        } else if (job === 'teacher') {
            question = 'What subject do you teach'
            console.log(question + ', ' + name + '?');
        } else {
            question = 'what do you do?'
            console.log('Hello ' + name + ', ' + question);
        }
    }
    
}


var teacherQuestions = interviewQuestion('teacher');
var designerQuestions = interviewQuestion('designer');

teacherQuestions('John');
designerQuestions('Jane');


interviewQuestion('rubbish')('Simon');
*/


//////////////////////////////
// Bind, Call and Apply


var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
    var arrRes = [];
    for (var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}


function calculateAge(el) {
    return 2020 - el;
}

function fullAge(limit, el) {
    return el >= limit;
}

var ages = arrayCalc(years, calculateAge);
var fullJapan = arrayCalc(ages, fullAge.bind(this, 20));


console.log(ages); 
console.log(fullJapan);









































