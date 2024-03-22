const removeFromArray = function(arrInput,...args) {
    let newArray = [];
    let count = 0;
    for(let i = 0; i < arrInput.length; i++)
    {
        if(!args.includes(arrInput[i]))
        {
            newArray[count] = arrInput[i];
            count++;
        }
    }
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
