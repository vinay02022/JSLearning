/**
 * This is the sequence in which it should be executed. Check the last 5 lines
After breakup the boy logs ino facebook.
He calls create2ndpost to create post2
After creating2ndpost , the user wants to deletes the 2nd post and print it.
After creating3rdpost , the user wants to deletes the 3rd post and print it.
Now he goes mad and he deletes all the posts and prints each one of them, till nothing remains.
We want to print all the post which we have deleted in the  sequence in which they got deleted.


OUTPUT-->
POST2
POST3
POST1
ERROR: ARRAY IS EMPTY
--
 */

const posts = [{title: 'POST1'}];
//Do not touch this function
function create2ndPost() {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            posts.push({title: 'POST2'});
            resolve()
        }, 3000)
    }) 
}
//Do not touch this function
function create3rPost() {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            posts.push({title: 'POST3'});
            resolve();  // Why Here We Did Not Pass any Argument in resolve() ??????????
        }, 2000)
    }) 
}

//Do not touch this function
function deletePost(){
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            if(posts.length > 0){
                const poppedElement  = posts.pop();
                resolve(poppedElement);             //Why poppedElement Passed Inside ???????????
            } else {
                reject("ERROR: ARRAY IS EMPTY")
            }
        }, 1000)
    })
}

//Modify the lines below and use .then and .catch smartly to get the correct output.
create2ndPost()
    .then(() => deletePost())
    .then((deletedPost) => {
        console.log(deletedPost.title);
        return create3rPost();
    })
    .then(() => deletePost())
    .then((deletedPost) => {
        console.log(deletedPost.title);
        return deletePost();
    })
    .then((deletedPost) => {
        console.log(deletedPost.title);
        return deletePost();
    })
    .then((deletedPost) => {
        console.log(deletedPost.title);
        return deletePost();
    })
    .catch((error) => console.log(error));
