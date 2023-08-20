console.log("1111111111111111111");
function handleSubmit(e) {
    e.preventDefault(); // Prevent the default form submission
    console.log("22222222222222222222");

    var expense = document.getElementById("expense").value;
    var description = document.getElementById("description").value;
    var category = document.getElementById("category").value;

     var resultDiv = document.getElementById("results");

     console.log(resultDiv);

    // Create a new result item
    var resultItem = document.createElement("h3");
    resultItem.textContent="Expense"+expense+ ", Expanse Desc"+description+",Category :"+category;

    // Create <h3> element
    // var newH3 = document.createElement("h3");
    // newH3.textContent = "Expense: " + expense + " | Description: " + description + " | Category: " + category;

    // Create "Edit" and "Delete" buttons
    var editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.onclick = function() {
        // Fill the form fields with the data
        document.getElementById("expense").value = expense;
        document.getElementById("description").value = description;
        document.getElementById("category").value = category;

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
    resultItem.appendChild(editButton);
    resultItem.appendChild(deleteButton);
    resultItem.appendChild(resultItem);

    // Append the result item to the results div
    resultDiv.appendChild(resultItem);

    // Clear the form inputs
    // document.getElementById("expense").value = "";
    // document.getElementById("description").value = "";
    // document.getElementById("category").value = "";
}