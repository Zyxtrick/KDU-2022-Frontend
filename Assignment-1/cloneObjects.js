// import { cloneDeep } from 'lodash.cloneDeep';

const person = {
    name : {
        firstName : "John",
        lastName : "Green"
    },
    age : 43,
    work : "author", 
    address : {
        city : 'Bangalore',
        state : 'Karnataka',
        pin : 560059,
    }
};

const deepClone = (obj) => {
    if(typeof obj !== 'object' || obj == null) return obj;

    const newObj = Array.isArray(obj) ? [] : {}

    for(let key in obj) {
        const value = obj[key];
        newObj[key] = deepClone(value);
    }

    return newObj;
}


// const clonePerson = Object.assign({}, person);
// const clonePerson = {...person}
// const clonePerson = JSON.parse(JSON.stringify(person))
// const clonePerson = cloneDeep(person)
const clonePerson = deepClone(person)


clonePerson.name.firstName = 'Jake'
clonePerson.address.pin = 560097

console.log(person)
console.log(clonePerson)