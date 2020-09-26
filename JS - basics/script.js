////var firstName = 'John';
////console.log(firstName);
////
////var age = 28;
////console.log(firstName + " is " + age);
////
////var job, isMarried;
////job = 'teacher';
////isMarried = false;
////console.log(firstName + ' is a ' + job);
////
////
////
////var a = 2;
////var b = 5;
////var c = a + b;   // expected 7
////console.log(c);
////
////
////var john_mark = 'John and Mark';
////console.log(john_mark);
//
//
//////////////////////////////////
//// flow and control statements
///////
//
//var firstName = 'John';
//var civilStatus = 'single';
//
//if (civilStatus === 'married') {
//    console.log(firstName, 'is married');
//} else {
//    console.log(firstName, 'is not married');
//}
//
//
//var age = 20;
//
////if (age < 13) {
////    console.log('John is a kid');
////} else if (age >= 13 && age < 20) {
////    console.log('John is a teen');
////} else if (age >= 20 && age < 30) {
////    console.log('John is a young man');
////} else {
////    console.log('John is a man');
////}
//
////ternary operator
//
//age >= 18 ? console.log(firstName, "drinks beer.") : console.log(firstName, "drinks juice."); // >= ? :
//
//
//// switch case 
//
//age = 20;
//
//switch (true) {
//    case age < 13:
//        console.log('John is a kid');
//        break;
//    case age >= 13 && age < 20:
//        console.log('John is a teenager');
//        break;
//    case age >= 20 && age < 30:
//        console.log('John is a young man');
//        break;
//    default:
//        console.log('John is a man');
//}


/******************************
*** Truthy and Falsy values ***
*/

//falsy values: undefined, null, 0, '', NaN
//truthy values: NOT falsy values

/*
var height;

if (height) {
    console.log('variable is defined')
} else {
    console.log('variable is undefined')
}
*/


/******************************
*** Functions ***
*/

/*
function calculateAge (birthYear) {
    var presentYear = 2020;
    return presentYear - birthYear;
}


var ageJohn = calculateAge(2004);
console.log(ageJohn);

*/


/******************************
*** Arrays ***
*/

/*
var names = ['John', 'Mark', 'Jane'];
var years = new Array(1990, 2000, 2005);

console.log(names)

console.log(names[2]); //Jane
console.log(years[1]); //2000

names.push('Jack')
names[names.length] = 'Ben';
console.log(names);

*/



/******************************
*** Objects ***
*/

// properties 

/*
var john = {
    firstName: 'John',
    lastName: 'Mike',
    birthYear: 2004,
    isMarried: false,
    job: 'student'
};

console.log(john.firstName);
console.log(john['lastName']);
var x = 'job'
console.log(john[x]);

john.birthYear = 1990;
console.log(john);

john.blah = 'blahblahblah';

console.log(john.blah);

*/

// methods

/*
var john = {
    firstName: 'John',
    lastName: 'Mike',
    birthYear : 2004,
    isMarried: false,
    job: 'student',
    calcAge: function(presentYear) {
        this.age = presentYear - this.birthYear;
    }
};


var presentYear = 2020;
john.calcAge(presentYear);

console.log(john.age);

*/




/******************************
*** Loops and iterations ***
*/

for (var i = 1; i <= 10; i++) {
    console.log(i);
}

var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];

for (var i = 0; i < john.length; i++){
    console.log(john[i]);
}

//continue statement
console.log('')
for (var i = 0; i < john.length; i++){
    if (typeof john[i] !== 'string') continue;
    console.log(john[i]);
}

//break statement
console.log('')
for (var i = 0; i < john.length; i++){
    if (typeof john[i] !== 'string') break;
    console.log(john[i]);
}

//reverse loop
console.log('')
for (var i = john.length-1; i >= 0; i--){
    console.log(john[i]);
}





















































