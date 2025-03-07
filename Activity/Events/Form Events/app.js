let form = document.querySelector("form")

// form.addEventListener("submit", function(event){ //sumbmit here is an event
//     event.preventDefault(); //to prevent default action from event
//     alert("Form Submitted");
// });

//And we will learn how to access data from a form once we submit it.
form.addEventListener("submit", function(event){ //sumbmit here is an event
    event.preventDefault(); //to prevent default action from event
    let user = document.querySelector("#user");
    let pass = document.querySelector("#pass");
    console.log("Username is", user.value);
    console.log("Password is", pass.value);
    alert(`Hi ${user.value}, your password is set to ${pass.value}`); //creating an alert
    // console.dir(inp);
    // console.log(inp);
    // console.log(inp.value);
});
