// console.log("Hello_1");
// setTimeout(p=()=>{
//     console.log('Hi');
// }, 2000);
// console.log("Hello_2");

// console.log("Hello_3");
//-----------------------------------
// let click=0;
// document.getElementById('btn1').addEventListener("click",incr);
// function incr(){
//     click=click+1;
//     document.getElementById('p').innerText=`${click} baar click hua`
// }
// document.getElementById('btn2').addEventListener("click",decr);
// function decr(){
//     if(click>0){
//         click=click-1;
//     }
//     document.getElementById('p').innerText=`${click} baar click hua`
// }
//--------------------------------------------------
// setTimeout(()=>console.log('timer Exp'),2000)
// function x(y){
//     console.log('inside x');
//     y();

// }
// x(function y(){
//     console.log('inside y')
//     })
//--------------------
// setTimeout(() => console.log('timer1 expired'), 1000)
// setTimeout(() => console.log('timer2 expired'), 0)
// function x(y) {
// console.log('inside x');
// y();
// }
//-----------------------------------
// setTimeout(() => console.log("timer1 expired"), 1000);
// setTimeout(() => console.log("timer2 expired"), 0);
// function x(y) {
//   console.log("inside x");
//   y();
// }
// x(function y() {
//   setTimeout(() => console.log("inside y"), 0);
// });
//-------------------------
// var fun = a => a
// console.log(fun(a))
// var a =10;
// var fun =( a, b) =>{
//     var sum = a + b
//     return sum
// }
// var a =10;
// var b = 20
// console.log(fun(a, b))
var fun = (a) =>{ 
    a
 }

var a =10;

console.log(fun(10))
////////////////////////////////////////            VS-------------DOUBT Y DIFFENT OUTPUT
var fun = a => a

var a =10;

console.log(fun(a))
