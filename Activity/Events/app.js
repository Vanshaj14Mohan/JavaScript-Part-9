btn = document.querySelector("button");

btn.addEventListener("dblclick", function (event){ //basically a mouse event
    console.log(event);
    console.log("Button was clicked");
});

//Now talking about keyboard events. Go to MDN addEventListener and select keyboard events for more details.
inp = document.querySelector("input");

inp.addEventListener("keydown", function(event){
    console.log(event);
    console.log("Key was pressed");
});

// inp.addEventListener("keyup", function(){ //for keyup
//     console.log("Key was released");
// });