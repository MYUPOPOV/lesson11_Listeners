"use strict";
const button = document.getElementById("btn");
const inputText = document.getElementById("text");
const square = document.getElementById("square");
const eBtn = document.getElementById("e_btn");
const range = document.getElementById("range");
const rangeSpan = document.getElementById("range-span");
const circle = document.getElementById("circle");

const btnClick = function () {
	square.style.backgroundColor = inputText.value;
	inputText.value = "";
};

const circleChange = function () {
	rangeSpan.innerHTML = range.value;
	circle.style.height = range.value + "%";
	circle.style.width = range.value + "%";
};

eBtn.style.display = "none";
circle.style.height = "";
circle.style.width = "";

button.addEventListener("click", btnClick);
range.addEventListener("change", circleChange);
