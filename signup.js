const signUpForm = document.querySelector("#signUpForm");

signUpForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const username = document.querySelector("#name").value;
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;

  const user = {
    ID: username,
    mail: email,
    psw: password,
  };
  console.log("user added");
});
