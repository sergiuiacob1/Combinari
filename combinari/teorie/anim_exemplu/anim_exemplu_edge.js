/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};    fonts['ubuntu-mono, sans-serif']='<script src=\"http://use.edgefonts.net/ubuntu-mono:n7,i7,n4,i4:all.js\"></script>';
    fonts['comfortaa, sans-serif']='<script src=\"http://use.edgefonts.net/comfortaa:n4,n3,n7:all.js\"></script>';

var opts = {};
var resources = [
];
var symbols = {
"stage": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'Rectangle3',
                type: 'rect',
                rect: ['-22px', '-40px','902px','646px','auto', 'auto'],
                fill: ["rgba(241,241,241,1.00)"],
                stroke: [1,"rgb(77, 169, 128)","solid"]
            },
            {
                id: 'Text',
                type: 'text',
                rect: ['34px', '26px','auto','auto','auto', 'auto'],
                text: "Exemplu:",
                align: "left",
                font: ['Verdana, Geneva, sans-serif', 60, "rgba(51,51,51,1.00)", "300", "none", "normal"]
            },
            {
                id: 'ex1',
                type: 'group',
                rect: ['112', '99px','698','66','auto', 'auto'],
                opacity: 1,
                c: [
                {
                    id: 'Text2',
                    display: 'block',
                    type: 'text',
                    rect: ['0px', '14px','auto','auto','auto', 'auto'],
                    opacity: 1,
                    text: "-",
                    align: "left",
                    font: ['Verdana, Geneva, sans-serif', 40, "rgba(51,51,51,1.00)", "300", "none", "normal"]
                },
                {
                    id: 'Text3',
                    display: 'block',
                    type: 'text',
                    rect: ['118px', '14px','auto','auto','auto', 'auto'],
                    opacity: 1,
                    text: "(combinări de 4 luate câte 2)",
                    align: "left",
                    font: ['Verdana, Geneva, sans-serif', 40, "rgba(51,51,51,1.00)", "300", "none", "normal"]
                },
                {
                    id: 'Text4',
                    display: 'block',
                    type: 'text',
                    rect: ['30px', '3px','auto','auto','auto', 'auto'],
                    opacity: 1,
                    text: "C",
                    align: "left",
                    font: ['Verdana, Geneva, sans-serif', 60, "rgba(51,51,51,1.00)", "300", "none", "normal"]
                },
                {
                    id: 'Text6',
                    display: 'block',
                    type: 'text',
                    rect: ['73px', '0px','auto','auto','auto', 'auto'],
                    opacity: 1,
                    text: "2<br>4",
                    align: "left",
                    font: ['Verdana, Geneva, sans-serif', 32, "rgba(51,51,51,1.00)", "300", "none", "normal"]
                }]
            },
            {
                id: 'val_ex1',
                type: 'group',
                rect: ['274', '176','185','91','auto', 'auto'],
                opacity: 1,
                c: [
                {
                    id: 'Text7',
                    display: 'block',
                    type: 'text',
                    rect: ['0px', '0px','auto','auto','auto', 'auto'],
                    opacity: 1,
                    text: "1 2",
                    align: "left",
                    font: ['Verdana, Geneva, sans-serif', 30, "rgba(51,51,51,1.00)", "300", "none", "normal"]
                },
                {
                    id: 'Text7Copy',
                    display: 'block',
                    type: 'text',
                    rect: ['0px', '30px','auto','auto','auto', 'auto'],
                    opacity: 1,
                    text: "1 3",
                    align: "left",
                    font: ['Verdana, Geneva, sans-serif', 30, "rgba(51,51,51,1.00)", "300", "none", "normal"]
                },
                {
                    id: 'Text7Copy2',
                    display: 'block',
                    type: 'text',
                    rect: ['0px', '60px','auto','auto','auto', 'auto'],
                    opacity: 1,
                    text: "1 4",
                    align: "left",
                    font: ['Verdana, Geneva, sans-serif', 30, "rgba(51,51,51,1.00)", "300", "none", "normal"]
                },
                {
                    id: 'Text7Copy3',
                    display: 'block',
                    type: 'text',
                    rect: ['140px', '0px','auto','auto','auto', 'auto'],
                    opacity: 1,
                    text: "2 3",
                    align: "left",
                    font: ['Verdana, Geneva, sans-serif', 30, "rgba(51,51,51,1.00)", "300", "none", "normal"]
                },
                {
                    id: 'Text7Copy4',
                    display: 'block',
                    type: 'text',
                    rect: ['140px', '30px','auto','auto','auto', 'auto'],
                    opacity: 1,
                    text: "2 4",
                    align: "left",
                    font: ['Verdana, Geneva, sans-serif', 30, "rgba(51,51,51,1.00)", "300", "none", "normal"]
                },
                {
                    id: 'Text7Copy5',
                    display: 'block',
                    type: 'text',
                    rect: ['140px', '60px','auto','auto','auto', 'auto'],
                    opacity: 1,
                    text: "3 4",
                    align: "left",
                    font: ['Verdana, Geneva, sans-serif', 30, "rgba(51,51,51,1.00)", "300", "none", "normal"]
                }]
            },
            {
                id: 'ex1Copy',
                type: 'group',
                rect: ['112', '289px','698','66','auto', 'auto'],
                opacity: 1,
                c: [
                {
                    id: 'Text2Copy',
                    display: 'block',
                    type: 'text',
                    rect: ['0px', '14px','auto','auto','auto', 'auto'],
                    opacity: 1,
                    text: "-",
                    align: "left",
                    font: ['Verdana, Geneva, sans-serif', 40, "rgba(51,51,51,1.00)", "300", "none", "normal"]
                },
                {
                    id: 'Text3Copy',
                    display: 'block',
                    type: 'text',
                    rect: ['118px', '14px','auto','auto','auto', 'auto'],
                    opacity: 1,
                    text: "(combinări de 5 luate câte 3)",
                    align: "left",
                    font: ['Verdana, Geneva, sans-serif', 40, "rgba(51,51,51,1.00)", "300", "none", "normal"]
                },
                {
                    id: 'Text4Copy',
                    display: 'block',
                    type: 'text',
                    rect: ['30px', '3px','auto','auto','auto', 'auto'],
                    opacity: 1,
                    text: "C",
                    align: "left",
                    font: ['Verdana, Geneva, sans-serif', 60, "rgba(51,51,51,1.00)", "300", "none", "normal"]
                },
                {
                    id: 'Text6Copy',
                    display: 'block',
                    type: 'text',
                    rect: ['71px', '0px','auto','auto','auto', 'auto'],
                    opacity: 1,
                    text: "3<br>5",
                    align: "left",
                    font: ['Verdana, Geneva, sans-serif', 32, "rgba(51,51,51,1.00)", "300", "none", "normal"]
                }]
            },
            {
                id: 'val_ex1Copy',
                type: 'group',
                rect: ['274', '366px','185','91','auto', 'auto'],
                opacity: 1,
                c: [
                {
                    id: 'Text7Copy11',
                    display: 'block',
                    type: 'text',
                    rect: ['0px', '0px','auto','auto','auto', 'auto'],
                    opacity: 1,
                    text: "1 2 3<br>",
                    align: "left",
                    font: ['Verdana, Geneva, sans-serif', 30, "rgba(51,51,51,1.00)", "300", "none", "normal"]
                },
                {
                    id: 'Text7Copy10',
                    display: 'block',
                    type: 'text',
                    rect: ['0px', '30px','auto','auto','auto', 'auto'],
                    opacity: 1,
                    text: "1 2 4",
                    align: "left",
                    font: ['Verdana, Geneva, sans-serif', 30, "rgba(51,51,51,1.00)", "300", "none", "normal"]
                },
                {
                    id: 'Text7Copy9',
                    display: 'block',
                    type: 'text',
                    rect: ['0px', '60px','auto','auto','auto', 'auto'],
                    opacity: 1,
                    text: "1 2 5",
                    align: "left",
                    font: ['Verdana, Geneva, sans-serif', 30, "rgba(51,51,51,1.00)", "300", "none", "normal"]
                },
                {
                    id: 'Text7Copy8',
                    display: 'block',
                    type: 'text',
                    rect: ['140px', '0px','auto','auto','auto', 'auto'],
                    opacity: 1,
                    text: "1 4 5",
                    align: "left",
                    font: ['Verdana, Geneva, sans-serif', 30, "rgba(51,51,51,1.00)", "300", "none", "normal"]
                },
                {
                    id: 'Text7Copy7',
                    display: 'block',
                    type: 'text',
                    rect: ['140px', '30px','auto','auto','auto', 'auto'],
                    opacity: 1,
                    text: "2 3 4",
                    align: "left",
                    font: ['Verdana, Geneva, sans-serif', 30, "rgba(51,51,51,1.00)", "300", "none", "normal"]
                },
                {
                    id: 'Text7Copy6',
                    display: 'block',
                    type: 'text',
                    rect: ['140px', '60px','auto','auto','auto', 'auto'],
                    opacity: 1,
                    text: "2 3 5",
                    align: "left",
                    font: ['Verdana, Geneva, sans-serif', 30, "rgba(51,51,51,1.00)", "300", "none", "normal"]
                },
                {
                    id: 'Text7Copy13',
                    display: 'block',
                    type: 'text',
                    rect: ['0px', '120px','auto','auto','auto', 'auto'],
                    opacity: 1,
                    text: "1 3 5",
                    align: "left",
                    font: ['Verdana, Geneva, sans-serif', 30, "rgba(51,51,51,1.00)", "300", "none", "normal"]
                },
                {
                    id: 'Text7Copy12',
                    display: 'block',
                    type: 'text',
                    rect: ['140px', '120px','auto','auto','auto', 'auto'],
                    opacity: 1,
                    text: "3 4 5",
                    align: "left",
                    font: ['Verdana, Geneva, sans-serif', 30, "rgba(51,51,51,1.00)", "300", "none", "normal"]
                },
                {
                    id: 'Text7Copy15',
                    display: 'block',
                    type: 'text',
                    rect: ['0px', '90px','auto','auto','auto', 'auto'],
                    opacity: 1,
                    text: "1 3 4",
                    align: "left",
                    font: ['Verdana, Geneva, sans-serif', 30, "rgba(51,51,51,1.00)", "300", "none", "normal"]
                },
                {
                    id: 'Text7Copy14',
                    display: 'block',
                    type: 'text',
                    rect: ['140px', '90px','auto','auto','auto', 'auto'],
                    opacity: 1,
                    text: "2 4 5",
                    align: "left",
                    font: ['Verdana, Geneva, sans-serif', 30, "rgba(51,51,51,1.00)", "300", "none", "normal"]
                }]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_Text3Copy}": [
                ["style", "top", '14px'],
                ["style", "font-weight", '300'],
                ["style", "display", 'block'],
                ["style", "font-family", 'Verdana, Geneva, sans-serif'],
                ["color", "color", 'rgba(51,51,51,1.00)'],
                ["style", "opacity", '1'],
                ["style", "left", '118px'],
                ["style", "font-size", '40px']
            ],
            "${_ex1Copy}": [
                ["style", "top", '289px']
            ],
            "${_Text3}": [
                ["style", "top", '14px'],
                ["style", "font-weight", '300'],
                ["style", "display", 'block'],
                ["style", "font-family", 'Verdana, Geneva, sans-serif'],
                ["color", "color", 'rgba(51,51,51,1.00)'],
                ["style", "opacity", '1'],
                ["style", "left", '118px'],
                ["style", "font-size", '40px']
            ],
            "${_Text7Copy8}": [
                ["style", "top", '0px'],
                ["style", "font-weight", '300'],
                ["style", "display", 'block'],
                ["style", "font-family", 'Verdana, Geneva, sans-serif'],
                ["color", "color", 'rgba(51,51,51,1.00)'],
                ["style", "opacity", '1'],
                ["style", "left", '140px'],
                ["style", "font-size", '30px']
            ],
            "${_Text2}": [
                ["style", "top", '14px'],
                ["style", "font-weight", '300'],
                ["style", "display", 'block'],
                ["style", "font-family", 'Verdana, Geneva, sans-serif'],
                ["color", "color", 'rgba(51,51,51,1.00)'],
                ["style", "opacity", '1'],
                ["style", "left", '0px'],
                ["style", "font-size", '40px']
            ],
            "${_Text}": [
                ["style", "top", '26px'],
                ["color", "color", 'rgba(51,51,51,1.00)'],
                ["style", "font-family", 'Verdana, Geneva, sans-serif'],
                ["style", "left", '34px'],
                ["style", "font-weight", '300']
            ],
            "${_val_ex1Copy}": [
                ["style", "top", '366px']
            ],
            "${_Text7Copy6}": [
                ["style", "top", '60px'],
                ["style", "font-weight", '300'],
                ["style", "display", 'block'],
                ["style", "font-family", 'Verdana, Geneva, sans-serif'],
                ["color", "color", 'rgba(51,51,51,1.00)'],
                ["style", "opacity", '1'],
                ["style", "left", '140px'],
                ["style", "font-size", '30px']
            ],
            "${_Text7Copy10}": [
                ["style", "top", '30px'],
                ["style", "font-weight", '300'],
                ["style", "display", 'block'],
                ["style", "font-family", 'Verdana, Geneva, sans-serif'],
                ["color", "color", 'rgba(51,51,51,1.00)'],
                ["style", "opacity", '1'],
                ["style", "left", '0px'],
                ["style", "font-size", '30px']
            ],
            "${_Text2Copy}": [
                ["style", "top", '14px'],
                ["style", "font-weight", '300'],
                ["style", "display", 'block'],
                ["style", "font-family", 'Verdana, Geneva, sans-serif'],
                ["color", "color", 'rgba(51,51,51,1.00)'],
                ["style", "opacity", '1'],
                ["style", "left", '0px'],
                ["style", "font-size", '40px']
            ],
            "${_Text7Copy15}": [
                ["style", "top", '90px'],
                ["style", "font-weight", '300'],
                ["style", "display", 'block'],
                ["style", "font-family", 'Verdana, Geneva, sans-serif'],
                ["color", "color", 'rgba(51,51,51,1.00)'],
                ["style", "opacity", '1'],
                ["style", "left", '0px'],
                ["style", "font-size", '30px']
            ],
            "${_Text7Copy3}": [
                ["style", "top", '0px'],
                ["style", "font-weight", '300'],
                ["style", "display", 'block'],
                ["style", "font-family", 'Verdana, Geneva, sans-serif'],
                ["color", "color", 'rgba(51,51,51,1.00)'],
                ["style", "opacity", '1'],
                ["style", "left", '140px'],
                ["style", "font-size", '30px']
            ],
            "${_Text7Copy11}": [
                ["style", "top", '0px'],
                ["style", "font-weight", '300'],
                ["style", "display", 'block'],
                ["style", "font-family", 'Verdana, Geneva, sans-serif'],
                ["color", "color", 'rgba(51,51,51,1.00)'],
                ["style", "opacity", '1'],
                ["style", "left", '0px'],
                ["style", "font-size", '30px']
            ],
            "${_Text4Copy}": [
                ["style", "top", '3px'],
                ["style", "font-weight", '300'],
                ["style", "display", 'block'],
                ["style", "font-family", 'Verdana, Geneva, sans-serif'],
                ["color", "color", 'rgba(51,51,51,1.00)'],
                ["style", "opacity", '1'],
                ["style", "left", '30px'],
                ["style", "font-size", '60px']
            ],
            "${_Text7Copy5}": [
                ["style", "top", '60px'],
                ["style", "font-weight", '300'],
                ["style", "display", 'block'],
                ["style", "font-family", 'Verdana, Geneva, sans-serif'],
                ["color", "color", 'rgba(51,51,51,1.00)'],
                ["style", "opacity", '1'],
                ["style", "left", '140px'],
                ["style", "font-size", '30px']
            ],
            "${_ex1}": [
                ["style", "top", '99px']
            ],
            "${_Text7Copy}": [
                ["style", "top", '30px'],
                ["style", "font-weight", '300'],
                ["style", "display", 'block'],
                ["style", "font-family", 'Verdana, Geneva, sans-serif'],
                ["color", "color", 'rgba(51,51,51,1.00)'],
                ["style", "opacity", '1'],
                ["style", "left", '0px'],
                ["style", "font-size", '30px']
            ],
            "${_Text6Copy}": [
                ["style", "top", '0px'],
                ["style", "font-weight", '300'],
                ["style", "display", 'block'],
                ["style", "font-family", 'Verdana, Geneva, sans-serif'],
                ["color", "color", 'rgba(51,51,51,1.00)'],
                ["style", "opacity", '1'],
                ["style", "left", '71px'],
                ["style", "font-size", '32px']
            ],
            "${_Text7Copy2}": [
                ["style", "top", '60px'],
                ["style", "font-weight", '300'],
                ["style", "display", 'block'],
                ["style", "font-family", 'Verdana, Geneva, sans-serif'],
                ["color", "color", 'rgba(51,51,51,1.00)'],
                ["style", "opacity", '1'],
                ["style", "left", '0px'],
                ["style", "font-size", '30px']
            ],
            "${_Text7Copy14}": [
                ["style", "top", '90px'],
                ["style", "font-weight", '300'],
                ["style", "display", 'block'],
                ["style", "font-family", 'Verdana, Geneva, sans-serif'],
                ["color", "color", 'rgba(51,51,51,1.00)'],
                ["style", "opacity", '1'],
                ["style", "left", '140px'],
                ["style", "font-size", '30px']
            ],
            "${_Text7Copy13}": [
                ["style", "top", '120px'],
                ["style", "font-weight", '300'],
                ["style", "display", 'block'],
                ["style", "font-family", 'Verdana, Geneva, sans-serif'],
                ["color", "color", 'rgba(51,51,51,1.00)'],
                ["style", "opacity", '1'],
                ["style", "left", '0px'],
                ["style", "font-size", '30px']
            ],
            "${_Text4}": [
                ["style", "top", '3px'],
                ["style", "font-weight", '300'],
                ["style", "display", 'block'],
                ["style", "font-family", 'Verdana, Geneva, sans-serif'],
                ["color", "color", 'rgba(51,51,51,1.00)'],
                ["style", "opacity", '1'],
                ["style", "left", '30px'],
                ["style", "font-size", '60px']
            ],
            "${_Text6}": [
                ["style", "top", '0px'],
                ["style", "font-weight", '300'],
                ["style", "display", 'block'],
                ["style", "font-family", 'Verdana, Geneva, sans-serif'],
                ["color", "color", 'rgba(51,51,51,1.00)'],
                ["style", "opacity", '1'],
                ["style", "left", '73px'],
                ["style", "font-size", '32px']
            ],
            "${_Rectangle3}": [
                ["color", "background-color", 'rgba(241,241,241,1)']
            ],
            "${_Text7Copy12}": [
                ["style", "top", '120px'],
                ["style", "font-weight", '300'],
                ["style", "display", 'block'],
                ["style", "font-family", 'Verdana, Geneva, sans-serif'],
                ["color", "color", 'rgba(51,51,51,1.00)'],
                ["style", "opacity", '1'],
                ["style", "left", '140px'],
                ["style", "font-size", '30px']
            ],
            "${_Text7Copy9}": [
                ["style", "top", '60px'],
                ["style", "font-weight", '300'],
                ["style", "display", 'block'],
                ["style", "font-family", 'Verdana, Geneva, sans-serif'],
                ["color", "color", 'rgba(51,51,51,1.00)'],
                ["style", "opacity", '1'],
                ["style", "left", '0px'],
                ["style", "font-size", '30px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '563px'],
                ["style", "width", '850px']
            ],
            "${_Text7Copy4}": [
                ["style", "top", '30px'],
                ["style", "font-weight", '300'],
                ["style", "display", 'block'],
                ["style", "font-family", 'Verdana, Geneva, sans-serif'],
                ["color", "color", 'rgba(51,51,51,1.00)'],
                ["style", "opacity", '1'],
                ["style", "left", '140px'],
                ["style", "font-size", '30px']
            ],
            "${_Text7}": [
                ["style", "top", '0px'],
                ["style", "font-weight", '300'],
                ["style", "display", 'block'],
                ["style", "font-family", 'Verdana, Geneva, sans-serif'],
                ["color", "color", 'rgba(51,51,51,1.00)'],
                ["style", "opacity", '1'],
                ["style", "left", '0px'],
                ["style", "font-size", '30px']
            ],
            "${_Text7Copy7}": [
                ["style", "top", '30px'],
                ["style", "font-weight", '300'],
                ["style", "display", 'block'],
                ["style", "font-family", 'Verdana, Geneva, sans-serif'],
                ["color", "color", 'rgba(51,51,51,1.00)'],
                ["style", "opacity", '1'],
                ["style", "left", '140px'],
                ["style", "font-size", '30px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-168374331");
