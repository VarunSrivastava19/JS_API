var x = 0;
var array = Array();

function addElementToArray() {
    array[x] = document.getElementById("text1").value;
    alert("Element: " + array[x] + " added at index " + x);
    x++;
    document.getElementById("text1").value = "";
}

function displayArray() {
    var e = " ";
    var h = "Lists of Students  <hr>";
    document.writeln(h + "<br>");

    for(var y=0; y<array.length; y++) {
        e = array[y] + "<br>";
        document.writeln(e);
    }
    //document.getElementById("list").innerHTML = e;
}