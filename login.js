$(document).ready(function () {
  // Check if already authenticated (before login attempt)
  const isAuthenticated = sessionStorage.getItem("authenticated");

  // Debugging log to check if the user is authenticated
  console.log("Authenticated status: ", isAuthenticated);

  // If the user is authenticated, redirect to the main page
  if (isAuthenticated === "true") {
    console.log("User is authenticated, redirecting...");
    window.location.href = "index.html"; // Redirect to the main page if authenticated
  }

  // Handle form submission
  $("#loginForm").on("submit", function (e) {
    e.preventDefault();
    const password = $("#password").val();

    // Check the password
    if (password === "captainkg") {
      sessionStorage.setItem("authenticated", "true");  // Set the authentication flag
      console.log("Authentication successful! Redirecting...");
      window.location.href = "index.html";  // Redirect to main page after successful login
    } else {
      alert("Incorrect password. Please try again.");
    }
  });
});
