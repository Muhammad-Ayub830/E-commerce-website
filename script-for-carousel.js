var previous_btn = document.getElementById("previous-cards");
var next_btn = document.getElementById("next-cards");
var carousel = document.getElementById("carousel");
var caousel_area = document.querySelectorAll(".card").length;


var margin = carousel.style.marginLeft;
var index = 1;
next_btn.addEventListener('click', function () {
    if (caousel_area > index) {
        var c = index * 360;
        carousel.style.marginLeft = `${-c}px`
        index++;
    }

})
previous_btn.addEventListener('click', function () {
    if (index > 0) {
        index--;
        var c = index * 360;
        carousel.style.marginLeft = `${-c}px`
    }
})
// logics for carousel is made-----------