var link = document.querySelector(".btn_form");
var popup = document.querySelector(".search_form");
link.addEventListener("click", function(event){
    event.preventDefault();
    popup.classList.toggle("on_display");
} );
window.addEventListener("keydown", function(event) {
    if(event.keyCode == 27){
        if(popup.classList.contains("on_display"))
            popup.classList.remove("on_display");    
        }
} );

var minusAd = document.querySelector(".minus_adult_btn");
var plusAd = document.querySelector(".plus_adult_btn");
var countAd = document.querySelector("[name=count_adult]");
minusAd.addEventListener("click", function(event) {
    event.preventDefault();
    if(countAd.value >= 1)
        countAd.value = countAd.value - 1 ;
} );
plusAd.addEventListener("click", function(event) {
    event.preventDefault();
    countAd.value++;
} );
var minusKid = document.querySelector(".minus_kid_btn");
var plusKid = document.querySelector(".plus_kid_btn");
var countKid = document.querySelector("[name=count_kids]"); 
minusKid.addEventListener("click",function(event) {
    event.preventDefault();
    if(countKid.value>=1)
        countKid.value--;
} );
plusKid.addEventListener("click", function(event) {
    countKid.value++;
} );