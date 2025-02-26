btn = document.querySelector("button");

btn.addEventListener("click", function(){
    console.log(this);
    console.dir(this);
    console.dir(this.innerText);
});