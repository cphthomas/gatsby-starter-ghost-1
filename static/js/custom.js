$(document).ready(function () {
    console.log("in document ready!");
    $("body").tooltip({ selector: "[data-toggle=tooltip]" });
});

$(function () {
    console.log("in function ready!");
});

function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
