//for project slidesshow
var slideIndex = 1;
showDivs(slideIndex);
function plusDivs(n) {
      showDivs(slideIndex += n);
}
function currentDiv(n) {
                showDivs(slideIndex = n);
 }

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("project");
    var dots = document.getElementsByClassName("dot");
    if (n > x.length) {slideIndex = 1}
            if (n < 1) {slideIndex = x.length}
            for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";  
           }
            for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" current", "");
            }
     x[slideIndex-1].style.display = "block";
     dots[slideIndex-1].className += " current"; 
}
//for submission button
function submitForm() {
    alert("Thank you for your message.\n I will contact with you as soon as possible.\n Have a good day!")
    let form = document.getElementById("form__submit");
    form.submit(); 
   
};
//

