class StudentForm {
    constructor(name, email, address) {
        this.name = name;
        this.email = email;
        this.address = email;
    }
}
const student1 = new StudentForm('Solaiman Shadin', 'solaimanshadin@gmail.com', 'Jamalpur, Mymensing');
const student2 = new StudentForm('Md mazlan', 'mazlan@gmail.com', 'tangail, Dhaka');
console.log(student1)
console.log(student2)
console.log(student1.name, student2.name)