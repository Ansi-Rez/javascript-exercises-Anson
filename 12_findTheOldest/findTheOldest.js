const findTheOldest = function(people) {
    
    let person = []; 

    for(let i = 0; i < people.length; i++)
    {
        if(typeof(people[i].yearOfDeath) === "undefined")
        {
            const currentyear = new Date();
            let name = people[i].name, age = currentyear.getFullYear() - people[i].yearOfBirth;
            person.push({name,age});
        }
        else
        {
        let name = people[i].name, age = people[i].yearOfDeath - people[i].yearOfBirth;
        person.push({name,age});
        }
    }

    for(let i = 0; i < person.length; i++)
    {
        if(person[0].age < person[i].age)
        {
            person[0] = person[i];
        }
    }

    return person[0];
};

// Do not edit below this line
module.exports = findTheOldest;
