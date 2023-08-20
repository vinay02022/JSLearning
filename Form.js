function handleSubmit(e) {
    e.preventDefault(); // Prevent the default form submission

    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;

    var resultDiv = document.getElementById("results");
    
    // Create a new <h3> element
    var newH3 = document.createElement("h3");
    newH3.textContent = "Name: " + name + ", Age: " + age;
    
    

    // Create "Edit" and "Delete" buttons
    var editButton = document.createElement("button");
    editButton.textContent = " Edit ";
    editButton.onclick = function() {
        // Fill the input fields with the data
        document.getElementById("name").value = name;
        document.getElementById("age").value = age;

        // Remove the <h3> element
        resultDiv.removeChild(newH3);
    };

    var deleteButton = document.createElement("button");
     
    deleteButton.textContent = " Delete ";
    deleteButton.onclick = function() {
        // Remove the <h3> element
        resultDiv.removeChild(newH3);
    };

    // Append elements to the results div
    newH3.appendChild(editButton);
    newH3.appendChild(deleteButton);
    resultDiv.appendChild(newH3);
}