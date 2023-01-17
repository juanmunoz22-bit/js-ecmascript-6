// enhanced object literals

// Before ES6
function newUser(user, age, country) {
    return {
        user: user,
        age: age,
        country: country
    }
}

// ES6+
function newAdmin(user, age, country, uId) {
    return {
        user,
        age,
        country,
        id: uId
    }
}

console.log(newUser("Oscar", 32, "MX"))
console.log(newAdmin("Ricardo", 23, "CO", 1))