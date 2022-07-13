/** 접근자 프로퍼티 (Accessor Property)
 * 
 */

class Student {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    fullName() {
        return `${this.lastName} ${this.firstName}`;
    }
    get fullName() {
        return `${this.lastName} ${this.firstName}`;
    }
    set fullName(value) {
        console.log('set', value);
    }
}
const student = new Student('근원', '황');
console.log(student);
console.log(student.fullName);
student.firstName = '누누';
console.log(student);
console.log(student.fullName);
student.fullName = '누누누?';