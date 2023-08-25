// const promise1=Promise.resolve('Hello World');
// const promise2=10;
// const promise3=new Promise((resolve,reject)=>{
//     setTimeout(resolve,2000,"AnyMassege")
// });
// Promise.all([promise1,promise2,promise3]).then((values)=>
//     console.log(values))

////Activity
const user = {
    lastActivityTime: null,
    posts: []
};

function updateLastUserActivityTime() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            user.lastActivityTime = new Date();
            resolve();
        }, 1000);
    });
}

function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            user.posts.push(post);
            resolve();
        }, 1000);
    });
}

function deleteLastPost() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (user.posts.length > 0) {
                const deletedPost = user.posts.pop();
                resolve(deletedPost);
            } else {
                reject("ERROR: No posts to delete");
            }
        }, 1000);
    });
}

async function main() {
    await createPost("First Post");
    await updateLastUserActivityTime();
    console.log("Posts:", user.posts);
    console.log("Last Activity Time:", user.lastActivityTime);

    await createPost("Second Post");
    await updateLastUserActivityTime();
    console.log("Posts:", user.posts);
    console.log("Last Activity Time:", user.lastActivityTime);

    // Delete the last post
    try {
        const deletedPost = await deleteLastPost();
        console.log("Deleted Post:", deletedPost);
    } catch (error) {
        console.log(error);
    }

    console.log("Updated Posts:", user.posts);
}

main();

///EXAMPLE
/**ONE WAY */
// try {
//     await p1
//     await p2
//     p3 

// }catch{
//     error //err hoga to catch kr lega agr ur ka ek bhi promise fail hua to
// }

/**2nd Way TO solve the same  chuunki promise 1 and 2 are not dependent each other so wahy wait n all*/
//Tabhi Promise.all laya gya jo dono promise ko pparallaly run kra dega
promise_1//creating a Post
promise_2//updating ur last Activity time
promise_3//Shhowing all the users ur LastAtive
Promise.all([promise_1,promise_2]).then(()=>{
    promise3
})
.catch(error){
    console.log(error);
}

