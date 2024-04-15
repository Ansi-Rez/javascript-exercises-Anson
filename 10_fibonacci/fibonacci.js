const fibonacci = function(num) {
    sequence = [1];
    if(num == 0)
    {
        return 0;
    }
    else if(num < 0)
    {
        return "OOPS";
    }
    else
    {
        for(let i = 1; i < num; i++)
        {
            if(i === 1)
            {
                sequence.push(i);
            }
            else
            {
                sequence.push(sequence[i-1] + sequence[i-2]);
            }
        }
        return sequence.pop();
    }
};

// Do not edit below this line
module.exports = fibonacci;
