/**********************************
* CODING CHALLENGE 4
*/

/*
Let's remember the first coding challenge where Mark and John compared their BMIs. Let's now implement the same functionality with objects and methods.
1. For each of them, create an object with properties for their full name, mass and height
2. Then, add a method to each object to calculate the BMI. save the BMI to the object and also return it from the method.
3. In the end, log to the console who has the highest BMI, together with the full name and their respective BMI. Don't forget they might have the same BMI.

Remember: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

GOODLUCK

*/

// SOLUTION

//object
var john = {
    //properties
    name: '',
    mass: 0,
    height: 0,
    BMI: 0,
    // method
    constructor: function(name, mass, height) {
        this.name = name;
        this.mass = mass;
        this.height = height;
    },
    
    calculateBMI: function() {
        this.BMI = this.mass / this.height**2;
        return this.BMI;
    }
}

//object
var mark = {
    //properties
    name: '',
    mass: 0,
    height: 0,
    BMI: 0,
    // method
    constructor: function(name, mass, height) {
        this.name = name;
        this.mass = mass;
        this.height = height;
    },
    
    calculateBMI: function() {
        this.BMI = this.mass / this.height**2;
        return this.BMI;
    }
}



john.constructor('John Smith', 92, 1.95);

mark.constructor('Mark Miller', 78, 1.69);

john.calculateBMI();
mark.calculateBMI();

if (john.BMI > mark.BMI) {
    console.log(john.name, 'has a higher BMI of', john.BMI); 
} else if (mark.BMI > john.BMI) {
    console.log(mark.name, 'has a higher BMI of', mark.BMI);
} else {
    console.log('they have the same BMI');
}
    
console.log(john.BMI, mark.BMI);





























