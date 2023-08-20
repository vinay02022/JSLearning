function handleSubmit(event) {
    event.preventDefault(); // Prevent the default form submission

    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;

    var resultDiv = document.getElementById("results");
    
    // Create a new result item
    var resultItem = document.createElement("div");
    resultItem.classList.add("result-item");

    // Create <h3> element
    var newH3 = document.createElement("h3");
    newH3.textContent = "Name: " + name + ", Age: " + age;

    // Create "Edit" and "Delete" buttons
    var editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.onclick = function() {
        // Fill the input fields with the data
        document.getElementById("name").value = name;
        document.getElementById("age").value = age;

        // Remove the result item
        resultDiv.removeChild(resultItem);
    };

    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.onclick = function() {
        // Remove the result item
        resultDiv.removeChild(resultItem);
    };

    // Append elements to the result item
    newH3.appendChild(editButton);
    newH3.appendChild(deleteButton);
    resultItem.appendChild(newH3);

    // Append the result item to the results div
    resultDiv.appendChild(resultItem);

    // Save data to local storage
    var storedData = localStorage.getItem("formResults");
    var newData = { name: name, age: age };
    if (storedData) {
        var parsedData = JSON.parse(storedData);
        parsedData.push(newData);
        localStorage.setItem("formResults", JSON.stringify(parsedData));
    } else {
        localStorage.setItem("formResults", JSON.stringify([newData]));
    }

    // Clear the form inputs
    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
}
