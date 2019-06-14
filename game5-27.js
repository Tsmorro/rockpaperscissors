
var player1wins=0;
var player2wins=0;
var playerNames=["John","Mary"];
var possible = ["rock","paper","scissors"];
var min = 0;
var max = 3;
var winner1="";
var winner2="";
var champion="";
var round1=function (winner){
    for(let i=0;i<=5;i++){
        var player1=Math.floor(Math.random() * (+max - +min)) + +min;
        var player2=Math.floor(Math.random() * (+max - +min)) + +min;

        if(player1wins<3 && player2wins<3){
       
       
        if(player1==1 && player2==0 || player1==2 && player2==1 || player1==0 && player2==2){

            console.log(playerNames[0]+" chose "+possible[player1]+" and "+playerNames[1]+" chose "+possible[player2]+", so "+playerNames[0]+" wins.");
            player1wins++;

        }else if(player1==player2){
            console.log("Both players chose " + possible[player1]);
            i--;

        }else{
            console.log(playerNames[1]+" chose "+possible[player1]+" and "+playerNames[0]+" chose "+possible[player2]+", so "+playerNames[1]+" wins.");
            player2wins++;

        }
        }
        else if(player1wins==3){
        winner=playerNames[0];
        }else{
        winner=playerNames[1];
        } 
   
    }
    console.log(winner + " wins this round.")
    return winner;
        }
var playerNames2=["Jake","Blake"];
var round2 = function (winner){
    for(let i=0;i<=5;i++){
        var player1=Math.floor(Math.random() * (+max - +min)) + +min;
        var player2=Math.floor(Math.random() * (+max - +min)) + +min;

        if(player1wins<3 && player2wins<3){
       
       
        if(player1==1 && player2==0 || player1==2 && player2==1 || player1==0 && player2==2){

            console.log(playerNames[0]+" chose "+possible[player1]+" and "+playerNames[1]+" chose "+possible[player2]+", so "+playerNames[0]+" wins.");
            player1wins++;

        }else if(player1==player2){
            console.log("Both players chose " + possible[player1]);
            i--;

        }else{
            console.log(playerNames[1]+" chose "+possible[player1]+" and "+playerNames[0]+" chose "+possible[player2]+", so "+playerNames[1]+" wins.");
            player2wins++;

        }
        }
        else if(player1wins==3){
        winner=playerNames2[0];
        }else{
        winner=playerNames2[1];
        } 
   
    }
    console.log(winner + " wins this round.")
    return winner;
        }

var playerNames3=[round1(),round2()];
var round3=function (winner){
    for(let i=0;i<=5;i++){
        var player1=Math.floor(Math.random() * (+max - +min)) + +min;
        var player2=Math.floor(Math.random() * (+max - +min)) + +min;

        if(player1wins<3 && player2wins<3){
       
       
        if(player1==1 && player2==0 || player1==2 && player2==1 || player1==0 && player2==2){

            console.log(playerNames[0]+" chose "+possible[player1]+" and "+playerNames[1]+" chose "+possible[player2]+", so "+playerNames[0]+" wins.");
            player1wins++;

        }else if(player1==player2){
            console.log("Both players chose " + possible[player1]);
            i--;

        }else{
            console.log(playerNames[1]+" chose "+possible[player1]+" and "+playerNames[0]+" chose "+possible[player2]+", so "+playerNames[1]+" wins.");
            player2wins++;

        }
        }
        else if(player1wins==3){
        winner=playerNames3[0];
        }else{
        winner=playerNames3[1];
        } 
   
    }
    console.log(winner + " wins this round.")
    return winner;
        }
console.log(round3() + " is the paper,rocks, scissors champion!");