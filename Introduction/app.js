let btn = document.querySelector("button");
console.dir(btn);

// So we can assign our event property to such functions and then execute them.
// btn.onclick = function () {
//     // alert("Button was clicked");
//     console.log("Button was clicked");
// }

// Another way of doing it
function sayHello(){
    alert("Alert says Hello");
}

btn.onclick = sayHello;

// we can select multiple buttons too
let btns = document.querySelectorAll("button");

for(btn of btns){
    btn.onclick = sayHello;
    btn.onmouseenter = function (){ //just move the cursor on the button and it will show us this in the console.
        console.log("You enter a number");
    }
    console.dir(btn);
}
