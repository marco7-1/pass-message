



// let passBtn = document.getElementById("passBtn");
// passBtn.addEventListener("click" , function(){
//     let textInput = document.getElementById("textInput").value;
//     let passMe = document.getElementById("passMe");
//     passMe.innerHTML = ">>" + textInput ;
// })






let passBtn = document.getElementById("passBtn");
passBtn.addEventListener("click", ()=>{
    let textInput = document.getElementById("textInput").value;
    let passMe = document.getElementById("passMe");
    passMe.innerHTML = ">>> " + textInput;
})