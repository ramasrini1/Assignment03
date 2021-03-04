var futureValue;
var investment;
var rate;
var years;
var i;

investment = parseFloat(window.prompt("Enter investment amount as xxxxx.xx"));
rate = parseFloat(window.prompt("Enter interest rate, greater than 0 and less than 100 as xx.x"));
years = parseInt(prompt("Enter number of years between 0 and 30"), 10);

//Check for valid inputs as per the specs
if ( isNaN(investment)) {
    alert("Enter valid investment amount in decimal format as xxxxx.xx");
} else if ( rate < 0 || rate > 100 ){
    alert("Enter Valid Interest Rate between 0 and 100");
} else if ( years < 0 || years > 30 ){
    alert("Enter valid years a number between 0 and 30");
} else {
    futureValue = investment;
    for ( i = 0; i<= years; i +=1 ){
        futureValue = futureValue + (futureValue * rate/100);
    }
    futureValue = parseInt(futureValue, 10);

    window.document.write("Investment amount: " + investment + "<br>");
    window.document.write("Interest Rate: " + rate + "<br>");
    window.document.write("Years: " + years + "<br>");
    window.document.write("Future value: " + futureValue );
}

