"use strict";

//*const myh3 = document.getElementById("myh3")

const textarea= document.querySelector("#jsonInput")

const output = document.getElementById("output");

const jsonForm = document.getElementById("jsonForm");

const output1 = document.getElementById("output1");
const output2 = document.getElementById("output2");
const output3 = document.getElementById("output3");

jsonForm.addEventListener("submit", function(event){
    event.preventDefault();
    console.log(jsonForm.jsonInput.value);
    try {
        const items = JSON.parse(jsonForm.jsonInput.value)
        console.log(items)
        output1.textContent= items[0];
        output2.textContent = items[1];
        output3.textContent = items[2];

        } catch (error) {
        
    }
})