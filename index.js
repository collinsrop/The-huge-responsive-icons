"use strict";
document.addEventListener("DOMContentLoaded", ()=>{
//variables
let home=document.querySelector("#home");
let consultations=document.querySelector("#consultations");
let mail=document.querySelector("#mail");
let body=document.querySelector("body");
let hidden=document.querySelector("div");
//styles
home.style.borderRadius="50%";
home.style.position="absolute";
home.style.top="15%";
home.style.left="20%";
consultations.style.borderRadius="50%";
consultations.style.position="absolute";
consultations.style.top = "15%";
consultations.style.left = "40%";
mail.style.borderRadius="50%";
mail.style.position = "absolute";
mail.style.top = "15%";
mail.style.left = "60%";
body.style.backgroundColor = "black";
body.style.color = "white";
body.style.fontFamily = "cursive";
document.querySelector("h1").style.textDecoration="overline";
document.querySelector("h1").style.textAlign="center";
//hidden div
hidden.style.position = "absolute";
hidden.style.top="50%";
hidden.style.width="500px";
hidden.style.height="fitContent";
hidden.style.backgroundColor="grey"
hidden.style.padding="20px";
hidden.style.border="1px solid grey";
hidden.style.borderRadius="20%";
hidden.style.display="none";
//close button
document.querySelector("#close").style.backgroundColor="black";
document.querySelector("#close").style.width="50px";
document.querySelector("#close").style.height="50px";
document.querySelector("#close").style.color="white";
document.querySelector("#close").style.borderRadius="50%";
document.querySelector("#close").style.float="right";

home.addEventListener("click",()=>{
hidden.style.display="block";
});
document.querySelector("#close").addEventListener("click",()=>{
	hidden.style.display="none";
});
mail.addEventListener("click",()=>{
	let link="mailto:";
	window.open(link, "_blank");
});
});


