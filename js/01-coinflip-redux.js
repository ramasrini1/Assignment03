var coinFlip;
var numTimes = Number(prompt("Play enter the number of rounds you want to play " ));
window.console.log( "You entered the number " + numTimes );

for ( var i = 1; i <= numTimes; i++ ) {
    //Generates a number 1 or 0 randomly
    let coinFlip = Math.round(Math.random());
    
    if (coinFlip === 0) {
        window.console.log("Round Number " + i + " Coin Flip is Heads"  );
    } else {
        window.console.log("Round Number " + i + " Coin Flip is Tails"  );
    }
}

