btn = document.querySelector("button");

btn.addEventListener("dblclick", function (event){ //basically a mouse event
    console.log(event);
    console.log("Button was clicked");
});

//Now talking about keyboard events. Go to MDN addEventListener and select keyboard events for more details.
inp = document.querySelector("input");

inp.addEventListener("keydown", function(event){
    console.log(event);
    console.log("For Event key:", event.key);
    console.log("For Event code: ", event.code);
    console.log("Key was pressed");
});

// inp.addEventListener("keyup", function(){ //for keyup event.
//     console.log("Key was released");
// });

//a mini activity game 
inp = document.querySelector("input");
inp.addEventListener("keydown", function(event){
    console.log("For key:", event.key);
    console.log("Event code", event.code); //ArrowUp, ArrowDown, ArrowLeft, ArrowRight
    if(event.code =="ArrowUp"){
        console.log("Character moves forward");
    }
    else if(event.code =="ArrowDown"){
        console.log("Character moves downwards");
    }
    else if(event.code =="ArrowLeft"){
        console.log("Character moves left");
    }
    else if(event.code =="ArrowRight"){
        console.log("Character moves right");
    }
});
