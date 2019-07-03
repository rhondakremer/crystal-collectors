// characters fight each other and lose health while doing it

$(document).ready(function() {



    var hero;
    var challenger;
    var heroSelected = false;
    var challengerSelected = false;
    selectHero();
    selectChallenger();

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
    ]; 
   
    function selectHero() {
    $("#rambopic" ).click(function() {
        if (heroSelected === false) 
        {
        //alert("They drew first blood, not me.");
        $("#rambopic").appendTo( $("#heropic"));
        $("<p>This will show some info</p>").appendTo( $("#heroinfo"));
        heroSelected = true;
        hero = rambo;
        console.log(hero);
        }
        });
    

    $("#judgedreddpic" ).click(function() {
        if (heroSelected === false) 
        {
        //alert("The law never apologizes.");
        $("#judgedreddpic").appendTo( $("#heropic"));
        $("<p>This will show some info</p>").appendTo( $("#heroinfo"));
        heroSelected = true;
        hero = judgeDredd;
        console.log(hero);
        }
        });

    $("#rockypic" ).click(function() {
        if (heroSelected === false) 
        {
        //alert("All I wanna do is go the distance.");
        $("#rockypic").appendTo( $("#heropic"));
        $("<p>This will show some info</p>").appendTo( $("#heroinfo"));
        heroSelected = true;
        hero = rocky;
        console.log(hero);
        }
        });


    $("#cobrapic" ).click(function() {
        if (heroSelected === false) 
        {
        //alert("This is where the law ends and I start.");
        $("#cobrapic").appendTo( $("#heropic"));
        $("<p>This will show some info</p>").appendTo( $("#heroinfo"));
        heroSelected = true;
        hero = cobra;
        console.log(hero);
        }
        });
    }

    function selectChallenger() {
        $("#rambopic" ).click(function() {
            if (challengerSelected === false && hero !== rambo) 
            {
            //alert("They drew first blood, not me.");
            $("#rambopic").appendTo( $("#challengerpic"));
            $("<p>This will show some more info</p>").appendTo( $("#challengerinfo"));
            challengerSelected = true;
            challenger = rambo;
            console.log(challenger);
            }
            });
        
    
        $("#judgedreddpic" ).click(function() {
            if (challengerSelected === false && hero !== judgeDredd)
            {
            //alert("The law never apologizes.");
            $("#judgedreddpic").appendTo( $("#challengerpic"));
            $("<p>This will show some more info</p>").appendTo( $("#challengerinfo"));
            challengerSelected = true;
            challenger = judgeDredd;
            console.log(challenger);
            }
            });
    
        $("#rockypic" ).click(function() {
            if (challengerSelected === false && hero !== rocky) 
            {
            //alert("All I wanna do is go the distance.");
            $("#rockypic").appendTo( $("#challengerpic"));
            $("<p>This will show some more info</p>").appendTo( $("#challengerinfo"));
            challengerSelected = true;
            challenger = rocky;
            console.log(challenger);
            }
            });
    
    
        $("#cobrapic" ).click(function() {
            if (challengerSelected === false && hero !== cobra) 
            {
            //alert("This is where the law ends and I start.");
            $("#cobrapic").appendTo( $("#challengerpic"));
            $("<p>This will show some more info</p>").appendTo( $("#challengerinfo"));
            challengerSelected = true;
            challenger = cobra;
            console.log(challenger);
            }
            });
        }


       
    //when 
    //when health points=0, empty from div

 

    //make next selecter character the fighter
    //move figher to different area
    //button that says fight
    //on click take some points from hero and some from fighter
    //increase points taken away from fighter with each hit
    //if hero has 0, end game
    //if fighter has 0, select next character until they are all dead
    //reset game with button
});