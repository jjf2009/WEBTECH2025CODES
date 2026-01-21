document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();
  clearMessages();

  const data = {
    fullname: document.getElementById("fullname").value.trim(),
    rollno: document.getElementById("rollno").value.trim(),
    email: document.getElementById("email").value.trim(),
    password: document.getElementById("password").value,
    confirmpassword: document.getElementById("confirmpassword").value,
  };

  const xhr = new XMLHttpRequest();

  xhr.open("POST", "register.php", true);

  xhr.setRequestHeader("Content-Type", "application/json");

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      // HTTP status handling
      if (xhr.status === 200) {
        const response = JSON.parse(xhr.responseText);

        if (response.status === "success") {
          showSuccess(response.message);
          document.getElementById("loginForm").reset();
        } else {
          showError(response.message);
        }
      } else if (xhr.status >= 400 && xhr.status < 500) {
        showError("Client error. Please check input.");
      } else if (xhr.status >= 500) {
        showError("Server error. Try again later.");
      } else {
        showError("Unexpected error occurred.");
      }
    }
  };

  xhr.onerror = function () {
    showError("Network failure. Request not completed.");
  };

  xhr.send(JSON.stringify(data));
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
