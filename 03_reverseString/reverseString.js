const reverseString = function(inputString) {
    
    const charArray = inputString.split("");
    charArray.reverse();
    let outputString = charArray.join("");

    return outputString;
};

// Do not edit below this line
module.exports = reverseString;
