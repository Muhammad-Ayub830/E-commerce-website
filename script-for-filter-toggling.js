// filter window toggling
var filter_window = document.getElementById("filter-window")
var filter_btn = document.getElementById("show-filter")
var filter_btn2 = document.getElementById("show-filter2")
var filter_btn2 = document.getElementById("show-filter3")
filter_btn.addEventListener("click", ()=>{
    filter_window.classList.toggle("display")
})
filter_btn2.addEventListener("click", ()=>{
    filter_window.classList.toggle("display")
    alert("Hi")
})
filter_btn3.addEventListener("click", ()=>{
    filter_window.classList.toggle("display")
})