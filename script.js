const mainImageDiv = document.getElementById("mainImage");

mainImageDiv.addEventListener("click", () => {
    mainImageDiv.style.backgroundImage = "url('main2.jpg')"; // Replace with the actual path to your new image
});

document.getElementById('havaImage').addEventListener('click', (event) => {
  event.target.setAttribute("src", 'HavaMahal1.jpg');

});

document.getElementById('amberImage').addEventListener('click', (event) => {
  event.target.setAttribute("src", 'AmberFort.jpg');

});

document.getElementById('tajImage').addEventListener('click', (event) => {
  event.target.setAttribute("src", 'Taj-Mahal.jpg');

});

document.getElementById('aagraImage').addEventListener('click', (event) => {
  event.target.setAttribute("src", 'AagraFort1.jpg');

});

document.getElementById('redImage').addEventListener('click', (event) => {
  event.target.setAttribute("src", 'RedFort1.jpg');

});

document.getElementById('qutubImage').addEventListener('click', (event) => {
  event.target.setAttribute("src", 'QutubMinar1.jpg');

});

document.getElementById('tombImage').addEventListener('click', (event) => {
  event.target.setAttribute("src", 'tomb.jpg');

});

document.getElementById('gateImage').addEventListener('click', (event) => {
  event.target.setAttribute("src", 'IndiaGate1.jpg');

});

document.getElementById('img1').addEventListener('click', (event) => {
  event.target.setAttribute("src", 'other1.jpg');

});

document.getElementById('img2').addEventListener('click', (event) => {
  event.target.setAttribute("src", 'other2.jpg');

});

document.getElementById('img3').addEventListener('click', (event) => {
  event.target.setAttribute("src", 'other3.jpg');

});

document.getElementById('img4').addEventListener('click', (event) => {
  event.target.setAttribute("src", 'other4.jpg');

});

document.getElementById('img5').addEventListener('click', (event) => {
  event.target.setAttribute("src", 'other5.jpg');

});




