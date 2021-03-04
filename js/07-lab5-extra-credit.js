var miles;
var gallons;
var mpg;
var again = "y";
var invalidEntry;

do {
    miles = window.prompt("Enter miles driven");
    miles = parseFloat(miles);
    gallons = window.prompt("Enter gallons of gas used");
    gallons = parseFloat(gallons);
    if (!isNaN(miles) && miles > 0 && !isNaN(gallons) && gallons > 0) {
        mpg = miles / gallons;
        mpg = parseInt(mpg, 10);
        window.document.write("Miles per gallon: " + mpg);
        window.console.log("Miles per gallon: " + mpg);
    } else {
        window.alert("One of both entries are invalid.");
    }
    do {
        again = window.prompt("Repeat entries? (y or n)", "y");
        again = again.toLowerCase();
        
        if ( again === "y" || again === "n"){
            //valid entries
            invalidEntry = false;
            if ( again === "n"){
                alert("You entered " + again + " Thank you closing the app" );
                window.console.log("You entered " + again + "--Thank you closing the app--" );
            } else{
                window.console.log("You enterd value " + again + " Starting the app again.");
            }       
            
        } else {
            window.console.log("Enterd value " + again);
            window.alert("Invalid entry. Enter y or n ");
            invalidEntry = true;
        }
    } while( invalidEntry === true);

} while (again === "y");