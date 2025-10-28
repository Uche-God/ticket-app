const form = document.getElementById("login-form");

// Example test user
const testUser = { username: "admin", password: "12345" };

form.addEventListener("submit", e => {
  e.preventDefault();
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value;

  if (username === testUser.username && password === testUser.password) {
    // Save session token in localStorage
    localStorage.setItem("ticketapp_session", "loggedin");
    alert("Login successful!");
    window.location.href = "./dashboard.html";
  } else {
    alert("Invalid username or password");
  }
});
if (username !== testUser.username || password !== testUser.password) {
  const errorMsg = document.createElement("p");
  errorMsg.textContent = "Invalid username or password";
  errorMsg.style.color = "red";
  form.appendChild(errorMsg);
  setTimeout(() => errorMsg.remove(), 3000); // remove after 3 seconds
  return;
}
const form = document.getElementById("login-form");
const testUser = { username: "admin", password: "12345" };

form.addEventListener("submit", e => {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value;

  // Remove previous error
  const oldError = document.querySelector(".error-msg");
  if (oldError) oldError.remove();

  if (username === testUser.username && password === testUser.password) {
    localStorage.setItem("ticketapp_session", "loggedin");
    window.location.href = "./dashboard.html";
  } else {
    const errorMsg = document.createElement("p");
    errorMsg.textContent = "Invalid username or password";
    errorMsg.className = "error-msg";
    errorMsg.style.color = "red";
    form.appendChild(errorMsg);
    setTimeout(() => errorMsg.remove(), 3000);
  }
});
