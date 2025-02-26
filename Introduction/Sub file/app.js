let p = document.querySelector("p");

p.addEventListener("click", function(){
    p.style.color = "blue";
    console.log("Paragraph color has been changed");
});

let box = document.querySelector(".box");

box.addEventListener("mouseenter", function(){
    console.log("Mouse inside div");
});

btn = document.querySelector("button");

btn.addEventListener("click", function(){
    console.log(this);
    console.dir(this);
    console.dir(this.innerText);
});