function compute(){
    principal_v = document.getElementById("principal").value;
    rate_v = document.getElementById("rate").value;
    years_v = document.getElementById("years").value;   
    interest = principal_v*years_v*rate_v/100;
    var currentTime = new Date();
    var currentyear = Math.round(1970+(currentTime.getTime()/(1000 * 60 * 60 * 24*365)));
    var forecast_year = parseInt(currentyear,10) + parseInt(years_v,10)
    if (principal_v<=0) {
    document.getElementById("result").innerHTML ="Enter postive number"
    } else { 
    document.getElementById("result").innerHTML ="If you deposit " + principal_v + "," +
        " at an interest rate of "+ rate_v + "%." +
        " You will receive an amount of " + interest + "," +
        " in the year " + forecast_year;
    }
}
function ranges(value) {
    document.querySelector('.value').innerHTML = value;
}