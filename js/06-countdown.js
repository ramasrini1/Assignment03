
var num = Number(prompt("Enter Counter value any number greater than 0"));
//window.console.log("You entered " + num);
if ( num !== num || num <0){
    // if you are here you have entered a NAN or number <0
    console.log("Enter A valid number");
}else {
    window.console.log("Starting Countdown from " + num + " to 0");
    for ( var i = num; i>=0; i--){
        window.console.log("Counter Value :" + i );
    }
}
