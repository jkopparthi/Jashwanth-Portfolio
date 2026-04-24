/********f************
    
    Project 4 script.js
    Name: Jashwanth  Kopparthi
    Date: 19 April 2026

*********************/



document.getElementById('contactForm').addEventListener('submit', function(event) {
    
    //get the input fields and error display
    let nameInput = document.getElementById('userName');
    let phoneInput = document.getElementById('userPhone');
    let emailInput = document.getElementById('userEmail');
    let errorDiv = document.getElementById('error-message');

    //regular Expressions for validation
    let phoneRegex = /^\d{10}$/; 
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 

    //reset error states
    errorDiv.style.display = 'none';
    errorDiv.innerHTML = '';
    nameInput.classList.remove('error-highlight');
    phoneInput.classList.remove('error-highlight');
    emailInput.classList.remove('error-highlight');

    //validate Name 
    if (nameInput.value.trim() === "") {
        event.preventDefault(); 
        showError(nameInput, "Please enter your name.");
        return;
    }

    //validate Phone (must be 10 digits)
    if (!phoneRegex.test(phoneInput.value)) {
        event.preventDefault();
        showError(phoneInput, "Please enter a valid 10-digit phone number (e.g., 2045551234).");
        return;
    }

    //validate Email 
    if (!emailRegex.test(emailInput.value)) {
        event.preventDefault();
        showError(emailInput, "Please enter a valid email address.");
        return;
    }
});

// showError function to display errors, set focus, and highlight 
function showError(inputElement, message) {
    let errorDiv = document.getElementById('error-message');
    errorDiv.innerHTML = message;
    // Unhide error message 
    errorDiv.style.display = 'block'; 
    // Highlight text/background 
    inputElement.classList.add('error-highlight'); 
    inputElement.focus(); 
}