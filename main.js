// Select element function
const selectElement = function (element) {
	return document.querySelector(element);
};

const selectAllElements = function (elements) {
	return document.querySelectorAll(elements);
};

let menuToggler = selectElement(".menu-toggle");
let body = selectElement("body");
let menuItems = selectAllElements(".nav-link"); // Adjust based on your HTML structure

// Toggle menu on button click
menuToggler.addEventListener("click", function () {
	body.classList.toggle("open");
});

// Close menu when a menu item is clicked
menuItems.forEach((item) => {
	item.addEventListener("click", function () {
		body.classList.remove("open");
	});
});

// const selectElement = function(element) {
//  return document.querySelector(element);
// };

// let menuToggler = selectElement(".menu-toggle");
// let body = selectElement("body");

// menuToggler.addEventListener("click", function() { body.classList.toggle("open"); });

// scroll reveal
window.sr = ScrollReveal();

sr.reveal(".animate-left", {
	origin: "left",
	duration: 1000,
	distance: "25rem",
	delay: 300,
});

sr.reveal(".animate-right", {
	origin: "right",
	duration: 1000,
	distance: "25rem",
	delay: 600,
});

sr.reveal(".animate-top", {
	origin: "top",
	duration: 1000,
	distance: "25rem",
	delay: 600,
});

sr.reveal(".animate-bottom", {
	origin: "bottom",
	duration: 1000,
	distance: "25rem",
	delay: 600,
});
