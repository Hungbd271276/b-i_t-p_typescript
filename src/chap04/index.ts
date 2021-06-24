class Chap04 {
     bai1() {
         function tinhtong(a:number , b: number):number {
                  return a + b ;
         }
        const a =  tinhtong(5,6);
        console.log(' Tong hai so la ' + a);
     }
     bai02() {
         const tinhtong2 = (a:number,b:number):number => {
                return a + b;
         }
         console.log(' Tong 2 so moi la ' + tinhtong2(5,9));
     }
     bai03() {
         let hobbies = ['Sports', 'Cooking'];
         let activehobbies = ['Hiking'];
          hobbies = [...hobbies, ...activehobbies];
          console.log(hobbies);
     }
     bai2() {
         // 1. Function & void
         let sum = (x:number=5, y?:number) => {
             return x + <number>y;
         }
         let speech = (output: any):void => {
             console.log(" Result "+ output);
         }
         speech(sum(5,12));
         console.log(speech(sum(8,5)));
     }
     baiso02() {
       // 2. Never & void
       let something: void = undefined;
      // let nothing: never = null;
       function throwError(errorMsg: string): never {
           throw new Error(errorMsg);
       }
     }
     baiso03() {
         // 3. Function & callback
         function AddandHand(x: number , y: number, cb: (num: number) => void ){
             const result = x + y;
            cb(result);
         }
         AddandHand(10, 20, (result) => {
             console.log(result);
         })
     } 
}
export default Chap04;