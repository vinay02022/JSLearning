// let sum=function f1(a) {
//     return function f2(b){
//     if(b){
//             return sum(a+b);
//         }
//         else{
//             return a;
//         }
//     }
// }
// let final=sum(3)(4)(5)(1)(2)()
// console.log(final);
//  // 15
//  //--------------------------OR-----------------
//  let sum=function (a) {
//     return function (b){
//         return b?sum(a+b):a;
//     }
//  }
// //-------------------------OR-----------
// //  let sum=a=>b=> b ? sum(a+b) : a;

//   console.log(sum(1)(2)(3)(4)(5)());//15

class Student{
    constructor(name,age,marks){
        this.name=name;
        this.age=age;
        this.marks=marks;
    }
    setPlacementAge(minPlacementAge) {
        return (minMarks) => {
             if(this.marks >= minMarks && this.age >= minPlacementAge){
                 return true;
             }else{
                 return false;
                 
             }
        };
    }
  }
  
  
  
  //Do not touching anything below this line
  
 
const Riya=new Student('name', 24, 75);
console.log(Riya.setPlacementAge(18)(40))

  
