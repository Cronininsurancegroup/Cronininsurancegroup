const nextButton = document.querySelector(".next-button");

nextButton.addEventListener("click", function() {

const selected = document.querySelectorAll(".insurance-card input:checked");

if(selected.length === 0){
alert("Please select at least one insurance type.");
return;
}

window.location.href = "quote.html";

});
