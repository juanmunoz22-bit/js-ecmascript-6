const user = {
    username: 'juanmunoz',
    age: 24,
    country: 'CO'
};

const { username, ...values} = user;
console.log(username);
console.log(values);