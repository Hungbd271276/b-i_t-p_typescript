abstract class Derpartment {
    static fiscalYear = 2021;
    protected employees: string[] = [];
    constructor(protected readonly id: string, public name: string) {}

    static createEmployees(name: string) {
        return { name: name };
    }
    abstract  describe(this: Derpartment): void;
    addEmployee(employee: string) {
        this.employees.push(employee)
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

class ITDerpartment extends Derpartment {
   admins: string[];
   constructor(id: string, admins: string[]){
       super(id, 'IT');
       this.admins == admins;
   }
   describe() {
       console.log(' IT Department - ID ' + this.id);

   }
}

const employee1 = Derpartment.createEmployees('Max');
console.log(employee1, Derpartment.fiscalYear);

export default ITDerpartment;