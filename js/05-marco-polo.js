var multipleOf3 
var multipleOf5;
var multipleOfBoth;

for ( var i = 1; i <= 100; i++){
    multipleOf3 = false;
    multipleOf5 = false;
    multipleOfBoth = false;

    if ( i % 3 === 0){
        multipleOf3 = true;
    }
    if ( i % 5 === 0){
        multipleOf5 = true;
    }
    if ( multipleOf3 === true && multipleOf5 === true) {
        multipleOfBoth = true;
    }

    // Print the output based on the values
    if ( multipleOfBoth === true){
        window.console.log ("number:" + i + " Marco Polo!" );
        //window.console.log ("Marco Polo!");
    } else if ( multipleOf3 === true){
        window.console.log ("number:" + i + " Marco!" );
        //window.console.log ("Marco! ");
    } else if ( multipleOf5 === true){
        window.console.log ("number: " + i + " Polo!" );
        //window.console.log ("Polo!");
    } else {
        // do nothing for the rest of the numbers
    }
}