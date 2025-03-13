let div = document.querySelector("div")
let ul = document.querySelector("ul")
let lis = document.querySelectorAll("li") //lis as many list are present and not just one.

div.addEventListener("click", function(){
    console.log("Div was clicked");
});

ul.addEventListener("click", function(event){
    event.stopPropagation();
    console.log("Ul was clicked");
});

for(li of lis){ //so if we click on list it will trigger it's parent elements too.
    li.addEventListener("click", function(event){
        event.stopPropagation();
        console.log("Li was clicked");
    });
}

//So this is what we call Event Bubbling, where the event is triggered on the child element and then it's parent elements too.
//And to stop this we use event.stopPropagation() method. It stops our Event Bubbling

