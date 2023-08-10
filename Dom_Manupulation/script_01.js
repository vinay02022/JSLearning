
// const itemsList = document.getElementById("items");
// let  itemsList=document.getElementsByClassName("list-group");

// const newItem = document.createElement("li");
// newItem.className = "list-group-item"

// newItem.textContent = "item 5";
// itemsList.appendChild(newItem);
// var nthChild=document.querySelector('items');

// nthChild.style.backgroundColor='yellow';
// let listElm=document.getElementsByClassName("list-group")

// listElm[1].computedStyleMap.backgroundColor="yellow";
// let ul=document.querySelectorAll(".list-group");
// ul[1].innerHTML=<h3>Hello</h3>;
// var ul = document.querySelectorAll(".list-group-item");
// ul[1].style.backgroundColor='green'
// ul[2].textContent='';

//Traversing The DOM
//PARENT NODE and PAREN ELEMENT
var itemList=document.querySelector('#items');
// console.log(itemList);
// console.log(itemList.parentElement);
// console.log(itemList.parentNode);
// console.log(parentNodes.parentNode.parentNode);

//CHILD NODES
//isme array m child nodes m "text" line break k karan
// console.log(itemList.childNodes);
// console.log(itemList.children);

// for(let i = 0; i < itemList.children.length; i++) {
//     console.log(itemList.children);
    
// }
// itemList.children[1].style.backgroundColor='yellow'

console.log(itemList.firstChild);//first child bhi space count krta h to make sure ki line brea na ho

// itemList.firstElementChild.textContent="Hello 1"

// console.log(itemList.firstElementChild);
// console.log(itemList.lastElementChild);


//NEXT SIBLING AND PREVIOUS SIBLING
// console.log(itemList.nextSibling);
// //Next Element Sibling
// console.log(itemList.nextElementSibling);

//Previous Sibling
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color='green'

//createElement
//create a Div
const newDiv=document.createElement('div') ;
 //Add Class
newDiv.className="newClass"

 //Add ID

 newDiv.id="newId"


//ADD attribute
newDiv.setAttribute('title',"ValueAddKro")

//create a text Node
let newDivText=document.createTextNode("Koi BHi Value Jo Bich m hoga")
//append the Text node in div
newDivText.appendChild(newDivText);
console.log(newDivText);

var container=document.querySelector('header .container')
var h1=document.querySelector('header h1')

//Append Child
itemList.appendChild(newDiv)
//Insert Before
itemList.insertBefore(newDiv,itemList.childNodes[2])
