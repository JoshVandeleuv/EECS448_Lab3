function verifyPass()
{
  let password1 = document.getElementById("passOne").value;
  let password2 = document.getElementById("passTwo").value;
  if(password1 != password2)
  {
    console.log("Passwords do not match");
  }
  else if (password1.length < 8)
  {
    console.log("Your password must be at least 8 characters");
  }
  else
  {
    console.log("Password Accepted!");
  }
}
