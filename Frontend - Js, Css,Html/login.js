/*
===========================================================
SecureSense Login Logic
-----------------------------------------------------------
This file handles user authentication for the system.

Main Responsibilities:

1. Capture username and password entered by user
2. Validate credentials using predefined values
3. Redirect user to dashboard on successful login
4. Display error message on failed login attempt

This file connects the login interface to system access control.
===========================================================
*/

// function called when login button is clicked
function login(){

// Get username entered by user 
// document.getElementById finds element using its id
// .value gets the text typed in input box
let user = document.getElementById("username").value

// Get password entered by user
let pass = document.getElementById("password").value

// Check if username and password are correct 
// === means exact match comparison
if(user === "swastinehal" && pass === "securesense")
{
    // Redirect to dashboard page 
    // window.location.href loads another page
window.location.href = "dashboard.html"
}
else
{
    // Show error if login fails
document.getElementById("error").innerText = "Invalid login"
}

}
