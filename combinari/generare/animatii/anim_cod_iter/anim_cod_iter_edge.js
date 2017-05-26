/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};    fonts['ubuntu-mono, sans-serif']='<script src=\"http://use.edgefonts.net/ubuntu-mono:n7,i7,n4,i4:all.js\"></script>';

var opts = {
    'gAudioPreloadPreference': 'auto',

    'gVideoPreloadPreference': 'auto'
};
var resources = [
];
var symbols = {
"stage": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
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
                id: 'Curent',
                type: 'rect',
                rect: ['36px', '128px','518px','23px','auto', 'auto'],
                borderRadius: ["10px", "10px", "10px", "10px"],
                fill: ["rgba(192,192,192,0)"],
                stroke: [1,"rgb(77, 169, 128)","solid"]
            },
            {
                id: 'Text44',
                type: 'text',
                rect: ['36px', '426px','auto','auto','auto', 'auto'],
                text: "}",
                align: "left",
                font: ['ubuntu-mono, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'Text44Copy',
                type: 'text',
                rect: ['85px', '398px','auto','auto','auto', 'auto'],
                text: "}",
                align: "left",
                font: ['ubuntu-mono, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'Text43',
                type: 'text',
                rect: ['177px', '200px','auto','auto','auto', 'auto'],
                text: "sol[vf]++;",
                align: "left",
                font: ['ubuntu-mono, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'Text13',
                type: 'text',
                rect: ['111px', '376px','auto','auto','auto', 'auto'],
                text: "vf--;",
                align: "left",
                font: ['ubuntu-mono, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'Text12',
                type: 'text',
                rect: ['112px', '351px','auto','auto','auto', 'auto'],
                text: "}",
                align: "left",
                font: ['ubuntu-mono, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'Text11',
                type: 'text',
                rect: ['216px', '326px','auto','auto','auto', 'auto'],
                text: "}",
                align: "left",
                font: ['ubuntu-mono, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'Text10',
                type: 'text',
                rect: ['216px', '301px','auto','auto','auto', 'auto'],
                text: "sol[vf]=sol[vf-1];",
                align: "left",
                font: ['ubuntu-mono, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'Text9',
                type: 'text',
                rect: ['217px', '276px','auto','auto','auto', 'auto'],
                text: "vf++;",
                align: "left",
                font: ['ubuntu-mono, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'Text8',
                type: 'text',
                rect: ['215px', '249px','auto','auto','auto', 'auto'],
                text: "else {",
                align: "left",
                font: ['ubuntu-mono, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'Text7',
                type: 'text',
                rect: ['130px', '175px','auto','auto','auto', 'auto'],
                text: "while (sol[vf]&lt;n-m+vf) {",
                align: "left",
                font: ['ubuntu-mono, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'Text6',
                type: 'text',
                rect: ['86px', '150px','auto','auto','auto', 'auto'],
                text: "while (vf&gt;0) {",
                align: "left",
                font: ['ubuntu-mono, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'Text5',
                type: 'text',
                rect: ['85px', '126px','auto','auto','auto', 'auto'],
                text: "int vf=1;",
                align: "left",
                font: ['ubuntu-mono, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'Text4',
                type: 'text',
                rect: ['177px', '225px','auto','auto','auto', 'auto'],
                text: "if (vf==m) afisare();",
                align: "left",
                font: ['ubuntu-mono, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'Text3',
                type: 'text',
                rect: ['37px', '100px','auto','auto','auto', 'auto'],
                text: "void gen() {",
                align: "left",
                font: ['ubuntu-mono, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'Text2',
                type: 'text',
                rect: ['37px', '58px','auto','auto','auto', 'auto'],
                text: "int sol[DMAX];",
                align: "left",
                font: ['ubuntu-mono, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'Text',
                type: 'text',
                rect: ['37px', '32px','auto','auto','auto', 'auto'],
                text: "int n, m;",
                font: ['ubuntu-mono, sans-serif', 24, "rgba(0,0,0,1)", "normal", "none", ""]
            },
            {
                id: 'com1',
                type: 'group',
                rect: ['30px', '27px','528','33','auto', 'auto'],
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
                rect: ['30px', '56px','528','33','auto', 'auto'],
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
                rect: ['30px', '123px','528','33','auto', 'auto'],
                c: [
                {
                    id: 'RoundRect4Copy2',
                    type: 'rect',
                    rect: ['0px', '1px','526px','50px','auto', 'auto'],
                    borderRadius: ["10px", "10px", "10px", "10px"],
                    fill: ["rgba(77,169,128,1.00)"],
                    stroke: [1,"rgb(77, 169, 128)","solid"]
                },
                {
                    id: 'Text42Copy2',
                    type: 'text',
                    rect: ['16px', '7px','auto','auto','auto', 'auto'],
                    text: "//vf reprezinta pozitia pe care o completam in vector<br>(nivelul stivei)",
                    align: "left",
                    font: ['ubuntu-mono, sans-serif', 18, "rgba(0,0,0,1)", "400", "none", "normal"]
                }]
            },
            {
                id: 'com4',
                type: 'group',
                rect: ['30px', '148px','528','33px','auto', 'auto'],
                c: [
                {
                    id: 'RoundRect4Copy3',
                    type: 'rect',
                    rect: ['0px', '0px','526px','34px','auto', 'auto'],
                    borderRadius: ["10px", "10px", "10px", "10px"],
                    fill: ["rgba(77,169,128,1.00)"],
                    stroke: [1,"rgb(77, 169, 128)","solid"]
                },
                {
                    id: 'Text42Copy3',
                    type: 'text',
                    rect: ['16px', '7px','auto','auto','auto', 'auto'],
                    text: "//cat timp \"stiva\" nu este vida",
                    align: "left",
                    font: ['ubuntu-mono, sans-serif', 18, "rgba(0,0,0,1)", "400", "none", "normal"]
                }]
            },
            {
                id: 'com5',
                type: 'group',
                rect: ['30px', '172px','528','33','auto', 'auto'],
                c: [
                {
                    id: 'RoundRect4Copy4',
                    type: 'rect',
                    rect: ['0px', '0px','526px','52px','auto', 'auto'],
                    borderRadius: ["10px", "10px", "10px", "10px"],
                    fill: ["rgba(77,169,128,1.00)"],
                    stroke: [1,"rgb(77, 169, 128)","solid"]
                },
                {
                    id: 'Text42Copy4',
                    type: 'text',
                    rect: ['16px', '7px','auto','auto','auto', 'auto'],
                    text: "//pentru fiecare valoare care poate sta pe pozitia k<br>//valoarea maxima care poate sta pe pozitia k este n-m+k",
                    align: "left",
                    font: ['ubuntu-mono, sans-serif', 18, "rgba(0,0,0,1)", "400", "none", "normal"]
                }]
            },
            {
                id: 'com6',
                type: 'group',
                rect: ['30px', '198px','528','33','auto', 'auto'],
                c: [
                {
                    id: 'RoundRect4Copy5',
                    type: 'rect',
                    rect: ['0px', '0px','526px','34px','auto', 'auto'],
                    borderRadius: ["10px", "10px", "10px", "10px"],
                    fill: ["rgba(77,169,128,1.00)"],
                    stroke: [1,"rgb(77, 169, 128)","solid"]
                },
                {
                    id: 'Text42Copy5',
                    type: 'text',
                    rect: ['16px', '7px','auto','auto','auto', 'auto'],
                    text: "//punem o noua valoare",
                    align: "left",
                    font: ['ubuntu-mono, sans-serif', 18, "rgba(0,0,0,1)", "400", "none", "normal"]
                }]
            },
            {
                id: 'com7',
                type: 'group',
                rect: ['30px', '223px','528','33','auto', 'auto'],
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
                    text: "//daca am generat o solutie, o afisam",
                    align: "left",
                    font: ['ubuntu-mono, sans-serif', 18, "rgba(0,0,0,1)", "400", "none", "normal"]
                }]
            },
            {
                id: 'com8',
                type: 'group',
                rect: ['30px', '248px','528','33','auto', 'auto'],
                c: [
                {
                    id: 'RoundRect4Copy7',
                    type: 'rect',
                    rect: ['0px', '0px','526px','34px','auto', 'auto'],
                    borderRadius: ["10px", "10px", "10px", "10px"],
                    fill: ["rgba(77,169,128,1.00)"],
                    stroke: [1,"rgb(77, 169, 128)","solid"]
                },
                {
                    id: 'Text42Copy7',
                    type: 'text',
                    rect: ['16px', '7px','auto','auto','auto', 'auto'],
                    text: "//daca nu, completam in continuare",
                    align: "left",
                    font: ['ubuntu-mono, sans-serif', 18, "rgba(0,0,0,1)", "400", "none", "normal"]
                }]
            },
            {
                id: 'com9',
                type: 'group',
                rect: ['30px', '272px','528','33','auto', 'auto'],
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
                    text: "//trecem la urmatoarea pozitie",
                    align: "left",
                    font: ['ubuntu-mono, sans-serif', 18, "rgba(0,0,0,1)", "400", "none", "normal"]
                }]
            },
            {
                id: 'com10',
                type: 'group',
                rect: ['30px', '299px','528','33','auto', 'auto'],
                c: [
                {
                    id: 'RoundRect4Copy9',
                    type: 'rect',
                    rect: ['0px', '0px','526px','50px','auto', 'auto'],
                    borderRadius: ["10px", "10px", "10px", "10px"],
                    fill: ["rgba(77,169,128,1.00)"],
                    stroke: [1,"rgb(77, 169, 128)","solid"]
                },
                {
                    id: 'Text42Copy9',
                    type: 'text',
                    rect: ['16px', '7px','auto','auto','auto', 'auto'],
                    text: "//deoarece ordinea nu conteaza, generam combinarile in<br>ordine crescatoare",
                    align: "left",
                    font: ['ubuntu-mono, sans-serif', 18, "rgba(0,0,0,1)", "400", "none", "normal"]
                }]
            },
            {
                id: 'com11',
                type: 'group',
                rect: ['30px', '379px','528','33','auto', 'auto'],
                c: [
                {
                    id: 'RoundRect4Copy10',
                    type: 'rect',
                    rect: ['0px', '0px','526px','50px','auto', 'auto'],
                    borderRadius: ["10px", "10px", "10px", "10px"],
                    fill: ["rgba(77,169,128,1.00)"],
                    stroke: [1,"rgb(77, 169, 128)","solid"]
                },
                {
                    id: 'Text42Copy10',
                    type: 'text',
                    rect: ['16px', '7px','auto','auto','auto', 'auto'],
                    text: "//dupa ce am incercat toate valorile posibile pentru<br>pozitia k, revenim la pozitia anterioara",
                    align: "left",
                    font: ['ubuntu-mono, sans-serif', 18, "rgba(0,0,0,1)", "400", "none", "normal"]
                }]
            },
            {
                id: 'Ecran',
                type: 'text',
                rect: ['600px', '64px','auto','auto','auto', 'auto'],
                text: "Ecran:",
                align: "left",
                font: ['ubuntu-mono, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
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
                rect: ['189px', '509px','382px','21px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"vect_sol2.png",'0px','0px']
            },
            {
                id: 'Poz_sol',
                type: 'group',
                rect: ['209px', '529','343','25','auto', 'auto'],
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
                id: 'nm',
                type: 'text',
                rect: ['37px', '498px','auto','auto','auto', 'auto'],
                text: "n=<br>m=",
                align: "left",
                font: ['ubuntu-mono, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'Group2',
                type: 'group',
                rect: ['687px', '124','50','327','auto', 'auto'],
                c: [
                {
                    id: '_3_4_5',
                    display: 'none',
                    type: 'text',
                    rect: ['0px', '305px','auto','auto','auto', 'auto'],
                    text: "3 4 5",
                    align: "left",
                    font: ['ubuntu-mono, sans-serif', 20, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: '_2_4_5',
                    display: 'none',
                    type: 'text',
                    rect: ['0px', '271px','auto','auto','auto', 'auto'],
                    text: "2 4 5",
                    align: "left",
                    font: ['ubuntu-mono, sans-serif', 20, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: '_2_3_5',
                    display: 'none',
                    type: 'text',
                    rect: ['0px', '237px','auto','auto','auto', 'auto'],
                    text: "2 3 5",
                    align: "left",
                    font: ['ubuntu-mono, sans-serif', 20, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: '_2_3_4',
                    display: 'none',
                    type: 'text',
                    rect: ['0px', '203px','auto','auto','auto', 'auto'],
                    text: "2 3 4",
                    align: "left",
                    font: ['ubuntu-mono, sans-serif', 20, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: '_1_4_5',
                    display: 'none',
                    type: 'text',
                    rect: ['0px', '169px','auto','auto','auto', 'auto'],
                    text: "1 4 5",
                    align: "left",
                    font: ['ubuntu-mono, sans-serif', 20, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: '_1_3_5',
                    display: 'none',
                    type: 'text',
                    rect: ['0px', '136px','auto','auto','auto', 'auto'],
                    text: "1 3 5",
                    align: "left",
                    font: ['ubuntu-mono, sans-serif', 20, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: '_1_3_4',
                    display: 'none',
                    type: 'text',
                    rect: ['0px', '102px','auto','auto','auto', 'auto'],
                    text: "1 3 4",
                    align: "left",
                    font: ['ubuntu-mono, sans-serif', 20, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: '_1_2_5',
                    display: 'none',
                    type: 'text',
                    rect: ['0px', '68px','auto','auto','auto', 'auto'],
                    text: "1 2 5",
                    align: "left",
                    font: ['ubuntu-mono, sans-serif', 20, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: '_1_2_4',
                    display: 'none',
                    type: 'text',
                    rect: ['0px', '34px','auto','auto','auto', 'auto'],
                    text: "1 2 4",
                    align: "left",
                    font: ['ubuntu-mono, sans-serif', 20, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: '_1_2_3',
                    display: 'none',
                    type: 'text',
                    rect: ['0px', '0px','auto','auto','auto', 'auto'],
                    text: "1 2 3",
                    align: "left",
                    font: ['ubuntu-mono, sans-serif', 20, "rgba(0,0,0,1)", "400", "none", "normal"]
                }]
            },
            {
                id: 'val_sol',
                type: 'group',
                rect: ['208px', '500','344','25','auto', 'auto'],
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
                    rect: ['47px', '0px','auto','auto','auto', 'auto'],
                    text: "0",
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
                    id: '_11',
                    display: 'none',
                    type: 'text',
                    rect: ['47px', '-1px','auto','auto','auto', 'auto'],
                    text: "1",
                    align: "left",
                    font: ['ubuntu-mono, sans-serif', 25, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: '_12',
                    display: 'none',
                    type: 'text',
                    rect: ['47px', '0px','auto','auto','auto', 'auto'],
                    text: "2",
                    align: "left",
                    font: ['ubuntu-mono, sans-serif', 25, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: '_13',
                    display: 'none',
                    type: 'text',
                    rect: ['47px', '0px','auto','auto','auto', 'auto'],
                    text: "3",
                    align: "left",
                    font: ['ubuntu-mono, sans-serif', 25, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: '_14',
                    display: 'none',
                    type: 'text',
                    rect: ['47px', '0px','auto','auto','auto', 'auto'],
                    text: "4",
                    align: "left",
                    font: ['ubuntu-mono, sans-serif', 25, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: '_15',
                    display: 'none',
                    type: 'text',
                    rect: ['47px', '0px','auto','auto','auto', 'auto'],
                    text: "5",
                    align: "left",
                    font: ['ubuntu-mono, sans-serif', 25, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: '_21',
                    display: 'none',
                    type: 'text',
                    rect: ['94px', '0px','auto','auto','auto', 'auto'],
                    text: "1",
                    align: "left",
                    font: ['ubuntu-mono, sans-serif', 25, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: '_22',
                    display: 'none',
                    type: 'text',
                    rect: ['94px', '0px','auto','auto','auto', 'auto'],
                    text: "2",
                    align: "left",
                    font: ['ubuntu-mono, sans-serif', 25, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: '_23',
                    display: 'none',
                    type: 'text',
                    rect: ['94px', '0px','auto','auto','auto', 'auto'],
                    text: "3",
                    align: "left",
                    font: ['ubuntu-mono, sans-serif', 25, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: '_24',
                    display: 'none',
                    type: 'text',
                    rect: ['94px', '0px','auto','auto','auto', 'auto'],
                    text: "4",
                    align: "left",
                    font: ['ubuntu-mono, sans-serif', 25, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: '_25',
                    display: 'none',
                    type: 'text',
                    rect: ['94px', '0px','auto','auto','auto', 'auto'],
                    text: "5",
                    align: "left",
                    font: ['ubuntu-mono, sans-serif', 25, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: '_31',
                    display: 'none',
                    type: 'text',
                    rect: ['142px', '-1px','auto','auto','auto', 'auto'],
                    text: "1",
                    align: "left",
                    font: ['ubuntu-mono, sans-serif', 25, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: '_32',
                    display: 'none',
                    type: 'text',
                    rect: ['142px', '0px','auto','auto','auto', 'auto'],
                    text: "2",
                    align: "left",
                    font: ['ubuntu-mono, sans-serif', 25, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: '_33',
                    display: 'none',
                    type: 'text',
                    rect: ['142px', '0px','auto','auto','auto', 'auto'],
                    text: "3",
                    align: "left",
                    font: ['ubuntu-mono, sans-serif', 25, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: '_34',
                    display: 'none',
                    type: 'text',
                    rect: ['142px', '0px','auto','auto','auto', 'auto'],
                    text: "4",
                    align: "left",
                    font: ['ubuntu-mono, sans-serif', 25, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: '_35',
                    display: 'none',
                    type: 'text',
                    rect: ['142px', '0px','auto','auto','auto', 'auto'],
                    text: "5",
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
                id: 'n',
                type: 'text',
                rect: ['61px', '509','auto','auto','auto', 'auto'],
                text: "5",
                align: "left",
                font: ['ubuntu-mono, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'm',
                type: 'text',
                rect: ['61px', '524px','auto','auto','auto', 'auto'],
                text: "3",
                align: "left",
                font: ['ubuntu-mono, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'vf1',
                display: 'none',
                type: 'text',
                rect: ['652px', '507px','auto','auto','auto', 'auto'],
                text: "1",
                align: "left",
                font: ['ubuntu-mono, sans-serif', 25, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'vf2',
                display: 'none',
                type: 'text',
                rect: ['652px', '507px','auto','auto','auto', 'auto'],
                text: "2",
                align: "left",
                font: ['ubuntu-mono, sans-serif', 25, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'vf3',
                display: 'none',
                type: 'text',
                rect: ['652px', '507px','auto','auto','auto', 'auto'],
                text: "3",
                align: "left",
                font: ['ubuntu-mono, sans-serif', 25, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'vf4',
                display: 'none',
                type: 'text',
                rect: ['652px', '507px','auto','auto','auto', 'auto'],
                text: "4",
                align: "left",
                font: ['ubuntu-mono, sans-serif', 25, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'Group',
                type: 'group',
                rect: ['615', '507','49','25','auto', 'auto'],
                c: [
                {
                    id: 'vf0',
                    display: 'none',
                    type: 'text',
                    rect: ['37px', '0px','auto','auto','auto', 'auto'],
                    text: "0",
                    align: "left",
                    font: ['ubuntu-mono, sans-serif', 25, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: 'vf',
                    type: 'text',
                    rect: ['0px', '0px','auto','auto','auto', 'auto'],
                    text: "vf=",
                    align: "left",
                    font: ['ubuntu-mono, sans-serif', 25, "rgba(0,0,0,1)", "400", "none", "normal"]
                }]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_nm}": [
                ["style", "top", '498px'],
                ["style", "left", '37px']
            ],
            "${_vf3}": [
                ["style", "top", '507px'],
                ["style", "left", '652px'],
                ["style", "display", 'none']
            ],
            "${_vf2}": [
                ["style", "top", '507px'],
                ["style", "left", '652px'],
                ["style", "display", 'none']
            ],
            "${_Text2}": [
                ["style", "top", '58px'],
                ["style", "left", '37px']
            ],
            "${_vf0}": [
                ["style", "top", '0px'],
                ["style", "left", '37px'],
                ["style", "display", 'none']
            ],
            "${__11}": [
                ["style", "display", 'none'],
                ["style", "top", '-1px'],
                ["style", "left", '47px'],
                ["style", "font-size", '25px']
            ],
            "${_Text42Copy3}": [
                ["style", "top", '7px'],
                ["style", "left", '16px'],
                ["style", "font-size", '18px']
            ],
            "${_Text42Copy}": [
                ["style", "top", '7px'],
                ["style", "left", '16px'],
                ["style", "font-size", '18px']
            ],
            "${__21}": [
                ["style", "top", '0px'],
                ["style", "display", 'none'],
                ["style", "left", '94px'],
                ["style", "font-size", '25px']
            ],
            "${_com10}": [
                ["style", "top", '299px'],
                ["style", "left", '30px'],
                ["style", "overflow", 'visible']
            ],
            "${__2_4_5}": [
                ["style", "top", '271px'],
                ["style", "left", '0px'],
                ["style", "display", 'none']
            ],
            "${__1_3_5}": [
                ["style", "top", '136px'],
                ["style", "left", '0px'],
                ["style", "display", 'none']
            ],
            "${_com9}": [
                ["style", "top", '272px'],
                ["style", "left", '30px'],
                ["style", "overflow", 'visible']
            ],
            "${_com7}": [
                ["style", "top", '223px'],
                ["style", "left", '30px'],
                ["style", "overflow", 'visible']
            ],
            "${__31}": [
                ["style", "top", '-1px'],
                ["style", "display", 'none'],
                ["style", "left", '142px'],
                ["style", "font-size", '25px']
            ],
            "${_Text10}": [
                ["style", "top", '301px'],
                ["style", "left", '216px']
            ],
            "${_RoundRect4}": [
                ["style", "top", '0px'],
                ["style", "height", '31px'],
                ["color", "background-color", 'rgba(77,169,128,1.00)'],
                ["style", "left", '0px'],
                ["style", "width", '526px']
            ],
            "${_RoundRect4Copy9}": [
                ["style", "top", '0px'],
                ["style", "height", '50px'],
                ["color", "background-color", 'rgba(77,169,128,1)'],
                ["style", "left", '0px'],
                ["style", "width", '526px']
            ],
            "${__12Copy}": [
                ["style", "display", 'none'],
                ["style", "left", '94px'],
                ["style", "top", '0px']
            ],
            "${_Poz_sol}": [
                ["style", "left", '209px']
            ],
            "${__14Copy2}": [
                ["style", "display", 'none'],
                ["style", "left", '142px'],
                ["style", "top", '0px']
            ],
            "${_forward2}": [
                ["style", "left", '525px'],
                ["style", "top", '436px']
            ],
            "${_Text3}": [
                ["style", "top", '100px'],
                ["style", "left", '37px']
            ],
            "${_Text42Copy10}": [
                ["style", "top", '7px'],
                ["style", "left", '16px'],
                ["style", "font-size", '18px']
            ],
            "${_Ecran}": [
                ["style", "top", '64px'],
                ["style", "text-decoration", 'none'],
                ["style", "left", '600px'],
                ["style", "font-size", '24px']
            ],
            "${_RoundRect4Copy10}": [
                ["style", "top", '0px'],
                ["style", "height", '50px'],
                ["color", "background-color", 'rgba(77,169,128,1)'],
                ["style", "left", '0px'],
                ["style", "width", '526px']
            ],
            "${_com4}": [
                ["style", "top", '148px'],
                ["style", "left", '30px'],
                ["style", "overflow", 'visible']
            ],
            "${_com11}": [
                ["style", "top", '379px'],
                ["style", "left", '30px'],
                ["style", "overflow", 'visible']
            ],
            "${_pause2}": [
                ["style", "top", '436px'],
                ["style", "left", '450px']
            ],
            "${__11Copy}": [
                ["style", "top", '-1px'],
                ["style", "display", 'none'],
                ["style", "left", '48px'],
                ["style", "font-size", '25px']
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
            "${__1_3_4}": [
                ["style", "display", 'none'],
                ["style", "left", '0px'],
                ["style", "top", '102px']
            ],
            "${_Text21}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${__33}": [
                ["style", "display", 'none'],
                ["style", "left", '142px'],
                ["style", "top", '0px']
            ],
            "${_Text29}": [
                ["style", "left", '284px'],
                ["style", "top", '0px']
            ],
            "${_RoundRect4Copy4}": [
                ["style", "top", '0px'],
                ["style", "height", '52px'],
                ["color", "background-color", 'rgba(77,169,128,1)'],
                ["style", "left", '0px'],
                ["style", "width", '526px']
            ],
            "${__23}": [
                ["style", "display", 'none'],
                ["style", "left", '94px'],
                ["style", "top", '0px']
            ],
            "${_Chenar_cod}": [
                ["style", "top", '-2px'],
                ["color", "background-color", 'rgba(192,192,192,0.00)'],
                ["style", "border-width", '2px'],
                ["color", "border-color", 'rgba(77,169,128,1.00)'],
                ["style", "height", '474px'],
                ["style", "border-style", 'solid'],
                ["style", "left", '-2px'],
                ["style", "width", '570px']
            ],
            "${__1_2_4}": [
                ["style", "display", 'none'],
                ["style", "left", '0px'],
                ["style", "top", '34px']
            ],
            "${_Text36Copy4}": [
                ["style", "top", '0px'],
                ["style", "left", '189px'],
                ["style", "font-size", '25px']
            ],
            "${__13Copy}": [
                ["style", "display", 'none'],
                ["style", "left", '142px'],
                ["style", "top", '0px']
            ],
            "${__14}": [
                ["style", "display", 'none'],
                ["style", "left", '47px'],
                ["style", "top", '0px']
            ],
            "${__01}": [
                ["style", "display", 'block'],
                ["style", "top", '0px'],
                ["style", "left", '47px'],
                ["style", "font-size", '25px']
            ],
            "${_Text24}": [
                ["style", "left", '141px'],
                ["style", "top", '0px']
            ],
            "${__03}": [
                ["style", "display", 'block'],
                ["style", "top", '0px'],
                ["style", "left", '142px'],
                ["style", "font-size", '25px']
            ],
            "${_m}": [
                ["style", "top", '524px'],
                ["style", "left", '61px']
            ],
            "${_Text13}": [
                ["style", "top", '376px'],
                ["style", "left", '111px']
            ],
            "${_Text6}": [
                ["style", "top", '150px'],
                ["style", "left", '86px']
            ],
            "${_Text42Copy2}": [
                ["style", "top", '7px'],
                ["style", "left", '16px'],
                ["style", "font-size", '18px']
            ],
            "${_Text}": [
                ["style", "top", '32px'],
                ["style", "font-family", 'ubuntu-mono, sans-serif'],
                ["style", "left", '37px']
            ],
            "${__02}": [
                ["style", "display", 'block'],
                ["style", "top", '0px'],
                ["style", "left", '94px'],
                ["style", "font-size", '25px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '563px'],
                ["style", "width", '850px']
            ],
            "${__34}": [
                ["style", "display", 'none'],
                ["style", "left", '142px'],
                ["style", "top", '0px']
            ],
            "${_Text26}": [
                ["style", "left", '237px'],
                ["style", "top", '0px']
            ],
            "${__2_3_5}": [
                ["style", "top", '237px'],
                ["style", "left", '0px'],
                ["style", "display", 'none']
            ],
            "${_Text42Copy4}": [
                ["style", "top", '7px'],
                ["style", "left", '16px'],
                ["style", "font-size", '18px']
            ],
            "${_play2}": [
                ["style", "left", '489px'],
                ["style", "top", '436px']
            ],
            "${_Text42Copy7}": [
                ["style", "top", '7px'],
                ["style", "left", '16px'],
                ["style", "font-size", '18px']
            ],
            "${__3_4_5}": [
                ["style", "top", '305px'],
                ["style", "left", '0px'],
                ["style", "display", 'none']
            ],
            "${__1_2_5}": [
                ["style", "display", 'none'],
                ["style", "left", '0px'],
                ["style", "top", '68px']
            ],
            "${__32}": [
                ["style", "display", 'none'],
                ["style", "left", '142px'],
                ["style", "top", '0px']
            ],
            "${_Text8}": [
                ["style", "top", '249px'],
                ["style", "left", '215px']
            ],
            "${_Text36}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "font-size", '25px']
            ],
            "${__15}": [
                ["style", "display", 'none'],
                ["style", "left", '47px'],
                ["style", "top", '0px']
            ],
            "${_RoundRect4Copy7}": [
                ["style", "top", '0px'],
                ["style", "height", '34px'],
                ["color", "background-color", 'rgba(77,169,128,1)'],
                ["style", "left", '0px'],
                ["style", "width", '526px']
            ],
            "${_Text42Copy5}": [
                ["style", "top", '7px'],
                ["style", "left", '16px'],
                ["style", "font-size", '18px']
            ],
            "${_Text36Copy5}": [
                ["style", "top", '0px'],
                ["style", "left", '238px'],
                ["style", "font-size", '25px']
            ],
            "${_vect_sol2}": [
                ["style", "left", '189px'],
                ["style", "top", '509px']
            ],
            "${__12}": [
                ["style", "display", 'none'],
                ["style", "left", '47px'],
                ["style", "top", '0px']
            ],
            "${_val_sol}": [
                ["style", "left", '208px']
            ],
            "${_Text4}": [
                ["style", "top", '225px'],
                ["style", "left", '177px']
            ],
            "${_Text9}": [
                ["style", "top", '276px'],
                ["style", "left", '217px']
            ],
            "${__13}": [
                ["style", "display", 'none'],
                ["style", "left", '47px'],
                ["style", "top", '0px']
            ],
            "${_Text44Copy}": [
                ["style", "left", '85px'],
                ["style", "top", '398px']
            ],
            "${_Group2}": [
                ["style", "left", '687px']
            ],
            "${__15Copy}": [
                ["style", "display", 'none'],
                ["style", "left", '142px'],
                ["style", "top", '0px']
            ],
            "${__24}": [
                ["style", "display", 'none'],
                ["style", "left", '94px'],
                ["style", "top", '0px']
            ],
            "${_Text42}": [
                ["style", "top", '7px'],
                ["style", "left", '16px'],
                ["style", "font-size", '18px']
            ],
            "${_com5}": [
                ["style", "top", '172px'],
                ["style", "left", '30px'],
                ["style", "overflow", 'visible']
            ],
            "${_Text11}": [
                ["style", "top", '326px'],
                ["style", "left", '216px']
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
            "${_com2}": [
                ["style", "top", '56px'],
                ["style", "left", '30px'],
                ["style", "overflow", 'visible']
            ],
            "${_Text36Copy6}": [
                ["style", "height", '25px'],
                ["style", "top", '0px'],
                ["style", "left", '285px'],
                ["style", "font-size", '25px']
            ],
            "${_com1}": [
                ["style", "top", '27px'],
                ["style", "left", '30px'],
                ["style", "overflow", 'visible']
            ],
            "${_vf1}": [
                ["style", "top", '507px'],
                ["style", "left", '652px'],
                ["style", "display", 'none']
            ],
            "${__1_4_5}": [
                ["style", "top", '169px'],
                ["style", "left", '0px'],
                ["style", "display", 'none']
            ],
            "${_RoundRect4Copy6}": [
                ["style", "top", '0px'],
                ["style", "height", '31px'],
                ["color", "background-color", 'rgba(77,169,128,1)'],
                ["style", "left", '0px'],
                ["style", "width", '526px']
            ],
            "${_n}": [
                ["style", "top", '499px'],
                ["style", "left", '61px']
            ],
            "${_Text7}": [
                ["style", "top", '175px'],
                ["style", "left", '130px']
            ],
            "${_sol}": [
                ["style", "top", '509px'],
                ["style", "left", '124px']
            ],
            "${_Text5}": [
                ["style", "top", '126px'],
                ["style", "left", '85px']
            ],
            "${_RoundRect4Copy2}": [
                ["style", "top", '1px'],
                ["style", "height", '50px'],
                ["color", "background-color", 'rgba(77,169,128,1)'],
                ["style", "left", '0px'],
                ["style", "width", '526px']
            ],
            "${_Text23}": [
                ["style", "left", '93px'],
                ["style", "top", '0px']
            ],
            "${_Text42Copy9}": [
                ["style", "top", '7px'],
                ["style", "left", '16px'],
                ["style", "font-size", '18px']
            ],
            "${_Curent}": [
                ["style", "top", '128px'],
                ["style", "left", '36px']
            ],
            "${_Text25}": [
                ["style", "left", '188px'],
                ["style", "top", '0px']
            ],
            "${_Text22}": [
                ["style", "left", '47px'],
                ["style", "top", '0px']
            ],
            "${_com3}": [
                ["style", "top", '123px'],
                ["style", "left", '30px'],
                ["style", "overflow", 'visible']
            ],
            "${_RoundRect4Copy5}": [
                ["style", "top", '0px'],
                ["style", "height", '34px'],
                ["color", "background-color", 'rgba(77,169,128,1)'],
                ["style", "left", '0px'],
                ["style", "width", '526px']
            ],
            "${_vf4}": [
                ["style", "top", '507px'],
                ["style", "left", '652px'],
                ["style", "display", 'none']
            ],
            "${_Text42Copy6}": [
                ["style", "top", '7px'],
                ["style", "left", '16px'],
                ["style", "font-size", '18px']
            ],
            "${__22}": [
                ["style", "display", 'none'],
                ["style", "left", '94px'],
                ["style", "top", '0px']
            ],
            "${_vf}": [
                ["style", "top", '0px'],
                ["style", "left", '0px']
            ],
            "${_Text44}": [
                ["style", "left", '36px'],
                ["style", "top", '426px']
            ],
            "${_Text43}": [
                ["style", "top", '200px'],
                ["style", "left", '177px']
            ],
            "${__25}": [
                ["style", "display", 'none'],
                ["style", "left", '94px'],
                ["style", "top", '0px']
            ],
            "${__1_2_3}": [
                ["style", "display", 'none'],
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${__2_3_4}": [
                ["style", "top", '203px'],
                ["style", "left", '0px'],
                ["style", "display", 'none']
            ],
            "${_Text36Copy7}": [
                ["style", "top", '0px'],
                ["style", "height", '25px'],
                ["style", "left", '332px'],
                ["style", "font-size", '25px']
            ],
            "${_RoundRect4Copy3}": [
                ["style", "top", '0px'],
                ["style", "height", '34px'],
                ["color", "background-color", 'rgba(77,169,128,1)'],
                ["style", "left", '0px'],
                ["style", "width", '526px']
            ],
            "${_com8}": [
                ["style", "top", '248px'],
                ["style", "left", '30px'],
                ["style", "overflow", 'visible']
            ],
            "${_Text12}": [
                ["style", "top", '351px'],
                ["style", "left", '112px']
            ],
            "${_Text42Copy8}": [
                ["style", "top", '7px'],
                ["style", "left", '16px'],
                ["style", "font-size", '18px']
            ],
            "${__35}": [
                ["style", "display", 'none'],
                ["style", "left", '142px'],
                ["style", "top", '0px']
            ],
            "${__2stelutaCopy4}": [
                ["style", "top", '85px'],
                ["style", "left", '766px'],
                ["style", "display", 'none']
            ],
            "${_com6}": [
                ["style", "top", '198px'],
                ["style", "left", '30px'],
                ["style", "overflow", 'visible']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 53000,
            autoPlay: true,
            timeline: [
                { id: "eid287", tween: [ "style", "${__11}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid301", tween: [ "style", "${__11}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
                { id: "eid323", tween: [ "style", "${__11}", "display", 'block', { fromValue: 'block'}], position: 3500, duration: 0 },
                { id: "eid436", tween: [ "style", "${__11}", "display", 'none', { fromValue: 'block'}], position: 26500, duration: 0 },
                { id: "eid278", tween: [ "style", "${__1_3_5}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid395", tween: [ "style", "${__1_3_5}", "display", 'block', { fromValue: 'none'}], position: 17000, duration: 0 },
                { id: "eid330", tween: [ "style", "${__25}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid313", tween: [ "style", "${__25}", "display", 'none', { fromValue: 'none'}], position: 3500, duration: 0 },
                { id: "eid285", tween: [ "style", "${__13}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid321", tween: [ "style", "${__13}", "display", 'none', { fromValue: 'none'}], position: 3500, duration: 0 },
                { id: "eid482", tween: [ "style", "${__13}", "display", 'block', { fromValue: 'none'}], position: 43000, duration: 0 },
                { id: "eid335", tween: [ "style", "${__35}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid318", tween: [ "style", "${__35}", "display", 'none', { fromValue: 'none'}], position: 3500, duration: 0 },
                { id: "eid361", tween: [ "style", "${__35}", "display", 'block', { fromValue: 'none'}], position: 9500, duration: 0 },
                { id: "eid382", tween: [ "style", "${__35}", "display", 'none', { fromValue: 'block'}], position: 14000, duration: 0 },
                { id: "eid393", tween: [ "style", "${__35}", "display", 'block', { fromValue: 'none'}], position: 16500, duration: 0 },
                { id: "eid411", tween: [ "style", "${__35}", "display", 'none', { fromValue: 'block'}], position: 21000, duration: 0 },
                { id: "eid416", tween: [ "style", "${__35}", "display", 'block', { fromValue: 'none'}], position: 22000, duration: 0 },
                { id: "eid455", tween: [ "style", "${__35}", "display", 'none', { fromValue: 'block'}], position: 30500, duration: 0 },
                { id: "eid461", tween: [ "style", "${__35}", "display", 'block', { fromValue: 'none'}], position: 33000, duration: 0 },
                { id: "eid472", tween: [ "style", "${__35}", "display", 'none', { fromValue: 'block'}], position: 37500, duration: 0 },
                { id: "eid473", tween: [ "style", "${__35}", "display", 'block', { fromValue: 'none'}], position: 38500, duration: 0 },
                { id: "eid519", tween: [ "style", "${__35}", "display", 'none', { fromValue: 'block'}], position: 47000, duration: 0 },
                { id: "eid520", tween: [ "style", "${__35}", "display", 'block', { fromValue: 'none'}], position: 48000, duration: 0 },
                { id: "eid289", tween: [ "style", "${_vf3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid343", tween: [ "style", "${_vf3}", "display", 'block', { fromValue: 'none'}], position: 5500, duration: 0 },
                { id: "eid369", tween: [ "style", "${_vf3}", "display", 'none', { fromValue: 'block'}], position: 11000, duration: 0 },
                { id: "eid379", tween: [ "style", "${_vf3}", "display", 'block', { fromValue: 'none'}], position: 13500, duration: 0 },
                { id: "eid398", tween: [ "style", "${_vf3}", "display", 'none', { fromValue: 'block'}], position: 18000, duration: 0 },
                { id: "eid408", tween: [ "style", "${_vf3}", "display", 'block', { fromValue: 'none'}], position: 20500, duration: 0 },
                { id: "eid422", tween: [ "style", "${_vf3}", "display", 'none', { fromValue: 'block'}], position: 23500, duration: 0 },
                { id: "eid453", tween: [ "style", "${_vf3}", "display", 'block', { fromValue: 'none'}], position: 30000, duration: 0 },
                { id: "eid464", tween: [ "style", "${_vf3}", "display", 'none', { fromValue: 'block'}], position: 34500, duration: 0 },
                { id: "eid469", tween: [ "style", "${_vf3}", "display", 'block', { fromValue: 'none'}], position: 37000, duration: 0 },
                { id: "eid477", tween: [ "style", "${_vf3}", "display", 'none', { fromValue: 'block'}], position: 40000, duration: 0 },
                { id: "eid516", tween: [ "style", "${_vf3}", "display", 'block', { fromValue: 'none'}], position: 46500, duration: 0 },
                { id: "eid524", tween: [ "style", "${_vf3}", "display", 'none', { fromValue: 'block'}], position: 49500, duration: 0 },
                { id: "eid300", tween: [ "style", "${__01}", "display", 'none', { fromValue: 'block'}], position: 2000, duration: 0 },
                { id: "eid324", tween: [ "style", "${__01}", "display", 'none', { fromValue: 'none'}], position: 3500, duration: 0 },
                { id: "eid333", tween: [ "style", "${__33}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid316", tween: [ "style", "${__33}", "display", 'none', { fromValue: 'none'}], position: 3500, duration: 0 },
                { id: "eid349", tween: [ "style", "${__33}", "display", 'block', { fromValue: 'none'}], position: 6500, duration: 0 },
                { id: "eid354", tween: [ "style", "${__33}", "display", 'none', { fromValue: 'block'}], position: 8000, duration: 0 },
                { id: "eid383", tween: [ "style", "${__33}", "display", 'block', { fromValue: 'none'}], position: 14000, duration: 0 },
                { id: "eid386", tween: [ "style", "${__33}", "display", 'none', { fromValue: 'block'}], position: 15000, duration: 0 },
                { id: "eid456", tween: [ "style", "${__33}", "display", 'block', { fromValue: 'none'}], position: 30500, duration: 0 },
                { id: "eid457", tween: [ "style", "${__33}", "display", 'none', { fromValue: 'block'}], position: 31500, duration: 0 },
                { id: "eid302", tween: [ "style", "${__11}", "top", '-1px', { fromValue: '-1px'}], position: 2500, duration: 0 },
                { id: "eid286", tween: [ "style", "${__12}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid322", tween: [ "style", "${__12}", "display", 'none', { fromValue: 'none'}], position: 3500, duration: 0 },
                { id: "eid437", tween: [ "style", "${__12}", "display", 'block', { fromValue: 'none'}], position: 26500, duration: 0 },
                { id: "eid483", tween: [ "style", "${__12}", "display", 'none', { fromValue: 'block'}], position: 43000, duration: 0 },
                { id: "eid284", tween: [ "style", "${__14}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid320", tween: [ "style", "${__14}", "display", 'none', { fromValue: 'none'}], position: 3500, duration: 0 },
                { id: "eid288", tween: [ "style", "${_vf4}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid291", tween: [ "style", "${_vf1}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid292", tween: [ "style", "${_vf1}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
                { id: "eid305", tween: [ "style", "${_vf1}", "display", 'none', { fromValue: 'block'}], position: 3000, duration: 0 },
                { id: "eid432", tween: [ "style", "${_vf1}", "display", 'block', { fromValue: 'none'}], position: 25000, duration: 0 },
                { id: "eid441", tween: [ "style", "${_vf1}", "display", 'none', { fromValue: 'block'}], position: 27500, duration: 0 },
                { id: "eid479", tween: [ "style", "${_vf1}", "display", 'block', { fromValue: 'none'}], position: 41500, duration: 0 },
                { id: "eid511", tween: [ "style", "${_vf1}", "display", 'none', { fromValue: 'block'}], position: 44000, duration: 0 },
                { id: "eid526", tween: [ "style", "${_vf1}", "display", 'block', { fromValue: 'none'}], position: 51000, duration: 0 },
                { id: "eid527", tween: [ "style", "${_vf1}", "display", 'none', { fromValue: 'block'}], position: 52500, duration: 0 },
                { id: "eid326", tween: [ "style", "${__21}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid309", tween: [ "style", "${__21}", "display", 'block', { fromValue: 'none'}], position: 3500, duration: 0 },
                { id: "eid338", tween: [ "style", "${__21}", "display", 'none', { fromValue: 'block'}], position: 4500, duration: 0 },
                { id: "eid528", tween: [ "style", "${_vf0}", "display", 'block', { fromValue: 'none'}], position: 52500, duration: 0 },
                { id: "eid328", tween: [ "style", "${__23}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid311", tween: [ "style", "${__23}", "display", 'none', { fromValue: 'none'}], position: 3500, duration: 0 },
                { id: "eid374", tween: [ "style", "${__23}", "display", 'block', { fromValue: 'none'}], position: 12500, duration: 0 },
                { id: "eid403", tween: [ "style", "${__23}", "display", 'none', { fromValue: 'block'}], position: 19500, duration: 0 },
                { id: "eid448", tween: [ "style", "${__23}", "display", 'block', { fromValue: 'none'}], position: 29000, duration: 0 },
                { id: "eid466", tween: [ "style", "${__23}", "display", 'none', { fromValue: 'block'}], position: 36000, duration: 0 },
                { id: "eid512", tween: [ "style", "${__23}", "display", 'block', { fromValue: 'none'}], position: 44500, duration: 0 },
                { id: "eid515", tween: [ "style", "${__23}", "display", 'none', { fromValue: 'block'}], position: 45500, duration: 0 },
                { id: "eid283", tween: [ "style", "${__3_4_5}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid522", tween: [ "style", "${__3_4_5}", "display", 'block', { fromValue: 'none'}], position: 48500, duration: 0 },
                { id: "eid275", tween: [ "style", "${__1_2_4}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid357", tween: [ "style", "${__1_2_4}", "display", 'block', { fromValue: 'none'}], position: 8500, duration: 0 },
                { id: "eid281", tween: [ "style", "${__2_3_5}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid462", tween: [ "style", "${__2_3_5}", "display", 'block', { fromValue: 'none'}], position: 33500, duration: 0 },
                { id: "eid280", tween: [ "style", "${__2_3_4}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid459", tween: [ "style", "${__2_3_4}", "display", 'block', { fromValue: 'none'}], position: 32000, duration: 0 },
                { id: "eid327", tween: [ "style", "${__22}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid310", tween: [ "style", "${__22}", "display", 'none', { fromValue: 'none'}], position: 3500, duration: 0 },
                { id: "eid339", tween: [ "style", "${__22}", "display", 'block', { fromValue: 'none'}], position: 4500, duration: 0 },
                { id: "eid375", tween: [ "style", "${__22}", "display", 'none', { fromValue: 'block'}], position: 12500, duration: 0 },
                { id: "eid444", tween: [ "style", "${__22}", "display", 'block', { fromValue: 'none'}], position: 28000, duration: 0 },
                { id: "eid447", tween: [ "style", "${__22}", "display", 'none', { fromValue: 'block'}], position: 29000, duration: 0 },
                { id: "eid290", tween: [ "style", "${_vf2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid306", tween: [ "style", "${_vf2}", "display", 'block', { fromValue: 'none'}], position: 3000, duration: 0 },
                { id: "eid342", tween: [ "style", "${_vf2}", "display", 'none', { fromValue: 'block'}], position: 5500, duration: 0 },
                { id: "eid370", tween: [ "style", "${_vf2}", "display", 'block', { fromValue: 'none'}], position: 11000, duration: 0 },
                { id: "eid378", tween: [ "style", "${_vf2}", "display", 'none', { fromValue: 'block'}], position: 13500, duration: 0 },
                { id: "eid399", tween: [ "style", "${_vf2}", "display", 'block', { fromValue: 'none'}], position: 18000, duration: 0 },
                { id: "eid407", tween: [ "style", "${_vf2}", "display", 'none', { fromValue: 'block'}], position: 20500, duration: 0 },
                { id: "eid421", tween: [ "style", "${_vf2}", "display", 'block', { fromValue: 'none'}], position: 23500, duration: 0 },
                { id: "eid431", tween: [ "style", "${_vf2}", "display", 'none', { fromValue: 'block'}], position: 25000, duration: 0 },
                { id: "eid440", tween: [ "style", "${_vf2}", "display", 'block', { fromValue: 'none'}], position: 27500, duration: 0 },
                { id: "eid452", tween: [ "style", "${_vf2}", "display", 'none', { fromValue: 'block'}], position: 30000, duration: 0 },
                { id: "eid463", tween: [ "style", "${_vf2}", "display", 'block', { fromValue: 'none'}], position: 34500, duration: 0 },
                { id: "eid470", tween: [ "style", "${_vf2}", "display", 'none', { fromValue: 'block'}], position: 37000, duration: 0 },
                { id: "eid476", tween: [ "style", "${_vf2}", "display", 'block', { fromValue: 'none'}], position: 40000, duration: 0 },
                { id: "eid478", tween: [ "style", "${_vf2}", "display", 'none', { fromValue: 'block'}], position: 41500, duration: 0 },
                { id: "eid510", tween: [ "style", "${_vf2}", "display", 'block', { fromValue: 'none'}], position: 44000, duration: 0 },
                { id: "eid517", tween: [ "style", "${_vf2}", "display", 'none', { fromValue: 'block'}], position: 46500, duration: 0 },
                { id: "eid523", tween: [ "style", "${_vf2}", "display", 'block', { fromValue: 'none'}], position: 49500, duration: 0 },
                { id: "eid525", tween: [ "style", "${_vf2}", "display", 'none', { fromValue: 'block'}], position: 51000, duration: 0 },
                { id: "eid345", tween: [ "style", "${__03}", "display", 'none', { fromValue: 'block'}], position: 6000, duration: 0 },
                { id: "eid295", tween: [ "style", "${_Curent}", "top", '128px', { fromValue: '128px'}], position: 0, duration: 0 },
                { id: "eid296", tween: [ "style", "${_Curent}", "top", '151px', { fromValue: '128px'}], position: 500, duration: 0 },
                { id: "eid297", tween: [ "style", "${_Curent}", "top", '178px', { fromValue: '151px'}], position: 1000, duration: 0 },
                { id: "eid298", tween: [ "style", "${_Curent}", "top", '203px', { fromValue: '178px'}], position: 1500, duration: 0 },
                { id: "eid299", tween: [ "style", "${_Curent}", "top", '228px', { fromValue: '203px'}], position: 2000, duration: 0 },
                { id: "eid303", tween: [ "style", "${_Curent}", "top", '279px', { fromValue: '228px'}], position: 2500, duration: 0 },
                { id: "eid304", tween: [ "style", "${_Curent}", "top", '304px', { fromValue: '251px'}], position: 3000, duration: 0 },
                { id: "eid307", tween: [ "style", "${_Curent}", "top", '178px', { fromValue: '304px'}], position: 3500, duration: 0 },
                { id: "eid336", tween: [ "style", "${_Curent}", "top", '204px', { fromValue: '178px'}], position: 4000, duration: 0 },
                { id: "eid337", tween: [ "style", "${_Curent}", "top", '229px', { fromValue: '204px'}], position: 4500, duration: 0 },
                { id: "eid340", tween: [ "style", "${_Curent}", "top", '279px', { fromValue: '229px'}], position: 5000, duration: 0 },
                { id: "eid341", tween: [ "style", "${_Curent}", "top", '305px', { fromValue: '279px'}], position: 5500, duration: 0 },
                { id: "eid344", tween: [ "style", "${_Curent}", "top", '203px', { fromValue: '305px'}], position: 6000, duration: 0 },
                { id: "eid347", tween: [ "style", "${_Curent}", "top", '228px', { fromValue: '203px'}], position: 6500, duration: 0 },
                { id: "eid350", tween: [ "style", "${_Curent}", "top", '178px', { fromValue: '228px'}], position: 7000, duration: 0 },
                { id: "eid352", tween: [ "style", "${_Curent}", "top", '204px', { fromValue: '178px'}], position: 7500, duration: 0 },
                { id: "eid353", tween: [ "style", "${_Curent}", "top", '229px', { fromValue: '204px'}], position: 8000, duration: 0 },
                { id: "eid356", tween: [ "style", "${_Curent}", "top", '178px', { fromValue: '229px'}], position: 8500, duration: 0 },
                { id: "eid358", tween: [ "style", "${_Curent}", "top", '204px', { fromValue: '178px'}], position: 9000, duration: 0 },
                { id: "eid359", tween: [ "style", "${_Curent}", "top", '229px', { fromValue: '204px'}], position: 9500, duration: 0 },
                { id: "eid363", tween: [ "style", "${_Curent}", "top", '178px', { fromValue: '229px'}], position: 10000, duration: 0 },
                { id: "eid365", tween: [ "style", "${_Curent}", "top", '378px', { fromValue: '178px'}], position: 10500, duration: 0 },
                { id: "eid366", tween: [ "style", "${_Curent}", "top", '151px', { fromValue: '378px'}], position: 11000, duration: 0 },
                { id: "eid371", tween: [ "style", "${_Curent}", "top", '178px', { fromValue: '151px'}], position: 11500, duration: 0 },
                { id: "eid372", tween: [ "style", "${_Curent}", "top", '204px', { fromValue: '178px'}], position: 12000, duration: 0 },
                { id: "eid373", tween: [ "style", "${_Curent}", "top", '228px', { fromValue: '204px'}], position: 12500, duration: 0 },
                { id: "eid376", tween: [ "style", "${_Curent}", "top", '278px', { fromValue: '228px'}], position: 13000, duration: 0 },
                { id: "eid377", tween: [ "style", "${_Curent}", "top", '305px', { fromValue: '278px'}], position: 13500, duration: 0 },
                { id: "eid381", tween: [ "style", "${_Curent}", "top", '178px', { fromValue: '305px'}], position: 14000, duration: 0 },
                { id: "eid384", tween: [ "style", "${_Curent}", "top", '204px', { fromValue: '178px'}], position: 14500, duration: 0 },
                { id: "eid385", tween: [ "style", "${_Curent}", "top", '229px', { fromValue: '204px'}], position: 15000, duration: 0 },
                { id: "eid388", tween: [ "style", "${_Curent}", "top", '178px', { fromValue: '229px'}], position: 15500, duration: 0 },
                { id: "eid390", tween: [ "style", "${_Curent}", "top", '202px', { fromValue: '178px'}], position: 16000, duration: 0 },
                { id: "eid391", tween: [ "style", "${_Curent}", "top", '228px', { fromValue: '202px'}], position: 16500, duration: 0 },
                { id: "eid394", tween: [ "style", "${_Curent}", "top", '178px', { fromValue: '228px'}], position: 17000, duration: 0 },
                { id: "eid396", tween: [ "style", "${_Curent}", "top", '378px', { fromValue: '178px'}], position: 17500, duration: 0 },
                { id: "eid397", tween: [ "style", "${_Curent}", "top", '151px', { fromValue: '378px'}], position: 18000, duration: 0 },
                { id: "eid400", tween: [ "style", "${_Curent}", "top", '178px', { fromValue: '151px'}], position: 18500, duration: 0 },
                { id: "eid401", tween: [ "style", "${_Curent}", "top", '204px', { fromValue: '178px'}], position: 19000, duration: 0 },
                { id: "eid402", tween: [ "style", "${_Curent}", "top", '229px', { fromValue: '204px'}], position: 19500, duration: 0 },
                { id: "eid405", tween: [ "style", "${_Curent}", "top", '279px', { fromValue: '229px'}], position: 20000, duration: 0 },
                { id: "eid406", tween: [ "style", "${_Curent}", "top", '305px', { fromValue: '279px'}], position: 20500, duration: 0 },
                { id: "eid410", tween: [ "style", "${_Curent}", "top", '177px', { fromValue: '305px'}], position: 21000, duration: 0 },
                { id: "eid413", tween: [ "style", "${_Curent}", "top", '204px', { fromValue: '177px'}], position: 21500, duration: 0 },
                { id: "eid414", tween: [ "style", "${_Curent}", "top", '229px', { fromValue: '204px'}], position: 22000, duration: 0 },
                { id: "eid417", tween: [ "style", "${_Curent}", "top", '178px', { fromValue: '229px'}], position: 22500, duration: 0 },
                { id: "eid419", tween: [ "style", "${_Curent}", "top", '378px', { fromValue: '178px'}], position: 23000, duration: 0 },
                { id: "eid420", tween: [ "style", "${_Curent}", "top", '151px', { fromValue: '378px'}], position: 23500, duration: 0 },
                { id: "eid423", tween: [ "style", "${_Curent}", "top", '178px', { fromValue: '151px'}], position: 24000, duration: 0 },
                { id: "eid429", tween: [ "style", "${_Curent}", "top", '379px', { fromValue: '178px'}], position: 24500, duration: 0 },
                { id: "eid430", tween: [ "style", "${_Curent}", "top", '151px', { fromValue: '379px'}], position: 25000, duration: 0 },
                { id: "eid433", tween: [ "style", "${_Curent}", "top", '176px', { fromValue: '151px'}], position: 25500, duration: 0 },
                { id: "eid434", tween: [ "style", "${_Curent}", "top", '203px', { fromValue: '176px'}], position: 26000, duration: 0 },
                { id: "eid435", tween: [ "style", "${_Curent}", "top", '229px', { fromValue: '203px'}], position: 26500, duration: 0 },
                { id: "eid438", tween: [ "style", "${_Curent}", "top", '278px', { fromValue: '229px'}], position: 27000, duration: 0 },
                { id: "eid439", tween: [ "style", "${_Curent}", "top", '303px', { fromValue: '278px'}], position: 27500, duration: 0 },
                { id: "eid442", tween: [ "style", "${_Curent}", "top", '177px', { fromValue: '305px'}], position: 28000, duration: 0 },
                { id: "eid445", tween: [ "style", "${_Curent}", "top", '204px', { fromValue: '177px'}], position: 28500, duration: 0 },
                { id: "eid446", tween: [ "style", "${_Curent}", "top", '229px', { fromValue: '204px'}], position: 29000, duration: 0 },
                { id: "eid449", tween: [ "style", "${_Curent}", "top", '279px', { fromValue: '229px'}], position: 29500, duration: 0 },
                { id: "eid454", tween: [ "style", "${_Curent}", "top", '305px', { fromValue: '279px'}], position: 30000, duration: 0 },
                { id: "eid484", tween: [ "style", "${_Curent}", "top", '176px', { fromValue: '305px'}], position: 30500, duration: 0 },
                { id: "eid485", tween: [ "style", "${_Curent}", "top", '203px', { fromValue: '176px'}], position: 31000, duration: 0 },
                { id: "eid486", tween: [ "style", "${_Curent}", "top", '229px', { fromValue: '203px'}], position: 31500, duration: 0 },
                { id: "eid487", tween: [ "style", "${_Curent}", "top", '177px', { fromValue: '229px'}], position: 32000, duration: 0 },
                { id: "eid488", tween: [ "style", "${_Curent}", "top", '204px', { fromValue: '177px'}], position: 32500, duration: 0 },
                { id: "eid489", tween: [ "style", "${_Curent}", "top", '229px', { fromValue: '204px'}], position: 33000, duration: 0 },
                { id: "eid490", tween: [ "style", "${_Curent}", "top", '177px', { fromValue: '229px'}], position: 33500, duration: 0 },
                { id: "eid491", tween: [ "style", "${_Curent}", "top", '379px', { fromValue: '177px'}], position: 34000, duration: 0 },
                { id: "eid492", tween: [ "style", "${_Curent}", "top", '152px', { fromValue: '379px'}], position: 34500, duration: 0 },
                { id: "eid493", tween: [ "style", "${_Curent}", "top", '178px', { fromValue: '152px'}], position: 35000, duration: 0 },
                { id: "eid494", tween: [ "style", "${_Curent}", "top", '203px', { fromValue: '178px'}], position: 35500, duration: 0 },
                { id: "eid495", tween: [ "style", "${_Curent}", "top", '228px', { fromValue: '203px'}], position: 36000, duration: 0 },
                { id: "eid496", tween: [ "style", "${_Curent}", "top", '278px', { fromValue: '228px'}], position: 36500, duration: 0 },
                { id: "eid497", tween: [ "style", "${_Curent}", "top", '304px', { fromValue: '278px'}], position: 37000, duration: 0 },
                { id: "eid498", tween: [ "style", "${_Curent}", "top", '177px', { fromValue: '304px'}], position: 37500, duration: 0 },
                { id: "eid499", tween: [ "style", "${_Curent}", "top", '203px', { fromValue: '177px'}], position: 38000, duration: 0 },
                { id: "eid500", tween: [ "style", "${_Curent}", "top", '228px', { fromValue: '203px'}], position: 38500, duration: 0 },
                { id: "eid501", tween: [ "style", "${_Curent}", "top", '177px', { fromValue: '228px'}], position: 39000, duration: 0 },
                { id: "eid502", tween: [ "style", "${_Curent}", "top", '378px', { fromValue: '177px'}], position: 39500, duration: 0 },
                { id: "eid503", tween: [ "style", "${_Curent}", "top", '151px', { fromValue: '378px'}], position: 40000, duration: 0 },
                { id: "eid504", tween: [ "style", "${_Curent}", "top", '177px', { fromValue: '151px'}], position: 40500, duration: 0 },
                { id: "eid505", tween: [ "style", "${_Curent}", "top", '379px', { fromValue: '177px'}], position: 41000, duration: 0 },
                { id: "eid506", tween: [ "style", "${_Curent}", "top", '151px', { fromValue: '379px'}], position: 41500, duration: 0 },
                { id: "eid507", tween: [ "style", "${_Curent}", "top", '178px', { fromValue: '151px'}], position: 42000, duration: 0 },
                { id: "eid508", tween: [ "style", "${_Curent}", "top", '203px', { fromValue: '178px'}], position: 42500, duration: 0 },
                { id: "eid509", tween: [ "style", "${_Curent}", "top", '229px', { fromValue: '203px'}], position: 43000, duration: 0 },
                { id: "eid529", tween: [ "style", "${_Curent}", "top", '279px', { fromValue: '229px'}], position: 43500, duration: 0 },
                { id: "eid530", tween: [ "style", "${_Curent}", "top", '305px', { fromValue: '279px'}], position: 44000, duration: 0 },
                { id: "eid531", tween: [ "style", "${_Curent}", "top", '177px', { fromValue: '305px'}], position: 44500, duration: 0 },
                { id: "eid532", tween: [ "style", "${_Curent}", "top", '203px', { fromValue: '177px'}], position: 45000, duration: 0 },
                { id: "eid533", tween: [ "style", "${_Curent}", "top", '229px', { fromValue: '203px'}], position: 45500, duration: 0 },
                { id: "eid534", tween: [ "style", "${_Curent}", "top", '279px', { fromValue: '229px'}], position: 46000, duration: 0 },
                { id: "eid535", tween: [ "style", "${_Curent}", "top", '305px', { fromValue: '279px'}], position: 46500, duration: 0 },
                { id: "eid536", tween: [ "style", "${_Curent}", "top", '178px', { fromValue: '305px'}], position: 47000, duration: 0 },
                { id: "eid537", tween: [ "style", "${_Curent}", "top", '204px', { fromValue: '178px'}], position: 47500, duration: 0 },
                { id: "eid538", tween: [ "style", "${_Curent}", "top", '229px', { fromValue: '204px'}], position: 48000, duration: 0 },
                { id: "eid539", tween: [ "style", "${_Curent}", "top", '178px', { fromValue: '229px'}], position: 48500, duration: 0 },
                { id: "eid540", tween: [ "style", "${_Curent}", "top", '379px', { fromValue: '178px'}], position: 49000, duration: 0 },
                { id: "eid541", tween: [ "style", "${_Curent}", "top", '152px', { fromValue: '379px'}], position: 49500, duration: 0 },
                { id: "eid542", tween: [ "style", "${_Curent}", "top", '177px', { fromValue: '152px'}], position: 50000, duration: 0 },
                { id: "eid543", tween: [ "style", "${_Curent}", "top", '379px', { fromValue: '177px'}], position: 50500, duration: 0 },
                { id: "eid544", tween: [ "style", "${_Curent}", "top", '152px', { fromValue: '379px'}], position: 51000, duration: 0 },
                { id: "eid545", tween: [ "style", "${_Curent}", "top", '177px', { fromValue: '152px'}], position: 51500, duration: 0 },
                { id: "eid546", tween: [ "style", "${_Curent}", "top", '378px', { fromValue: '177px'}], position: 52000, duration: 0 },
                { id: "eid547", tween: [ "style", "${_Curent}", "top", '151px', { fromValue: '378px'}], position: 52500, duration: 0 },
                { id: "eid548", tween: [ "style", "${_Curent}", "top", '428px', { fromValue: '151px'}], position: 53000, duration: 0 },
                { id: "eid325", tween: [ "style", "${__15}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid319", tween: [ "style", "${__15}", "display", 'none', { fromValue: 'none'}], position: 3500, duration: 0 },
                { id: "eid276", tween: [ "style", "${__1_2_5}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid364", tween: [ "style", "${__1_2_5}", "display", 'block', { fromValue: 'none'}], position: 10000, duration: 0 },
                { id: "eid279", tween: [ "style", "${__1_4_5}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid418", tween: [ "style", "${__1_4_5}", "display", 'block', { fromValue: 'none'}], position: 22500, duration: 0 },
                { id: "eid329", tween: [ "style", "${__24}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid312", tween: [ "style", "${__24}", "display", 'none', { fromValue: 'none'}], position: 3500, duration: 0 },
                { id: "eid404", tween: [ "style", "${__24}", "display", 'block', { fromValue: 'none'}], position: 19500, duration: 0 },
                { id: "eid443", tween: [ "style", "${__24}", "display", 'none', { fromValue: 'block'}], position: 28000, duration: 0 },
                { id: "eid465", tween: [ "style", "${__24}", "display", 'block', { fromValue: 'none'}], position: 36000, duration: 0 },
                { id: "eid513", tween: [ "style", "${__24}", "display", 'none', { fromValue: 'block'}], position: 44500, duration: 0 },
                { id: "eid514", tween: [ "style", "${__24}", "display", 'block', { fromValue: 'none'}], position: 45500, duration: 0 },
                { id: "eid282", tween: [ "style", "${__2_4_5}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid475", tween: [ "style", "${__2_4_5}", "display", 'block', { fromValue: 'none'}], position: 39000, duration: 0 },
                { id: "eid334", tween: [ "style", "${__34}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid317", tween: [ "style", "${__34}", "display", 'none', { fromValue: 'none'}], position: 3500, duration: 0 },
                { id: "eid355", tween: [ "style", "${__34}", "display", 'block', { fromValue: 'none'}], position: 8000, duration: 0 },
                { id: "eid360", tween: [ "style", "${__34}", "display", 'none', { fromValue: 'block'}], position: 9500, duration: 0 },
                { id: "eid387", tween: [ "style", "${__34}", "display", 'block', { fromValue: 'none'}], position: 15000, duration: 0 },
                { id: "eid392", tween: [ "style", "${__34}", "display", 'none', { fromValue: 'block'}], position: 16500, duration: 0 },
                { id: "eid412", tween: [ "style", "${__34}", "display", 'block', { fromValue: 'none'}], position: 21000, duration: 0 },
                { id: "eid415", tween: [ "style", "${__34}", "display", 'none', { fromValue: 'block'}], position: 22000, duration: 0 },
                { id: "eid458", tween: [ "style", "${__34}", "display", 'block', { fromValue: 'none'}], position: 31500, duration: 0 },
                { id: "eid460", tween: [ "style", "${__34}", "display", 'none', { fromValue: 'block'}], position: 33000, duration: 0 },
                { id: "eid471", tween: [ "style", "${__34}", "display", 'block', { fromValue: 'none'}], position: 37500, duration: 0 },
                { id: "eid474", tween: [ "style", "${__34}", "display", 'none', { fromValue: 'block'}], position: 38500, duration: 0 },
                { id: "eid518", tween: [ "style", "${__34}", "display", 'block', { fromValue: 'none'}], position: 47000, duration: 0 },
                { id: "eid521", tween: [ "style", "${__34}", "display", 'none', { fromValue: 'block'}], position: 48000, duration: 0 },
                { id: "eid274", tween: [ "style", "${__1_2_3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid351", tween: [ "style", "${__1_2_3}", "display", 'block', { fromValue: 'none'}], position: 7000, duration: 0 },
                { id: "eid308", tween: [ "style", "${__02}", "display", 'none', { fromValue: 'block'}], position: 3500, duration: 0 },
                { id: "eid331", tween: [ "style", "${__31}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid314", tween: [ "style", "${__31}", "display", 'none', { fromValue: 'none'}], position: 3500, duration: 0 },
                { id: "eid332", tween: [ "style", "${__32}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid315", tween: [ "style", "${__32}", "display", 'none', { fromValue: 'none'}], position: 3500, duration: 0 },
                { id: "eid346", tween: [ "style", "${__32}", "display", 'block', { fromValue: 'none'}], position: 6000, duration: 0 },
                { id: "eid348", tween: [ "style", "${__32}", "display", 'none', { fromValue: 'block'}], position: 6500, duration: 0 },
                { id: "eid277", tween: [ "style", "${__1_3_4}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid389", tween: [ "style", "${__1_3_4}", "display", 'block', { fromValue: 'none'}], position: 15500, duration: 0 }            ]
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
