var principal;  //p
var rate;  //r
var num_year; //n

principal = parseInt(prompt("Enter Principal: "));
rate = parseInt(prompt("Enter Rate: "));
num_year = parseInt(prompt("Enter Period in years: "));

var compoundInterest = (principal*(1+(rate/100))**num_year)-principal;
document.writeln("Compound Interest is :" + " " + compoundInterest);
