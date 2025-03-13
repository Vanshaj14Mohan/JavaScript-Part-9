let div = document.querySelector("div")
let ul = document.querySelector("ul")
let lis = document.querySelectorAll("li") //lis as many list are present and not just one.

div.addEventListener("click", function(){
    console.log("Div was clicked");
});

ul.addEventListener("click", function(){
    console.log("Ul was clicked");
});

for(li of lis){ //so if we click on list it will trigger it's parent elements too.
    li.addEventListener("click", function(){
        console.log("Li was clicked");
    });
}


