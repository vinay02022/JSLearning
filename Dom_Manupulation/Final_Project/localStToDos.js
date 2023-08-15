// JavaScript (localStToDos.js)
let nameInput = document.getElementById("name");
let emailInput = document.getElementById("myEmail");
let phoneInput = document.getElementById("myPhone");
let submitInput = document.getElementById("submit");
let ul = document.getElementById("myUl");

submitInput.addEventListener("click", handleEvent);

// Initialize tasks array with existing tasks from local storage
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function handleEvent(e) {
  e.preventDefault();
  let name = nameInput.value;
  let email = emailInput.value;
  let phone = phoneInput.value;
  
  // Create a task object
  let task = { name, email, phone };
  tasks.push(task);

  // Update local storage
  localStorage.setItem("tasks", JSON.stringify(tasks));

  // Clear input fields
  nameInput.value = "";
  emailInput.value = "";
  phoneInput.value = "";

  // Clear the ul element before repopulating it
  ul.innerHTML = "";

  // Repopulate the ul with the updated tasks array
  tasks.forEach((task, index) => {
    let li = document.createElement("li");
    li.innerHTML = `${task.name} ${task.email} ${task.phone} <button class="delete-btn" data-index="${index}">Delete</button>`;
    ul.appendChild(li);
  });
}

// Event delegation for delete button
ul.addEventListener("click", function(e) {
  if (e.target.classList.contains("delete-btn")) {
    let index = parseInt(e.target.getAttribute("data-index"));
    tasks.splice(index, 1); // Remove task from array
    localStorage.setItem("tasks", JSON.stringify(tasks)); // Update local storage

    // Clear the ul element before repopulating it
    ul.innerHTML = "";

    // Repopulate the ul with the updated tasks array
    tasks.forEach((task, index) => {
      let li = document.createElement("li");
      li.innerHTML = `${task.name} ${task.email} ${task.phone} <button class="delete-btn" data-index="${index}">Delete</button>`;
      ul.appendChild(li);
    });
  }
});
