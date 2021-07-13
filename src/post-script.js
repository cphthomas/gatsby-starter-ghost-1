const postScript = () => {
    waitForElement(".content-body", 8000)
        .then(function () {
            console.log("content-body element is loaded.. do stuff");
            makeAnchorTargetBlank();
            tocbot.init({
                tocSelector: ".toc",
                contentSelector: ".content-body",
                hasInnerContainers: true,
            });
            tocbot.refresh();
            makeTOCFixed();
        })
        .catch(() => {
            console.log("content-body element did not load in 8 seconds");
        });
};

function waitForElement(querySelector, timeout = 0) {
    const startTime = new Date().getTime();
    return new Promise((resolve, reject) => {
        const timer = setInterval(() => {
            const now = new Date().getTime();
            if (document.querySelector(querySelector)) {
                clearInterval(timer);
                resolve();
            } else if (timeout && now - startTime >= timeout) {
                clearInterval(timer);
                reject();
            }
        }, 100);
    });
}

function makeAnchorTargetBlank() {
    //$(".content-body a").attr("target", "_blank");
    var allAnchors = $(".content-body a");
    $(allAnchors).each(function (index) {
        var href = $(this).attr("href");
        if (typeof href != "undefined" && !href.includes("#")) {
            $(this).attr("target", "_blank");
        }
    });
}

function makeTOCFixed() {
    if (test == 1 && $(".toc").length && $(".post-feature-image").length) {
        var el = $(".toc");
        el.css({
            top: "580px",
        });
        var stickyTop = $(".toc").offset().top;
        var stickyHeight = $(".toc").height();

        $(window).scroll(function () {
            var windowTop = $(window).scrollTop();

            if (stickyTop < windowTop) {
                el.css({
                    position: "fixed",
                    top: "70px",
                });
            } else {
                el.css({
                    position: "unset",
                    float: "right",
                });
            }
        });
        test++;
    }
}

export default postScript;
