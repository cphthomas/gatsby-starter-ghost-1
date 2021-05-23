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
        { id: 1, value: 10,level: "1", label: "Lovgivende magt \n Folketinget" },
        { id: 2, value: 10,level: "2", label: "Dømmende magt \n Domstolene" },
        { id: 3, value: 10,level: "2", label: "Udøvende magt \n Regeringen" },
        
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
        { from: 2, to: 3 },
        { from: 3, to: 1 },
        
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
            shape: "box",
            
            font: {
                color: "white",
                size: 10,
            },
            scaling: {
                label: {
                    min: 8,
                    max: 50,
                },
            },
            borderWidth: 1,
            shadow: false,
            margin: {
                top: 10,
                left: 10,
                right: 10,
                bottom: 10,
            },
            color: {
                
                border: "black",
                background: "black",
                highlight: {
                    fontColor:"black",
                    
                    border: "orange",
                    background: "orange",
                },
            },
        },
        autoResize: true,
    physics: {
        hierarchicalRepulsion: {
            centralGravity: 0.0,
            springLength: 230,
            springConstant: 0.18,
            avoidOverlap: -10,
            treeSpacing:1000,
            nodeDistance:200
        },
        maxVelocity: 146,
        solver: 'hierarchicalRepulsion',
        timestep: 0.35,
        stabilization: {
            enabled: true,
            iterations: 2000,
        }
    },
        layout: {
            improvedLayout: true,
            hierarchical: {
                enabled: true,
                direction: "UD",
                levelSeparation: 200,
      nodeSpacing: 10,
      treeSpacing: 10,
      blockShifting: true,
                sortMethod: "hubsize",
                parentCentralization: true,
                blockShifting: true,
                edgeMinimization: true,
            },
        },
        edges: {
            smooth: false,
            chosen: true,
            arrows: {
                to: {
                    enabled: false,
                    type: "arrow",
                },
            },
            color: {
                color: "black",
                highlight: "orange",
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
