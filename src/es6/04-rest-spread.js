// arrays destructuring
let fruits = ['Apple', 'Banana'];
let [a, b] = fruits;
console.log(a, fruits[1]);

// objects destructuring
let user = {username: 'Oscar', age: 34};
let {username, age} = user;
console.log(username, age);

// spread operator
let person = {name: 'Oscar', age: 34};
let country = {country: 'MX', city: 'CDMX'};

let data = {...person, ...country};
console.log(data);

// rest
function sum(num, ...values) {
    console.log(values);
    console.log(num + values[0]);
    return num + values[0];
}

sum(1, 1, 2, 3, 4, 5, 6)
