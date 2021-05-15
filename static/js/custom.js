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
 // thomas highcharts.js sample
 document.addEventListener('DOMContentLoaded', function () {
  const chart = Highcharts.chart('container', {
      chart: {
          type: 'bar'
      },
      title: {
          text: 'Fruit Consumption'
      },
      xAxis: {
          categories: ['Apples', 'Bananas', 'Oranges']
      },
      yAxis: {
          title: {
              text: 'Fruit eaten'
          }
      },
      series: [{
          name: 'Jane',
          data: [1, 0, 4]
      }, {
          name: 'John',
          data: [5, 7, 3]
      }]
  });
});

const columnDefs = [
  { field: "make" },
  { field: "model" },
  { field: "price" }
];

// specify the data
const rowData = [
  { make: "Toyota", model: "Celica", price: 35000 },
  { make: "Ford", model: "Mondeo", price: 32000 },
  { make: "Porsche", model: "Boxter", price: 72000 }
];

// let the grid know which columns and what data to use
const gridOptions = {
  columnDefs: columnDefs,
  rowData: rowData
};

// lookup the container we want the Grid to use
const eGridDiv = document.querySelector('#myGrid');

// create the grid passing in the div to use together with the columns & data we want to use
new agGrid.Grid(eGridDiv, gridOptions);


});

$(function () {
    console.log("in function ready!");
});

$(".toc").load(function () {});
