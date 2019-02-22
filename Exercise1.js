function verifyPass
{
  let password1 = document.getElementByID("passOne");
  let password2 = document.getElementByID("passTwo");
  if(password1 != password2)
  {
    //Passwords do not match!
  }
  else if (password1.length() < 8)
  {
    //Password is not long enough!  At least 8 characters please.
  }
  else
  {
    //Password accepted!
  }
}
