var x=document.getElementById("container");
// console.log(x);
x.style.width ="200px";
x.style.height ="200px";
x.style.backgroundColor="red";
x.innerHTML="Text Added Dynamically";

var y=document.getElementById("btn");
// console.log(y);
y.onclick=function(){
  confirm("Button is Clicked");
  x.style.backgroundColor="blue";
  x.style.textAlign="center";
  x.style.color="white";
};