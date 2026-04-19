function checkStrength() {
  let password = document.getElementById("password").value;
  let strengthBar = document.getElementById("strengthBar");
  let strengthText = document.getElementById("strengthText");

  let strength = 0;

  if (password.length >= 6) strength++;
  if (password.match(/[A-Z]/)) strength++;
  if (password.match(/[0-9]/)) strength++;
  if (password.match(/[^A-Za-z0-9]/)) strength++;

  if (password.length === 0) {
    strengthBar.style.width = "0%";
    strengthText.innerText = "Strength:";
    return;
  }

  if (strength <= 1) {
    strengthBar.style.width = "33%";
    strengthBar.style.background = "red";
    strengthText.innerText = "Strength: Weak";
  } else if (strength === 2 || strength === 3) {
    strengthBar.style.width = "66%";
    strengthBar.style.background = "orange";
    strengthText.innerText = "Strength: Medium";
  } else {
    strengthBar.style.width = "100%";
    strengthBar.style.background = "#00ffc8";
    strengthText.innerText = "Strength: Strong";
  }
}