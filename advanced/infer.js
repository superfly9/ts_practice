"use strict";
const myCity = (name) => name;
// ex4)
const createPerson = (firstName, lastName) => {
    return {
        firstName, lastName, fullName: `${firstName} ${lastName}`
    };
};
const logPerson = (person) => {
    console.log(person);
};
