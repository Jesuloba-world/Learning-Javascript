/************************
*   CODING CHALLENGE 7
*/

/*
--- Let's build a fun quiz game in the console! ---

1. Build a function constructor called Question to describe a question. A question should include:
a) question itself 
b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
c) correct answer (i would use a number for this) 

2. Create a couple of questions using the constructor

3. Store them all in an array

4. Select one random question and log it to the console, together with possible answers  (each question should have a number) (HINT: write a method for the Question object for this task).

5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it in task 4.

6. Check if the answer is correct and print to the console whether the answer is correct or not (HINT: write another method for this).

7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code (HINT: we learned a special technique to do exactly that). 


--- Expert level ---

8. After you display the result, display the next random question, so that the game never ends (HINT: write a function for this and call it right after displaying the result)

9. Be careful: after Task 8, the game literally never ends. So include the option to quit the game if the user writes 'exit' instead of the answer. In this case, don't call the function from task 8.

10. Track the user's score to make the game more fun! So that each answer is correct, add 1 point to the score (HINT: I'm going to use the power of closures for this, but you don't have to, just do this with tools you feel more comfortable with at this point).

11. Display the score in the console. Use yet another method for this.

*/







(function () {
    
    var presentScore = 0;
    
    var Question = function (question, answers, correctAns) {
        this.question = question;
        this.answers = answers;
        this.correctAns = correctAns;
        
        this.process = function(number) {
            
            this.display(number);  
            var input = this.getAnswer();
            if (input === "exit" || input === "q") { return true; }
            var isCorrect = this.checkAnswer(input);
            this.respond(isCorrect);
        };
        
        this.display = function(number) {
            console.log(number + ". " + this.question);
            var i = 0; var j = 1;
            while (i < answers.length) {
                console.log('(' +j + ') ' + answers[i])
                i++; j++;
            }
        };
            
        this.getAnswer = function() {
            var input = prompt("Enter your answer as number, Enter 'q' or 'exit' to quit");
            return input;
        };
            
        this.checkAnswer = function(input) {
            if (this.answers[input - 1] === this.correctAns) {
                presentScore += 1;
                return true;
            } else {
                return false;
            }
        };
            
        this.respond = function(isCorrect) {
            if(isCorrect) {
                console.log("Your answer is correct")
            } else {
                console.log("Incorrect answer")
            }
        };
    }
      
    
    var questions = [];
    
    questions.push(new Question("What's my name?", ["John", "Daniel", "Mark"], "John")); 
    questions.push(new Question("What's my job?", ["teacher", "developer", "doctor"], "developer")); 
    questions.push(new Question("Who made this course?", ["Mark", "Tom", "Jason"], "Jason")); 
    questions.push(new Question("Is Javascript a good programming language?", ["Yes", "No"], "Yes"));
    questions.push(new Question("What best describe coding?", ["Boring","Hard","Fun","Tedious"], "Fun"));
    
    
    var shouldQuit = false;
    var totalQuestions = 0;
    
    while (shouldQuit != true) {
        var randomQuestion = Math.floor(Math.random() * questions.length);
        var question = questions[randomQuestion];
        shouldQuit = question.process(randomQuestion + 1);
        totalQuestions += 1;
        afterDisplay();
    }
    
    console.log("");
    console.log("Goodbye, have a nice day");
    
    
    
    
    
    
    function afterDisplay() {
        console.log("");
        console.log("-----------------------------");
        console.log("Your current score is : " + presentScore + "/" + totalQuestions);
        console.log("Displaying Next Question...");
        console.log("Enter 'exit' or 'q' to quit"); 
        console.log("");
    }
    
}) ();



































