const sumAll = function(num1,num2) {
    let sum = 0;

    if(num1 < 0 || num2 < 0 || isNaN(num1) || isNaN(num2) 
    || typeof num1 === "string" || typeof num2 === "string")
    {
        return "ERROR";
    }
    else if(num1 < num2)
    {
        for(let i = num1; i <= num2; i++)
        { 
            sum += i;
        }
    }
    else if(num1 > num2)
    {
        for(let i = num2; i <= num1; i++)
        { 
            sum += i;
        }
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
