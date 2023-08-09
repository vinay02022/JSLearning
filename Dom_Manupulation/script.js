let myActionBtn=document.querySelector("#btn1");
myActionBtn.addEventListener("click",OnOff);
let count=0;
function OnOff(){
    console.log("clicked")
    if(count==0){
        
        document.querySelector(".dom1").style.backgroundColor="yellow"
        count++
    }else{
        document.querySelector(".dom1").style.backgroundColor="white";
        count=0;
        

    }
    


}