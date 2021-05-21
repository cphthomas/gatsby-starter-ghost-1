let check = 0;

const customJS = () => {
    console.log("I'm ready = " + check);

    // if (check == 0) {
    $("body").tooltip({ selector: "[data-toggle=tooltip]" });

    // var id = "1f6d35dc-af10-11eb-8319-0242ac130002";
    // var ci_search = document.createElement("script");
    // ci_search.type = "text/javascript";
    // ci_search.async = true;
    // ci_search.src =
    //     "https://cse.expertrec.com/api/js/ci_common.js?id=" + id;
    // var s = document.getElementsByTagName("script")[0];
    // s.parentNode.insertBefore(ci_search, s);
    // let myScript = document.createElement("script");
    // myScript.setAttribute(
    //     "src",
    //     "https://cse.expertrec.com/api/js/ci_common.js?id=1f6d35dc-af10-11eb-8319-0242ac130002"
    // );
    // document.body.appendChild(myScript);
    // check++;
    //}

    let myScript = document.createElement("script");
    myScript.setAttribute(
        "src",
        "https://cse.expertrec.com/api/js/ci_common.js?id=1f6d35dc-af10-11eb-8319-0242ac130002"
    );
    document.body.appendChild(myScript);

    waitForElement("#mynetwork","#mynetwork2", 8000)
        .then(function () {
            console.log("element is loaded.. do stuff");
            visScript();
        })
        .catch(() => {
            console.log("element did not load in 8 seconds");
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

function visScript() {
    var nodes = new vis.DataSet([
        { id: 1, value: 20, label: "1" },
        { id: 2, value: 5, label: "2" },
        { id: 3, value: 10, label: "3" },
        { id: 4, value: 15, label: "4" },
        { id: 5, value: 8, label: "5" },
        { id: 6, value: 10, label: "6" },
        { id: 7, value: 50, label: "7" },
        { id: 8, value: 10, label: "8" },
        { id: 9, value: 10, label: "9" },
        { id: 10, value: 10, label: "10" },
        { id: 11, value: 10, label: "11" },
        { id: 12, value: 4, label: "12" },
        { id: 13, value: 2, label: "13" },
        { id: 14, value: 1, label: "14" },
    ]);
    var nodes2 = new vis.DataSet([
        { id: 1, value: 1, label: "23" },
        { id: 2, value: 2, label: "23" },
        { id: 3, value: 3, label: "23" },
        { id: 4, value: 4, label: "23" },
        { id: 5, value: 23, label: "23" },
        { id: 6, value: 10, label: "23" },
        { id: 7, value: 50, label: "23" },
        { id: 8, value: 10, label: "8" },
        { id: 9, value: 10, label: "9" },
        { id: 10, value: 10, label: "10" },
        { id: 11, value: 10, label: "11" },
        { id: 12, value: 4, label: "12" },
        { id: 13, value: 2, label: "13" },
        { id: 14, value: 1, label: "14" },
    ]);

    // create an array with edges
    var edges = new vis.DataSet([
        { from: 1, to: 2 },
        { from: 1, to: 4 },
        { from: 1, to: 5 },
        { from: 2, to: 6 },
        { from: 2, to: 7 },
        { from: 2, to: 8 },
        { from: 3, to: 9 },
        { from: 3, to: 10 },
        { from: 3, to: 11 },
        { from: 10, to: 12 },
        { from: 10, to: 13 },
        { from: 10, to: 14 },
        { from: 7, to: 11 },
        { from: 8, to: 14 },
        { from: 11, to: 12 },
        { from: 5, to: 9 },
    ]);
    var edges2 = new vis.DataSet([
        { from: 1, to: 2 },
        { from: 1, to: 4 },
        { from: 1, to: 5 },
        { from: 2, to: 6 },
        { from: 2, to: 7 },
        { from: 2, to: 8 },
        { from: 3, to: 9 },
        { from: 3, to: 10 },
        { from: 3, to: 11 },
        { from: 10, to: 12 },
        { from: 10, to: 13 },
        { from: 10, to: 14 },
        { from: 7, to: 11 },
        { from: 8, to: 14 },
        { from: 11, to: 12 },
        { from: 5, to: 9 },
    ]);

    // create a network
    var container = document.getElementById("mynetwork");
    var container2 = document.getElementById("mynetwork2");

    // provide the data in the vis format
    var data = {
        nodes: nodes,
        edges: edges,
    };
    var data2 = {
        nodes: nodes2,
        edges: edges2,
    };
    var options = {
        nodes: {
            autoResize: true,
            height: "100%",
            width: "100%",
            shape: "circle",
            font: {
                size: 30,
            },
            scaling: {
                label: {
                    min: 8,
                    max: 50,
                },
            },
            borderWidth: 1,
            shadow: true,
            margin: {
                top: 10,
                left: 20,
                right: 20,
                bottom: 10,
            },
            color: {
                border: "",
                background: "#b2dfdb",
                highlight: {
                    border: "#e57373",
                    background: "#ffcdd2",
                },
            },
        },
        layout: {
            improvedLayout: true,
            hierarchical: {
                enabled: false,
                direction: "UD",
                sortMethod: "hubsize",
                parentCentralization: true,
                blockShifting: true,
                edgeMinimization: true,
            },
        },
        edges: {
            smooth: true,
            chosen: true,
            arrows: {
                to: {
                    enabled: true,
                    type: "arrow",
                },
            },
            color: {
                color: "#b2dfdb",
                highlight: "#ffcdd2",
                hover: "#848484",
                inherit: "from",
                opacity: 1.0,
            },
        },
    };

    var options2 = {
        nodes: {
            autoResize: true,
            height: "100%",
            width: "100%",
            shape: "circle",
            font: {
                size: 30,
            },
            scaling: {
                label: {
                    min: 8,
                    max: 50,
                },
            },
            borderWidth: 1,
            shadow: true,
            margin: {
                top: 10,
                left: 20,
                right: 20,
                bottom: 10,
            },
            color: {
                border: "",
                background: "#b2dfdb",
                highlight: {
                    border: "#e57373",
                    background: "#ffcdd2",
                },
            },
        },
        layout: {
            improvedLayout: true,
            hierarchical: {
                enabled: false,
                direction: "UD",
                sortMethod: "hubsize",
                parentCentralization: true,
                blockShifting: true,
                edgeMinimization: true,
            },
        },
        edges: {
            smooth: true,
            chosen: true,
            arrows: {
                to: {
                    enabled: true,
                    type: "arrow",
                },
            },
            color: {
                color: "#b2dfdb",
                highlight: "#ffcdd2",
                hover: "#848484",
                inherit: "from",
                opacity: 1.0,
            },
        },
    };
    // initialize your network!
    var network = new vis.Network(container, data, options);
    var network2 = new vis.Network(container2, data2, options2);
}



export default customJS;
