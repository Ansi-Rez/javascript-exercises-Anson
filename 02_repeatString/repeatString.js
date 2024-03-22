const repeatString = function(aString,aNum) {
    let i = 0;
    let heyvar = "";

    if(aNum < 0)
    {
        return "ERROR";
    }
    else
    {
        while(i < aNum)
        {
            heyvar += aString;
            i++;
        }
    }
    return heyvar;
};

// Do not edit below this line
module.exports = repeatString;
