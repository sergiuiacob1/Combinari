/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};    fonts['bubbler-one, sans-serif']='<script src=\"http://use.edgefonts.net/bubbler-one:n4:all.js\"></script>';
    fonts['dosis, sans-serif']='<script src=\"http://use.edgefonts.net/dosis:n8,n3,n2,n7,n6,n4,n5:all.js\"></script>';
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
                id: 'Fundal',
                display: 'block',
                type: 'rect',
                rect: ['-8px', '-6px','1296px','677px','auto', 'auto'],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'C',
                display: 'block',
                type: 'text',
                rect: ['366px', '248px','548px','264px','auto', 'auto'],
                text: "C",
                align: "center",
                font: ['comfortaa, sans-serif', 94, "rgba(98,86,79,1.00)", "500", "none", "normal"]
            },
            {
                id: 'Copil-Test',
                display: 'block',
                type: 'rect',
                rect: ['522px', '156px','106px','120px','auto', 'auto'],
                fill: ["rgba(110,134,128,1.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'Panou',
                display: 'block',
                type: 'rect',
                rect: ['20px', '-6px','1234px','0px','auto', 'auto'],
                fill: ["rgba(192,192,192,1)"],
                stroke: [3,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'Skip',
                display: 'none',
                type: 'text',
                rect: ['1167px', '582px','175px','56px','auto', 'auto'],
                text: "skip",
                align: "center",
                font: ['comfortaa, sans-serif', 50, "rgba(98,86,79,1.00)", "500", "none", "normal"]
            },
            {
                id: 'mica',
                type: 'ellipse',
                rect: ['718px', '192px','28px','28px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(146,183,174,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'medie',
                type: 'ellipse',
                rect: ['766px', '158px','60px','56px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(146,183,174,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'mare',
                type: 'ellipse',
                rect: ['842px', '88px','280px','142px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(146,183,174,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'Oare',
                type: 'text',
                rect: ['892px', '123px','auto','auto','auto', 'auto'],
                text: "Oare?",
                align: "center",
                font: ['comfortaa, sans-serif', 58, "rgba(98,86,79,1.00)", "500", "none", "normal"]
            },
            {
                id: 'Exclamare',
                display: 'block',
                type: 'group',
                rect: ['512px', '188px','24','120','auto', 'auto'],
                c: [
                {
                    id: 'Punct',
                    type: 'rect',
                    rect: ['0px', '0px','24px','80px','auto', 'auto'],
                    fill: ["rgba(146,183,174,1.00)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                },
                {
                    id: 'Linie',
                    type: 'ellipse',
                    rect: ['0px', '92px','24px','28px','auto', 'auto'],
                    borderRadius: ["50%", "50%", "50%", "50%"],
                    fill: ["rgba(146,183,174,1.00)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                }]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_medie}": [
                ["style", "top", '158px'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '0'],
                ["style", "left", '766px'],
                ["color", "background-color", 'rgba(146,183,174,1.00)']
            ],
            "${_Skip}": [
                ["style", "top", '582px'],
                ["style", "font-size", '50px'],
                ["color", "color", 'rgba(98,86,79,1.00)'],
                ["style", "height", '56px'],
                ["style", "display", 'none'],
                ["style", "left", '1167px'],
                ["style", "width", 'auto']
            ],
            "${_C}": [
                ["color", "color", 'rgba(98,86,79,1.00)'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '366px'],
                ["style", "font-size", '238px'],
                ["style", "top", '248px'],
                ["style", "text-align", 'center'],
                ["style", "height", '264px'],
                ["style", "font-family", 'comfortaa, sans-serif'],
                ["style", "font-weight", '500'],
                ["style", "display", 'block']
            ],
            "${_Linie}": [
                ["style", "top", '92px'],
                ["style", "left", '0px'],
                ["color", "background-color", 'rgba(146,183,174,1.00)']
            ],
            "${_Fundal}": [
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "opacity", '1'],
                ["style", "display", 'block']
            ],
            "${_mica}": [
                ["style", "top", '192px'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '0'],
                ["style", "left", '718px'],
                ["color", "background-color", 'rgba(146,183,174,1.00)']
            ],
            "${_Copil-Test}": [
                ["style", "top", '234px'],
                ["style", "height", '120px'],
                ["color", "background-color", 'rgba(110,134,128,1.00)'],
                ["style", "display", 'block'],
                ["style", "opacity", '0'],
                ["style", "left", '590px'],
                ["style", "width", '100px']
            ],
            "${_Oare}": [
                ["style", "top", '123px'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1'],
                ["color", "color", 'rgba(98,86,79,1.00)'],
                ["style", "opacity", '0'],
                ["style", "left", '892px'],
                ["style", "font-size", '58px']
            ],
            "${_Exclamare}": [
                ["style", "top", '188px'],
                ["style", "opacity", '0'],
                ["style", "left", '512px'],
                ["style", "display", 'block']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "overflow", 'visible'],
                ["style", "height", '660px'],
                ["style", "width", '1280px']
            ],
            "${_Punct}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["color", "background-color", 'rgba(146,183,174,1.00)']
            ],
            "${_mare}": [
                ["color", "background-color", 'rgba(146,183,174,1.00)'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1'],
                ["style", "height", '140px'],
                ["style", "opacity", '0'],
                ["style", "left", '842px'],
                ["style", "top", '88px']
            ],
            "${_Panou}": [
                ["color", "background-color", 'rgba(146,183,174,1.00)'],
                ["style", "border-style", 'solid'],
                ["style", "border-width", '3px'],
                ["style", "width", '1234px'],
                ["style", "top", '-6px'],
                ["style", "overflow", 'visible'],
                ["style", "display", 'block'],
                ["color", "border-color", 'rgba(146,183,174,1.00)'],
                ["style", "left", '20px'],
                ["style", "height", '0px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 15750,
            autoPlay: true,
            labels: {
                "Expand": 6500,
                "DupaExpand": 8600,
                "SareCopilu": 10000,
                "Final": 13250,
                "Panou": 13750,
                "Final 1": 15750
            },
            timeline: [
                { id: "eid78", tween: [ "transform", "${_mare}", "scaleY", '1.05', { fromValue: '1'}], position: 6500, duration: 1000 },
                { id: "eid80", tween: [ "transform", "${_mare}", "scaleY", '1', { fromValue: '1.05'}], position: 7500, duration: 1000 },
                { id: "eid82", tween: [ "transform", "${_mare}", "scaleY", '0', { fromValue: '1'}], position: 8500, duration: 500 },
                { id: "eid152", tween: [ "color", "${_Panou}", "background-color", 'rgba(192,192,192,0.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(146,183,174,1.00)'}], position: 12500, duration: 750 },
                { id: "eid163", tween: [ "color", "${_Panou}", "background-color", 'rgba(146,183,174,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(192,192,192,0.00)'}], position: 13750, duration: 0 },
                { id: "eid155", tween: [ "color", "${_Panou}", "background-color", 'rgba(192,192,192,0.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(146,183,174,1.00)'}], position: 15000, duration: 750 },
                { id: "eid161", tween: [ "style", "${_C}", "display", 'none', { fromValue: 'block'}], position: 12500, duration: 0 },
                { id: "eid165", tween: [ "style", "${_C}", "display", 'block', { fromValue: 'none'}], position: 13750, duration: 0 },
                { id: "eid168", tween: [ "style", "${_C}", "display", 'none', { fromValue: 'block'}], position: 15000, duration: 0 },
                { id: "eid18", tween: [ "style", "${_Oare}", "opacity", '1', { fromValue: '0'}], position: 5250, duration: 750 },
                { id: "eid86", tween: [ "transform", "${_Oare}", "scaleY", '0', { fromValue: '1'}], position: 8600, duration: 400 },
                { id: "eid174", tween: [ "style", "${_Panou}", "height", '620px', { fromValue: '0px'}], position: 11300, duration: 1000 },
                { id: "eid200", tween: [ "style", "${_Panou}", "height", '620px', { fromValue: '0px'}], position: 13750, duration: 1000 },
                { id: "eid112", tween: [ "style", "${_Copil-Test}", "height", '96px', { fromValue: '120px'}], position: 10000, duration: 200 },
                { id: "eid115", tween: [ "style", "${_Copil-Test}", "height", '120px', { fromValue: '96px'}], position: 10200, duration: 200 },
                { id: "eid117", tween: [ "style", "${_Copil-Test}", "height", '88px', { fromValue: '120px'}], position: 10400, duration: 400 },
                { id: "eid119", tween: [ "style", "${_Copil-Test}", "height", '120px', { fromValue: '88px'}], position: 10800, duration: 500 },
                { id: "eid107", tween: [ "style", "${_Copil-Test}", "left", '590px', { fromValue: '590px'}], position: 10000, duration: 0 },
                { id: "eid140", tween: [ "style", "${_Copil-Test}", "left", '593px', { fromValue: '590px'}], position: 13000, duration: 0 },
                { id: "eid137", tween: [ "style", "${_Skip}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid147", tween: [ "style", "${_Skip}", "display", 'none', { fromValue: 'none'}], position: 9500, duration: 0 },
                { id: "eid99", tween: [ "transform", "${_mica}", "scaleY", '0', { fromValue: '1'}], position: 9250, duration: 250 },
                { id: "eid103", tween: [ "style", "${_Copil-Test}", "width", '100px', { fromValue: '100px'}], position: 10000, duration: 0 },
                { id: "eid209", tween: [ "style", "${_Panou}", "display", 'none', { fromValue: 'block'}], position: 13250, duration: 0 },
                { id: "eid210", tween: [ "style", "${_Panou}", "display", 'block', { fromValue: 'none'}], position: 13750, duration: 0 },
                { id: "eid211", tween: [ "style", "${_Panou}", "display", 'none', { fromValue: 'block'}], position: 15750, duration: 0 },
                { id: "eid9", tween: [ "style", "${_Copil-Test}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 3000 },
                { id: "eid148", tween: [ "color", "${_Panou}", "border-color", 'rgba(146,183,174,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(146,183,174,1.00)'}], position: 12500, duration: 0 },
                { id: "eid156", tween: [ "color", "${_Panou}", "border-color", 'rgba(192,192,192,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(192,192,192,1.00)'}], position: 15000, duration: 0 },
                { id: "eid77", tween: [ "transform", "${_mare}", "scaleX", '1.05', { fromValue: '1'}], position: 6500, duration: 1000 },
                { id: "eid79", tween: [ "transform", "${_mare}", "scaleX", '1', { fromValue: '1.05'}], position: 7500, duration: 1000 },
                { id: "eid81", tween: [ "transform", "${_mare}", "scaleX", '0', { fromValue: '1'}], position: 8500, duration: 500 },
                { id: "eid85", tween: [ "transform", "${_Oare}", "scaleX", '0', { fromValue: '1'}], position: 8600, duration: 400 },
                { id: "eid133", tween: [ "style", "${_Exclamare}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0 },
                { id: "eid136", tween: [ "style", "${_Exclamare}", "opacity", '1', { fromValue: '0'}], position: 9625, duration: 0 },
                { id: "eid135", tween: [ "style", "${_Exclamare}", "opacity", '0', { fromValue: '1'}], position: 9875, duration: 0 },
                { id: "eid142", tween: [ "style", "${_Exclamare}", "opacity", '1', { fromValue: '0'}], position: 13000, duration: 0 },
                { id: "eid95", tween: [ "transform", "${_medie}", "scaleY", '0', { fromValue: '1'}], position: 9000, duration: 250 },
                { id: "eid162", tween: [ "style", "${_Exclamare}", "display", 'none', { fromValue: 'block'}], position: 12500, duration: 0 },
                { id: "eid166", tween: [ "style", "${_Exclamare}", "display", 'block', { fromValue: 'none'}], position: 13750, duration: 0 },
                { id: "eid169", tween: [ "style", "${_Exclamare}", "display", 'none', { fromValue: 'block'}], position: 15000, duration: 0 },
                { id: "eid98", tween: [ "transform", "${_mica}", "scaleX", '0', { fromValue: '1'}], position: 9250, duration: 250 },
                { id: "eid111", tween: [ "style", "${_Copil-Test}", "top", '208px', { fromValue: '234px'}], position: 10000, duration: 200 },
                { id: "eid116", tween: [ "style", "${_Copil-Test}", "top", '184px', { fromValue: '208px'}], position: 10200, duration: 200 },
                { id: "eid118", tween: [ "style", "${_Copil-Test}", "top", '216px', { fromValue: '184px'}], position: 10400, duration: 400 },
                { id: "eid120", tween: [ "style", "${_Copil-Test}", "top", '2px', { fromValue: '216px'}], position: 10800, duration: 500 },
                { id: "eid121", tween: [ "style", "${_Copil-Test}", "top", '620px', { fromValue: '2px'}], position: 11300, duration: 1000 },
                { id: "eid127", tween: [ "style", "${_Copil-Test}", "top", '662px', { fromValue: '620px'}], position: 12300, duration: 200 },
                { id: "eid141", tween: [ "style", "${_Copil-Test}", "top", '156px', { fromValue: '662px'}], position: 13000, duration: 0 },
                { id: "eid180", tween: [ "style", "${_Copil-Test}", "top", '180px', { fromValue: '156px'}], position: 13756, duration: 0 },
                { id: "eid202", tween: [ "style", "${_Fundal}", "display", 'none', { fromValue: 'block'}], position: 13250, duration: 0 },
                { id: "eid203", tween: [ "style", "${_Fundal}", "display", 'block', { fromValue: 'none'}], position: 13750, duration: 0 },
                { id: "eid204", tween: [ "style", "${_Fundal}", "display", 'none', { fromValue: 'block'}], position: 15750, duration: 0 },
                { id: "eid19", tween: [ "style", "${_mare}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0 },
                { id: "eid15", tween: [ "style", "${_mare}", "opacity", '1', { fromValue: '0'}], position: 5000, duration: 0 },
                { id: "eid188", tween: [ "style", "${_Fundal}", "opacity", '0', { fromValue: '1'}], position: 12500, duration: 750 },
                { id: "eid192", tween: [ "style", "${_Fundal}", "opacity", '1', { fromValue: '0'}], position: 13750, duration: 0 },
                { id: "eid191", tween: [ "style", "${_Fundal}", "opacity", '0', { fromValue: '1'}], position: 15000, duration: 750 },
                { id: "eid182", tween: [ "style", "${_Copil-Test}", "display", 'none', { fromValue: 'block'}], position: 12500, duration: 0 },
                { id: "eid183", tween: [ "style", "${_Copil-Test}", "display", 'block', { fromValue: 'none'}], position: 13750, duration: 0 },
                { id: "eid184", tween: [ "style", "${_Copil-Test}", "display", 'none', { fromValue: 'block'}], position: 15000, duration: 0 },
                { id: "eid2", tween: [ "style", "${_C}", "opacity", '1', { fromValue: '0.000000'}], position: 0, duration: 3000 },
                { id: "eid94", tween: [ "transform", "${_medie}", "scaleX", '0', { fromValue: '1'}], position: 9000, duration: 250 },
                { id: "eid13", tween: [ "style", "${_medie}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0 },
                { id: "eid14", tween: [ "style", "${_medie}", "opacity", '1', { fromValue: '0'}], position: 4500, duration: 0 },
                { id: "eid11", tween: [ "style", "${_mica}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0 },
                { id: "eid12", tween: [ "style", "${_mica}", "opacity", '1', { fromValue: '0'}], position: 4000, duration: 0 }            ]
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
})(jQuery, AdobeEdge, "EDGE-4217101");
