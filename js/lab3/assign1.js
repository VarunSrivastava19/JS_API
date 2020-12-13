var today = new Date();
var date = Date();
//var time = today.getHours() + today.getMinutes() + today.getSeconds();
var hour = today.getHours();
var minute = today.getMinutes();
var second = today.getSeconds();

document.writeln(date + "<br>");
if(hour < 12) {
    document.writeln("Good Morning!!!");
} else if(hour <= 17 && second <= 1 ) {
    document.writeln("Good Afternoon!!!");
} else {
    document.writeln("Good Evening!!!");
}