function verifyPass()
{
  let password1 = document.getElementById("passOne").value;
  let password2 = document.getElementById("passTwo").value;
  if(password1 != password2)
  {
    document.getElementById("Status Text").innerHTML = "Passwords do not match";

  }
  else if (password1.length < 8)
  {
    document.getElementById("Status Text").innerHTML = "Your password must be at least 8 characters";
  }
  else
  {
    document.getElementById("Status Text").innerHTML = "Password Accepted!";
  }
}
