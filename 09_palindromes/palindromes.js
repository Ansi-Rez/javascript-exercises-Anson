const palindromes = function (raw) {
    let word = raw.replace(/[.?,! ]/g,"").toLowerCase();
    let reversearr = word.split("");
    let reverseword = "";

    for(let i = reversearr.length ; i > 0; i--)
    {
        reverseword = reverseword + reversearr[i - 1];
    }

    if(word === reverseword)
    {
        return true;
    }
    else
    {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
