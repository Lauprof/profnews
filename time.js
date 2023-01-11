setInterval(time,1000);
function time(){
var x = new Date();
document.getElementById("time").innerHTML = x.toDateString() + " " + x.toLocaleTimeString();
}

function validate(){
  alert("Your feedback has been submitted");
  
  
}