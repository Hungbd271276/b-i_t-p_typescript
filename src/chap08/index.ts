class Login {
   bai1(){
    type Admin = {
           name: string;
           privileges: string[];
       };
    type Employee = {
           color: string;
          // startDate: Date;
       }
     type ElevatedEmployee = Admin & Employee;
     
     function draw(admin: Admin & Employee){
         console.log(`I am ${admin.name}`);
         console.log(`I am is ${admin.privileges}`)
        console.log(`Hi my name is ${admin.color}`);
       
     }
     draw({ name: "blue", privileges: ['bùi hùng'] , color: 'hihi'});

    }
}



export default Login;