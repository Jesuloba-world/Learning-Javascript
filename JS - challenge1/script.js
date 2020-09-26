/************************
*   Coding Challenge 1
*/

/*
Mark and John are trying to capture their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has higher BMI than John.
4. Print a string to the console containing the variable from step 3. (Something like "is Mark's BMI higher than John's? true").


*/

var johnMass, johnHeight, johnBMI;
johnMass = 78;
johnHeight = 1.69;

var markMass, markHeight, markBMI;
markMass = 92;
markHeight = 1.95;

johnBMI = johnMass / johnHeight**2;
console.log("John's BMI is " + johnBMI);

markBMI = markMass / markHeight**2;
console.log("Mark's BMI is " + markBMI);

var markIsHigher = markBMI > johnBMI;

console.log("is Mark's BMI higher than John's?", markIsHigher);























