var i =0;
var player1wins=0;
var player2wins=0;
for(let i=0;i<=5;i++){
  

    var possible = ["rock","paper","scissors"];
    var min = 0;
    var max = 3;
    var player1=Math.floor(Math.random() * (+max - +min)) + +min;
    var player2=Math.floor(Math.random() * (+max - +min)) + +min;

     if(player1wins<3 && player2wins<3){
       
       
        if(player1==1 && player2==0 || player1==2 && player2==1 || player1==0 && player2==2){

            console.log("Player1 chose " + possible[player1] + " and Player 2 chose " + possible[player2] + ", so Player 1 wins");
            player1wins++;

        }else if(player1==player2){
            console.log("Both players chose " + possible[player1]);
            i--;

        }else{
            console.log("Player1 chose " + possible[player1] + " and Player 2 chose " + possible[player2] + ", so Player 2 wins");
            player2wins++;

        }
    }
    else if(player1wins==3){
      console.log("Player 1 wins, best 3 out of 5!");
    }else{
      console.log("Player 2 wins best 3 out of 5");
    } 
}