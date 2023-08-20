//Closures
// function x(){
//     var a=10;
//     function y(){
//         console.log(a); // 10

//     }
//     return y;
// }
//x()
//===============
// function x(){
//     var a=10;
//     function y(){
//         console.log(a); // 10

//     }
//     a=100;
//     return y;
// }
// var z=x();
// console.log(z);
// z();

//=====================================
// function y() {
//   for (let i = 1; i < 6; i++) {
//     setTimeout(() => console.log(i), i * 1000);
//   }
//   console.log("Done Coding");
// }

// y();
// function w() {
//     for (var i = 1; i < 6; i++) {
//       setTimeout(() => console.log(i), i * 1000);
//     }
//     console.log("Done Coding");
//   }
  
//   w();

//----------------------
// function a(){
//     console.log('inside a');
//     }
//     var b = function abc(){
//     console.log('inside b');
//     }
//     a()
//     abc()
//---------------------

    
// function fun1(a){
//     return () => {
//     a = a + 20;
//     console.log(a)
//     }}
    
//     fun1(10)(20)
//---------------------
// function fun1(a){

//     const fun2 = (b) => {
    
//     a = a + b;
    
//     console.log(a)
    
//     }}
    
    
    
//     fun1(10)(30)