var coinFlip;
var i = 0;
var done;

do  {
    //Generates a number 1 or 0 randomly
    let coinFlip = Math.round(Math.random());
    i++;
    //window.console.log("CoinFlip is " + coinFlip );
    
    if (coinFlip === 0) {
        window.console.log( "Round " + i +  " Coin Flip is Heads "   );
        done = true;
    } else {
        window.console.log("Round " + i + " Coin Flip is Tails "  );
        window.console.log("Ending the Game!" );
        done = false;
    }
} while (done === true );

