"use strict";
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModel = document.querySelector(".close-modal");
const btnOpenModel = document.querySelectorAll(".show-modal");

const openModel=function(){
  modal.classList.remove('hidden'); //not .hidden as no a selector , remeove() the selected file. 
  overlay.classList.remove('hidden');
  
};
//for loop to apply for all three buttons
for (let i = 0; i < btnOpenModel.length; i++) {
  btnOpenModel[i].addEventListener('click',openModel);
}

//Adding and Removing classes using Js

const closeModel= function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnCloseModel.addEventListener('click',closeModel); //calling funtion closemodel instead defining here alone. Can be reuse closeModel for overlay also.
overlay.addEventListener('click',closeModel);