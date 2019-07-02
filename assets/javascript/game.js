// characters fight each other and lose health while doing it

$(document).ready(function() {

    var characters = [
    rambo = { 
        name: "Rambo",
        healthPoints: 100,
        attackPoints: 10,
        counterAttackPower: 10,
    },

    judgeDredd = 
    { 
        name: "Judge Dredd",
        healthPoints: 100,
        attackPoints: 10,
        counterAttackPower: 20,
    },

    cobra = 
    { 
        name: "Cobra",
        healthPoints: 100,
        attackPoints: 10,
        counterAttackPower: 30,
    },

    rocky = 
    { 
        name: "Rocky",
        healthPoints: 100,
        attackPoints: 10,
        counterAttackPower: 40,
    },
    ]  
    
    $( "#rambopic" ).click(function() {
        alert("They drew first blood, not me.");}
      );
    
    $( "#judgedreddpic" ).click(function() {
        alert("The law never apologizes.")
        ;

    );



       


    //create a selection of characters (consider using objects)
    //make each character selectable
    //move first selected character to next section
    //make next selecter character the fighter
    //move figher to different area
    //button that says fight
    //on click take some points from hero and some from fighter
    //increase points taken away from fighter with each hit
    //if hero has 0, end game
    //if fighter has 0, select next character until they are all dead
    //reset game with button
});