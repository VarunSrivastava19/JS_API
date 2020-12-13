"use strict"
var i = 1;
for(i=1; i<=100; i++) {
    if(i%10===0) {
        document.writeln(i + " " + "<br>");        
    } else {
        document.write(" "+i+" ");
    }
    
}