import chap02 from './chap02/index';
import chap03 from './chap03/index';
import Chap04 from './chap04/index';
import chap05 from './chap05/index';
import Person from './chap05/index1';
import Product from './chap07/index';
import ITDerpartment from './chap05/index2';


  let inparments = new ITDerpartment('HUNG' ,['bui hung']);
  inparments.describe();

let user1 = new Person('Max');
 user1.greet(' Hi there - I am ');
 console.log(user1); 

const chap2 = new chap02(); 
const chap3 = new chap03();
 const chap4 = new Chap04();
 const chap5 = new chap05();
  chap2.bai01();
  chap2.bai02();

  chap3.bai1();
  chap3.bai2();
 chap3.bai3();
 chap3.bai4();
 chap3.bai5();
 chap3.bai6();
 chap3.bai8();

  chap4.bai1();
  chap4.bai02();
  chap4.bai03();
  chap4.bai2();
  chap4.baiso02(); 
 
  chap5.bai1();









  // const nokia = new Product<number, string , number>(1, 'nokia', 10);
// const nokia1101 = new Product<number, string , string>(1 , 'nokia' , '20 vnd');
// console.log(nokia);
// console.log(nokia1101);
// console.log(nokia.showlist<string>(["nokia", "10usd"]));
// console.log(nokia.showlist<any>(["Nokia", 10]))

//import ITDepartment from './chap06/index';
// const deparments = new ITDepartment('IT', ['hùng bui']);
// deparments.describe();

import Login from './chap08/index'
const bai1 = new Login();
bai1.bai1();


import baiso5 from './chap08/index5';
const bai5 = new baiso5();
bai5.bai5();





 








