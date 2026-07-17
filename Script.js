111827// ===============================
// Earn Online Hub JavaScript
// ===============================

// Search Function
const searchInput = document.getElementById("search");
const cards = document.querySelectorAll(".card");

searchInput.addEventListener("keyup", function () {

let value = searchInput.value.toLowerCase();

cards.forEach(card => {

let text = card.innerText.toLowerCase();

if(text.includes(value)){
card.style.display="block";
}
else{
card.style.display="none";
}

});

});

// ===============================
// Dark Mode
// ===============================

let darkBtn=document.createElement("button");

darkBtn.innerHTML="🌙 Dark Mode";

darkBtn.style.position="fixed";
darkBtn.style.bottom="20px";
darkBtn.style.right="20px";
darkBtn.style.padding="12px";
darkBtn.style.borderRadius="50px";
darkBtn.style.border="none";
darkBtn.style.background="#2563eb";
darkBtn.style.color="white";
darkBtn.style.cursor="pointer";

document.body.appendChild(darkBtn);

let dark=true;

darkBtn.onclick=function(){

if(dark){

document.body.style.background="#ffffff";
document.body.style.color="#111";

document.querySelectorAll(".card").forEach(card=>{
card.style.background="#f2f2f2";
card.style.color="#111";
});

darkBtn.innerHTML="☀ Light Mode";

dark=false;

}

else{

document.body.style.background="#111827";
document.body.style.color="white";

document.querySelectorAll(".card").forEach(card=>{
card.style.background="#1e293b";
card.style.color="white";
});

darkBtn.innerHTML="🌙 Dark Mode";

dark=true;

}

}

// ===============================
// Favourite Button
// ===============================

document.querySelectorAll(".card").forEach(card=>{

let fav=document.createElement("button");

fav.innerHTML="🤍 Favourite";

fav.style.margin="10px";

card.appendChild(fav);

fav.onclick=function(){

if(fav.innerHTML=="🤍 Favourite"){

fav.innerHTML="❤️ Saved";

}

else{

fav.innerHTML="🤍 Favourite";

}

}

});

// ===============================
// Rating Alert
// ===============================

document.querySelectorAll(".rating").forEach(rate=>{

rate.onclick=function(){

alert("Average User Rating : "+rate.innerText);

}

});

// ===============================
// Learn More
// ===============================

document.querySelectorAll(".card button").forEach(btn=>{

btn.addEventListener("click",function(){

alert("Detailed guide coming soon!");

});

});

// ===============================
// Welcome Message
// ===============================

setTimeout(function(){

alert("Welcome to Earn Online Hub 🚀");

},1000);
