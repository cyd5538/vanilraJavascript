const images = ["bgi1.jpg", "bgi2.jpg", "bgi3.jpg", "bgi4.jpg", "bgi5.jpg"];
const background_img = "./img/"; 
const bgDiv = document.querySelector('#bgDiv');

const choseImage = images[Math.floor(Math.random() * images.length)];
const a = bgDiv.style.backgroundImage = "url('" + background_img +  choseImage + "')";
console.log(a);