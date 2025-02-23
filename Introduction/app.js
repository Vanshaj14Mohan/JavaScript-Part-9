// let btn = document.querySelector("button");
// console.dir(btn);

// So we can assign our event property to such functions and then execute them.
// btn.onclick = function () {
//     // alert("Button was clicked");
//     console.log("Button was clicked");
// }


// we can select multiple buttons too
let btns = document.querySelectorAll("button");

// Another way of doing it
function sayHello(){
    alert("Alert says Hello");
}

function sayName(){
    alert("Alert asks for Name");
}

// btn.onclick = sayHello;


for(btn of btns){
    // btn.onclick = sayHello;
    // btn.onmouseenter = function (){ //just move the cursor on the button and it will show us this in the console.
    //     console.log("You enter a number");
    // }
    // btn.addEventListener("click", sayHello);
    // btn.addEventListener("click", sayName);
    btn.addEventListener("dblclick", function (){ //we can also add double click event too in this.
        console.log("You double clicked the button");
    });
    // console.dir(btn);
}
