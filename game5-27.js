
    var winner1="";
    var winner2="";
    var min=0;				
    var max=3;
    var playerNames = [];					
    var Game = {
        player1wins: 0,
        player2wins: 0,
        possible: ["rock", "paper", "scissors"],
        winner: "",
        player1: 0,
        player2: 0,
        hand: function () {
            this.player1 = Math.floor(Math.random() * (+max - +min)) + +min;
            this.player2 = Math.floor(Math.random() * (+max - +min)) + +min;
        },
        round: function (playerNames) {
            while (this.player1wins < 3 && this.player2wins < 3) {
                this.hand();
                if (this.player1 == 1 && this.player2 == 0 || this.player1 == 2 && this.player2 == 1 || this.player1 == 0 && this.player2 == 2) {
    
                    console.log(playerNames[0] + " chose " + this.possible[this.player1] + " and " + playerNames[1] + " chose " + this.possible[this.player2] + ", so " + playerNames[0] + " wins.");
                    this.player1wins++;
    
                } else if (this.player1 == this.player2) {
                    console.log("Both players chose " + this.possible[this.player1]);
    
    
                } else {
                    console.log(playerNames[1] + " chose " + this.possible[this.player2] + " and " + playerNames[0] + " chose " + this.possible[this.player1] + ", so " + playerNames[1] + " wins.");
                    this.player2wins++;
    
                }
            }
            if (this.player1wins === 3) {
                this.winner = playerNames[0];
                console.log(this.winner + " wins this round.")
            } else {
                this.winner = playerNames[1];
                console.log(this.winner + " wins this round.")
            }
            /* if(this.winner=="You" || this.winner=="John" ){
                winner1=this.winner;
            }else{
                winner2=this.winner;
            } */
            return this.winner;
        }
    }
    var game1 = {};
    Object.assign(game1, Game);
    
    game1.hand = function () {
        this.player1 = Math.floor(Math.random() * (+max - +min)) + +min;
        var play2 = prompt("What do you choose?");
        this.player2 = this.possible.indexOf(play2);
    };
   
    winner1=game1.round(["John","You"]);
    
    var game2 = {};
    Object.assign(game2, Game);
  
    winner2=game2.round(["Jake", "Blake"]);
    
var game3={};
Object.assign(game3,Game);

if(winner1=="You"){
    game3.hand = function () {
        this.player1 = Math.floor(Math.random() * (+max - +min)) + +min;
        var play2 = prompt("What do you choose?");
        this.player2 = this.possible.indexOf(play2);
    }
    }

var champion=game3.round([winner1,winner2]);

alert("The Paper, Rock, Scissors tournament champion is "+champion+"!");






