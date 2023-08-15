// JavaScript (localStToDos.js)
let nameInput = document.getElementById("name");
let emailInput = document.getElementById("myEmail");
let phoneInput = document.getElementById("myPhone");
let submitInput = document.getElementById("submit");
let ul = document.getElementById("myUl");

submitInput.addEventListener("click", handleEvent);

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function handleEvent(e) {
  e.preventDefault();
  let name = nameInput.value;
  let email = emailInput.value;
  let phone = phoneInput.value;
  
  let task = { name, email, phone };
  tasks.push(task);

  localStorage.setItem("tasks", JSON.stringify(tasks));

  nameInput.value = "";
  emailInput.value = "";
  phoneInput.value = "";

  ul.innerHTML = "";

  tasks.forEach((task, index) => {
    let li = document.createElement("li");
    li.innerHTML = `
      ${task.name} ${task.email} ${task.phone}
      <button class="edit-btn" data-index="${index}">Edit</button>
      <button class="delete-btn" data-index="${index}">Delete</button>`;
    ul.appendChild(li);
  });
}

ul.addEventListener("click", function (e) {
  if (e.target.classList.contains("edit-btn")) {
    let index = parseInt(e.target.getAttribute("data-index"));
    let task = tasks[index];

    nameInput.value = task.name;
    emailInput.value = task.email;
    phoneInput.value = task.phone;

    tasks.splice(index, 1);
    localStorage.setItem("tasks", JSON.stringify(tasks));

    ul.innerHTML = "";

    tasks.forEach((task, index) => {
      let li = document.createElement("li");
      li.innerHTML = `
        ${task.name} ${task.email} ${task.phone}
        <button class="edit-btn" data-index="${index}">Edit</button>
        <button class="delete-btn" data-index="${index}">Delete</button>`;
      ul.appendChild(li);
    });
  }
  // Add the code for the delete button event here (as shown in previous responses)
});

// Populate the initial list on page load
tasks.forEach((task, index) => {
  let li = document.createElement("li");
  li.innerHTML = `
    ${task.name} ${task.email} ${task.phone}
    <button class="edit-btn" data-index="${index}">Edit</button>
    <button class="delete-btn" data-index="${index}">Delete</button>`;
  ul.appendChild(li);
});


ul.addEventListener("click", function (e) {
  if (e.target.classList.contains("edit-btn")) {
    let index = parseInt(e.target.getAttribute("data-index"));
    let task = tasks[index];

    nameInput.value = task.name;
    emailInput.value = task.email;
    phoneInput.value = task.phone;

    tasks.splice(index, 1);
    localStorage.setItem("tasks", JSON.stringify(tasks));

    ul.innerHTML = "";

    tasks.forEach((task, index) => {
      let li = document.createElement("li");
      li.innerHTML = `
        ${task.name} ${task.email} ${task.phone}
        <button class="edit-btn" data-index="${index}">Edit</button>
        <button class="delete-btn" data-index="${index}">Delete</button>`;
      ul.appendChild(li);
    });
  }
  // Add the code for the delete button event here (as shown in previous responses)
});

// Populate the initial list on page load

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
