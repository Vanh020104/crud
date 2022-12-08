let form = document.getElementById("form");
let input = document.getElementById("input");
let msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("Button clicked");
    formValidation();//call 
});

let formValidation = () => {
    console.log("Form formValidation function");
    if(input.value === ""){
        msg.innerHTML = "Post cannot be blank";
    } else {
        msg.innerHTML= "";
    }
   
};