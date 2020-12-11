var companyName="Cybage Software Pvt Ltd";

var searchChar = prompt("Enter a character to search: ");

if(companyName.match(searchChar)) {
    var index = companyName.indexOf(searchChar);
    document.writeln("Character " + searchChar + " is found at " + index + "<br>");
} else {
    document.writeln("Character " + searchChar + " not found!!<br>");
}

document.writeln(companyName + " is popularly known as " + companyName.slice(0, 15) + "<br>");
document.writeln(companyName.toLowerCase() + "<br>");
document.writeln(companyName.toUpperCase() + "<br>");