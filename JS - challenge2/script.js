/**********************************
* CODING CHALLENGE 2
*/


/*
John and Mike both play basketballin different teams. In the latest 3 games, John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.

1. Calculate the average score of each team
2. Decide which team wins in average (highest average score), and print the winner to the console. Also include the average score in the output.
3. Then change the score to show different winners. Don't forget to take into account there might be a draw (the same average score).

4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console. HINT: you will need the && operator to take the decision. if you can't solve this one, just watch the solution, it;s no problem :)
5. Like before, change the scores to generate different winners, keeping in mind there might be draws.

GOOD LUCK 
*/


// SOLUTION

var johnTeamScore1, johnTeamScore2, johnTeamScore3;

johnTeamScore1 = 89;
johnTeamScore2 = 120;
johnTeamScore3 = 103;


var mikeTeamScore1, mikeTeamScore2, mikeTeamScore3;

mikeTeamScore1 = 116;
mikeTeamScore2 = 94;
mikeTeamScore3 = 123;


var maryTeamScore1, maryTeamScore2, maryTeamScore3;

maryTeamScore1 = 97;
maryTeamScore2 = 134;
maryTeamScore3 = 105;


var johnTeamAverage, mikeTeamAverage, maryTeamAverage;


johnTeamAverage = (johnTeamScore1 + johnTeamScore2 + johnTeamScore3) / 3;

console.log('John\'s Team Average score is ' + johnTeamAverage);


mikeTeamAverage = (mikeTeamScore1 + mikeTeamScore2 + mikeTeamScore3) / 3;

console.log('Mike\'s Team Average score is ' + mikeTeamAverage);


maryTeamAverage = (maryTeamScore1 + maryTeamScore2 + maryTeamScore3) / 3;

console.log('Mary\'s Team Average score is ' + maryTeamAverage);


/*
if (johnTeamAverage > mikeTeamAverage) {
    console.log("John team wins with an average score of" + johnTeamAverage);
} else if (mikeTeamAverage > johnTeamAverage) {
    console.log("Mike team wins with an average score of" + mikeTeamAverage);
} else {
    console.log("Draw, no winner");
}
*/


switch (true) {
    case johnTeamAverage > mikeTeamAverage && johnTeamAverage > maryTeamAverage:
        console.log("John team wins with an average score of " + johnTeamAverage);
        break;
    case mikeTeamAverage > johnTeamAverage && mikeTeamAverage > maryTeamAverage:
        console.log("Mike team wins with an average score of " + mikeTeamAverage);
        break;
    case maryTeamAverage > johnTeamAverage && maryTeamAverage > mikeTeamAverage:
        console.log("Mary team wins with an average score of " + maryTeamAverage);
        break;
    default:
        console.log("Draw, no winner");
}


















