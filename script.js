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

var anouncement_section = document.getElementById("anouncement-section")
var close_btn = document.getElementById("close-btn")
close_btn.addEventListener('click',function(){
    anouncement_section.style.display = "none";
})
// code for handling the anoucncement section