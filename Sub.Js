document.addEventListener('DOMContentLoaded', function() {
    const nameBox = document.getElementById('nameBox');
    const emailBox = document.getElementById('emailBox');
    const placeholderLength = nameBox.placeholder.length; // Get the length of the placeholder
    const emailPlaceholderLength = emailBox.placeholder.length;

    // Set the size of the input field to be slightly longer than the placeholder
    nameBox.style.width = `${placeholderLength * 12}px`;
    emailBox.style.width = `${emailPlaceholderLength * 12}px`;

    // Get the submit button element
    var submitButton = document.querySelector(".button-container button");

    // Add a click event listener to the submit button
    submitButton.addEventListener("click", function(event) {
        // Prevent the default form submission behavior
        event.preventDefault();
        
        // Display the message
        showMessage();
    });
});

// Function to display the message
function showMessage() {
    alert("Thank You For Your Request!");
}

