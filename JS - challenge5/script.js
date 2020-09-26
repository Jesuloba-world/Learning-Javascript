/************************
*   CODING CHALLENGE 5
*/

/*
Remember the tip calculator? Let's create a more advanced version using everything we learned!

This time, John and his family went to 5 different restaurants. The bills were $124, $48, $268, $180, and $42.
John likes to tip 20% on the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

Implement a tip calculator using objects and loops:
1. Create an object with an array for the bill values
2. Add a method to calculate the tip 
3. This method should include a loop to iterate over all the paid bills and do the tip calculations
4. As an output, create 1) a new array containing all tips, and 2) an array containing the final paid amounts (bill + tip). HINT: Start with two empty arrays [] as properties and then fill them up in the loop.

EXTRA AFTER FINISHING: Mark's family also went on an holiday, going to 4 different restaurants. The bills were $77, $375, $110, $45.
Mark likes to tip 20% of the bill when the bill is less than $100, 10% when the bill is between $100 and $300, and 25% if the bill is more than $300 (different than John).

5. Implement the same functionality as before, this time using Mark's tipping rules 
6. Create a function (not a method) to calculate the average of a given array of tips. HINT: Loop over the array, and in each iteration store the current sum in a variable (starting from 0). After you have the sum of the array, divide it by the total number of elements in it (that's how you calculate the avarage)
7. Calculate the average tip for each family
8. Log to the console which family paid the highest tips in average

GOOD LUCK

*/


//SOLUTION

var JohnBill = {
    //properties
    Name: "John's Family",
    bills: [124, 48, 268, 180, 42],
    tips: [],
    finalPaid: [],
    
    //method
    calcTip: function() {
        var percentage;
        var tip;
        for (var i = 0; i < this.bills.length; i++) {
            bill = this.bills[i]
    
            if (bill < 50) {
                percentage = 0.2;  // 20%
            } else if (bill >= 50 && bill < 200) {
                percentage = 0.15; // 15%
            } else {
                percentage = 0.1;  // 10%
            }
            
            tip = bill * percentage;
            this.tips.push(tip);
            this.finalPaid.push(tip + bill);
        }
    },
    
    display: function() {
        this.calcTip();
        
        console.log('JOHN TIPS')
        for (var i = 0; i < this.tips.length; i++) {
            console.log('$' + this.tips[i]);
        }
        
        console.log('');
        
        console.log('JOHN FINAL PAID AMOUNT')
        for (var i = 0; i < this.tips.length; i++) {
            console.log('$' + this.finalPaid[i]);
        }
    },
};


var MarkBill = {
    //properties
    Name: "Mark's Family",
    bills: [77, 375, 110, 45],
    tips: [],
    finalPaid: [],
    
    //method
    calcTip: function() {
        var percentage;
        var tip;
        for (var i = 0; i < this.bills.length; i++) {
            bill = this.bills[i]
    
            if (bill < 100) {
                percentage = 0.2;   // 20%
            } else if (bill >= 100 && bill < 300) {
                percentage = 0.1;   // 10%
            } else {
                percentage = 0.25;  // 25%
            }
            
            tip = bill * percentage;
            this.tips.push(tip);
            this.finalPaid.push(tip + bill);
        }
    },
    
    display: function() {
        this.calcTip();
        
        console.log('MARK TIPS')
        for (var i = 0; i < this.tips.length; i++) {
            console.log('$' + this.tips[i]);
        }
        
        console.log('');
        
        console.log('MARK FINAL PAID AMOUNT')
        for (var i = 0; i < this.tips.length; i++) {
            console.log('$' + this.finalPaid[i]);
        }
    },
};


function averageTip (person) {
    var sum = 0;
    for (var i = 0; i < person.tips.length; i++) {
        sum += person.tips[i];
    }
    
    person.averageTip = sum / person.tips.length;
}


//display tip and final paid amount
JohnBill.display();
console.log('');
MarkBill.display();


//calculate average tip
averageTip(JohnBill);
averageTip(MarkBill);

console.log('');
console.log('$' + JohnBill.averageTip + ",   " + '$' + MarkBill.averageTip);


//highest average tip
console.log('');
if (JohnBill.averageTip > MarkBill.averageTip) {
    console.log(JohnBill.Name + " has the highest with an average tip of $" + JohnBill.averageTip);
} else if (MarkBill.averageTip > JohnBill.averageTip) {
    console.log(MarkBill.Name + " has the highest with an average tip of $" + MarkBill.averageTip);
} else {
    console.log('Both families paid the same average tip');  
}



































