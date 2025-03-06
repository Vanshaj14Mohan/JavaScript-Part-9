let form = document.querySelector("form")

form.addEventListener("submit", function(event){ //sumbmit here is an event
    event.preventDefault(); //to prevent default action from event
    alert("Form Submitted");
});