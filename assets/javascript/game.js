$(document).ready(function () {
    
    var goalNumber = Math.floor(Math.random() * (120 - 19 + 1) + 19);
    var currentScore = 0;
    var wins = 0;
    var losses = 0;
    var goalAccomplished;
    var goalFailed;

    function assignCrystalValues() {
        $( ".crystal" ).each(function() {
            $(this).attr("data-value", Math.floor(Math.random() * (12 - 1 + 1) + 1));
        });
    }

    function addNumbers(crystalValue) {
        if (goalAccomplished == true || goalFailed == true) {
            return;
        }
        currentScore += Number(crystalValue);
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
    };

    $("#start").click(function() {
        assignCrystalValues()
        $("button").html("Play again");
        goalNumber = Math.floor(Math.random() * (120 - 19 + 1) + 19);
        currentScore = 0;
        goalAccomplished = false;
        goalFailed = false;
        $("#goalnumber").html("<p>Goal number is: " + goalNumber + "</p>");
        $("#currentScore").html("<p>Your current score is: " + currentScore + "</p>");
        $("#wins").html("Wins: " + wins);
        $("#losses").html("Losses: " + losses);
        $("#message").empty();
    });

    $(".crystal").click(function() {
        addNumbers($(this).attr('data-value'))
    });

});