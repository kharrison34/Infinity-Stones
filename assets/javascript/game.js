// //a game with 4 crystals 
// //a random target number is generated
// // each crystal recieves a random # at the start of each game 
// //click crystals to add up to the target number if hit you win if exceeds you lose 
// // then restart game 

//a random target number is generated
// each crystal recieves a random # at the start of each game 
//click crystals to add up to the target number if hit you win if exceeds you lose 
// then restart game 



$(document).ready(function(){
    var random=Math.floor(Math.random()*81+19)

    $('.goalnumber').text(random);
    var targetNumber = random;


    var num1= Math.floor(Math.random()*10+1)
    var num2= Math.floor(Math.random()*10+1)
    var num3= Math.floor(Math.random()*10+1)
    var num4= Math.floor(Math.random()*10+1)
    console.log(num1);
    console.log(num2);
    console.log(num3);
    console.log(num4);

    $(".goalnumber").text(targetNumber);

    

    var counter = 0;

    // var numberOptions = [10,11];
    // var increment = numberOptions[Math.round(Math.random())];


    $(".gems").on("click", "#one", function(){

        counter = counter + num1

        alert("your new score is " + counter);


        if (counter === targetNumber){

            alert("you win!");
        }

        else if (counter > targetNumber) {

            alert("you lose!");
        }
    });

    $(".gems").on("click", "#two", function(){

        counter = counter + num2

        alert("your new score is " + counter);


        if (counter === targetNumber){

            alert("you win!");
        }

        else if (counter > targetNumber) {

            alert("you lose!");
        }
    });

    $(".gems").on("click", "#three", function(){

        counter = counter + num3

        alert("your new score is " + counter);


        if (counter === targetNumber){

            alert("you win!");
            
        }

        else if (counter > targetNumber) {

            alert("you lose!");
        }
    });

    $(".gems").on("click", "#four", function(){

        counter = counter + num4

        alert("your new score is " + counter);


        if (counter === targetNumber){

            alert("you win!");
        }

        else if (counter > targetNumber) {

            alert("you lose!");
        }
    });

    $("#totalWins").append

    // add a win loss talley
    // add a reset 




    

});







    