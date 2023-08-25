/*Promblem Statement
So we need to design a deletepost function which returns a promise and deletes in 1 second (processing time - mimic it with setimeout).
Everytime you call it, it should delete the last element of the array

Deliverable 2 - The sequence
User did not like his 3rd post and he wants to delete it and only after deleting he wants to create a 4th post .
So it would be like
create3rdost -> then -> deletepost -> then create4thpost -> then -> printposts
Expected Output
﻿POST1
POST2
POST4
 */
const posts = [{title: 'POST1'},{title: 'POST2'}];

//Do not touch this function below
function printPost() {
    posts.forEach((post) => {
        console.log(post.title)
    })
}

//Do not touch this function below
function create3rdPost() {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            posts.push({title: 'POST3'});
            resolve()
        }, 3000)
    }) 
}
//Do not touch this function below
function create4thPost() {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            posts.push({title: 'POST4'});
            resolve();
        }, 2000)
    }) 
}

//Complete this function such that it returns a Promise
//and removes the last element of the posts array with a 1 second delay(setTimeout)
//to remove you can use array.pop method
function deletePost(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            posts.pop();
            resolve();
        },1000)
        
    })
    
    //complete this function
}

//make the following sequence work properly
create3rdPost()
.then(()=>deletePost())
.then(()=>create4thPost())
.then(()=>printPost())

