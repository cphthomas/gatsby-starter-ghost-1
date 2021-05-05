$(document).ready(function () {
    console.log("in document ready!");
    $("body").tooltip({ selector: "[data-toggle=tooltip]" });
    console.log("in ready");
});

$(function () {
    console.log("in function ready!");
});

$(".toc").load(function () {

});
