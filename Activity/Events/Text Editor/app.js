//Making a Text Editor and would append our input statement to the paragraph we made.

let inp =document.querySelector("#text");
let p = document.querySelector("p");

inp.addEventListener("input", function(){
    console.log(inp.value);
    p.innerText = inp.value; //setting value of p.innerText to inp.value;
});