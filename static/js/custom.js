$(document).ready(function () {
    console.log("in document ready!");
    $("body").tooltip({ selector: "[data-toggle=tooltip]" });
    console.log("in ready");
    var nodes = [
        {
          id:"a",
          label:"A"
        },
        {
          id:"b",
          label:"B"
        }
 ];
 var edges = [
        {
          from:"a",
          to:"b"
        }
 ];
     var options = {};
     var container = document.querySelector('.network');
     network = new vis.Network(container, data, options);
});

$(function () {
    console.log("in function ready!");
});

$(".toc").load(function () {});
