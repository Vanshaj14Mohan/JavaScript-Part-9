//1: Change Event -> It occurs when the value of an element has been changed (only works on <input>, <textarea> and <select> elements).
//2: Input Event -> The input event fires when the value of an (<input>, <select>, or <textarea>) element has been changed.

let form = document.querySelector("form")

form.addEventListener("submit", function(event){ //sumbmit here is an event
    event.preventDefault(); //to prevent default action from event
});

let user = document.querySelector("#user");

user.addEventListener("change", function(){
    console.log("Change event");
    console.log("Final Value =", user.value); //or this.value
});

user.addEventListener("input", function(){ //arrow keys don't trigger input events
    console.log("Input event");
    console.log("Final Value =", user.value); //or this.value
});