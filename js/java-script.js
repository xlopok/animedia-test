var slider = document.getElementById('myRange')

var picture1 = document.getElementById("pic1");
var picture2 = document.getElementById("pic2");
var picture3 = document.getElementById("pic3");

function onChange(event) {
  var x = event.target.value
  
  if (x <= 33) {
    

    picture1.classList.add("displayBlock");
    picture2.classList.remove("displayBlock");
    picture3.classList.remove("displayBlock");
  } else if (x > 33 && x <= 66) {
    picture2.classList.add("displayBlock");
    picture1.classList.remove("displayBlock");
    picture3.classList.remove("displayBlock");
  } else if (x > 66) {
    picture3.classList.add("displayBlock");
    picture2.classList.remove("displayBlock");
    picture1.classList.remove("displayBlock");
    
  }
}

slider.addEventListener('input', onChange)
