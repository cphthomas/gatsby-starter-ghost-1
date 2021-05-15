$(document).ready(function () {
    console.log("in document ready!");
    $("body").tooltip({ selector: "[data-toggle=tooltip]" });
    console.log("in ready");
    // thomas vis.js sample
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
 
     var data = [
      ['', 'Ford', 'Tesla', 'Toyota', 'Honda'],
      ['2017', 10, 11, 12, 13],
      ['2018', 20, 11, 14, 13],
      ['2019', 30, 15, 12, 13]
    ];
    
    var container = document.getElementById('example23');
    var hot = new Handsontable(container, {
      data: data,
      rowHeaders: true,
      colHeaders: true,
      filters: true,
      dropdownMenu: true
    });
 



});

$(function () {
    console.log("in function ready!");
});

$(".toc").load(function () {});
