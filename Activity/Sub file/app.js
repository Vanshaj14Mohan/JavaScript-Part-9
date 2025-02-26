p = document.querySelector("p");
h1 = document.querySelector("h1");
h3 = document.querySelector("h3");

btn = document.querySelector("button");

btn.addEventListener("click", function(){
    console.log(this);
    console.dir(this);
    console.dir(this.innerText);
});

p.addEventListener("click", function(){
    console.dir(this.innerText);
    this.style.backgroundColor = "blue";
});

h1.addEventListener("click", function(){
    console.dir(this.innerText);
    this.style.backgroundColor = "blue";
});

h3.addEventListener("click", function(){
    console.dir(this.innerText);
    this.style.backgroundColor = "blue";
});