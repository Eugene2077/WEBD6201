

// regex to match the phone number in the format (xxx) xxx-xxxx
var regex = /^\(\d{3}\)\s\d{3}-\d{4}$/;
// test regex against the phone number with console.log
console.log(regex.test("(123) 456-7890")); // true


/// create a function that takes a s string and returns it backwards
function reverseString(str) {
    // split the string into an array of characters
    var splitString = str.split("");
    // reverse the array
    var reverseArray = splitString.reverse();
    // join the array back into a string
    var joinArray = reverseArray.join("");
    // return the reversed string
    return joinArray;
}