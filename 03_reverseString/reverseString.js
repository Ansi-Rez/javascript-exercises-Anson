const reverseString = function(word) {
    let reverser = [];
    let reversedword = '';

    for(let i = 0; i < word.length; i++)
    {
        reverser[i] = word.charAt(i);
    }

    for(let i = reverser.length ; i > 0; i--)
    {
        reversedword += reverser[i - 1];
    }
    return reversedword;
};

// Do not edit below this line
module.exports = reverseString;
