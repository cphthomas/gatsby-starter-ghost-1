const customJS = () => {
    $("body").tooltip({ selector: "[data-toggle=tooltip]" });

    waitForElement("#vis11, #vis12, #vis13", 8000)
        .then(function () {
            console.log("#vis11 is loaded.. do stuff");
            visScript1();
        })
        .catch(() => {
            console.log("#vis11 did not load in 8 seconds");
        });

    waitForElement("#vis31, #vis32, #vis33,#vis34,#vis35", 8000)
        .then(function () {
            console.log("#vis31 is loaded.. do stuff");
            visScript3();
        })
        .catch(() => {
            console.log("#vis31 did not load in 8 seconds");
        });
    waitForElement("#vis41", 8000)
        .then(function () {
            console.log("#vis41 is loaded.. do stuff");
            visScript4();
        })
        .catch(() => {
            console.log("#vis41 did not load in 8 seconds");
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

var nodes1 = {
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
};
var layout1 = {
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
};

var layout2 = {
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
};
var edges1 = {
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
};

var edges2 = {
    length: 40,
    smooth: false,
    chosen: true,
    arrows: {
        to: {
            enabled: true,
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
};

var edges3 = {
    length: 40,
    smooth: true,
    chosen: true,
    color: {
        color: "black",
        highlight: "orange",
        hover: "#848484",
        inherit: "from",
        opacity: 1.0,
    },
};

var optionsUD = {
    nodes: nodes1,
    autoResize: true,
    layout: layout1,
    edges: edges1,
};

var optionsLRARROW = {
    nodes: nodes1,
    autoResize: true,
    layout: layout2,
    edges: edges2
};

var optionsLRARROWCURVE = {
    nodes: nodes1,
    autoResize: true,
    layout: layout2,
    edges: edges3
};

function visScript1() {
    // vis11
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
    var edges11 = new vis.DataSet([
        { from: 1, to: 2 },
        { from: 2, to: 3 },
        { from: 3, to: 1 },
    ]);
    var container11 = document.getElementById("vis11");
    var data11 = {
        nodes: nodes11,
        edges: edges11,
    };
    var vis11 = new vis.Network(container11, data11, optionsUD);

    //##################### vis12
    var nodes12 = new vis.DataSet([
        { id: 1, font: { size: 20 }, level: "1", label: "Højesteret" },
        { id: 2, font: { size: 18 }, level: "2", label: "Vestre\nLandsret" },
        { id: 3, font: { size: 18 }, level: "2", label: "Østre\nLandsret" },
        { id: 4, font: { size: 18 }, level: "3", label: "Byretterne" },
        {
            id: 5,
            font: { size: 12 },
            level: "4",
            label: "Sø og\nhandelsretten",
        },
        {
            id: 6,
            font: { size: 12 },
            level: "4",
            label: "Grønlands-\ndomstolen",
        },
        { id: 7, font: { size: 12 }, level: "4", label: "Retten på\nFærøerne" },
        {
            id: 8,
            font: { size: 12 },
            level: "1",
            label:
                " Procesbevillingsnævnet \n Den særlige klageret \n Dommerudnævnelsesrådet \n Bibeskæftigelsesnævnet",
        },
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
    var container12 = document.getElementById("vis12");
    var data12 = {
        nodes: nodes12,
        edges: edges12,
    };
    var vis12 = new vis.Network(container12, data12, optionsUD);

    //##################### vis13
    var nodes13 = new vis.DataSet([
        {
            id: 1,
            font: { size: 25 },
            level: "1",
            label: "Byrettens afdelinger",
        },
        { id: 2, font: { size: 14 }, level: "2", label: "Civilretten" },
        { id: 3, font: { size: 14 }, level: "2", label: "Fogedretten" },
        { id: 4, font: { size: 14 }, level: "2", label: "Skifteretten" },
        { id: 5, font: { size: 14 }, level: "2", label: "Boligretten" },
        { id: 6, font: { size: 14 }, level: "2", label: "Kriminalretten" },
    ]);
    var edges13 = new vis.DataSet([
        { from: 1, to: 2 },
        { from: 1, to: 6 },
        { from: 1, to: 3 },
        { from: 1, to: 4 },
        { from: 1, to: 5 },
    ]);
    var container13 = document.getElementById("vis13");
    var data13 = {
        nodes: nodes13,
        edges: edges13,
    };
    var vis13 = new vis.Network(container13, data13, optionsUD);
}

function visScript3() {
    //##################### vis31
    var nodes31 = new vis.DataSet([
        { id: 1, value: 10, level: "1", label: "Aftaleloven" },
        {
            id: 2,
            value: 10,
            level: "2",
            label: "Indgåelse af forsikringsaftaler",
        },
        { id: 3, value: 10, level: "2", label: "Indgåelse af kreditaftaler" },
        { id: 4, value: 10, level: "2", label: "Forbrugeraftaler" },
        { id: 5, value: 10, level: "2", label: "Aftaler om pant" },
        { id: 6, value: 10, level: "2", label: "Aftaler om køb" },
        { id: 7, value: 10, level: "2", label: "Aftaler om kautionsformer" },
    ]);
    var edges31 = new vis.DataSet([
        { from: 1, to: 2 },
        { from: 1, to: 3 },
        { from: 1, to: 4 },
        { from: 1, to: 5 },
        { from: 1, to: 6 },
        { from: 1, to: 7 },
    ]);
    
  
    var container31 = document.getElementById("vis31");
    var data31 = {
        nodes: nodes31,
        edges: edges31,
    };
    var vis31 = new vis.Network(container31, data31, optionsLRARROW);

    //##################### vis32
    var nodes32 = new vis.DataSet([
        { id: 1,  value: 10, level: "1", label: "Sælger" ,color: {border: "red", background: "red"}},
        { id: 2, value: 10, level: "2", label: "Køber" ,color: {border: "blue", background: "blue"}},
    ]);
    var edges32 = new vis.DataSet([
        { from: 1, to: 2 , label: "Varer\nYdelser",smooth: {type: 'curvedCW', roundness: 0.2},arrows: {to: {enabled: true, type: "arrow"}}},
        { from: 2, to: 1 , label: "Penge\nModydelse",smooth: {type: 'curvedCW', roundness: 0.2},arrows: {to: {enabled: true, type: "arrow"}}}, 
    ]);
    var container32 = document.getElementById("vis32");
    var data32 = {
        nodes: nodes32,
        edges: edges32,
    };
    var vis32 = new vis.Network(container32, data32, optionsLRARROWCURVE);

    //##################### vis33
    var nodes33 = new vis.DataSet([
        { id: 1,  value: 10, level: "1", label: "Testator" ,color: {border: "red", background: "red"}},
        { id: 2, value: 10, level: "2", label: "Arving" ,color: {border: "blue", background: "blue"}},
    ]);
    var edges33 = new vis.DataSet([
        { from: 1, to: 2 , label: "ARV"},
       
    ]);
    var container33 = document.getElementById("vis33");
    var data33 = {
        nodes: nodes33,
        edges: edges33,
    };
    var vis33 = new vis.Network(container33, data33, optionsLRARROW);

    //##################### vis34
    var nodes34 = new vis.DataSet([
        { id: 1,  value: 10, level: "1", label: "Sælger\nTilbudsgiver",color: {border: "red", background: "red"}},
        { id: 2, value: 10, level: "2", label: "Køber\nTilbudsmodtager",color: {border: "blue", background: "blue"} },
    ]);
    var edges34 = new vis.DataSet([
        { from: 1, to: 2 , label: "1 Sælger sender\ntilbud til køber",smooth: {type: 'curvedCW', roundness: 0.4},arrows: {to: {enabled: true, type: "arrow"}}},
        { from: 2, to: 1 , label: "2 Køber sender\naccept/ordre",smooth: {type: 'curvedCW', roundness: 0.4},arrows: {to: {enabled: true, type: "arrow"}}}, 
    ]);
    var container34 = document.getElementById("vis34");
    var data34 = {
        nodes: nodes34,
        edges: edges34,
    };
    var vis34 = new vis.Network(container34, data34, optionsLRARROWCURVE);


     //##################### vis35
     var nodes35 = new vis.DataSet([
        { id: 1,  value: 10, level: "2", label: "Sælger\nTilbudsmodtager",color: {border: "red", background: "red"} },
        { id: 2, value: 10, level: "1", label: "Køber\nTilbudsgiver" ,color: {border: "blue", background: "blue"}},
    ]);
    var edges35 = new vis.DataSet([
        { from: 2, to: 1 , label: "1 Køber sender\nkøbstilbud/ordre",smooth: {type: 'curvedCW', roundness: 0.4},arrows: {to: {enabled: true, type: "arrow"}}},
        { from: 1, to: 2 , label: "2 Sælger sender\nAccept/ordrebekræftelse",smooth: {type: 'curvedCW', roundness: 0.4},arrows: {to: {enabled: true, type: "arrow"}}}, 
        
    ]);
    var container35 = document.getElementById("vis35");
    var data35 = {
        nodes: nodes35,
        edges: edges35,
    };
    var vis35 = new vis.Network(container35, data35, optionsLRARROWCURVE);
}

function visScript4() {
    // ####################### vis41
    var nodes41 = new vis.DataSet([
        { id: 1, font: { size: 20 }, level: "1", label: "Fuldmagtsgiver\nHovedmand",color: {border: "red", background: "red"} },
        { id: 2, font: { size: 20 }, level: "1", label: "Fuldmægtig\nMellemmand" ,color: {border: "blue", background: "blue"}},
        { id: 3, font: { size: 20 }, level: "2", label: "Trediemand\nAftalepart" ,color: {border: "green", background: "green"}},
    ]);
    var edges41 = new vis.DataSet([
        { from: 1, to: 2, label: "Fuldmagt",smooth: {type: 'curvedCW', roundness: 0.4},arrows: {to: {enabled: true, type: "arrow"}}},
        { from: 2, to: 3, label: "Aftale indgås",smooth: {type: 'curvedCW', roundness: 0.4},arrows: {to: {enabled: true, type: "arrow"},from: {enabled: true, type: "arrow"}}},
        { from: 3, to: 1 },
    ]);
    var container41 = document.getElementById("vis41");
    var data41 = {
        nodes: nodes41,
        edges: edges41,
    };
    var vis41 = new vis.Network(container41, data41, optionsUD);
}

export default customJS;
