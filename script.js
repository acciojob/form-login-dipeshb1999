// Handle form submission
function getFormValue(event) {
    event.preventDefault(); // Prevent form submission

    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;

    // Display the first and last name using alert()
    alert("First Name: " + firstName + "\nLast Name: " + lastName);
}

// Add event listener to the form submission
var form = document.getElementById("loginForm");
form.addEventListener("submit", getFormValue);
