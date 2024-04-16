const getTheTitles = function(books) {

    let booktitles = [];

    for(let i = 0; i < books.length; i++)
    {
        booktitles.push(books[i].title);
    }

    return booktitles;
};

// Do not edit below this line
module.exports = getTheTitles;
