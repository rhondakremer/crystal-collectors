$(document).ready(function() {


$("#start" ).click(function() {

var goalNumber = Math.floor(Math.random()*(120-19+1)+19); 
var crystal1;
var crystal2;
var crystal3;
var crystal4;
var currentScore = 0;
var wins = 0;
var losses = 0;
var goalAccomplished;
var goalFailed;
addNumbers();

$("#button").empty();
$("#button").html("<button id='restart'>Play Again!</button>");

$("#goalnumber").html("<p>Goal number is: " + goalNumber + "</p>");
    crystal1 = Math.floor(Math.random()*(12-1+1)+1)
    crystal2 = Math.floor(Math.random()*(12-1+1)+1)
    crystal3 = Math.floor(Math.random()*(12-1+1)+1)
    crystal4 = Math.floor(Math.random()*(12-1+1)+1)
    $("#currentScore").html("<p>Your current score is: " + currentScore + "</p>");
    $("#wins").html("Wins: ");
    $("#losses").html("Losses: ");


function addNumbers() {
    $("#crystal1").click(function() {
        if (goalAccomplished == true || goalFailed == true) {
            return;
        }

        currentScore = currentScore + crystal1;
            $("#currentScore").html("<p>Your current score is: " + currentScore + "</p>");
    
        if (currentScore === goalNumber) {
            goalAccomplished = true;
            wins++;
            $("#wins").html("Wins: " + wins);
            $("#message").html("You win!!");
        }
        else if (currentScore > goalNumber) {
            goalFailed = true;
            losses++;
            $("#losses").html("Losses: " + losses);
            $("#message").html("You lose!!");
        } 
        
    });

    $("#crystal2").click(function() {
        if (goalAccomplished == true || goalFailed == true) {
            return;
        }

        currentScore = currentScore + crystal2;
            $("#currentScore").html("<p>Your current score is: " + currentScore + "</p>");
    
        if (currentScore === goalNumber) {
            goalAccomplished = true;
            wins++;
            $("#wins").html("Wins: " + wins);
            $("#message").html("You win!!");
        }
        else if (currentScore > goalNumber) {
            goalFailed = true;
            losses++;
            $("#losses").html("Losses: " + losses);
            $("#message").html("You lose!!");
        } 
        
    });

    $("#crystal3").click(function() {
        if (goalAccomplished == true || goalFailed == true) {
            return;
        }

        currentScore = currentScore + crystal3;
            $("#currentScore").html("<p>Your current score is: " + currentScore + "</p>");
            
        if (currentScore === goalNumber) {
            goalAccomplished = true;
            wins++;
            $("#wins").html("Wins: " + wins);
            $("#message").html("You win!!");
        }
        else if (currentScore > goalNumber) {
            goalFailed = true;
            losses++;
            $("#losses").html("Losses: " + losses);
            $("#message").html("You lose!!");
        } 
        
    });

    $("#crystal4").click(function() {
        if (goalAccomplished == true || goalFailed == true) {
            return;
        }

        currentScore = currentScore + crystal4;
            $("#currentScore").html("<p>Your current score is: " + currentScore + "</p>");
    
        if (currentScore === goalNumber) {
            goalAccomplished = true;
            wins++;
            $("#wins").html("Wins: " + wins);
            $("#message").html("You win!!");
        }
        else if (currentScore > goalNumber) {
            goalFailed = true;
            losses++;
            $("#losses").html("Losses: " + losses);
            $("#message").html("You lose!!");
        } 
       
        

    });

    

};

$("#restart").click(function() {
    goalNumber = Math.floor(Math.random()*(120-19+1)+19); 
    $("#goalnumber").html("<p>Goal number is: " + goalNumber + "</p>");
    currentScore = 0;
    crystal1 = Math.floor(Math.random()*(12-1+1)+1);
    console.log(crystal1);
    crystal2 = Math.floor(Math.random()*(12-1+1)+1);
    console.log(crystal2);
    crystal3 = Math.floor(Math.random()*(12-1+1)+1);
    console.log(crystal3);
    crystal4 = Math.floor(Math.random()*(12-1+1)+1);
    console.log(crystal4);
    $("#currentScore").html("<p>Your current score is: " + currentScore + "</p>");
    $("#wins").html("Wins: " + wins);
    $("#losses").html("Losses: " + losses);
    goalAccomplished = false;
    goalFailed = false;
    $("#message").empty();
    addNumbers();
}
);  

});

});
