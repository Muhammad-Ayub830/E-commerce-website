var menu_btn = document.getElementById("bars");
var list = document.getElementById("list");
var search = document.getElementById("search");
menu_btn.addEventListener("click", function () {
    if (list.style.height == "0px") {
        list.style.height = "200px"
        list.style.padding = "20px"
        list.style.borderBottom = "1px solid black"
    } else {
        list.style.height = "0px"
        list.style.padding = "0px"
        list.style.borderBottom = ""
    }
})
search.addEventListener("click", function () {
    if (list.style.height == "0px") {
        list.style.height = "180px"
        list.style.padding = "20px"
        list.style.borderBottom = "1px solid black"
    } else {
        list.style.height = "0px"
        list.style.padding = "0px"
        list.style.borderBottom = ""
    }
})
// code for nav-bar toggling is coded--------------------
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