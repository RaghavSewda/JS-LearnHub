
// getter and setter
// try catch -> basic of error handling in javascript

const person = {
    firstName: 'Raghav',
    lastName: 'Sewda',
    get fullName() {
        return `${person.firstName} ${person.lastName}`;
    },
    set fullName(value) {
        if (typeof value !== 'string')
            throw new Error('Value is not a string');
        const parts = value.split(' ');
        if (parts.length !== 2)
            throw new Error('Enter a first and last name.')
        this.firstName = parts[0];
        this.lastName = parts[1];
    } 
};

// person.fullName = 'R sewda';
try {
    person.fullName = '';
}
catch(e) {
    alert(e);
}
//getters => access properties
//setters => change(mutate) them
console.log(person);


