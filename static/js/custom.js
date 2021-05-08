$(document).ready(function () {
    console.log("in document ready!");
    $("body").tooltip({ selector: "[data-toggle=tooltip]" });
    console.log("in ready");
});

$(function () {
    console.log("in function ready!");
});

$(".toc").load(function () {});

(function () {
    var id = "f3658966-ae48-11eb-a9b5-0242ac130002";
    var ci_search = document.createElement("script");
    ci_search.type = "text/javascript";
    ci_search.async = true;
    ci_search.src = "https://cse.expertrec.com/api/js/ci_common.js?id=" + id;
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(ci_search, s);
})();
