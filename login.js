const loginForm = document.querySelector("#loginForm");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const userID = document.querySelector("#userEmail").value;
  const loginPassword = document.querySelector("#login_password").value;
});
