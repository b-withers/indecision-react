class Person {
    constructor(name = 'anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }
    getGreeting() {
        //return 'Hi I am ' + this.name + '!';
        return `Hi. I am ${this.name}!`;
    }
    getDescription(){
        return `${this.name} is ${this.age} years old.`;
    }
}

const me = new Person('Brady Withers', 39);
console.log(me.getDescription());

const other = new Person();
console.log(other.getDescription());