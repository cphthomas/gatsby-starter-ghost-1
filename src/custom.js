const customJS = () => {
    $("body").tooltip({ selector: "[data-toggle=tooltip]" });

    waitForElement("#vis11, #vis12","#vis13","#vis31", 8000)
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
    var nodes11 = new vis.DataSet([
        {
            id: 1,
            value: 10,
            level: "1",
            label: "Lovgivende\nmagt\nFolketinget",
        },
        { id: 2, value: 10, level: "2", label: "Dømmende\nmagt\nDomstolene" },
        { id: 3, value: 10, level: "2", label: "Udøvende\nmagt\nRegeringen" },
    ]);
    var nodes12 = new vis.DataSet([
        { id: 1, font: { size: 20 },level: "1", label: "Højesteret" },
        { id: 2,  font: { size: 18 },level: "2", label: "Vestre\nLandsret" },
        { id: 3,  font: { size: 18 },level: "2", label: "Østre\nLandsret" },
        { id: 4,  font: { size: 18 },level: "3", label: "Byretterne" },
        { id: 5,  font: { size: 12 },level: "4", label: "Sø og\nhandelsretten" },
        { id: 6,  font: { size: 12 },level: "4", label: "Grønlands-\ndomstolen" },
        { id: 7,  font: { size: 12 },level: "4", label: "Retten på\nFærøerne" },
        { id: 8,  font: { size: 12 },level: "1", label: " Procesbevillingsnævnet \n Den særlige klageret \n Dommerudnævnelsesrådet \n Bibeskæftigelsesnævnet" },
    ]);
    var nodes13 = new vis.DataSet([
        { id: 1, font: { size: 25 }, level: "1", label: "Byrettens afdelinger" },
        { id: 2, font: { size: 14 }, level: "2", label: "Civilretten" },
        { id: 3, font: { size: 14 }, level: "2", label: "Fogedretten" },
        { id: 4, font: { size: 14 }, level: "2", label: "Skifteretten" },
        { id: 5, font: { size: 14 }, level: "2", label: "Boligretten" },
        { id: 6, font: { size: 14 }, level: "2", label: "Kriminalretten" },
    ]);
    var nodes31 = new vis.DataSet(
        options =
        [
        { id: 1, value: 10, level: "1", label: "Aftaleloven" },
        { id: 2, value: 10, level: "2", label: "Indgåelse af forsikringsaftaler" },
        { id: 3, value: 10, level: "2", label: "Indgåelse af kreditaftaler" },
        { id: 4, value: 10, level: "2", label: "Forbrugeraftaler" },
        { id: 5, value: 10, level: "2", label: "Aftaler om pant" },
        { id: 6, value: 10, level: "2", label: "Aftaler om køb" },
        { id: 7, value: 10, level: "2", label: "Aftaler om kautionsformer" },
    ]);

    // create an array with edges
    var edges11 = new vis.DataSet([
        { from: 1, to: 2 },
        { from: 2, to: 3 },
        { from: 3, to: 1 },


    ]);
    var edges12 = new vis.DataSet([
        { from: 1, to: 2 },
        { from: 1, to: 3 },
        { from: 1, to: 4 },
        { from: 2, to: 4 },
        { from: 3, to: 4 },
        { from: 2, to: 5 },
        { from: 3, to: 5 },
        { from: 2, to: 6 },
        { from: 3, to: 7 },
    ]);
    var edges13 = new vis.DataSet([
        { from: 1, to: 2 },
        { from: 1, to: 6 },
        { from: 1, to: 3 },
        { from: 1, to: 4 },
        { from: 1, to: 5 },
    ]);
    var edges31 = new vis.DataSet([
        { from: 1, to: 2 },
        { from: 1, to: 3 },
        { from: 1, to: 4 },
        { from: 1, to: 5 },
        { from: 1, to: 6 },
        { from: 1, to: 7 },
    ]);

    // create a network
    var container11 = document.getElementById("vis11");
    var container12 = document.getElementById("vis12");
    var container13 = document.getElementById("vis13");
    var container31 = document.getElementById("vis31");


    // provide the data in the vis format
    var data11 = {
        nodes: nodes11,
        edges: edges11,
    };
    var data12 = {
        nodes: nodes12,
        edges: edges12,
    };
    var data13 = {
        nodes: nodes13,
        edges: edges13,
    };
    var data31 = {


        nodes: nodes31,
        edges: edges31,
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
                    fontColor: "black",

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
                treeSpacing: 100,
                nodeDistance: 100,
            },
            maxVelocity: 146,
            solver: "hierarchicalRepulsion",
            timestep: 0.35,
            stabilization: {
                enabled: true,
                iterations: 2000,
            },
        },
        layout: {
            improvedLayout: true,
            hierarchical: {
                enabled: true,
                direction: "UD",
                levelSeparation: 120,
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

    var options2 = {
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
                    fontColor: "black",

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
                treeSpacing: 100,
                nodeDistance: 100,
            },
            maxVelocity: 146,
            solver: "hierarchicalRepulsion",
            timestep: 0.35,
            stabilization: {
                enabled: true,
                iterations: 2000,
            },
        },
        layout: {
            improvedLayout: true,
            hierarchical: {
                enabled: true,
                direction: "LR",
                levelSeparation: 420,
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
    var vis11 = new vis.Network(container11, data11, options);
    var vis12 = new vis.Network(container12, data12, options);
    var vis13 = new vis.Network(container13, data13, options);
    var vis31 = new vis.Network(container31, data31, options2);

}

export default customJS;
