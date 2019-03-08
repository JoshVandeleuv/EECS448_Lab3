function setBorder()
{
let redId = document.getElementById("BorderRVal").value;
let greenId = document.getElementById("BorderGVal").value;
let blueId = document.getElementById("BorderBVal").value;
let widthId = document.getElementById("BorderWVal").value;
document.getElementById("variableText").style.borderColor = "rgb("+redId+","+greenId+","+blueId+")";
document.getElementById("variableText").style.borderWidth = widthId+"px";
}

function setBackground()
{
  let redId = document.getElementById("BackgroundRVal").value;
  let greenId = document.getElementById("BackgroundGVal").value;
  let blueId = document.getElementById("BackgroundBVal").value;
  document.getElementById("variableText").style.backgroundColor = "rgb("+redId+","+greenId+","+blueId+")";
}
