const signUpForm = document.querySelector("#signUpForm");

signUpForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const username = document.querySelector("#name").value;
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;

  localStorage.setItem("name", username);
  localStorage.setItem("email", email);
  localStorage.setItem("password", password);
});
