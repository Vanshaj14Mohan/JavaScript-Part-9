let form = document.querySelector("form")

// form.addEventListener("submit", function(event){ //sumbmit here is an event
//     event.preventDefault(); //to prevent default action from event
//     alert("Form Submitted");
// });

//And we will learn how to access data from a form once we submit it.
form.addEventListener("submit", function(event){ //sumbmit here is an event
    event.preventDefault(); //to prevent default action from event
    console.dir(form);
    let user = document.querySelector("#user");
    let pass = document.querySelector("#pass");
    console.log("Username is", user.value);
    console.log("Password is", pass.value);
    alert(`Hi ${user.value}, your password is set to ${pass.value}`); //creating an alert
    // console.dir(inp);
    // console.log(inp);
    // console.log(inp.value);
});

//An easy way to do it using elements property in form
// form.addEventListener("submit", function(event){ //sumbmit here is an event
//     event.preventDefault(); //to prevent default action from event
//     console.dir(form);
//     let user = this.elements[0]; //form.elements[0]
//     let pass = this.elements[1]; //form.elements[1]
//     console.log("Username is", user.value);
//     console.log("Password is", pass.value);
//     alert(`Hi ${user.value}, your password is set to ${pass.value}`); //creating an alert

// });