 /* interface Named {
     readonly name:  string;
 }
 interface Greetable extends Named {
     greet(phrase: string): void;
 }

 class Person implements Greetable {
    name: string;
    age: 30;

    constructor(n: string) {
         this.name = n;
     }
     greet(phrase: string) {
        console.log(phrase + '' + this.name);
     }
 }
 let user1: Greetable;
 user1 = new Person('Max');
 user1.greet('Hi there - I am');
 console.log(user1);  */

  abstract class Department {
    static fiscalYear = 2020;
    protected employees: string[] = [];
    constructor(protected readonly id: string, public name: string) { }
    static createEmployee(name: string) {
        return { name: name };
    }
    abstract describe(this: Department): void;
}
class ITDepartment extends Department {
    admins: string[];
    constructor(id: string, admins: string[]) {
        super(id, 'IT');
        this.admins = admins;

    }
    describe() {
        console.log('IT Department - ID: ' + this.id);
    }
}  


export default ITDepartment;






