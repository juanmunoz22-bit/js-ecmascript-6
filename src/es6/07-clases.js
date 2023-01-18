// Declarando una clase
// class User {};

// Instanciando una clase
// const user = new User();

class user {
    // metodos
    greeting() {
        return 'hello';
    };
};

const gndx = new user();
console.log(gndx.greeting());

const bebeloper = new user();
console.log(bebeloper.greeting());

// constructor

class user {
    // constructor
    constructor() {
        console.log('Nuevo usuario');
    }
    greeting() {
        return 'hello';
    }
}

const david = new user();

// this 
class user {
    constructor(name) {
        this.name = name
    }

    // metodos
    speak() {
        return 'Hello'
    }
    greeting() {
        return `${this.speak()} ${this.name}`
    }
}

const ana = new user('Ana');
console.log(ana.greeting());
