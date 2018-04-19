var link1 = document.querySelector(".step-link-1");
var link2 = document.querySelector(".step-link-2");
var link3 = document.querySelector(".step-link-3");
var link4 = document.querySelector(".step-link-4");
var link5 = document.querySelector(".step-link-5");
var link6 = document.querySelector(".step-link-6");
var link7 = document.querySelector(".step-link-7");
var link8 = document.querySelector(".step-link-8");
var link9 = document.querySelector(".step-link-9");



var illustration1 = document.querySelector(".illustration-1");
var illustration2 = document.querySelector(".illustration-2");
var illustration3 = document.querySelector(".illustration-3");
var illustration4 = document.querySelector(".illustration-4");
var illustration5 = document.querySelector(".illustration-5");
var illustration6 = document.querySelector(".illustration-6");
var illustration7 = document.querySelector(".illustration-7");
var illustration8 = document.querySelector(".illustration-8");
var illustration9 = document.querySelector(".illustration-9");


var point1 = document.querySelector(".point-1");
var point2 = document.querySelector(".point-2");
var point3 = document.querySelector(".point-3");
var point4 = document.querySelector(".point-4");
var point5 = document.querySelector(".point-5");
var point6 = document.querySelector(".point-6");
var point7 = document.querySelector(".point-7");
var point8 = document.querySelector(".point-8");
var point9 = document.querySelector(".point-9");


link1.addEventListener("click", function (evt) {
  evt.preventDefault();
  illustration1.classList.add("illustration-active");
  illustration2.classList.remove("illustration-active");
  illustration3.classList.remove("illustration-active");
  illustration4.classList.remove("illustration-active");
  illustration5.classList.remove("illustration-active");
  illustration6.classList.remove("illustration-active");
  illustration7.classList.remove("illustration-active");
  illustration8.classList.remove("illustration-active");
  illustration9.classList.remove("illustration-active");
});


link2.addEventListener("click", function (evt) {
  evt.preventDefault();
  illustration2.classList.add("illustration-active");
  illustration1.classList.remove("illustration-active");
  illustration3.classList.remove("illustration-active");
  illustration4.classList.remove("illustration-active");
  illustration5.classList.remove("illustration-active");
  illustration6.classList.remove("illustration-active");
  illustration7.classList.remove("illustration-active");
  illustration8.classList.remove("illustration-active");
  illustration9.classList.remove("illustration-active");
});

link3.addEventListener("click", function (evt) {
  evt.preventDefault();
  illustration3.classList.add("illustration-active");
  illustration1.classList.remove("illustration-active");
  illustration2.classList.remove("illustration-active");
  illustration4.classList.remove("illustration-active");
  illustration5.classList.remove("illustration-active");
  illustration6.classList.remove("illustration-active");
  illustration7.classList.remove("illustration-active");
  illustration8.classList.remove("illustration-active");
  illustration9.classList.remove("illustration-active");
});

link4.addEventListener("click", function (evt) {
  evt.preventDefault();
  illustration4.classList.add("illustration-active");
  illustration1.classList.remove("illustration-active");
  illustration2.classList.remove("illustration-active");
  illustration3.classList.remove("illustration-active");
  illustration5.classList.remove("illustration-active");
  illustration6.classList.remove("illustration-active");
  illustration7.classList.remove("illustration-active");
  illustration8.classList.remove("illustration-active");
  illustration9.classList.remove("illustration-active");
});

link5.addEventListener("click", function (evt) {
  evt.preventDefault();
  illustration5.classList.add("illustration-active");
  illustration1.classList.remove("illustration-active");
  illustration2.classList.remove("illustration-active");
  illustration3.classList.remove("illustration-active");
  illustration4.classList.remove("illustration-active");
  illustration6.classList.remove("illustration-active");
  illustration7.classList.remove("illustration-active");
  illustration8.classList.remove("illustration-active");
  illustration9.classList.remove("illustration-active");
});

link6.addEventListener("click", function (evt) {
  evt.preventDefault();
  illustration6.classList.add("illustration-active");
  illustration1.classList.remove("illustration-active");
  illustration2.classList.remove("illustration-active");
  illustration3.classList.remove("illustration-active");
  illustration4.classList.remove("illustration-active");
  illustration5.classList.remove("illustration-active");
  illustration7.classList.remove("illustration-active");
  illustration8.classList.remove("illustration-active");
  illustration9.classList.remove("illustration-active");
});

link7.addEventListener("click", function (evt) {
  evt.preventDefault();
  illustration7.classList.add("illustration-active");
  illustration1.classList.remove("illustration-active");
  illustration2.classList.remove("illustration-active");
  illustration3.classList.remove("illustration-active");
  illustration4.classList.remove("illustration-active");
  illustration5.classList.remove("illustration-active");
  illustration6.classList.remove("illustration-active");
  illustration8.classList.remove("illustration-active");
  illustration9.classList.remove("illustration-active");
});

link8.addEventListener("click", function (evt) {
  evt.preventDefault();
  illustration8.classList.add("illustration-active");
  illustration1.classList.remove("illustration-active");
  illustration2.classList.remove("illustration-active");
  illustration3.classList.remove("illustration-active");
  illustration4.classList.remove("illustration-active");
  illustration5.classList.remove("illustration-active");
  illustration6.classList.remove("illustration-active");
  illustration7.classList.remove("illustration-active");
  illustration9.classList.remove("illustration-active");
});

link9.addEventListener("click", function (evt) {
  evt.preventDefault();
  illustration9.classList.add("illustration-active");
  illustration1.classList.remove("illustration-active");
  illustration2.classList.remove("illustration-active");
  illustration3.classList.remove("illustration-active");
  illustration4.classList.remove("illustration-active");
  illustration5.classList.remove("illustration-active");
  illustration6.classList.remove("illustration-active");
  illustration7.classList.remove("illustration-active");
  illustration8.classList.remove("illustration-active");
});


link1.addEventListener("click", function (evt) {
  evt.preventDefault();
  link1.classList.add("link-active");
  link2.classList.remove("link-active");
  link3.classList.remove("link-active");
  link4.classList.remove("link-active");
  link5.classList.remove("link-active");
  link6.classList.remove("link-active");
  link7.classList.remove("link-active");
  link8.classList.remove("link-active");
  link9.classList.remove("link-active");

});

link2.addEventListener("click", function (evt) {
  evt.preventDefault();
  link2.classList.add("link-active");
  link1.classList.remove("link-active");
  link3.classList.remove("link-active");
  link4.classList.remove("link-active");
  link5.classList.remove("link-active");
  link6.classList.remove("link-active");
  link7.classList.remove("link-active");
  link8.classList.remove("link-active");
  link9.classList.remove("link-active");

});

link3.addEventListener("click", function (evt) {
  evt.preventDefault();
  link3.classList.add("link-active");
  link1.classList.remove("link-active");
  link2.classList.remove("link-active");
  link4.classList.remove("link-active");
  link5.classList.remove("link-active");
  link6.classList.remove("link-active");
  link7.classList.remove("link-active");
  link8.classList.remove("link-active");
  link9.classList.remove("link-active");
});

link4.addEventListener("click", function (evt) {
  evt.preventDefault();
  link4.classList.add("link-active");
  link1.classList.remove("link-active");
  link2.classList.remove("link-active");
  link3.classList.remove("link-active");
  link5.classList.remove("link-active");
  link6.classList.remove("link-active");
  link7.classList.remove("link-active");
  link8.classList.remove("link-active");
  link9.classList.remove("link-active");
});

link5.addEventListener("click", function (evt) {
  evt.preventDefault();
  link5.classList.add("link-active");
  link1.classList.remove("link-active");
  link2.classList.remove("link-active");
  link3.classList.remove("link-active");
  link4.classList.remove("link-active");
  link6.classList.remove("link-active");
  link7.classList.remove("link-active");
  link8.classList.remove("link-active");
  link9.classList.remove("link-active");
});

link6.addEventListener("click", function (evt) {
  evt.preventDefault();
  link6.classList.add("link-active");
  link1.classList.remove("link-active");
  link2.classList.remove("link-active");
  link3.classList.remove("link-active");
  link4.classList.remove("link-active");
  link5.classList.remove("link-active");
  link7.classList.remove("link-active");
  link8.classList.remove("link-active");
  link9.classList.remove("link-active");
});

link7.addEventListener("click", function (evt) {
  evt.preventDefault();
  link7.classList.add("link-active");
  link1.classList.remove("link-active");
  link2.classList.remove("link-active");
  link3.classList.remove("link-active");
  link4.classList.remove("link-active");
  link5.classList.remove("link-active");
  link6.classList.remove("link-active");
  link8.classList.remove("link-active");
  link9.classList.remove("link-active");
});

link8.addEventListener("click", function (evt) {
  evt.preventDefault();
  link8.classList.add("link-active");
  link1.classList.remove("link-active");
  link2.classList.remove("link-active");
  link3.classList.remove("link-active");
  link4.classList.remove("link-active");
  link5.classList.remove("link-active");
  link6.classList.remove("link-active");
  link7.classList.remove("link-active");
  link9.classList.remove("link-active");
});

link9.addEventListener("click", function (evt) {
  evt.preventDefault();
  link9.classList.add("link-active");
  link1.classList.remove("link-active");
  link2.classList.remove("link-active");
  link3.classList.remove("link-active");
  link4.classList.remove("link-active");
  link5.classList.remove("link-active");
  link6.classList.remove("link-active");
  link7.classList.remove("link-active");
  link8.classList.remove("link-active");
});

link1.addEventListener("click", function (evt) {
  evt.preventDefault();
  point1.classList.add("point-active");
  point2.classList.remove("point-active");
  point3.classList.remove("point-active");
  point4.classList.remove("point-active");
  point5.classList.remove("point-active");
  point6.classList.remove("point-active");
  point7.classList.remove("point-active");
  point8.classList.remove("point-active");
  point9.classList.remove("point-active");
});

link2.addEventListener("click", function (evt) {
  evt.preventDefault();
  point2.classList.add("point-active");
  point1.classList.remove("point-active");
  point3.classList.remove("point-active");
  point4.classList.remove("point-active");
  point5.classList.remove("point-active");
  point6.classList.remove("point-active");
  point7.classList.remove("point-active");
  point8.classList.remove("point-active");
  point9.classList.remove("point-active");
});

link3.addEventListener("click", function (evt) {
  evt.preventDefault();
  point3.classList.add("point-active");
  point1.classList.remove("point-active");
  point2.classList.remove("point-active");
  point4.classList.remove("point-active");
  point5.classList.remove("point-active");
  point6.classList.remove("point-active");
  point7.classList.remove("point-active");
  point8.classList.remove("point-active");
  point9.classList.remove("point-active");
});

link4.addEventListener("click", function (evt) {
  evt.preventDefault();
  point4.classList.add("point-active");
  point1.classList.remove("point-active");
  point2.classList.remove("point-active");
  point3.classList.remove("point-active");
  point5.classList.remove("point-active");
  point6.classList.remove("point-active");
  point7.classList.remove("point-active");
  point8.classList.remove("point-active");
  point9.classList.remove("point-active");
});

link5.addEventListener("click", function (evt) {
  evt.preventDefault();
  point5.classList.add("point-active");
  point1.classList.remove("point-active");
  point2.classList.remove("point-active");
  point3.classList.remove("point-active");
  point4.classList.remove("point-active");
  point6.classList.remove("point-active");
  point7.classList.remove("point-active");
  point8.classList.remove("point-active");
  point9.classList.remove("point-active");
});

link6.addEventListener("click", function (evt) {
  evt.preventDefault();
  point6.classList.add("point-active");
  point1.classList.remove("point-active");
  point2.classList.remove("point-active");
  point3.classList.remove("point-active");
  point4.classList.remove("point-active");
  point5.classList.remove("point-active");
  point7.classList.remove("point-active");
  point8.classList.remove("point-active");
  point9.classList.remove("point-active");
});

link7.addEventListener("click", function (evt) {
  evt.preventDefault();
  point7.classList.add("point-active");
  point1.classList.remove("point-active");
  point2.classList.remove("point-active");
  point3.classList.remove("point-active");
  point4.classList.remove("point-active");
  point5.classList.remove("point-active");
  point6.classList.remove("point-active");
  point8.classList.remove("point-active");
  point9.classList.remove("point-active");
});

link8.addEventListener("click", function (evt) {
  evt.preventDefault();
  point8.classList.add("point-active");
  point1.classList.remove("point-active");
  point2.classList.remove("point-active");
  point3.classList.remove("point-active");
  point4.classList.remove("point-active");
  point5.classList.remove("point-active");
  point6.classList.remove("point-active");
  point7.classList.remove("point-active");
  point9.classList.remove("point-active");
});

link9.addEventListener("click", function (evt) {
  evt.preventDefault();
  point9.classList.add("point-active");
  point1.classList.remove("point-active");
  point2.classList.remove("point-active");
  point3.classList.remove("point-active");
  point4.classList.remove("point-active");
  point5.classList.remove("point-active");
  point6.classList.remove("point-active");
  point7.classList.remove("point-active");
  point8.classList.remove("point-active");
});
