var link=document.querySelector(".btn_form"),popup=document.querySelector(".search_form");link.addEventListener("click",function(e){e.preventDefault(),popup.classList.toggle("on_display")}),window.addEventListener("keydown",function(e){27==e.keyCode&&popup.classList.contains("on_display")&&popup.classList.remove("on_display")});var minusAd=document.querySelector(".minus_adult_btn"),plusAd=document.querySelector(".plus_adult_btn"),countAd=document.querySelector("[name=count_adult]");minusAd.addEventListener("click",function(e){e.preventDefault(),countAd.value>=1&&(countAd.value=countAd.value-1)}),plusAd.addEventListener("click",function(e){e.preventDefault(),countAd.value++});var minusKid=document.querySelector(".minus_kid_btn"),plusKid=document.querySelector(".plus_kid_btn"),countKid=document.querySelector("[name=count_kids]");minusKid.addEventListener("click",function(e){e.preventDefault(),countKid.value>=1&&countKid.value--}),plusKid.addEventListener("click",function(){countKid.value++});