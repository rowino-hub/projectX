
const message = document.getElementById("message");
const happyBtn = document.getElementById("happy");
const sadBtn = document.getElementById("sad");
const excitedBtn = document.getElementById("excited");


happyBtn.addEventListener("click", function () {
message.textContent = "I am feeling Happy";

});


sadBtn.addEventListener("click", function () {
 message.textContent = " Iam Sad today";
});

excitedBtn.addEventListener("click", function () {   
    message.textContent = "Iam  Excited today";
});

