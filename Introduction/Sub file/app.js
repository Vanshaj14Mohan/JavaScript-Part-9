let p = document.querySelector("p");

p.addEventListener("click", function(){
    p.style.color = "blue";
    console.log("Paragraph color has been changed");
});

let box = document.querySelector(".box");

box.addEventListener("mouseenter", function(){
    console.log("Mouse inside div");
});
