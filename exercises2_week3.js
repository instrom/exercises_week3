
//input "hello world!"
//output
"!dlrow olleh"

var tampung = "";
function balikString(str) {
    for (i = str.length - 1; i >= 0; i--) {
        tampung += str[i];
    } return tampung
}

console.log(balikString("hello world!"))

