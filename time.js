setInterval(time,1000);
function time(){
var x = new Date();
document.getElementById("time").innerHTML = x.toDateString() + " " + x.toLocaleTimeString();
}

function validate(){
  alert("Your feedback has been submitted");
  
  
}
let element = document.getElementById("navigation");

element.addEventListener("click",function(){
    let ul = document.querySelector("ul");
  if(ul.style.display == "none"){
    
    ul.style.display = "block";
  }else{
    ul.style.display = "none";
    
  }

  



});

