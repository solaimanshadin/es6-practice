class Parent {
    constructor() {
        this.fatherName = "Solaiman Shadin";
        this.motherName = "Komuna";
    }
}
class Child extends Parent {
    constructor(name) {
        super();
        this.name = name;
    }

    getFullName() {
        return this.name + " " + this.fatherName;
    }
}
const child1 = new Child("Singdha");
const child2 = new Child("Tonmoy");
console.log(child1, child2, child2.getFullName());