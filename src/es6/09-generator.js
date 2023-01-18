function* iterate(array) {
    for (let value of array) {
        yield value
    }
};

const it = iterate(['Oscar', 'David', 'Luis', 'Juan', 'Pedro']);
console.log(it.next().value); // Oscar
console.log(it.next().value); // David
console.log(it.next().value); // Luis
console.log(it.next().value); // Juan
console.log(it.next().value); // Pedro
console.log(it.next().value); // undefined