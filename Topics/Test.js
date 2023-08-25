
// let obj={
//     a:2,
//     x:()=>{
//         console.log(this.a);
//     }

// }
// obj.x();
// let b=6;

// {
//     let a=4;
//     let x=function(){
//         let a=3
//         console.log(this.a);
//         console.log(b);

//     }
//     x()
// }

const promise1=Promise.resolve('Hello World');
const promise2=10;
const promise3=new Promise((resolve,reject)=>{
    setTimeout(resolve,2000,"AnyMassege")
});
Promise.all([promise1,promise2,promise3]).then((values)=>
    console.log(values))