function buttonPressNext()
{
  let fileName = document.getElementById("slideImage").src;
  fileName = fileName.slice(50,62);
  switch (fileName)
  {
    case "Pomsky1.jpg":
      document.getElementById("slideImage").src="Pomsky2.jpg";
    break;
    case "Pomsky2.jpg":
      document.getElementById("slideImage").src="Pomsky3.jpg";
    break;
    case "Pomsky3.jpg":
      document.getElementById("slideImage").src="Pomsky4.jpg";
    break;
    case "Pomsky4.jpg":
      document.getElementById("slideImage").src="Pomsky5.jpg";
    break;
    case "Pomsky5.jpg":
      document.getElementById("slideImage").src="Pomsky1.jpg";
    break;
  }
}

function buttonPressPrevious()
{
  let fileName = document.getElementById("slideImage").src;
  fileName = fileName.slice(50,62);
  switch (fileName)
  {
    case "Pomsky1.jpg":
      document.getElementById("slideImage").src="Pomsky5.jpg";
    break;
    case "Pomsky2.jpg":
      document.getElementById("slideImage").src="Pomsky1.jpg";
    break;
    case "Pomsky3.jpg":
      document.getElementById("slideImage").src="Pomsky2.jpg";
    break;
    case "Pomsky4.jpg":
      document.getElementById("slideImage").src="Pomsky3.jpg";
    break;
    case "Pomsky5.jpg":
      document.getElementById("slideImage").src="Pomsky4.jpg";
    break;
  }
}
