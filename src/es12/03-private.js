class user {
    constructor(name) {
        this.name = name
    }

    // metodos
    #speak() {
        return 'Hello'
    }
    greeting() {
        return `${this.#speak()} ${this.name}`
    }

    // getter
    get uName() {
        return this.name;
    }

    // setter
    set uName(value) {
        this.name = value;
    } 
}

const ana = new user('Ana');
console.log(ana.greeting());
