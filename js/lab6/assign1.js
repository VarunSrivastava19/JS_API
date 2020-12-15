var x = document.location;
var hr = x.href;
path = x.pathname;
protocol = x.protocol;
console.log(x);
/*document.writeln(location.href);
document.writeln("<br>"+location.origin);
document.writeln("<br>"+location.pathname);
document.writeln("<br>"+location.protocol);*/
document.querySelector('td#href').innerHTML = hr;
document.querySelector('td#path').innerHTML = path;
document.querySelector('td#proto').innerHTML = protocol;

