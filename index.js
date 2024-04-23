const input = document.getElementById("input")

function reverseString(str) { // ("") with no space takes every character and puts it into an array, .join() puts all array elements into a string, .reverse() transfers a string into an array
    return str.split("").reverse().join("")
}

function check() {
    const value = input.value;
    const reverse = reverseString(value);
    
    if (value === reverse) {
        alert("Bingo!") // if true will read this statement
    } else { 
        alert("No Chance!") // if not true will read this statement
    }

    input.value = "" //resets value after checking
}