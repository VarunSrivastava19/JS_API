var i = 1;
do {
    if(i%10===0) {
        document.writeln(i + " " + "<br>");
    } else {
        document.write(" "+i+" ");
    }
    i++;
}while(i<=100);