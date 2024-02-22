const findTheOldest = function(people) {
    for (person of people) {
        if (!person.yearOfDeath) {
            person.yearOfDeath = new Date().getFullYear();
    }
}
    let oldAge = 0;
    return people.reduce((oldest, person) => {
        let ageCheck = person.yearOfDeath - person.yearOfBirth;
        if ((ageCheck) > oldAge) {
            oldAge = ageCheck;
            oldest = person;
            return oldest;
        } else {
            return oldest;
        }
    }, 0)
};

// Do not edit below this line
module.exports = findTheOldest;
