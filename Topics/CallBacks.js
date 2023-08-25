//in this we wil get to know why we need callbacks with examples
let post=[
    { title:'post_1',work: 'Software Engineer'},
    {title:'Post_2', work:'King'}
]
function getPost(){
    setTimeout(()=>{
        let output='';
        post.forEach((elem,idx)=>{
            output+=`<li>${elem.title}</li>`
             
        });
        document.body.innerHTML=output

    },1000)//time phle 2000 tha abhi 1000 kiya to understand need
    //yhi time agr 1sec ka hota aur niche 2 sec lga hota to y wala
    //funtion phle chalke paint kr deta/print kr deta dobara jb
    //niche wala chalta ho output m aa to jata lekin aage paint krne wala koi hai hi nhi
    //Yhi Aviskar HUa `CALLBACKS` ka ki bhai sahab use bhi print krna h
    // BUT KAISE
    //----to abhi time cange krte hai
}
function createPost(postData,cb){//yha ab cb pass kraa ,
    setTimeout(()=>{
        post.push(postData)
        cb()
    }),2000
}//time phle 1000 tha abhi 2000 kiya to understand need
createPost({title:'Prince_3',work:'CEO'},getPost())
// getPost(); ab ise upr callback m daal denge,aur  hr bar create (^^|^^) hoga post jaise hi y chacha call ho jayeinge