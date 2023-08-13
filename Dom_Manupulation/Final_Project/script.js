// function deleteItem(item) {
//     // Get the value (text content) of the <li> element
//     const itemId = item.textContent.trim();

//     // Remove the <li> element
//     item.remove();
// }

// function deleteItem(button) {
//     // Get the previous sibling of the button (the <li> element)
//     const listItem = button.previousElementSibling;

//     // Remove the <li> element
//     if (listItem) {
//         listItem.remove();
//     }
// }
// function deleteItem(liElement) {
//     // Remove the <li> element (and its children)
//     if (liElement) {
//         liElement.remove();
//     }
// }


//--------------Btn Event Listener
// let btn=document.getElementById("button");
// btn.addEventListener('click',function(){
//     console.log("clicked")
// })
// let btn=document.getElementById("button");
// // btn.addEventListener('click',actions);
// let box=document.getElementById('box');
// // box.addEventListener('mouseenter',runMyFunc)
// box.addEventListener('mouseleave',runMyFunc)
// box.addEventListener('mouseover',runMyFunc)
// box.addEventListener('mouseout',runMyFunc)


// function actions(e) {
//     console.log(e.target);
    

// }
// function runMyFunc(e){
//     console.log('Event Type is:-'+e.type);
    
//     document.getElementById('outputDiv').innerHTML=',\<h2>'+e.target.value+'</h2>'
    
// }


//KEYDOWN
// let itemInput=document.querySelector('input[type="text"]');
// itemInput.onkeydown=(e)=>{
//      //e.preventDefault()
//     // console.log(e.target.value);
//    let val= document.getElementById("outputDiv").innerText=e.target.value;
//    console.log(val);
// }

var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');
console.log(form);
console.log(itemList)
console.log(filter);
console.log(document.getElementsByClassName('list-group'))

// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);
// Filter event
filter.addEventListener('keyup', filterItems);

// Add item
function addItem(e){
  e.preventDefault();

  // Get input value
  var newItem = document.getElementById('item').value;

  // Create new li element
  var li = document.createElement('li');
  // Add class
  li.className = 'list-group-item';
  // Add text node with input value
  li.appendChild(document.createTextNode(newItem));

  // Create del button element
  var deleteBtn = document.createElement('button');

  // Add classes to del button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

  // Append text node
  deleteBtn.appendChild(document.createTextNode('X'));

  // Append button to li
  li.appendChild(deleteBtn);

  // Append li to list
  itemList.appendChild(li);
}

// Remove item
function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

// Filter Items
function filterItems(e){
  // convert text to lowercase
  var text = e.target.value.toLowerCase();
  // Get lis
  var items = itemList.getElementsByTagName('li');
  // Convert to an array
  Array.from(items).forEach(function(item){
    var itemName = item.firstChild.textContent;
    if(itemName.toLowerCase().indexOf(text) != -1){
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}