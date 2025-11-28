// Step 1: Function to display greeting message
function displayMessage(name) {
  console.log("Hello, " + name + "!");
}

// Step 2: Function that simulates fetching username after 1 second
function getUserInput(callback) {
  setTimeout(() => {
    const username = "Alice"; // Simulated user data
    callback(username);       // Call the callback with the username
  }, 1000);
}

// Call getUserInput and pass displayMessage as a callback
getUserInput(displayMessage);
