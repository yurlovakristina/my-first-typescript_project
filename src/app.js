var name1 = "Dasha";  // User's name
var age = 25;        // User's age
var isActive = true; // Activity status (true - active, false - inactive)

// Function to display information
function showUserInfo() {
    console.log("User's name: " + name1);  // Display name
    console.log("Age: " + age);            // Display age
    console.log("Activity: " + (isActive ? "Active" : "Inactive"));  // Display status
}
// Call the function to display information
showUserInfo();
