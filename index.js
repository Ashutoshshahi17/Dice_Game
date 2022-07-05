var draw_ = 0,
    ply1 = 0,
    ply2 = 0,
    ply3 = 0,
    noone = 0;

//dice 1

function Result() {
    var random1 = Math.floor(Math.random() * 6) + 1;
    var randromDiceImage1 = "Dice-" + random1 + ".svg";


    var image1 = document.querySelectorAll("img")[0].setAttribute("src", randromDiceImage1);


    // dice 2


    var random2 = Math.floor(Math.random() * 6) + 1;
    var randomDiceImage2 = "Dice-" + random2 + ".svg";

    var image2 = document.querySelectorAll("img")[1].setAttribute("src", randomDiceImage2);

    //Dice 3
    
    var random3 = Math.floor(Math.random() * 6) + 1;
    var randomDiceImage3 = "Dice-" + random3 + ".svg";

    var image3 = document.querySelectorAll("img")[2].setAttribute("src", randomDiceImage3);


    if ((random1 > random2) && (random1 > random3)) {
        document.querySelector("h1").innerHTML = "Player 1 wins! 🏆";
        ply1 = ply1 + 1;
        document.querySelector(".result_1").innerHTML = ply1;
    } else if ((random2 > random1)&&(random2 > random3)) {
        document.querySelector("h1").innerHTML = "Player 2 wins! 🏆";
        ply2 = ply2 + 1;
        document.querySelector(".result_2").innerHTML = ply2;
    } else if ((random3 > random1)&&(random3 > random2)) {
        document.querySelector("h1").innerHTML = "Player 3 wins! 🏆";
        ply3 = ply3 + 1;
        document.querySelector(".result_3").innerHTML = ply3;
    } else if((random1==random2)&&(random1==random3)&&(random2==random3)) {
        document.querySelector("h1").innerHTML = "Draw!🙄";
        draw_ = draw_ + 1;
        document.querySelector(".draw_").innerHTML = draw_;
    }
    else {
        document.querySelector("h1").innerHTML = "No One Win!😔"
        noone = noone + 1;
        document.querySelector(".noone").innerHTML = noone;
    }

}
