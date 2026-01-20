document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Clear previous messages
  clearMessages();

  let isValid = true;

  const fields = [
    { id: "fullname", message: "Full name is required" },
    { id: "rollno", message: "Roll number is required" },
    { id: "email", message: "Email is required" },
    { id: "password", message: "Password is required" },
    { id: "confirmpassword", message: "Confirm password is required" },
  ];

  fields.forEach((field) => {
    const input = document.getElementById(field.id);
    if (input.value.trim() === "") {
      showError(input, field.message);
      isValid = false;
    }
  });

  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmpassword").value;

  if (password && confirmPassword && password !== confirmPassword) {
    showError(
      document.getElementById("confirmpassword"),
      "Passwords do not match",
    );
    isValid = false;
  }

  if (isValid) {
    showSuccess("Registration successful ✔");
    document.getElementById("loginForm").reset();
  }
});

/* ---------- Helper Functions ---------- */

function showError(input, message) {
  const error = document.createElement("div");
  error.className = "error-message";
  error.innerText = message;
  input.parentElement.appendChild(error);
}

function showSuccess(message) {
  const success = document.createElement("div");
  success.className = "success-message";
  success.innerText = message;
  document.querySelector(".login-container").appendChild(success);
}

function clearMessages() {
  document
    .querySelectorAll(".error-message, .success-message")
    .forEach((el) => el.remove());
}
