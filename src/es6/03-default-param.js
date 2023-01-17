// ES5-
function newUser(name, age, country) {
    var name = name || 'Oscar';
    var age = age || 32;
    var country = country || 'MX';
    console.log(name, age, country);
}

newUser();
newUser('Ricardo', '23', 'CO');


// ES6+
function newAdmin(name = 'Oscar', age = 32, country = 'CL') {
    console.log(name, age, country);
}

newAdmin();
newAdmin('Ricardo', '23', 'CO');
