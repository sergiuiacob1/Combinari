/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};    fonts['ubuntu-mono, sans-serif']='<script src=\"http://use.edgefonts.net/ubuntu-mono:n7,i7,n4,i4:all.js\"></script>';

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
                id: 'Chenar_cod',
                type: 'rect',
                rect: ['-2px', '-2px','570px','474px','auto', 'auto'],
                fill: ["rgba(192,192,192,0.00)"],
                stroke: [2,"rgba(77,169,128,1.00)","solid"]
            },
            {
                id: 'Cod',
                type: 'group',
                rect: ['37px', '28px','444','432','auto', 'auto'],
                c: [
                {
                    id: 'Curent',
                    type: 'rect',
                    rect: ['4px', '104px','518px','23px','auto', 'auto'],
                    borderRadius: ["10px", "10px", "10px", "10px"],
                    fill: ["rgba(192,192,192,0)"],
                    stroke: [1,"rgb(77, 169, 128)","solid"]
                },
                {
                    id: 'Text44',
                    type: 'text',
                    rect: ['-1px', '412px','auto','auto','auto', 'auto'],
                    text: "}",
                    align: "left",
                    font: ['ubuntu-mono, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: 'Text44Copy',
                    type: 'text',
                    rect: ['72px', '386px','auto','auto','auto', 'auto'],
                    text: "}",
                    align: "left",
                    font: ['ubuntu-mono, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: 'Text43',
                    type: 'text',
                    rect: ['0px', '168px','auto','auto','auto', 'auto'],
                    text: "}",
                    align: "left",
                    font: ['ubuntu-mono, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: 'Text13',
                    type: 'text',
                    rect: ['108px', '362px','auto','auto','auto', 'auto'],
                    text: "gen(k+1);",
                    align: "left",
                    font: ['ubuntu-mono, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: 'Text12',
                    type: 'text',
                    rect: ['108px', '337px','auto','auto','auto', 'auto'],
                    text: "sol[k]=i;",
                    align: "left",
                    font: ['ubuntu-mono, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: 'Text11',
                    type: 'text',
                    rect: ['72px', '312px','auto','auto','auto', 'auto'],
                    text: "for(i=sol[k-1]+1; i&lt;=n-m+k; i++) {",
                    align: "left",
                    font: ['ubuntu-mono, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: 'Text10',
                    type: 'text',
                    rect: ['48px', '287px','auto','auto','auto', 'auto'],
                    text: "else",
                    align: "left",
                    font: ['ubuntu-mono, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: 'Text9',
                    type: 'text',
                    rect: ['48px', '262px','auto','auto','auto', 'auto'],
                    text: "if(k==m+1) afisare();",
                    align: "left",
                    font: ['ubuntu-mono, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: 'Text8',
                    type: 'text',
                    rect: ['48px', '235px','auto','auto','auto', 'auto'],
                    text: "int i=0;",
                    align: "left",
                    font: ['ubuntu-mono, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: 'Text7',
                    type: 'text',
                    rect: ['48px', '147px','auto','auto','auto', 'auto'],
                    text: "return 0;",
                    align: "left",
                    font: ['ubuntu-mono, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: 'Text6',
                    type: 'text',
                    rect: ['48px', '122px','auto','auto','auto', 'auto'],
                    text: "gen(1);",
                    align: "left",
                    font: ['ubuntu-mono, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: 'Text5',
                    type: 'text',
                    rect: ['48px', '98px','auto','auto','auto', 'auto'],
                    text: "cin&gt;&gt;n; cin&gt;&gt;m;",
                    align: "left",
                    font: ['ubuntu-mono, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: 'Text4',
                    type: 'text',
                    rect: ['0px', '211px','auto','auto','auto', 'auto'],
                    text: "void gen(int k) {",
                    align: "left",
                    font: ['ubuntu-mono, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: 'Text3',
                    type: 'text',
                    rect: ['0px', '72px','auto','auto','auto', 'auto'],
                    text: "int main {",
                    align: "left",
                    font: ['ubuntu-mono, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: 'Text2',
                    type: 'text',
                    rect: ['0px', '30px','auto','auto','auto', 'auto'],
                    text: "int sol[DMAX];",
                    align: "left",
                    font: ['ubuntu-mono, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: 'Text',
                    type: 'text',
                    rect: ['0px', '4px','auto','auto','auto', 'auto'],
                    text: "int n, m;",
                    font: ['ubuntu-mono, sans-serif', 24, "rgba(0,0,0,1)", "normal", "none", ""]
                },
                {
                    id: 'steluta',
                    type: 'text',
                    rect: ['138px', '124px','auto','auto','auto', 'auto'],
                    text: "*",
                    align: "left",
                    font: ['ubuntu-mono, sans-serif', 20, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: '_2steluta',
                    type: 'text',
                    rect: ['218px', '364px','auto','auto','auto', 'auto'],
                    text: "**",
                    align: "left",
                    font: ['ubuntu-mono, sans-serif', 20, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: 'com1',
                    type: 'group',
                    rect: ['-7', '-1','528','33','auto', 'auto'],
                    c: [
                    {
                        id: 'RoundRect4',
                        type: 'rect',
                        rect: ['0px', '0px','526px','31px','auto', 'auto'],
                        borderRadius: ["10px", "10px", "10px", "10px"],
                        fill: ["rgba(77,169,128,1.00)"],
                        stroke: [1,"rgb(77, 169, 128)","solid"]
                    },
                    {
                        id: 'Text42',
                        type: 'text',
                        rect: ['16px', '7px','auto','auto','auto', 'auto'],
                        text: "//algoritmul calculeaza combinari de n luate cate m",
                        align: "left",
                        font: ['ubuntu-mono, sans-serif', 18, "rgba(0,0,0,1)", "400", "none", "normal"]
                    }]
                },
                {
                    id: 'com2',
                    type: 'group',
                    rect: ['-7', '28px','528','33','auto', 'auto'],
                    c: [
                    {
                        id: 'RoundRect4Copy',
                        type: 'rect',
                        rect: ['0px', '0px','526px','31px','auto', 'auto'],
                        borderRadius: ["10px", "10px", "10px", "10px"],
                        fill: ["rgba(77,169,128,1.00)"],
                        stroke: [1,"rgb(77, 169, 128)","solid"]
                    },
                    {
                        id: 'Text42Copy',
                        type: 'text',
                        rect: ['16px', '7px','auto','auto','auto', 'auto'],
                        text: "//in vectorul sol construim combinarile",
                        align: "left",
                        font: ['ubuntu-mono, sans-serif', 18, "rgba(0,0,0,1)", "400", "none", "normal"]
                    }]
                },
                {
                    id: 'com3',
                    type: 'group',
                    rect: ['-7', '90px','528','33','auto', 'auto'],
                    c: [
                    {
                        id: 'RoundRect4Copy2',
                        type: 'rect',
                        rect: ['0px', '0px','526px','31px','auto', 'auto'],
                        borderRadius: ["10px", "10px", "10px", "10px"],
                        fill: ["rgba(77,169,128,1.00)"],
                        stroke: [1,"rgb(77, 169, 128)","solid"]
                    },
                    {
                        id: 'Text42Copy2',
                        type: 'text',
                        rect: ['16px', '7px','auto','auto','auto', 'auto'],
                        text: "//citim indicii combinarii",
                        align: "left",
                        font: ['ubuntu-mono, sans-serif', 18, "rgba(0,0,0,1)", "400", "none", "normal"]
                    }]
                },
                {
                    id: 'com4',
                    type: 'group',
                    rect: ['-7', '117px','528','33px','auto', 'auto'],
                    c: [
                    {
                        id: 'RoundRect4Copy3',
                        type: 'rect',
                        rect: ['0px', '0px','526px','74px','auto', 'auto'],
                        borderRadius: ["10px", "10px", "10px", "10px"],
                        fill: ["rgba(77,169,128,1.00)"],
                        stroke: [1,"rgb(77, 169, 128)","solid"]
                    },
                    {
                        id: 'Text42Copy3',
                        type: 'text',
                        rect: ['16px', '7px','auto','auto','auto', 'auto'],
                        text: "//apelam functia de generare recursiva a combinarilor cu<br>parametrul 1, ceea ce inseamna ca incepem sa punem<br>elementele in vectorul sol de la pozitia 1",
                        align: "left",
                        font: ['ubuntu-mono, sans-serif', 18, "rgba(0,0,0,1)", "400", "none", "normal"]
                    }]
                },
                {
                    id: 'com5',
                    type: 'group',
                    rect: ['-7', '230px','528','33','auto', 'auto'],
                    c: [
                    {
                        id: 'RoundRect4Copy4',
                        type: 'rect',
                        rect: ['0px', '0px','526px','47px','auto', 'auto'],
                        borderRadius: ["10px", "10px", "10px", "10px"],
                        fill: ["rgba(77,169,128,1.00)"],
                        stroke: [1,"rgb(77, 169, 128)","solid"]
                    },
                    {
                        id: 'Text42Copy4',
                        type: 'text',
                        rect: ['16px', '7px','auto','auto','auto', 'auto'],
                        text: "//in variabila i vom calcula posibilii candidati pentru<br>a ocupa pozitia sol[k]",
                        align: "left",
                        font: ['ubuntu-mono, sans-serif', 18, "rgba(0,0,0,1)", "400", "none", "normal"]
                    }]
                },
                {
                    id: 'com6',
                    type: 'group',
                    rect: ['-7', '256px','528','33','auto', 'auto'],
                    c: [
                    {
                        id: 'RoundRect4Copy5',
                        type: 'rect',
                        rect: ['0px', '0px','526px','50px','auto', 'auto'],
                        borderRadius: ["10px", "10px", "10px", "10px"],
                        fill: ["rgba(77,169,128,1.00)"],
                        stroke: [1,"rgb(77, 169, 128)","solid"]
                    },
                    {
                        id: 'Text42Copy5',
                        type: 'text',
                        rect: ['16px', '7px','auto','auto','auto', 'auto'],
                        text: "//daca in vectorul sol avem completate m elemente,<br>solutia este completa si o afisam",
                        align: "left",
                        font: ['ubuntu-mono, sans-serif', 18, "rgba(0,0,0,1)", "400", "none", "normal"]
                    }]
                },
                {
                    id: 'com7',
                    type: 'group',
                    rect: ['-7', '279px','528','33','auto', 'auto'],
                    c: [
                    {
                        id: 'RoundRect4Copy6',
                        type: 'rect',
                        rect: ['0px', '0px','526px','31px','auto', 'auto'],
                        borderRadius: ["10px", "10px", "10px", "10px"],
                        fill: ["rgba(77,169,128,1.00)"],
                        stroke: [1,"rgb(77, 169, 128)","solid"]
                    },
                    {
                        id: 'Text42Copy6',
                        type: 'text',
                        rect: ['16px', '7px','auto','auto','auto', 'auto'],
                        text: "//daca nu e completa, ocup mai intai pozitia k",
                        align: "left",
                        font: ['ubuntu-mono, sans-serif', 18, "rgba(0,0,0,1)", "400", "none", "normal"]
                    }]
                },
                {
                    id: 'com8',
                    type: 'group',
                    rect: ['-7', '305px','528','33','auto', 'auto'],
                    c: [
                    {
                        id: 'RoundRect4Copy7',
                        type: 'rect',
                        rect: ['0px', '0px','526px','51px','auto', 'auto'],
                        borderRadius: ["10px", "10px", "10px", "10px"],
                        fill: ["rgba(77,169,128,1.00)"],
                        stroke: [1,"rgb(77, 169, 128)","solid"]
                    },
                    {
                        id: 'Text42Copy7',
                        type: 'text',
                        rect: ['16px', '7px','auto','auto','auto', 'auto'],
                        text: "//iau toti candidatii posibili pentru a completa pozitia<br>curenta",
                        align: "left",
                        font: ['ubuntu-mono, sans-serif', 18, "rgba(0,0,0,1)", "400", "none", "normal"]
                    }]
                },
                {
                    id: 'com9',
                    type: 'group',
                    rect: ['-7', '333px','528','33','auto', 'auto'],
                    c: [
                    {
                        id: 'RoundRect4Copy8',
                        type: 'rect',
                        rect: ['0px', '0px','526px','31px','auto', 'auto'],
                        borderRadius: ["10px", "10px", "10px", "10px"],
                        fill: ["rgba(77,169,128,1.00)"],
                        stroke: [1,"rgb(77, 169, 128)","solid"]
                    },
                    {
                        id: 'Text42Copy8',
                        type: 'text',
                        rect: ['16px', '7px','auto','auto','auto', 'auto'],
                        text: "//punem candidatul curent in solutie",
                        align: "left",
                        font: ['ubuntu-mono, sans-serif', 18, "rgba(0,0,0,1)", "400", "none", "normal"]
                    }]
                },
                {
                    id: 'com10',
                    type: 'group',
                    rect: ['-7', '357px','528','33','auto', 'auto'],
                    c: [
                    {
                        id: 'RoundRect4Copy9',
                        type: 'rect',
                        rect: ['0px', '0px','526px','31px','auto', 'auto'],
                        borderRadius: ["10px", "10px", "10px", "10px"],
                        fill: ["rgba(77,169,128,1.00)"],
                        stroke: [1,"rgb(77, 169, 128)","solid"]
                    },
                    {
                        id: 'Text42Copy9',
                        type: 'text',
                        rect: ['16px', '7px','auto','auto','auto', 'auto'],
                        text: "//generam in continuare",
                        align: "left",
                        font: ['ubuntu-mono, sans-serif', 18, "rgba(0,0,0,1)", "400", "none", "normal"]
                    }]
                }]
            },
            {
                id: 'delim',
                display: 'none',
                type: 'rect',
                rect: ['641px', '210px','150px','0px','auto', 'auto'],
                fill: ["rgba(192,192,192,0)"],
                stroke: [1,"rgb(77, 169, 128)","solid"]
            },
            {
                id: 'delimCopy',
                display: 'none',
                type: 'rect',
                rect: ['641px', '167px','150px','0px','auto', 'auto'],
                fill: ["rgba(192,192,192,0)"],
                stroke: [1,"rgb(77, 169, 128)","solid"]
            },
            {
                id: 'delimCopy2',
                display: 'none',
                type: 'rect',
                rect: ['641px', '122px','150px','0px','auto', 'auto'],
                fill: ["rgba(192,192,192,0)"],
                stroke: [1,"rgb(77, 169, 128)","solid"]
            },
            {
                id: 'delimCopy3',
                display: 'none',
                type: 'rect',
                rect: ['641px', '79px','150px','0px','auto', 'auto'],
                fill: ["rgba(192,192,192,0)"],
                stroke: [1,"rgb(77, 169, 128)","solid"]
            },
            {
                id: 'StivaGr',
                type: 'image',
                rect: ['641px', '50px','152px','202px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"stiva2.png",'0px','0px']
            },
            {
                id: 'k',
                type: 'text',
                rect: ['667px', '256px','auto','auto','auto', 'auto'],
                text: "k",
                align: "left",
                font: ['ubuntu-mono, sans-serif', 20, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'i',
                type: 'text',
                rect: ['725px', '256px','auto','auto','auto', 'auto'],
                text: "i",
                align: "left",
                font: ['ubuntu-mono, sans-serif', 20, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'adr',
                type: 'text',
                rect: ['763px', '256px','auto','auto','auto', 'auto'],
                text: "rev",
                align: "left",
                font: ['ubuntu-mono, sans-serif', 20, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'Ecran',
                type: 'text',
                rect: ['590px', '294px','auto','auto','auto', 'auto'],
                text: "Ecran:",
                align: "left",
                font: ['ubuntu-mono, sans-serif', 24, "rgba(0,0,0,1)", "400", "normal"]
            },
            {
                id: 'Stiva',
                type: 'text',
                rect: ['590px', '6px','auto','auto','auto', 'auto'],
                text: "Stiva:",
                align: "left",
                font: ['ubuntu-mono, sans-serif', 24, "rgba(0,0,0,1)", "400", "normal"]
            },
            {
                id: 'sol',
                type: 'text',
                rect: ['124px', '509px','auto','auto','auto', 'auto'],
                text: "sol",
                align: "left",
                font: ['ubuntu-mono, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'vect_sol2',
                type: 'image',
                rect: ['194px', '509px','382px','21px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"vect_sol2.png",'0px','0px']
            },
            {
                id: 'Poz_sol',
                type: 'group',
                rect: ['214px', '529','343','25','auto', 'auto'],
                c: [
                {
                    id: 'Text21',
                    type: 'text',
                    rect: ['0px', '0px','auto','auto','auto', 'auto'],
                    text: "0",
                    align: "left",
                    font: ['ubuntu-mono, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: 'Text22',
                    type: 'text',
                    rect: ['47px', '0px','auto','auto','auto', 'auto'],
                    text: "1",
                    align: "left",
                    font: ['ubuntu-mono, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: 'Text23',
                    type: 'text',
                    rect: ['93px', '0px','auto','auto','auto', 'auto'],
                    text: "2",
                    align: "left",
                    font: ['ubuntu-mono, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: 'Text24',
                    type: 'text',
                    rect: ['141px', '0px','auto','auto','auto', 'auto'],
                    text: "3",
                    align: "left",
                    font: ['ubuntu-mono, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: 'Text25',
                    type: 'text',
                    rect: ['188px', '0px','auto','auto','auto', 'auto'],
                    text: "4",
                    align: "left",
                    font: ['ubuntu-mono, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: 'Text26',
                    type: 'text',
                    rect: ['237px', '0px','auto','auto','auto', 'auto'],
                    text: "5",
                    align: "left",
                    font: ['ubuntu-mono, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: 'Text28',
                    type: 'text',
                    rect: ['331px', '0px','auto','auto','auto', 'auto'],
                    text: "7",
                    align: "left",
                    font: ['ubuntu-mono, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: 'Text29',
                    type: 'text',
                    rect: ['284px', '0px','auto','auto','auto', 'auto'],
                    text: "6",
                    align: "left",
                    font: ['ubuntu-mono, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
                }]
            },
            {
                id: 'backward2',
                type: 'image',
                rect: ['378px', '436px','27px','28px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"backward2.png",'0px','0px']
            },
            {
                id: 'pause2',
                type: 'image',
                rect: ['450px', '436px','27px','28px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"pause2.png",'0px','0px']
            },
            {
                id: 'play2',
                type: 'image',
                rect: ['489px', '436px','27px','28px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"play2.png",'0px','0px']
            },
            {
                id: 'back2',
                type: 'image',
                rect: ['412px', '436px','27px','28px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"play2.png",'0px','0px'],
                transform: [[],['180']]
            },
            {
                id: 'forward2',
                type: 'image',
                rect: ['525px', '436px','27px','28px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"forward2.png",'0px','0px']
            },
            {
                id: 'stelutaCopy',
                display: 'none',
                type: 'text',
                rect: ['771px', '219px','auto','auto','auto', 'auto'],
                text: "*",
                align: "left",
                font: ['ubuntu-mono, sans-serif', 20, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: '_2stelutaCopy',
                display: 'none',
                type: 'text',
                rect: ['766px', '176px','auto','auto','auto', 'auto'],
                text: "**",
                align: "left",
                font: ['ubuntu-mono, sans-serif', 20, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: '_2stelutaCopy2',
                display: 'none',
                type: 'text',
                rect: ['766px', '176px','auto','auto','auto', 'auto'],
                text: "**",
                align: "left",
                font: ['ubuntu-mono, sans-serif', 20, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: '_2stelutaCopy3',
                display: 'none',
                type: 'text',
                rect: ['766px', '176px','auto','auto','auto', 'auto'],
                text: "**",
                align: "left",
                font: ['ubuntu-mono, sans-serif', 20, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'nm',
                type: 'text',
                rect: ['37px', '498px','auto','auto','auto', 'auto'],
                text: "n=<br>m=",
                align: "left",
                font: ['ubuntu-mono, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: '_1_2_3',
                display: 'none',
                type: 'text',
                rect: ['686px', '361px','auto','auto','auto', 'auto'],
                text: "1 2 3",
                align: "left",
                font: ['ubuntu-mono, sans-serif', 20, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: '_1_2_4',
                display: 'none',
                type: 'text',
                rect: ['687px', '397px','auto','auto','auto', 'auto'],
                text: "1 2 4",
                align: "left",
                font: ['ubuntu-mono, sans-serif', 20, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: '_1_3_4',
                display: 'none',
                type: 'text',
                rect: ['687px', '433px','auto','auto','auto', 'auto'],
                text: "1 3 4",
                align: "left",
                font: ['ubuntu-mono, sans-serif', 20, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: '_2_3_4',
                display: 'none',
                type: 'text',
                rect: ['687px', '339px','auto','auto','auto', 'auto'],
                text: "2 3 4",
                align: "left",
                font: ['ubuntu-mono, sans-serif', 20, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'val_sol',
                type: 'group',
                rect: ['213', '500','344','25','auto', 'auto'],
                c: [
                {
                    id: 'Text36',
                    type: 'text',
                    rect: ['0px', '0px','auto','auto','auto', 'auto'],
                    text: "0",
                    align: "left",
                    font: ['ubuntu-mono, sans-serif', 25, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: '_01',
                    display: 'block',
                    type: 'text',
                    rect: ['48px', '0px','auto','auto','auto', 'auto'],
                    text: "0",
                    align: "left",
                    font: ['ubuntu-mono, sans-serif', 25, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: '_11',
                    display: 'none',
                    type: 'text',
                    rect: ['48px', '-1px','auto','auto','auto', 'auto'],
                    text: "1",
                    align: "left",
                    font: ['ubuntu-mono, sans-serif', 25, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: '_12',
                    display: 'none',
                    type: 'text',
                    rect: ['94', '0px','auto','auto','auto', 'auto'],
                    text: "2",
                    align: "left",
                    font: ['ubuntu-mono, sans-serif', 25, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: '_13',
                    display: 'none',
                    type: 'text',
                    rect: ['94', '0px','auto','auto','auto', 'auto'],
                    text: "3",
                    align: "left",
                    font: ['ubuntu-mono, sans-serif', 25, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: '_14',
                    display: 'none',
                    type: 'text',
                    rect: ['94', '0px','auto','auto','auto', 'auto'],
                    text: "4",
                    align: "left",
                    font: ['ubuntu-mono, sans-serif', 25, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: '_02',
                    display: 'block',
                    type: 'text',
                    rect: ['94px', '0px','auto','auto','auto', 'auto'],
                    text: "0",
                    align: "left",
                    font: ['ubuntu-mono, sans-serif', 25, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: '_03',
                    display: 'block',
                    type: 'text',
                    rect: ['142px', '0px','auto','auto','auto', 'auto'],
                    text: "0",
                    align: "left",
                    font: ['ubuntu-mono, sans-serif', 25, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: 'Text36Copy4',
                    type: 'text',
                    rect: ['189px', '0px','auto','auto','auto', 'auto'],
                    text: "0",
                    align: "left",
                    font: ['ubuntu-mono, sans-serif', 25, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: 'Text36Copy5',
                    type: 'text',
                    rect: ['238px', '0px','auto','auto','auto', 'auto'],
                    text: "0",
                    align: "left",
                    font: ['ubuntu-mono, sans-serif', 25, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: 'Text36Copy6',
                    type: 'text',
                    rect: ['285px', '0px','auto','25px','auto', 'auto'],
                    text: "0",
                    align: "left",
                    font: ['ubuntu-mono, sans-serif', 25, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: 'Text36Copy7',
                    type: 'text',
                    rect: ['332px', '0px','auto','25px','auto', 'auto'],
                    text: "0",
                    align: "left",
                    font: ['ubuntu-mono, sans-serif', 25, "rgba(0,0,0,1)", "400", "none", "normal"]
                }]
            },
            {
                id: 'val_stiva',
                type: 'group',
                rect: ['665px', '176px','72','67','auto', 'auto'],
                c: [
                {
                    id: 'val_k0',
                    display: 'none',
                    type: 'text',
                    rect: ['0px', '42px','auto','auto','auto', 'auto'],
                    text: "0",
                    align: "left",
                    font: ['ubuntu-mono, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: 'val_k1',
                    display: 'none',
                    type: 'text',
                    rect: ['0px', '42px','auto','auto','auto', 'auto'],
                    text: "1",
                    align: "left",
                    font: ['ubuntu-mono, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: 'val_k1Copy',
                    display: 'none',
                    type: 'text',
                    rect: ['60px', '41px','auto','auto','auto', 'auto'],
                    text: "1",
                    align: "left",
                    font: ['ubuntu-mono, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: 'val_k2',
                    display: 'none',
                    type: 'text',
                    rect: ['0px', '0px','auto','auto','auto', 'auto'],
                    text: "2",
                    align: "left",
                    font: ['ubuntu-mono, sans-serif', 25, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: 'val_k2Copy',
                    display: 'none',
                    type: 'text',
                    rect: ['0px', '0px','auto','auto','auto', 'auto'],
                    text: "2",
                    align: "left",
                    font: ['ubuntu-mono, sans-serif', 25, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: 'val_k3',
                    display: 'none',
                    type: 'text',
                    rect: ['-1px', '-43px','auto','auto','auto', 'auto'],
                    text: "3",
                    align: "left",
                    font: ['ubuntu-mono, sans-serif', 25, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: 'val_k3Copy',
                    display: 'none',
                    type: 'text',
                    rect: ['-1px', '-43px','auto','auto','auto', 'auto'],
                    text: "3",
                    align: "left",
                    font: ['ubuntu-mono, sans-serif', 25, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: 'val_k4',
                    display: 'none',
                    type: 'text',
                    rect: ['-1px', '-43px','auto','auto','auto', 'auto'],
                    text: "4",
                    align: "left",
                    font: ['ubuntu-mono, sans-serif', 25, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: 'val_k4Copy',
                    display: 'none',
                    type: 'text',
                    rect: ['-1px', '-43px','auto','auto','auto', 'auto'],
                    text: "4",
                    align: "left",
                    font: ['ubuntu-mono, sans-serif', 25, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: 'val_k5',
                    display: 'none',
                    type: 'text',
                    rect: ['-1px', '-43px','auto','auto','auto', 'auto'],
                    text: "5",
                    align: "left",
                    font: ['ubuntu-mono, sans-serif', 25, "rgba(0,0,0,1)", "400", "none", "normal"]
                }]
            },
            {
                id: 'n',
                display: 'none',
                type: 'text',
                rect: ['69', '509','auto','auto','auto', 'auto'],
                text: "4",
                align: "left",
                font: ['ubuntu-mono, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'm',
                display: 'none',
                type: 'text',
                rect: ['64', '524px','auto','auto','auto', 'auto'],
                text: "3",
                align: "left",
                font: ['ubuntu-mono, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_val_k4Copy}": [
                ["style", "top", '-43px'],
                ["style", "left", '60px'],
                ["style", "display", 'none']
            ],
            "${_nm}": [
                ["style", "top", '498px'],
                ["style", "left", '37px']
            ],
            "${_m}": [
                ["style", "top", '524px'],
                ["style", "display", 'none']
            ],
            "${_delimCopy3}": [
                ["style", "top", '79px'],
                ["style", "display", 'none'],
                ["style", "height", '0px'],
                ["style", "left", '641px'],
                ["style", "border-width", '1px'],
                ["style", "width", '150px']
            ],
            "${_Text22}": [
                ["style", "left", '47px'],
                ["style", "top", '0px']
            ],
            "${__11}": [
                ["style", "top", '-1px'],
                ["style", "display", 'none'],
                ["style", "left", '48px'],
                ["style", "font-size", '25px']
            ],
            "${_Chenar_cod}": [
                ["style", "top", '-2px'],
                ["color", "background-color", 'rgba(192,192,192,0.00)'],
                ["style", "left", '-2px'],
                ["style", "border-style", 'solid'],
                ["style", "height", '474px'],
                ["color", "border-color", 'rgba(77,169,128,1.00)'],
                ["style", "border-width", '2px'],
                ["style", "width", '570px']
            ],
            "${_Text42Copy}": [
                ["style", "top", '7px'],
                ["style", "left", '16px'],
                ["style", "font-size", '18px']
            ],
            "${_Text21}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_Text10}": [
                ["style", "top", '287px'],
                ["style", "left", '48px']
            ],
            "${_RoundRect4Copy9}": [
                ["style", "top", '0px'],
                ["style", "height", '31px'],
                ["color", "background-color", 'rgba(77,169,128,1)'],
                ["style", "left", '0px'],
                ["style", "width", '526px']
            ],
            "${_Text2}": [
                ["style", "top", '30px'],
                ["style", "left", '0px']
            ],
            "${_Poz_sol}": [
                ["style", "left", '214px']
            ],
            "${_forward2}": [
                ["style", "left", '525px'],
                ["style", "top", '436px']
            ],
            "${__01}": [
                ["style", "top", '0px'],
                ["style", "display", 'block'],
                ["style", "left", '48px'],
                ["style", "font-size", '25px']
            ],
            "${__2_3_4}": [
                ["style", "top", '468px'],
                ["style", "left", '687px'],
                ["style", "display", 'none']
            ],
            "${_delimCopy2}": [
                ["style", "top", '122px'],
                ["style", "display", 'none'],
                ["style", "height", '0px'],
                ["style", "border-width", '1px'],
                ["style", "left", '641px'],
                ["style", "width", '150px']
            ],
            "${_Ecran}": [
                ["style", "top", '294px'],
                ["style", "left", '590px'],
                ["style", "text-decoration"],
                ["style", "font-size", '24px']
            ],
            "${_pause2}": [
                ["style", "top", '436px'],
                ["style", "left", '450px']
            ],
            "${_steluta}": [
                ["style", "left", '138px'],
                ["style", "top", '124px']
            ],
            "${_Text3}": [
                ["style", "top", '72px'],
                ["style", "left", '0px']
            ],
            "${_val_k3Copy}": [
                ["style", "top", '-43px'],
                ["style", "left", '60px'],
                ["style", "display", 'none']
            ],
            "${_back2}": [
                ["style", "top", '436px'],
                ["style", "left", '412px'],
                ["transform", "rotateZ", '180deg']
            ],
            "${_Text28}": [
                ["style", "left", '331px'],
                ["style", "top", '0px']
            ],
            "${_adr}": [
                ["style", "top", '256px'],
                ["style", "left", '763px'],
                ["style", "font-size", '20px']
            ],
            "${__1_2_3}": [
                ["style", "top", '361px'],
                ["style", "left", '686px'],
                ["style", "display", 'none']
            ],
            "${__2stelutaCopy}": [
                ["style", "top", '176px'],
                ["style", "left", '766px'],
                ["style", "display", 'none']
            ],
            "${_Text29}": [
                ["style", "left", '284px'],
                ["style", "top", '0px']
            ],
            "${_RoundRect4Copy4}": [
                ["style", "top", '0px'],
                ["style", "height", '47px'],
                ["color", "background-color", 'rgba(77,169,128,1)'],
                ["style", "left", '0px'],
                ["style", "width", '526px']
            ],
            "${_Text42Copy7}": [
                ["style", "top", '7px'],
                ["style", "left", '16px'],
                ["style", "font-size", '18px']
            ],
            "${_RoundRect4Copy3}": [
                ["style", "top", '0px'],
                ["style", "height", '74px'],
                ["color", "background-color", 'rgba(77,169,128,1)'],
                ["style", "left", '0px'],
                ["style", "width", '526px']
            ],
            "${_val_k4}": [
                ["style", "top", '-86px'],
                ["style", "left", '-1px'],
                ["style", "display", 'none']
            ],
            "${_Text13}": [
                ["style", "top", '362px'],
                ["style", "left", '108px']
            ],
            "${_com10}": [
                ["style", "top", '357px'],
                ["style", "overflow", 'visible']
            ],
            "${_Text36}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "font-size", '25px']
            ],
            "${_com7}": [
                ["style", "top", '279px'],
                ["style", "overflow", 'visible']
            ],
            "${_Text24}": [
                ["style", "left", '141px'],
                ["style", "top", '0px']
            ],
            "${__03}": [
                ["style", "top", '0px'],
                ["style", "display", 'block'],
                ["style", "left", '142px'],
                ["style", "font-size", '25px']
            ],
            "${_Text42Copy3}": [
                ["style", "top", '7px'],
                ["style", "left", '16px'],
                ["style", "font-size", '18px']
            ],
            "${_RoundRect4}": [
                ["style", "top", '0px'],
                ["style", "height", '31px'],
                ["color", "background-color", 'rgba(77,169,128,1.00)'],
                ["style", "left", '0px'],
                ["style", "width", '526px']
            ],
            "${_Text6}": [
                ["style", "top", '122px'],
                ["style", "left", '48px']
            ],
            "${_Text42Copy2}": [
                ["style", "top", '7px'],
                ["style", "left", '16px'],
                ["style", "font-size", '18px']
            ],
            "${_Text}": [
                ["style", "top", '4px'],
                ["style", "font-family", 'ubuntu-mono, sans-serif'],
                ["style", "left", '0px']
            ],
            "${__02}": [
                ["style", "top", '0px'],
                ["style", "display", 'block'],
                ["style", "left", '94px'],
                ["style", "font-size", '25px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "width", '850px'],
                ["style", "height", '563px'],
                ["style", "overflow", 'hidden']
            ],
            "${_com4}": [
                ["style", "top", '117px'],
                ["style", "overflow", 'visible']
            ],
            "${_delimCopy}": [
                ["style", "top", '167px'],
                ["style", "display", 'none'],
                ["style", "height", '0px'],
                ["style", "left", '641px'],
                ["style", "border-width", '1px'],
                ["style", "width", '150px']
            ],
            "${_RoundRect4Copy2}": [
                ["style", "top", '0px'],
                ["style", "height", '31px'],
                ["color", "background-color", 'rgba(77,169,128,1)'],
                ["style", "left", '0px'],
                ["style", "width", '526px']
            ],
            "${_Text42Copy4}": [
                ["style", "top", '7px'],
                ["style", "left", '16px'],
                ["style", "font-size", '18px']
            ],
            "${__1_3_4}": [
                ["style", "top", '433px'],
                ["style", "left", '687px'],
                ["style", "display", 'none']
            ],
            "${_RoundRect4Copy5}": [
                ["style", "top", '0px'],
                ["style", "height", '50px'],
                ["color", "background-color", 'rgba(77,169,128,1)'],
                ["style", "left", '0px'],
                ["style", "width", '526px']
            ],
            "${_StivaGr}": [
                ["style", "left", '641px'],
                ["style", "top", '50px']
            ],
            "${_Text36Copy4}": [
                ["style", "top", '0px'],
                ["style", "left", '189px'],
                ["style", "font-size", '25px']
            ],
            "${_com9}": [
                ["style", "top", '333px'],
                ["style", "overflow", 'visible']
            ],
            "${_Text8}": [
                ["style", "top", '235px'],
                ["style", "left", '48px']
            ],
            "${__14}": [
                ["style", "display", 'none'],
                ["style", "left", '142px'],
                ["style", "top", '0px']
            ],
            "${_Text42Copy6}": [
                ["style", "top", '7px'],
                ["style", "left", '16px'],
                ["style", "font-size", '18px']
            ],
            "${_Text36Copy5}": [
                ["style", "top", '0px'],
                ["style", "left", '238px'],
                ["style", "font-size", '25px']
            ],
            "${_stelutaCopy}": [
                ["style", "top", '219px'],
                ["style", "left", '771px'],
                ["style", "display", 'none']
            ],
            "${_RoundRect4Copy7}": [
                ["style", "top", '0px'],
                ["style", "height", '51px'],
                ["color", "background-color", 'rgba(77,169,128,1)'],
                ["style", "left", '0px'],
                ["style", "width", '526px']
            ],
            "${_vect_sol2}": [
                ["style", "left", '194px'],
                ["style", "top", '509px']
            ],
            "${_val_k3}": [
                ["style", "top", '-43px'],
                ["style", "left", '-1px'],
                ["style", "display", 'none']
            ],
            "${_com3}": [
                ["style", "top", '90px'],
                ["style", "overflow", 'visible']
            ],
            "${_Text4}": [
                ["style", "top", '211px'],
                ["style", "left", '0px']
            ],
            "${_com5}": [
                ["style", "top", '230px'],
                ["style", "overflow", 'visible']
            ],
            "${__13}": [
                ["style", "display", 'none'],
                ["style", "left", '142px'],
                ["style", "top", '0px']
            ],
            "${_Text44Copy}": [
                ["style", "left", '72px'],
                ["style", "top", '386px']
            ],
            "${_val_k0}": [
                ["style", "top", '42px'],
                ["style", "left", '60px'],
                ["style", "display", 'none']
            ],
            "${_Stiva}": [
                ["style", "top", '6px'],
                ["style", "text-decoration"],
                ["style", "left", '590px'],
                ["style", "font-size", '24px']
            ],
            "${_com1}": [
                ["style", "overflow", 'visible']
            ],
            "${_Text42}": [
                ["style", "top", '7px'],
                ["style", "left", '16px'],
                ["style", "font-size", '18px']
            ],
            "${__12}": [
                ["style", "display", 'none'],
                ["style", "left", '94px'],
                ["style", "top", '0px']
            ],
            "${_Text42Copy5}": [
                ["style", "top", '7px'],
                ["style", "left", '16px'],
                ["style", "font-size", '18px']
            ],
            "${_Rectangle3}": [
                ["color", "background-color", 'rgba(241,241,241,1)']
            ],
            "${_RoundRect4Copy}": [
                ["style", "top", '0px'],
                ["style", "height", '31px'],
                ["color", "background-color", 'rgba(77,169,128,1.00)'],
                ["style", "left", '0px'],
                ["style", "width", '526px']
            ],
            "${_backward2}": [
                ["style", "left", '378px'],
                ["style", "top", '436px']
            ],
            "${_RoundRect4Copy8}": [
                ["style", "top", '0px'],
                ["style", "height", '31px'],
                ["color", "background-color", 'rgba(77,169,128,1)'],
                ["style", "left", '0px'],
                ["style", "width", '526px']
            ],
            "${_Text9}": [
                ["style", "top", '262px'],
                ["style", "left", '48px']
            ],
            "${_Text36Copy6}": [
                ["style", "top", '0px'],
                ["style", "height", '25px'],
                ["style", "left", '285px'],
                ["style", "font-size", '25px']
            ],
            "${_val_k2}": [
                ["style", "display", 'none'],
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_RoundRect4Copy6}": [
                ["style", "top", '0px'],
                ["style", "height", '31px'],
                ["color", "background-color", 'rgba(77,169,128,1)'],
                ["style", "left", '0px'],
                ["style", "width", '526px']
            ],
            "${_val_k1Copy}": [
                ["style", "top", '41px'],
                ["style", "display", 'none'],
                ["style", "left", '60px'],
                ["style", "font-size", '24px']
            ],
            "${_Text7}": [
                ["style", "top", '147px'],
                ["style", "left", '48px']
            ],
            "${_n}": [
                ["style", "top", '499px'],
                ["style", "left", '64px'],
                ["style", "display", 'none']
            ],
            "${__2stelutaCopy3}": [
                ["style", "top", '90px'],
                ["style", "left", '766px'],
                ["style", "display", 'none']
            ],
            "${_sol}": [
                ["style", "top", '509px'],
                ["style", "left", '124px']
            ],
            "${_Text5}": [
                ["style", "top", '98px'],
                ["style", "left", '48px']
            ],
            "${_Text11}": [
                ["style", "top", '312px'],
                ["style", "left", '72px']
            ],
            "${_Curent}": [
                ["style", "top", '97px'],
                ["style", "left", '-5px']
            ],
            "${_Text42Copy9}": [
                ["style", "top", '7px'],
                ["style", "left", '16px'],
                ["style", "font-size", '18px']
            ],
            "${_com2}": [
                ["style", "top", '28px'],
                ["style", "overflow", 'visible']
            ],
            "${_Text25}": [
                ["style", "left", '188px'],
                ["style", "top", '0px']
            ],
            "${_val_k1}": [
                ["style", "top", '42px'],
                ["style", "left", '0px'],
                ["style", "display", 'none']
            ],
            "${_play2}": [
                ["style", "left", '489px'],
                ["style", "top", '436px']
            ],
            "${_Text23}": [
                ["style", "left", '93px'],
                ["style", "top", '0px']
            ],
            "${_val_k5}": [
                ["style", "top", '-42px'],
                ["style", "left", '60px'],
                ["style", "display", 'none']
            ],
            "${__1_2_4}": [
                ["style", "top", '397px'],
                ["style", "left", '687px'],
                ["style", "display", 'none']
            ],
            "${__2stelutaCopy2}": [
                ["style", "top", '134px'],
                ["style", "left", '766px'],
                ["style", "display", 'none']
            ],
            "${_delim}": [
                ["style", "top", '210px'],
                ["style", "display", 'none'],
                ["style", "height", '0px'],
                ["style", "border-width", '1px'],
                ["style", "left", '641px'],
                ["style", "width", '150px']
            ],
            "${_Text44}": [
                ["style", "left", '-1px'],
                ["style", "top", '412px']
            ],
            "${_Text43}": [
                ["style", "top", '168px'],
                ["style", "left", '0px']
            ],
            "${_k}": [
                ["style", "top", '256px'],
                ["style", "left", '667px'],
                ["style", "font-size", '20px']
            ],
            "${_i}": [
                ["style", "top", '256px'],
                ["style", "left", '725px'],
                ["style", "font-size", '20px']
            ],
            "${__2steluta}": [
                ["style", "left", '218px'],
                ["style", "top", '364px']
            ],
            "${_Text36Copy7}": [
                ["style", "height", '25px'],
                ["style", "top", '0px'],
                ["style", "left", '332px'],
                ["style", "font-size", '25px']
            ],
            "${_val_k2Copy}": [
                ["style", "display", 'none'],
                ["style", "left", '60px'],
                ["style", "top", '0px']
            ],
            "${_com8}": [
                ["style", "top", '305px'],
                ["style", "overflow", 'visible']
            ],
            "${_Text12}": [
                ["style", "top", '337px'],
                ["style", "left", '108px']
            ],
            "${_Text42Copy8}": [
                ["style", "top", '7px'],
                ["style", "left", '16px'],
                ["style", "font-size", '18px']
            ],
            "${_Text26}": [
                ["style", "left", '237px'],
                ["style", "top", '0px']
            ],
            "${__2stelutaCopy4}": [
                ["style", "top", '85px'],
                ["style", "left", '766px'],
                ["style", "display", 'none']
            ],
            "${_com6}": [
                ["style", "top", '256px'],
                ["style", "overflow", 'visible']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 28000,
            autoPlay: true,
            timeline: [
                { id: "eid25", tween: [ "style", "${__11}", "display", 'block', { fromValue: 'none'}], position: 3000, duration: 0 },
                { id: "eid154", tween: [ "style", "${__11}", "display", 'none', { fromValue: 'block'}], position: 19500, duration: 0 },
                { id: "eid11", tween: [ "style", "${_stelutaCopy}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid12", tween: [ "style", "${_stelutaCopy}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
                { id: "eid206", tween: [ "style", "${_stelutaCopy}", "display", 'none', { fromValue: 'block'}], position: 27500, duration: 0 },
                { id: "eid209", tween: [ "style", "${__12}", "left", '94px', { fromValue: '94px'}], position: 5500, duration: 0 },
                { id: "eid153", tween: [ "style", "${__12}", "left", '47px', { fromValue: '94px'}], position: 19500, duration: 0 },
                { id: "eid16", tween: [ "style", "${_delimCopy3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid62", tween: [ "style", "${_delimCopy3}", "display", 'block', { fromValue: 'none'}], position: 8500, duration: 0 },
                { id: "eid226", tween: [ "style", "${_delimCopy3}", "display", 'none', { fromValue: 'block'}], position: 9500, duration: 0 },
                { id: "eid229", tween: [ "style", "${_delimCopy3}", "display", 'block', { fromValue: 'none'}], position: 11000, duration: 0 },
                { id: "eid230", tween: [ "style", "${_delimCopy3}", "display", 'none', { fromValue: 'block'}], position: 12000, duration: 0 },
                { id: "eid239", tween: [ "style", "${_delimCopy3}", "display", 'block', { fromValue: 'none'}], position: 16500, duration: 0 },
                { id: "eid242", tween: [ "style", "${_delimCopy3}", "display", 'none', { fromValue: 'block'}], position: 17500, duration: 0 },
                { id: "eid266", tween: [ "style", "${_delimCopy3}", "display", 'block', { fromValue: 'none'}], position: 25000, duration: 0 },
                { id: "eid268", tween: [ "style", "${_delimCopy3}", "display", 'none', { fromValue: 'block'}], position: 26000, duration: 0 },
                { id: "eid65", tween: [ "style", "${_val_k4}", "display", 'block', { fromValue: 'none'}], position: 8500, duration: 0 },
                { id: "eid76", tween: [ "style", "${_val_k4}", "display", 'none', { fromValue: 'block'}], position: 9500, duration: 0 },
                { id: "eid97", tween: [ "style", "${_val_k4}", "display", 'block', { fromValue: 'none'}], position: 11000, duration: 0 },
                { id: "eid101", tween: [ "style", "${_val_k4}", "display", 'none', { fromValue: 'block'}], position: 12000, duration: 0 },
                { id: "eid129", tween: [ "style", "${_val_k4}", "display", 'block', { fromValue: 'none'}], position: 16500, duration: 0 },
                { id: "eid134", tween: [ "style", "${_val_k4}", "display", 'none', { fromValue: 'block'}], position: 17500, duration: 0 },
                { id: "eid179", tween: [ "style", "${_val_k4}", "display", 'block', { fromValue: 'none'}], position: 25000, duration: 0 },
                { id: "eid185", tween: [ "style", "${_val_k4}", "display", 'none', { fromValue: 'block'}], position: 26000, duration: 0 },
                { id: "eid227", tween: [ "style", "${_val_k4Copy}", "top", '-43px', { fromValue: '-43px'}], position: 9500, duration: 0 },
                { id: "eid142", tween: [ "style", "${_val_k4Copy}", "top", '-1px', { fromValue: '-43px'}], position: 17500, duration: 0 },
                { id: "eid175", tween: [ "style", "${_val_k4Copy}", "top", '-41px', { fromValue: '-1px'}], position: 23500, duration: 0 },
                { id: "eid195", tween: [ "style", "${_val_k4Copy}", "top", '-1px', { fromValue: '-41px'}], position: 26500, duration: 0 },
                { id: "eid210", tween: [ "style", "${_val_k0}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
                { id: "eid214", tween: [ "style", "${_val_k0}", "display", 'none', { fromValue: 'block'}], position: 2000, duration: 0 },
                { id: "eid215", tween: [ "style", "${_val_k0}", "display", 'block', { fromValue: 'none'}], position: 3500, duration: 0 },
                { id: "eid217", tween: [ "style", "${_val_k0}", "display", 'none', { fromValue: 'block'}], position: 4500, duration: 0 },
                { id: "eid218", tween: [ "style", "${_val_k0}", "display", 'block', { fromValue: 'none'}], position: 6000, duration: 0 },
                { id: "eid220", tween: [ "style", "${_val_k0}", "display", 'none', { fromValue: 'block'}], position: 7000, duration: 0 },
                { id: "eid223", tween: [ "style", "${_val_k0}", "display", 'block', { fromValue: 'none'}], position: 8500, duration: 0 },
                { id: "eid225", tween: [ "style", "${_val_k0}", "display", 'none', { fromValue: 'block'}], position: 9500, duration: 0 },
                { id: "eid228", tween: [ "style", "${_val_k0}", "display", 'block', { fromValue: 'none'}], position: 11000, duration: 0 },
                { id: "eid231", tween: [ "style", "${_val_k0}", "display", 'none', { fromValue: 'block'}], position: 12000, duration: 0 },
                { id: "eid234", tween: [ "style", "${_val_k0}", "display", 'block', { fromValue: 'none'}], position: 14000, duration: 0 },
                { id: "eid236", tween: [ "style", "${_val_k0}", "display", 'none', { fromValue: 'block'}], position: 15000, duration: 0 },
                { id: "eid237", tween: [ "style", "${_val_k0}", "display", 'block', { fromValue: 'none'}], position: 16500, duration: 0 },
                { id: "eid240", tween: [ "style", "${_val_k0}", "display", 'none', { fromValue: 'block'}], position: 17500, duration: 0 },
                { id: "eid257", tween: [ "style", "${_val_k0}", "display", 'block', { fromValue: 'none'}], position: 20000, duration: 0 },
                { id: "eid259", tween: [ "style", "${_val_k0}", "display", 'none', { fromValue: 'block'}], position: 21000, duration: 0 },
                { id: "eid260", tween: [ "style", "${_val_k0}", "display", 'block', { fromValue: 'none'}], position: 22500, duration: 0 },
                { id: "eid263", tween: [ "style", "${_val_k0}", "display", 'none', { fromValue: 'block'}], position: 23500, duration: 0 },
                { id: "eid264", tween: [ "style", "${_val_k0}", "display", 'block', { fromValue: 'none'}], position: 25000, duration: 0 },
                { id: "eid267", tween: [ "style", "${_val_k0}", "display", 'none', { fromValue: 'block'}], position: 26000, duration: 0 },
                { id: "eid211", tween: [ "style", "${_val_k0}", "display", 'none', { fromValue: 'none'}], position: 27500, duration: 0 },
                { id: "eid24", tween: [ "style", "${__01}", "display", 'none', { fromValue: 'block'}], position: 3000, duration: 0 },
                { id: "eid7", tween: [ "style", "${_m}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
                { id: "eid15", tween: [ "style", "${_delimCopy2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid42", tween: [ "style", "${_delimCopy2}", "display", 'block', { fromValue: 'none'}], position: 6000, duration: 0 },
                { id: "eid232", tween: [ "style", "${_delimCopy2}", "display", 'none', { fromValue: 'block'}], position: 12500, duration: 0 },
                { id: "eid233", tween: [ "style", "${_delimCopy2}", "display", 'block', { fromValue: 'none'}], position: 14000, duration: 0 },
                { id: "eid244", tween: [ "style", "${_delimCopy2}", "display", 'none', { fromValue: 'block'}], position: 18000, duration: 0 },
                { id: "eid262", tween: [ "style", "${_delimCopy2}", "display", 'block', { fromValue: 'none'}], position: 22500, duration: 0 },
                { id: "eid192", tween: [ "style", "${_delimCopy2}", "display", 'none', { fromValue: 'block'}], position: 26500, duration: 0 },
                { id: "eid79", tween: [ "style", "${_val_k4Copy}", "display", 'block', { fromValue: 'none'}], position: 9500, duration: 0 },
                { id: "eid108", tween: [ "style", "${_val_k4Copy}", "display", 'none', { fromValue: 'block'}], position: 12000, duration: 0 },
                { id: "eid125", tween: [ "style", "${_val_k4Copy}", "display", 'block', { fromValue: 'none'}], position: 15000, duration: 0 },
                { id: "eid136", tween: [ "style", "${_val_k4Copy}", "display", 'none', { fromValue: 'block'}], position: 17500, duration: 0 },
                { id: "eid145", tween: [ "style", "${_val_k4Copy}", "display", 'block', { fromValue: 'none'}], position: 18000, duration: 0 },
                { id: "eid251", tween: [ "style", "${_val_k4Copy}", "display", 'none', { fromValue: 'block'}], position: 18500, duration: 0 },
                { id: "eid174", tween: [ "style", "${_val_k4Copy}", "display", 'block', { fromValue: 'none'}], position: 23500, duration: 0 },
                { id: "eid187", tween: [ "style", "${_val_k4Copy}", "display", 'none', { fromValue: 'block'}], position: 26000, duration: 0 },
                { id: "eid194", tween: [ "style", "${_val_k4Copy}", "display", 'block', { fromValue: 'none'}], position: 26500, duration: 0 },
                { id: "eid196", tween: [ "style", "${_val_k4Copy}", "display", 'none', { fromValue: 'block'}], position: 27000, duration: 0 },
                { id: "eid271", tween: [ "style", "${_val_k0}", "top", '42px', { fromValue: '42px'}], position: 1000, duration: 0 },
                { id: "eid216", tween: [ "style", "${_val_k0}", "top", '-1px', { fromValue: '42px'}], position: 3500, duration: 0 },
                { id: "eid219", tween: [ "style", "${_val_k0}", "top", '-44px', { fromValue: '-1px'}], position: 6000, duration: 0 },
                { id: "eid224", tween: [ "style", "${_val_k0}", "top", '-88px', { fromValue: '-44px'}], position: 8500, duration: 0 },
                { id: "eid235", tween: [ "style", "${_val_k0}", "top", '-44px', { fromValue: '-88px'}], position: 14000, duration: 0 },
                { id: "eid238", tween: [ "style", "${_val_k0}", "top", '-87px', { fromValue: '-44px'}], position: 16500, duration: 0 },
                { id: "eid258", tween: [ "style", "${_val_k0}", "top", '-1px', { fromValue: '-87px'}], position: 20000, duration: 0 },
                { id: "eid261", tween: [ "style", "${_val_k0}", "top", '-43px', { fromValue: '-1px'}], position: 22500, duration: 0 },
                { id: "eid265", tween: [ "style", "${_val_k0}", "top", '-86px', { fromValue: '-43px'}], position: 25000, duration: 0 },
                { id: "eid14", tween: [ "style", "${_delimCopy}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid27", tween: [ "style", "${_delimCopy}", "display", 'block', { fromValue: 'none'}], position: 3500, duration: 0 },
                { id: "eid149", tween: [ "style", "${_delimCopy}", "display", 'block', { fromValue: 'block'}], position: 18000, duration: 0 },
                { id: "eid254", tween: [ "style", "${_delimCopy}", "display", 'none', { fromValue: 'block'}], position: 18500, duration: 0 },
                { id: "eid157", tween: [ "style", "${_delimCopy}", "display", 'block', { fromValue: 'none'}], position: 20000, duration: 0 },
                { id: "eid269", tween: [ "style", "${_delimCopy}", "display", 'none', { fromValue: 'block'}], position: 27000, duration: 0 },
                { id: "eid89", tween: [ "style", "${__14}", "display", 'block', { fromValue: 'none'}], position: 10500, duration: 0 },
                { id: "eid44", tween: [ "style", "${__2stelutaCopy2}", "display", 'block', { fromValue: 'none'}], position: 6000, duration: 0 },
                { id: "eid111", tween: [ "style", "${__2stelutaCopy2}", "display", 'none', { fromValue: 'block'}], position: 12500, duration: 0 },
                { id: "eid122", tween: [ "style", "${__2stelutaCopy2}", "display", 'block', { fromValue: 'none'}], position: 14000, duration: 0 },
                { id: "eid140", tween: [ "style", "${__2stelutaCopy2}", "display", 'block', { fromValue: 'block'}], position: 17500, duration: 0 },
                { id: "eid243", tween: [ "style", "${__2stelutaCopy2}", "display", 'none', { fromValue: 'block'}], position: 18000, duration: 0 },
                { id: "eid171", tween: [ "style", "${__2stelutaCopy2}", "display", 'block', { fromValue: 'none'}], position: 22500, duration: 0 },
                { id: "eid191", tween: [ "style", "${__2stelutaCopy2}", "display", 'none', { fromValue: 'block'}], position: 26500, duration: 0 },
                { id: "eid13", tween: [ "style", "${_val_k1}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
                { id: "eid203", tween: [ "style", "${_val_k1}", "display", 'none', { fromValue: 'block'}], position: 27500, duration: 0 },
                { id: "eid222", tween: [ "style", "${__13}", "left", '142px', { fromValue: '142px'}], position: 8000, duration: 0 },
                { id: "eid119", tween: [ "style", "${__13}", "left", '95px', { fromValue: '142px'}], position: 13500, duration: 0 },
                { id: "eid39", tween: [ "style", "${__02}", "display", 'none', { fromValue: 'block'}], position: 5500, duration: 0 },
                { id: "eid137", tween: [ "style", "${__1_3_4}", "display", 'block', { fromValue: 'none'}], position: 17500, duration: 0 },
                { id: "eid51", tween: [ "style", "${_val_k3Copy}", "display", 'block', { fromValue: 'none'}], position: 7000, duration: 0 },
                { id: "eid78", tween: [ "style", "${_val_k3Copy}", "display", 'block', { fromValue: 'block'}], position: 9000, duration: 0 },
                { id: "eid85", tween: [ "style", "${_val_k3Copy}", "display", 'none', { fromValue: 'block'}], position: 9500, duration: 0 },
                { id: "eid112", tween: [ "style", "${_val_k3Copy}", "display", 'block', { fromValue: 'none'}], position: 12500, duration: 0 },
                { id: "eid141", tween: [ "style", "${_val_k3Copy}", "display", 'block', { fromValue: 'block'}], position: 17000, duration: 0 },
                { id: "eid245", tween: [ "style", "${_val_k3Copy}", "display", 'none', { fromValue: 'block'}], position: 18000, duration: 0 },
                { id: "eid161", tween: [ "style", "${_val_k3Copy}", "display", 'block', { fromValue: 'none'}], position: 21000, duration: 0 },
                { id: "eid193", tween: [ "style", "${_val_k3Copy}", "display", 'block', { fromValue: 'block'}], position: 26000, duration: 0 },
                { id: "eid199", tween: [ "style", "${_val_k3Copy}", "display", 'none', { fromValue: 'block'}], position: 26500, duration: 0 },
                { id: "eid204", tween: [ "style", "${_val_k3Copy}", "display", 'block', { fromValue: 'none'}], position: 27000, duration: 0 },
                { id: "eid270", tween: [ "style", "${_val_k3Copy}", "display", 'none', { fromValue: 'block'}], position: 27500, duration: 0 },
                { id: "eid22", tween: [ "style", "${_val_k1Copy}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
                { id: "eid147", tween: [ "style", "${_val_k1Copy}", "display", 'block', { fromValue: 'block'}], position: 18000, duration: 0 },
                { id: "eid253", tween: [ "style", "${_val_k1Copy}", "display", 'none', { fromValue: 'block'}], position: 18500, duration: 0 },
                { id: "eid221", tween: [ "style", "${_val_k3Copy}", "top", '-43px', { fromValue: '-43px'}], position: 7000, duration: 0 },
                { id: "eid114", tween: [ "style", "${_val_k3Copy}", "top", '0px', { fromValue: '-43px'}], position: 12500, duration: 0 },
                { id: "eid200", tween: [ "style", "${_val_k3Copy}", "top", '41px', { fromValue: '0px'}], position: 26500, duration: 0 },
                { id: "eid241", tween: [ "style", "${__2_3_4}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid183", tween: [ "style", "${__2_3_4}", "display", 'none', { fromValue: 'none'}], position: 17500, duration: 0 },
                { id: "eid272", tween: [ "style", "${__2_3_4}", "display", 'block', { fromValue: 'none'}], position: 26000, duration: 0 },
                { id: "eid55", tween: [ "style", "${__13}", "display", 'block', { fromValue: 'none'}], position: 8000, duration: 0 },
                { id: "eid95", tween: [ "style", "${__13}", "display", 'none', { fromValue: 'block'}], position: 10500, duration: 0 },
                { id: "eid118", tween: [ "style", "${__13}", "display", 'block', { fromValue: 'none'}], position: 13500, duration: 0 },
                { id: "eid184", tween: [ "style", "${__2_3_4}", "top", '468px', { fromValue: '468px'}], position: 26000, duration: 0 },
                { id: "eid68", tween: [ "style", "${__2stelutaCopy3}", "display", 'block', { fromValue: 'none'}], position: 8500, duration: 0 },
                { id: "eid77", tween: [ "style", "${__2stelutaCopy3}", "display", 'none', { fromValue: 'block'}], position: 9500, duration: 0 },
                { id: "eid98", tween: [ "style", "${__2stelutaCopy3}", "display", 'block', { fromValue: 'none'}], position: 11000, duration: 0 },
                { id: "eid102", tween: [ "style", "${__2stelutaCopy3}", "display", 'none', { fromValue: 'block'}], position: 12000, duration: 0 },
                { id: "eid130", tween: [ "style", "${__2stelutaCopy3}", "display", 'block', { fromValue: 'none'}], position: 16500, duration: 0 },
                { id: "eid133", tween: [ "style", "${__2stelutaCopy3}", "display", 'none', { fromValue: 'block'}], position: 17500, duration: 0 },
                { id: "eid180", tween: [ "style", "${__2stelutaCopy3}", "display", 'block', { fromValue: 'none'}], position: 25000, duration: 0 },
                { id: "eid186", tween: [ "style", "${__2stelutaCopy3}", "display", 'none', { fromValue: 'block'}], position: 26000, duration: 0 },
                { id: "eid28", tween: [ "style", "${_val_k2}", "display", 'block', { fromValue: 'none'}], position: 3500, duration: 0 },
                { id: "eid143", tween: [ "style", "${_val_k2}", "display", 'block', { fromValue: 'block'}], position: 18000, duration: 0 },
                { id: "eid250", tween: [ "style", "${_val_k2}", "display", 'none', { fromValue: 'block'}], position: 18500, duration: 0 },
                { id: "eid156", tween: [ "style", "${_val_k2}", "display", 'block', { fromValue: 'none'}], position: 20000, duration: 0 },
                { id: "eid197", tween: [ "style", "${_val_k2}", "display", 'none', { fromValue: 'block'}], position: 27000, duration: 0 },
                { id: "eid9", tween: [ "style", "${_delim}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid10", tween: [ "style", "${_delim}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
                { id: "eid205", tween: [ "style", "${_delim}", "display", 'none', { fromValue: 'block'}], position: 27500, duration: 0 },
                { id: "eid4", tween: [ "style", "${_n}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
                { id: "eid36", tween: [ "style", "${_Curent}", "left", '-5px', { fromValue: '-5px'}], position: 5500, duration: 0 },
                { id: "eid106", tween: [ "style", "${_val_k5}", "display", 'block', { fromValue: 'none'}], position: 12000, duration: 0 },
                { id: "eid109", tween: [ "style", "${_val_k5}", "display", 'none', { fromValue: 'block'}], position: 12500, duration: 0 },
                { id: "eid135", tween: [ "style", "${_val_k5}", "display", 'block', { fromValue: 'none'}], position: 17500, duration: 0 },
                { id: "eid247", tween: [ "style", "${_val_k5}", "display", 'none', { fromValue: 'block'}], position: 18000, duration: 0 },
                { id: "eid188", tween: [ "style", "${_val_k5}", "display", 'block', { fromValue: 'none'}], position: 26000, duration: 0 },
                { id: "eid189", tween: [ "style", "${_val_k5}", "display", 'none', { fromValue: 'block'}], position: 26500, duration: 0 },
                { id: "eid148", tween: [ "style", "${_val_k2Copy}", "top", '41px', { fromValue: '0px'}], position: 18000, duration: 0 },
                { id: "eid103", tween: [ "style", "${__1_2_4}", "display", 'block', { fromValue: 'none'}], position: 12000, duration: 0 },
                { id: "eid43", tween: [ "style", "${_val_k3}", "display", 'block', { fromValue: 'none'}], position: 6000, duration: 0 },
                { id: "eid110", tween: [ "style", "${_val_k3}", "display", 'none', { fromValue: 'block'}], position: 12500, duration: 0 },
                { id: "eid121", tween: [ "style", "${_val_k3}", "display", 'block', { fromValue: 'none'}], position: 14000, duration: 0 },
                { id: "eid139", tween: [ "style", "${_val_k3}", "display", 'block', { fromValue: 'block'}], position: 17500, duration: 0 },
                { id: "eid246", tween: [ "style", "${_val_k3}", "display", 'none', { fromValue: 'block'}], position: 18000, duration: 0 },
                { id: "eid170", tween: [ "style", "${_val_k3}", "display", 'block', { fromValue: 'none'}], position: 22500, duration: 0 },
                { id: "eid190", tween: [ "style", "${_val_k3}", "display", 'none', { fromValue: 'block'}], position: 26500, duration: 0 },
                { id: "eid35", tween: [ "style", "${_val_k2Copy}", "display", 'block', { fromValue: 'none'}], position: 4500, duration: 0 },
                { id: "eid113", tween: [ "style", "${_val_k2Copy}", "display", 'none', { fromValue: 'block'}], position: 12500, duration: 0 },
                { id: "eid146", tween: [ "style", "${_val_k2Copy}", "display", 'none', { fromValue: 'none'}], position: 18000, duration: 0 },
                { id: "eid252", tween: [ "style", "${_val_k2Copy}", "display", 'block', { fromValue: 'none'}], position: 18500, duration: 0 },
                { id: "eid201", tween: [ "style", "${_val_k2Copy}", "display", 'none', { fromValue: 'block'}], position: 27000, duration: 0 },
                { id: "eid74", tween: [ "style", "${__1_2_3}", "display", 'block', { fromValue: 'none'}], position: 9500, duration: 0 },
                { id: "eid2", tween: [ "style", "${_Curent}", "top", '97px', { fromValue: '97px'}], position: 0, duration: 0 },
                { id: "eid3", tween: [ "style", "${_Curent}", "top", '121px', { fromValue: '97px'}], position: 500, duration: 0 },
                { id: "eid8", tween: [ "style", "${_Curent}", "top", '234px', { fromValue: '128px'}], position: 1000, duration: 0 },
                { id: "eid19", tween: [ "style", "${_Curent}", "top", '262px', { fromValue: '239px'}], position: 1500, duration: 0 },
                { id: "eid20", tween: [ "style", "${_Curent}", "top", '311px', { fromValue: '267px'}], position: 2000, duration: 0 },
                { id: "eid21", tween: [ "style", "${_Curent}", "top", '337px', { fromValue: '318px'}], position: 2500, duration: 0 },
                { id: "eid23", tween: [ "style", "${_Curent}", "top", '361px', { fromValue: '343px'}], position: 3000, duration: 0 },
                { id: "eid26", tween: [ "style", "${_Curent}", "top", '234px', { fromValue: '368px'}], position: 3500, duration: 0 },
                { id: "eid30", tween: [ "style", "${_Curent}", "top", '262px', { fromValue: '240px'}], position: 4000, duration: 0 },
                { id: "eid31", tween: [ "style", "${_Curent}", "top", '311px', { fromValue: '268px'}], position: 4500, duration: 0 },
                { id: "eid32", tween: [ "style", "${_Curent}", "top", '338px', { fromValue: '318px'}], position: 5000, duration: 0 },
                { id: "eid37", tween: [ "style", "${_Curent}", "top", '360px', { fromValue: '343px'}], position: 5500, duration: 0 },
                { id: "eid41", tween: [ "style", "${_Curent}", "top", '234px', { fromValue: '367px'}], position: 6000, duration: 0 },
                { id: "eid47", tween: [ "style", "${_Curent}", "top", '261px', { fromValue: '241px'}], position: 6500, duration: 0 },
                { id: "eid48", tween: [ "style", "${_Curent}", "top", '312px', { fromValue: '267px'}], position: 7000, duration: 0 },
                { id: "eid49", tween: [ "style", "${_Curent}", "top", '337px', { fromValue: '318px'}], position: 7500, duration: 0 },
                { id: "eid53", tween: [ "style", "${_Curent}", "top", '361px', { fromValue: '344px'}], position: 8000, duration: 0 },
                { id: "eid61", tween: [ "style", "${_Curent}", "top", '234px', { fromValue: '367px'}], position: 8500, duration: 0 },
                { id: "eid72", tween: [ "style", "${_Curent}", "top", '262px', { fromValue: '239px'}], position: 9000, duration: 0 },
                { id: "eid73", tween: [ "style", "${_Curent}", "top", '311px', { fromValue: '267px'}], position: 9500, duration: 0 },
                { id: "eid86", tween: [ "style", "${_Curent}", "top", '337px', { fromValue: '317px'}], position: 10000, duration: 0 },
                { id: "eid88", tween: [ "style", "${_Curent}", "top", '361px', { fromValue: '344px'}], position: 10500, duration: 0 },
                { id: "eid96", tween: [ "style", "${_Curent}", "top", '234px', { fromValue: '368px'}], position: 11000, duration: 0 },
                { id: "eid99", tween: [ "style", "${_Curent}", "top", '260px', { fromValue: '240px'}], position: 11500, duration: 0 },
                { id: "eid100", tween: [ "style", "${_Curent}", "top", '312px', { fromValue: '268px'}], position: 12000, duration: 0 },
                { id: "eid115", tween: [ "style", "${_Curent}", "top", '337px', { fromValue: '318px'}], position: 13000, duration: 0 },
                { id: "eid116", tween: [ "style", "${_Curent}", "top", '360px', { fromValue: '344px'}], position: 13500, duration: 0 },
                { id: "eid120", tween: [ "style", "${_Curent}", "top", '234px', { fromValue: '367px'}], position: 14000, duration: 0 },
                { id: "eid123", tween: [ "style", "${_Curent}", "top", '261px', { fromValue: '240px'}], position: 14500, duration: 0 },
                { id: "eid124", tween: [ "style", "${_Curent}", "top", '312px', { fromValue: '268px'}], position: 15000, duration: 0 },
                { id: "eid126", tween: [ "style", "${_Curent}", "top", '337px', { fromValue: '318px'}], position: 15500, duration: 0 },
                { id: "eid127", tween: [ "style", "${_Curent}", "top", '361px', { fromValue: '344px'}], position: 16000, duration: 0 },
                { id: "eid128", tween: [ "style", "${_Curent}", "top", '234px', { fromValue: '367px'}], position: 16500, duration: 0 },
                { id: "eid131", tween: [ "style", "${_Curent}", "top", '261px', { fromValue: '241px'}], position: 17000, duration: 0 },
                { id: "eid132", tween: [ "style", "${_Curent}", "top", '312px', { fromValue: '268px'}], position: 17500, duration: 0 },
                { id: "eid273", tween: [ "style", "${_Curent}", "top", '312px', { fromValue: '312px'}], position: 18000, duration: 0 },
                { id: "eid150", tween: [ "style", "${_Curent}", "top", '312px', { fromValue: '311px'}], position: 18500, duration: 0 },
                { id: "eid256", tween: [ "style", "${_Curent}", "top", '337px', { fromValue: '317px'}], position: 19000, duration: 0 },
                { id: "eid151", tween: [ "style", "${_Curent}", "top", '362px', { fromValue: '347px'}], position: 19500, duration: 0 },
                { id: "eid155", tween: [ "style", "${_Curent}", "top", '234px', { fromValue: '368px'}], position: 20000, duration: 0 },
                { id: "eid159", tween: [ "style", "${_Curent}", "top", '261px', { fromValue: '241px'}], position: 20500, duration: 0 },
                { id: "eid160", tween: [ "style", "${_Curent}", "top", '312px', { fromValue: '268px'}], position: 21000, duration: 0 },
                { id: "eid162", tween: [ "style", "${_Curent}", "top", '337px', { fromValue: '318px'}], position: 21500, duration: 0 },
                { id: "eid163", tween: [ "style", "${_Curent}", "top", '361px', { fromValue: '344px'}], position: 22000, duration: 0 },
                { id: "eid169", tween: [ "style", "${_Curent}", "top", '234px', { fromValue: '368px'}], position: 22500, duration: 0 },
                { id: "eid172", tween: [ "style", "${_Curent}", "top", '261px', { fromValue: '240px'}], position: 23000, duration: 0 },
                { id: "eid173", tween: [ "style", "${_Curent}", "top", '312px', { fromValue: '267px'}], position: 23500, duration: 0 },
                { id: "eid176", tween: [ "style", "${_Curent}", "top", '337px', { fromValue: '317px'}], position: 24000, duration: 0 },
                { id: "eid177", tween: [ "style", "${_Curent}", "top", '361px', { fromValue: '344px'}], position: 24500, duration: 0 },
                { id: "eid178", tween: [ "style", "${_Curent}", "top", '234px', { fromValue: '368px'}], position: 25000, duration: 0 },
                { id: "eid181", tween: [ "style", "${_Curent}", "top", '261px', { fromValue: '240px'}], position: 25500, duration: 0 },
                { id: "eid182", tween: [ "style", "${_Curent}", "top", '312px', { fromValue: '267px'}], position: 26000, duration: 0 },
                { id: "eid202", tween: [ "style", "${_Curent}", "top", '146px', { fromValue: '318px'}], position: 27500, duration: 0 },
                { id: "eid207", tween: [ "style", "${_Curent}", "top", '170px', { fromValue: '152px'}], position: 28000, duration: 0 },
                { id: "eid29", tween: [ "style", "${__2stelutaCopy}", "display", 'block', { fromValue: 'none'}], position: 3500, duration: 0 },
                { id: "eid144", tween: [ "style", "${__2stelutaCopy}", "display", 'block', { fromValue: 'block'}], position: 18000, duration: 0 },
                { id: "eid255", tween: [ "style", "${__2stelutaCopy}", "display", 'none', { fromValue: 'block'}], position: 18500, duration: 0 },
                { id: "eid158", tween: [ "style", "${__2stelutaCopy}", "display", 'block', { fromValue: 'none'}], position: 20000, duration: 0 },
                { id: "eid198", tween: [ "style", "${__2stelutaCopy}", "display", 'none', { fromValue: 'block'}], position: 27000, duration: 0 },
                { id: "eid58", tween: [ "style", "${__03}", "display", 'none', { fromValue: 'block'}], position: 8000, duration: 0 },
                { id: "eid38", tween: [ "style", "${__12}", "display", 'block', { fromValue: 'none'}], position: 5500, duration: 0 },
                { id: "eid117", tween: [ "style", "${__12}", "display", 'none', { fromValue: 'block'}], position: 13500, duration: 0 },
                { id: "eid152", tween: [ "style", "${__12}", "display", 'block', { fromValue: 'none'}], position: 19500, duration: 0 }            ]
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
})(jQuery, AdobeEdge, "EDGE-86966772");
