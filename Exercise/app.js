//For button
btn = document.querySelector("button")

btn.addEventListener("click", changeColor);

function changeColor(){
    this.style.backgroundColor = "green";
};