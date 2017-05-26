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
                rect: ['-26px', '-39px','902px','646px','auto', 'auto'],
                fill: ["rgba(241,241,241,1.00)"],
                stroke: [1,"rgb(77, 169, 128)","solid"]
            },
            {
                id: 'Chenar_cod',
                type: 'rect',
                rect: ['-3px', '-4px','570px','474px','auto', 'auto'],
                fill: ["rgba(192,192,192,0.00)"],
                stroke: [2,"rgba(77,169,128,1.00)","solid"]
            },
            {
                id: 'Curent',
                type: 'rect',
                rect: ['31px', '128px','516px','23px','auto', 'auto'],
                borderRadius: ["10px", "10px", "10px", "10px"],
                fill: ["rgba(192,192,192,0)"],
                stroke: [1,"rgb(77, 169, 128)","solid"]
            },
            {
                id: 'Text44',
                type: 'text',
                rect: ['34px', '428px','auto','auto','auto', 'auto'],
                text: "}",
                align: "left",
                font: ['ubuntu-mono, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'Text44Copy',
                type: 'text',
                rect: ['85px', '403px','auto','auto','auto', 'auto'],
                text: "}",
                align: "left",
                font: ['ubuntu-mono, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'Text43',
                type: 'text',
                rect: ['137px', '204px','auto','auto','auto', 'auto'],
                text: "succesor=false;",
                align: "left",
                font: ['ubuntu-mono, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'Text13',
                type: 'text',
                rect: ['231px', '378px','auto','auto','auto', 'auto'],
                text: "}",
                align: "left",
                font: ['ubuntu-mono, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'Text12',
                type: 'text',
                rect: ['232px', '353px','auto','auto','auto', 'auto'],
                text: "succesor=true; break;",
                align: "left",
                font: ['ubuntu-mono, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'Text11',
                type: 'text',
                rect: ['287px', '328px','auto','auto','auto', 'auto'],
                text: "sol[j]=sol[j-1]+1;",
                align: "left",
                font: ['ubuntu-mono, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'Text10',
                type: 'text',
                rect: ['232px', '303px','auto','auto','auto', 'auto'],
                text: "for (j=k+1; j&lt;=m; ++j)",
                align: "left",
                font: ['ubuntu-mono, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'Text9',
                type: 'text',
                rect: ['232px', '278px','auto','auto','auto', 'auto'],
                text: "++sol[k];",
                align: "left",
                font: ['ubuntu-mono, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'Text8',
                type: 'text',
                rect: ['190px', '254px','auto','auto','auto', 'auto'],
                text: "if (sol[k]&lt;n-m+k) {",
                align: "left",
                font: ['ubuntu-mono, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'Text7',
                type: 'text',
                rect: ['137px', '179px','auto','auto','auto', 'auto'],
                text: "afisare();",
                align: "left",
                font: ['ubuntu-mono, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'Text6',
                type: 'text',
                rect: ['85px', '154px','auto','auto','auto', 'auto'],
                text: "while (succesor) {",
                align: "left",
                font: ['ubuntu-mono, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'Text5',
                type: 'text',
                rect: ['85px', '129px','auto','auto','auto', 'auto'],
                text: "int k=0, j=0; bool succesor=true;",
                align: "left",
                font: ['ubuntu-mono, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'Text4',
                type: 'text',
                rect: ['137px', '229px','auto','auto','auto', 'auto'],
                text: "for (k=m; k&gt;0; --k)",
                align: "left",
                font: ['ubuntu-mono, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'Text3',
                type: 'text',
                rect: ['34px', '104px','auto','auto','auto', 'auto'],
                text: "void gen() {",
                align: "left",
                font: ['ubuntu-mono, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'Text2',
                type: 'text',
                rect: ['34px', '37px','auto','auto','auto', 'auto'],
                text: "int sol[DMAX];<br>",
                align: "left",
                font: ['ubuntu-mono, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'Text',
                type: 'text',
                rect: ['34px', '13px','auto','auto','auto', 'auto'],
                text: "int n=5, m=3;",
                font: ['ubuntu-mono, sans-serif', 24, "rgba(0,0,0,1)", "normal", "none", ""]
            },
            {
                id: 'Text14',
                type: 'text',
                rect: ['34px', '62px','auto','auto','auto', 'auto'],
                text: "initializare();",
                align: "left",
                font: ['ubuntu-mono, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'Ecran',
                type: 'text',
                rect: ['600px', '62px','auto','auto','auto', 'auto'],
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
                id: 'poz_sol',
                type: 'group',
                rect: ['208px', '529px','343','25','auto', 'auto'],
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
                    rect: ['95px', '0px','auto','auto','auto', 'auto'],
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
                rect: ['450px', '437px','27px','28px','auto', 'auto'],
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
                rect: ['526px', '436px','27px','28px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"forward2.png",'0px','0px']
            },
            {
                id: 'Group',
                type: 'group',
                rect: ['687px', '113px','50','328','auto', 'auto'],
                c: [
                {
                    id: '_3_4_5',
                    display: 'none',
                    type: 'text',
                    rect: ['0px', '306px','auto','auto','auto', 'auto'],
                    text: "3 4 5",
                    align: "left",
                    font: ['ubuntu-mono, sans-serif', 20, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: '_2_4_5',
                    display: 'none',
                    type: 'text',
                    rect: ['0px', '272px','auto','auto','auto', 'auto'],
                    text: "2 4 5",
                    align: "left",
                    font: ['ubuntu-mono, sans-serif', 20, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: '_2_3_5',
                    display: 'none',
                    type: 'text',
                    rect: ['0px', '238px','auto','auto','auto', 'auto'],
                    text: "2 3 5",
                    align: "left",
                    font: ['ubuntu-mono, sans-serif', 20, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: '_2_3_4',
                    display: 'none',
                    type: 'text',
                    rect: ['0px', '204px','auto','auto','auto', 'auto'],
                    text: "2 3 4",
                    align: "left",
                    font: ['ubuntu-mono, sans-serif', 20, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: '_1_4_5',
                    display: 'none',
                    type: 'text',
                    rect: ['0px', '170px','auto','auto','auto', 'auto'],
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
                id: 'n_si_m',
                type: 'group',
                rect: ['37', '498','35','51','auto', 'auto'],
                c: [
                {
                    id: 'Group4',
                    type: 'group',
                    rect: ['0px', '0px','24','50','auto', 'auto'],
                    c: [
                    {
                        id: 'nm',
                        type: 'text',
                        rect: ['0px', '0px','auto','auto','auto', 'auto'],
                        text: "n=<br>m=",
                        align: "left",
                        font: ['ubuntu-mono, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
                    }]
                },
                {
                    id: 'n',
                    type: 'text',
                    rect: ['23px', '1px','auto','auto','auto', 'auto'],
                    text: "5",
                    align: "left",
                    font: ['ubuntu-mono, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: 'm',
                    type: 'text',
                    rect: ['23px', '26px','auto','auto','auto', 'auto'],
                    text: "3",
                    align: "left",
                    font: ['ubuntu-mono, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
                }]
            },
            {
                id: 'variabile',
                type: 'group',
                rect: ['600', '484','108','66','auto', 'auto'],
                c: [
                {
                    id: 'i',
                    type: 'text',
                    rect: ['0px', '21px','auto','auto','auto', 'auto'],
                    text: "k=",
                    align: "left",
                    font: ['ubuntu-mono, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: 'j',
                    type: 'text',
                    rect: ['0px', '41px','auto','auto','auto', 'auto'],
                    text: "j=<br>",
                    align: "left",
                    font: ['ubuntu-mono, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: 'succesor',
                    type: 'text',
                    rect: ['0px', '0px','auto','auto','auto', 'auto'],
                    text: "succesor=<br>",
                    align: "left",
                    font: ['ubuntu-mono, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
                }]
            },
            {
                id: 'val_sol',
                type: 'group',
                rect: ['208', '500px','344','25','auto', 'auto'],
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
                    id: 'poz1',
                    type: 'text',
                    rect: ['47px', '0px','auto','auto','auto', 'auto'],
                    text: "0",
                    align: "left",
                    font: ['ubuntu-mono, sans-serif', 25, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: 'poz2',
                    type: 'text',
                    rect: ['94px', '0px','auto','auto','auto', 'auto'],
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
                    id: 'poz7',
                    type: 'text',
                    rect: ['332px', '0px','auto','25px','auto', 'auto'],
                    text: "0",
                    align: "left",
                    font: ['ubuntu-mono, sans-serif', 25, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: 'poz3',
                    type: 'text',
                    rect: ['141px', '0px','auto','auto','auto', 'auto'],
                    text: "0<br>",
                    align: "left",
                    font: ['ubuntu-mono, sans-serif', 25, "rgba(0,0,0,1)", "400", "none", "normal"]
                }]
            },
            {
                id: 'val_variabile',
                type: 'group',
                rect: ['624', '485','144','65','auto', 'auto'],
                c: [
                {
                    id: 'val_succesor',
                    type: 'text',
                    rect: ['84px', '0px','auto','auto','auto', 'auto'],
                    text: "true;",
                    align: "left",
                    font: ['ubuntu-mono, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: 'val_i',
                    type: 'text',
                    rect: ['0px', '20px','auto','auto','auto', 'auto'],
                    text: "0",
                    align: "left",
                    font: ['ubuntu-mono, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: 'val_j',
                    type: 'text',
                    rect: ['0px', '40px','auto','auto','auto', 'auto'],
                    text: "0",
                    align: "left",
                    font: ['ubuntu-mono, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
                }]
            },
            {
                id: 'com1',
                type: 'group',
                rect: ['18px', '7px','528','33','auto', 'auto'],
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
                rect: ['18px', '32px','528','33','auto', 'auto'],
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
                rect: ['30', '128','528','64','auto', 'auto'],
                c: [
                {
                    id: 'RoundRect4Copy2',
                    type: 'rect',
                    rect: ['0px', '0px','526px','62px','auto', 'auto'],
                    borderRadius: ["10px", "10px", "10px", "10px"],
                    fill: ["rgba(77,169,128,1.00)"],
                    stroke: [1,"rgb(77, 169, 128)","solid"]
                },
                {
                    id: 'Text42Copy2',
                    type: 'text',
                    rect: ['16px', '6px','auto','auto','auto', 'auto'],
                    text: "//i si j sunt doi indici pe care ii folosim pentru a ne<br>plimba prin vector; presupunem la inceput ca mai exista <br>succesori<br>",
                    align: "left",
                    font: ['ubuntu-mono, sans-serif', 18, "rgba(0,0,0,1)", "400", "none", "normal"]
                }]
            },
            {
                id: 'com4',
                type: 'group',
                rect: ['30px', '152px','528','33px','auto', 'auto'],
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
                    text: "//cat timp mai exista un succesor",
                    align: "left",
                    font: ['ubuntu-mono, sans-serif', 18, "rgba(0,0,0,1)", "400", "none", "normal"]
                }]
            },
            {
                id: 'com5',
                type: 'group',
                rect: ['30px', '176px','528','33','auto', 'auto'],
                c: [
                {
                    id: 'RoundRect4Copy4',
                    type: 'rect',
                    rect: ['0px', '0px','526px','30px','auto', 'auto'],
                    borderRadius: ["10px", "10px", "10px", "10px"],
                    fill: ["rgba(77,169,128,1.00)"],
                    stroke: [1,"rgb(77, 169, 128)","solid"]
                },
                {
                    id: 'Text42Copy4',
                    type: 'text',
                    rect: ['16px', '7px','auto','auto','auto', 'auto'],
                    text: "//afisam submultimea curenta de m elemente ",
                    align: "left",
                    font: ['ubuntu-mono, sans-serif', 18, "rgba(0,0,0,1)", "400", "none", "normal"]
                }]
            },
            {
                id: 'com6',
                type: 'group',
                rect: ['30px', '202px','528','33','auto', 'auto'],
                c: [
                {
                    id: 'RoundRect4Copy5',
                    type: 'rect',
                    rect: ['0px', '0px','526px','47px','auto', 'auto'],
                    borderRadius: ["10px", "10px", "10px", "10px"],
                    fill: ["rgba(77,169,128,1.00)"],
                    stroke: [1,"rgb(77, 169, 128)","solid"]
                },
                {
                    id: 'Text42Copy5',
                    type: 'text',
                    rect: ['16px', '7px','auto','auto','auto', 'auto'],
                    text: "//presupunem ca am terminat generarea si nu mai exista<br>succesori",
                    align: "left",
                    font: ['ubuntu-mono, sans-serif', 18, "rgba(0,0,0,1)", "400", "none", "normal"]
                }]
            },
            {
                id: 'com7',
                type: 'group',
                rect: ['30px', '227px','528','33','auto', 'auto'],
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
                    text: "//iteram vectorul de la dreapta  la stanga",
                    align: "left",
                    font: ['ubuntu-mono, sans-serif', 18, "rgba(0,0,0,1)", "400", "none", "normal"]
                }]
            },
            {
                id: 'com8',
                type: 'group',
                rect: ['30px', '252px','528','33','auto', 'auto'],
                c: [
                {
                    id: 'RoundRect4Copy7',
                    type: 'rect',
                    rect: ['0px', '0px','526px','66px','auto', 'auto'],
                    borderRadius: ["10px", "10px", "10px", "10px"],
                    fill: ["rgba(77,169,128,1.00)"],
                    stroke: [1,"rgb(77, 169, 128)","solid"]
                },
                {
                    id: 'Text42Copy7',
                    type: 'text',
                    rect: ['16px', '7px','auto','auto','auto', 'auto'],
                    text: "//cautam prima componenta care poate fi marita, adica<br>sol[i]&lt;n-m+i (cea mai mare valoare care poate sta pe<br>pozitia i este n-m+i)",
                    align: "left",
                    font: ['ubuntu-mono, sans-serif', 18, "rgba(0,0,0,1)", "400", "none", "normal"]
                }]
            },
            {
                id: 'com9',
                type: 'group',
                rect: ['30px', '276px','528','33','auto', 'auto'],
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
                    text: "//daca am gasit o astfel de componenta, o marim",
                    align: "left",
                    font: ['ubuntu-mono, sans-serif', 18, "rgba(0,0,0,1)", "400", "none", "normal"]
                }]
            },
            {
                id: 'com10',
                type: 'group',
                rect: ['30px', '303px','528','33','auto', 'auto'],
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
                    text: "//repunem pe cea mai mica valoare posibila toate<br>componentele urmatoare, incepand cu pozitia i+1",
                    align: "left",
                    font: ['ubuntu-mono, sans-serif', 18, "rgba(0,0,0,1)", "400", "none", "normal"]
                }]
            },
            {
                id: 'com11',
                type: 'group',
                rect: ['30px', '343px','528','33','auto', 'auto'],
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
                    text: "//daca am gasit o astfel de componenta, generarea nu s-a<br>incheiat inca si setam valoarea true variabilei succesor<br>",
                    align: "left",
                    font: ['ubuntu-mono, sans-serif', 18, "rgba(0,0,0,1)", "400", "none", "normal"]
                }]
            },
            {
                id: 'com12',
                type: 'group',
                rect: ['18', '61','528','46','auto', 'auto'],
                c: [
                {
                    id: 'RoundRect4Copy12',
                    type: 'rect',
                    rect: ['0px', '0px','526px','44px','auto', 'auto'],
                    borderRadius: ["10px", "10px", "10px", "10px"],
                    fill: ["rgba(77,169,128,1.00)"],
                    stroke: [1,"rgb(77, 169, 128)","solid"]
                },
                {
                    id: 'Text42Copy12',
                    type: 'text',
                    rect: ['16px', '5px','auto','auto','auto', 'auto'],
                    text: "//initializam vectorul cu cea mai mica combinare  din<br>punct de vedere lexicografic",
                    align: "left",
                    font: ['ubuntu-mono, sans-serif', 18, "rgba(0,0,0,1)", "400", "none", "normal"]
                }]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_nm}": [
                ["style", "top", '0px'],
                ["style", "left", '0px']
            ],
            "${_m}": [
                ["style", "top", '26px'],
                ["style", "left", '23px'],
                ["style", "overflow", 'visible']
            ],
            "${_com9}": [
                ["style", "top", '276px'],
                ["style", "left", '30px'],
                ["style", "overflow", 'visible']
            ],
            "${_poz2}": [
                ["style", "top", '0px'],
                ["style", "left", '94px'],
                ["style", "font-size", '25px']
            ],
            "${_Chenar_cod}": [
                ["style", "top", '-4px'],
                ["color", "background-color", 'rgba(192,192,192,0.00)'],
                ["style", "left", '-3px'],
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
            "${_Text42Copy11}": [
                ["style", "top", '7px'],
                ["style", "left", '16px'],
                ["style", "font-size", '18px']
            ],
            "${__2_4_5}": [
                ["style", "top", '272px'],
                ["style", "left", '0px'],
                ["style", "display", 'none']
            ],
            "${__1_3_5}": [
                ["style", "top", '136px'],
                ["style", "left", '0px'],
                ["style", "display", 'none']
            ],
            "${_Text10}": [
                ["style", "top", '303px'],
                ["style", "left", '232px']
            ],
            "${_RoundRect4Copy9}": [
                ["style", "top", '0px'],
                ["style", "height", '50px'],
                ["color", "background-color", 'rgba(77,169,128,1)'],
                ["style", "left", '0px'],
                ["style", "width", '526px']
            ],
            "${_poz1}": [
                ["style", "top", '0px'],
                ["style", "left", '47px'],
                ["style", "font-size", '25px']
            ],
            "${_Group4}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_com11}": [
                ["style", "top", '343px'],
                ["style", "left", '30px'],
                ["style", "overflow", 'visible']
            ],
            "${__12Copy}": [
                ["style", "display", 'none'],
                ["style", "left", '94px'],
                ["style", "top", '0px']
            ],
            "${_val_succesor}": [
                ["style", "left", '84px'],
                ["style", "top", '0px']
            ],
            "${_Text42Copy10}": [
                ["style", "top", '7px'],
                ["style", "left", '16px'],
                ["style", "font-size", '18px']
            ],
            "${_val_i}": [
                ["style", "left", '0px'],
                ["style", "top", '20px']
            ],
            "${_Text3}": [
                ["style", "top", '104px'],
                ["style", "left", '34px']
            ],
            "${__11Copy}": [
                ["style", "display", 'none'],
                ["style", "top", '-1px'],
                ["style", "left", '48px'],
                ["style", "font-size", '25px']
            ],
            "${_RoundRect4Copy3}": [
                ["style", "top", '0px'],
                ["style", "height", '34px'],
                ["color", "background-color", 'rgba(77,169,128,1)'],
                ["style", "left", '0px'],
                ["style", "width", '526px']
            ],
            "${_Text28}": [
                ["style", "left", '331px'],
                ["style", "top", '0px']
            ],
            "${_Text29}": [
                ["style", "left", '284px'],
                ["style", "top", '0px']
            ],
            "${_RoundRect4Copy4}": [
                ["style", "top", '0px'],
                ["style", "height", '30px'],
                ["color", "background-color", 'rgba(77,169,128,1)'],
                ["style", "left", '0px'],
                ["style", "width", '526px']
            ],
            "${_Text25}": [
                ["style", "left", '188px'],
                ["style", "top", '0px']
            ],
            "${_Text13}": [
                ["style", "top", '378px'],
                ["style", "left", '231px']
            ],
            "${_RoundRect4Copy10}": [
                ["style", "top", '0px'],
                ["style", "height", '50px'],
                ["color", "background-color", 'rgba(77,169,128,1)'],
                ["style", "left", '0px'],
                ["style", "width", '526px']
            ],
            "${_Text24}": [
                ["style", "left", '141px'],
                ["style", "top", '0px']
            ],
            "${_com10}": [
                ["style", "top", '303px'],
                ["style", "left", '30px'],
                ["style", "overflow", 'visible']
            ],
            "${_Text36}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "font-size", '25px']
            ],
            "${_com7}": [
                ["style", "top", '227px'],
                ["style", "left", '30px'],
                ["style", "overflow", 'visible']
            ],
            "${_Text42Copy12}": [
                ["style", "top", '5px'],
                ["style", "left", '16px'],
                ["style", "font-size", '18px']
            ],
            "${_Ecran}": [
                ["style", "top", '62px'],
                ["style", "left", '600px'],
                ["style", "text-decoration", 'none'],
                ["style", "font-size", '24px']
            ],
            "${__2_3_4}": [
                ["style", "top", '204px'],
                ["style", "left", '0px'],
                ["style", "display", 'none']
            ],
            "${__1_3_4}": [
                ["style", "display", 'none'],
                ["style", "left", '0px'],
                ["style", "top", '102px']
            ],
            "${_Text6}": [
                ["style", "top", '154px'],
                ["style", "left", '85px']
            ],
            "${_RoundRect4Copy2}": [
                ["style", "top", '0px'],
                ["style", "height", '62px'],
                ["color", "background-color", 'rgba(77,169,128,1)'],
                ["style", "left", '0px'],
                ["style", "width", '526px']
            ],
            "${_Text}": [
                ["style", "top", '13px'],
                ["style", "font-family", 'ubuntu-mono, sans-serif'],
                ["style", "left", '34px']
            ],
            "${_pause2}": [
                ["style", "top", '437px'],
                ["style", "left", '450px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "width", '850px'],
                ["style", "height", '563px'],
                ["style", "overflow", 'hidden']
            ],
            "${_com4}": [
                ["style", "top", '152px'],
                ["style", "left", '30px'],
                ["style", "overflow", 'visible']
            ],
            "${_Text26}": [
                ["style", "left", '237px'],
                ["style", "top", '0px']
            ],
            "${__2_3_5}": [
                ["style", "top", '238px'],
                ["style", "left", '0px'],
                ["style", "display", 'none']
            ],
            "${_Text42Copy4}": [
                ["style", "top", '7px'],
                ["style", "left", '16px'],
                ["style", "font-size", '18px']
            ],
            "${__14Copy2}": [
                ["style", "display", 'none'],
                ["style", "left", '142px'],
                ["style", "top", '0px']
            ],
            "${_RoundRect4Copy5}": [
                ["style", "top", '0px'],
                ["style", "height", '47px'],
                ["color", "background-color", 'rgba(77,169,128,1)'],
                ["style", "left", '0px'],
                ["style", "width", '526px']
            ],
            "${__3_4_5}": [
                ["style", "top", '306px'],
                ["style", "left", '0px'],
                ["style", "display", 'none']
            ],
            "${_val_j}": [
                ["style", "left", '0px'],
                ["style", "top", '40px']
            ],
            "${_poz3}": [
                ["style", "top", '0px'],
                ["style", "left", '141px']
            ],
            "${_Text8}": [
                ["style", "top", '254px'],
                ["style", "left", '190px']
            ],
            "${_Text2}": [
                ["style", "top", '37px'],
                ["style", "left", '34px']
            ],
            "${_Text36Copy5}": [
                ["style", "top", '0px'],
                ["style", "left", '238px'],
                ["style", "font-size", '25px']
            ],
            "${__1_2_5}": [
                ["style", "display", 'none'],
                ["style", "left", '0px'],
                ["style", "top", '68px']
            ],
            "${_succesor}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "text-decoration", 'none'],
                ["style", "overflow", 'visible']
            ],
            "${_RoundRect4Copy7}": [
                ["style", "top", '0px'],
                ["style", "height", '66px'],
                ["color", "background-color", 'rgba(77,169,128,1)'],
                ["style", "left", '0px'],
                ["style", "width", '526px']
            ],
            "${_vect_sol2}": [
                ["style", "left", '189px'],
                ["style", "top", '509px']
            ],
            "${_Text42Copy3}": [
                ["style", "top", '7px'],
                ["style", "left", '16px'],
                ["style", "font-size", '18px']
            ],
            "${_Text14}": [
                ["style", "left", '34px'],
                ["style", "top", '62px']
            ],
            "${_Text4}": [
                ["style", "top", '229px'],
                ["style", "left", '137px']
            ],
            "${_Text42Copy7}": [
                ["style", "top", '7px'],
                ["style", "left", '16px'],
                ["style", "font-size", '18px']
            ],
            "${_Text42Copy6}": [
                ["style", "top", '7px'],
                ["style", "left", '16px'],
                ["style", "font-size", '18px']
            ],
            "${_Text44Copy}": [
                ["style", "left", '85px'],
                ["style", "top", '403px']
            ],
            "${_Text11}": [
                ["style", "top", '328px'],
                ["style", "left", '287px']
            ],
            "${__15Copy}": [
                ["style", "display", 'none'],
                ["style", "left", '142px'],
                ["style", "top", '0px']
            ],
            "${_poz_sol}": [
                ["style", "left", '208px']
            ],
            "${_Text42}": [
                ["style", "top", '7px'],
                ["style", "left", '16px'],
                ["style", "font-size", '18px']
            ],
            "${_com5}": [
                ["style", "top", '176px'],
                ["style", "left", '30px'],
                ["style", "overflow", 'visible']
            ],
            "${_Group}": [
                ["style", "top", '113px']
            ],
            "${_Rectangle3}": [
                ["color", "background-color", 'rgba(241,241,241,1)'],
                ["style", "left", '-26px'],
                ["style", "top", '-39px']
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
                ["style", "top", '32px'],
                ["style", "left", '18px'],
                ["style", "overflow", 'visible']
            ],
            "${_Text36Copy6}": [
                ["style", "top", '0px'],
                ["style", "height", '25px'],
                ["style", "left", '285px'],
                ["style", "font-size", '25px']
            ],
            "${_com1}": [
                ["style", "top", '7px'],
                ["style", "left", '18px'],
                ["style", "overflow", 'visible']
            ],
            "${_poz7}": [
                ["style", "height", '25px'],
                ["style", "top", '0px'],
                ["style", "left", '332px'],
                ["style", "font-size", '25px']
            ],
            "${__1_4_5}": [
                ["style", "top", '170px'],
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
                ["style", "top", '1px'],
                ["style", "left", '23px'],
                ["style", "overflow", 'visible']
            ],
            "${_Text5}": [
                ["style", "top", '129px'],
                ["style", "left", '85px']
            ],
            "${_sol}": [
                ["style", "top", '509px'],
                ["style", "left", '124px']
            ],
            "${_j}": [
                ["style", "top", '41px'],
                ["style", "left", '0px'],
                ["style", "font-size", '24px']
            ],
            "${_RoundRect4}": [
                ["style", "top", '0px'],
                ["style", "height", '31px'],
                ["color", "background-color", 'rgba(77,169,128,1.00)'],
                ["style", "left", '0px'],
                ["style", "width", '526px']
            ],
            "${_RoundRect4Copy12}": [
                ["style", "top", '0px'],
                ["style", "height", '44px'],
                ["color", "background-color", 'rgba(77,169,128,1)'],
                ["style", "left", '0px'],
                ["style", "width", '526px']
            ],
            "${_Text42Copy9}": [
                ["style", "top", '7px'],
                ["style", "left", '16px'],
                ["style", "font-size", '18px']
            ],
            "${_Text42Copy2}": [
                ["style", "top", '6px'],
                ["style", "left", '16px'],
                ["style", "font-size", '18px']
            ],
            "${_Text42Copy5}": [
                ["style", "top", '7px'],
                ["style", "left", '16px'],
                ["style", "font-size", '18px']
            ],
            "${_Text36Copy4}": [
                ["style", "top", '0px'],
                ["style", "left", '189px'],
                ["style", "font-size", '25px']
            ],
            "${_play2}": [
                ["style", "left", '489px'],
                ["style", "top", '436px']
            ],
            "${_Text7}": [
                ["style", "top", '179px'],
                ["style", "left", '137px']
            ],
            "${_Text9}": [
                ["style", "top", '278px'],
                ["style", "left", '232px']
            ],
            "${__1_2_4}": [
                ["style", "display", 'none'],
                ["style", "left", '0px'],
                ["style", "top", '34px']
            ],
            "${_Curent}": [
                ["style", "-webkit-transform-origin", [46,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [46,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [46,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [46,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [46,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "top", '13px'],
                ["style", "left", '31px'],
                ["style", "width", '516px']
            ],
            "${_Text23}": [
                ["style", "left", '95px'],
                ["style", "top", '0px']
            ],
            "${_Text44}": [
                ["style", "left", '34px'],
                ["style", "top", '428px']
            ],
            "${_Text43}": [
                ["style", "top", '204px'],
                ["style", "left", '137px']
            ],
            "${_Text22}": [
                ["style", "left", '47px'],
                ["style", "top", '0px']
            ],
            "${_i}": [
                ["style", "top", '21px'],
                ["style", "left", '0px'],
                ["style", "font-size", '24px']
            ],
            "${_back2}": [
                ["style", "top", '436px'],
                ["style", "left", '412px'],
                ["transform", "rotateZ", '180deg']
            ],
            "${__1_2_3}": [
                ["style", "display", 'none'],
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_forward2}": [
                ["style", "left", '526px'],
                ["style", "top", '436px']
            ],
            "${_com8}": [
                ["style", "top", '252px'],
                ["style", "left", '30px'],
                ["style", "overflow", 'visible']
            ],
            "${_Text12}": [
                ["style", "top", '353px'],
                ["style", "left", '232px']
            ],
            "${_Text42Copy8}": [
                ["style", "top", '7px'],
                ["style", "left", '16px'],
                ["style", "font-size", '18px']
            ],
            "${__13Copy}": [
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
                ["style", "top", '202px'],
                ["style", "left", '30px'],
                ["style", "overflow", 'visible']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 57500,
            autoPlay: true,
            timeline: [
                { id: "eid277", tween: [ "style", "${__1_3_4}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid389", tween: [ "style", "${__1_3_4}", "display", 'none', { fromValue: 'none'}], position: 15500, duration: 0 },
                { id: "eid800", tween: [ "style", "${__1_3_4}", "display", 'block', { fromValue: 'none'}], position: 17000, duration: 0 },
                { id: "eid295", tween: [ "style", "${_Curent}", "top", '13px', { fromValue: '13px'}], position: 0, duration: 0 },
                { id: "eid296", tween: [ "style", "${_Curent}", "top", '38px', { fromValue: '13px'}], position: 500, duration: 0 },
                { id: "eid297", tween: [ "style", "${_Curent}", "top", '64px', { fromValue: '151px'}], position: 1000, duration: 0 },
                { id: "eid298", tween: [ "style", "${_Curent}", "top", '130px', { fromValue: '178px'}], position: 1500, duration: 0 },
                { id: "eid299", tween: [ "style", "${_Curent}", "top", '155px', { fromValue: '203px'}], position: 2000, duration: 0 },
                { id: "eid303", tween: [ "style", "${_Curent}", "top", '180px', { fromValue: '228px'}], position: 2500, duration: 0 },
                { id: "eid304", tween: [ "style", "${_Curent}", "top", '206px', { fromValue: '251px'}], position: 3000, duration: 0 },
                { id: "eid307", tween: [ "style", "${_Curent}", "top", '230px', { fromValue: '304px'}], position: 3500, duration: 0 },
                { id: "eid336", tween: [ "style", "${_Curent}", "top", '256px', { fromValue: '178px'}], position: 4000, duration: 0 },
                { id: "eid337", tween: [ "style", "${_Curent}", "top", '279px', { fromValue: '204px'}], position: 4500, duration: 0 },
                { id: "eid340", tween: [ "style", "${_Curent}", "top", '305px', { fromValue: '229px'}], position: 5000, duration: 0 },
                { id: "eid341", tween: [ "style", "${_Curent}", "top", '355px', { fromValue: '279px'}], position: 5500, duration: 0 },
                { id: "eid344", tween: [ "style", "${_Curent}", "top", '155px', { fromValue: '305px'}], position: 6000, duration: 0 },
                { id: "eid347", tween: [ "style", "${_Curent}", "top", '181px', { fromValue: '203px'}], position: 6500, duration: 0 },
                { id: "eid350", tween: [ "style", "${_Curent}", "top", '206px', { fromValue: '228px'}], position: 7000, duration: 0 },
                { id: "eid352", tween: [ "style", "${_Curent}", "top", '232px', { fromValue: '178px'}], position: 7500, duration: 0 },
                { id: "eid353", tween: [ "style", "${_Curent}", "top", '256px', { fromValue: '204px'}], position: 8000, duration: 0 },
                { id: "eid356", tween: [ "style", "${_Curent}", "top", '280px', { fromValue: '229px'}], position: 8500, duration: 0 },
                { id: "eid358", tween: [ "style", "${_Curent}", "top", '306px', { fromValue: '178px'}], position: 9000, duration: 0 },
                { id: "eid359", tween: [ "style", "${_Curent}", "top", '354px', { fromValue: '204px'}], position: 9500, duration: 0 },
                { id: "eid363", tween: [ "style", "${_Curent}", "top", '156px', { fromValue: '229px'}], position: 10000, duration: 0 },
                { id: "eid365", tween: [ "style", "${_Curent}", "top", '181px', { fromValue: '178px'}], position: 10500, duration: 0 },
                { id: "eid366", tween: [ "style", "${_Curent}", "top", '206px', { fromValue: '180px'}], position: 11000, duration: 0 },
                { id: "eid371", tween: [ "style", "${_Curent}", "top", '232px', { fromValue: '151px'}], position: 11500, duration: 0 },
                { id: "eid372", tween: [ "style", "${_Curent}", "top", '255px', { fromValue: '178px'}], position: 12000, duration: 0 },
                { id: "eid373", tween: [ "style", "${_Curent}", "top", '231px', { fromValue: '204px'}], position: 12500, duration: 0 },
                { id: "eid376", tween: [ "style", "${_Curent}", "top", '255px', { fromValue: '228px'}], position: 13000, duration: 0 },
                { id: "eid377", tween: [ "style", "${_Curent}", "top", '280px', { fromValue: '278px'}], position: 13500, duration: 0 },
                { id: "eid381", tween: [ "style", "${_Curent}", "top", '306px', { fromValue: '305px'}], position: 14000, duration: 0 },
                { id: "eid384", tween: [ "style", "${_Curent}", "top", '330px', { fromValue: '306px'}], position: 14500, duration: 0 },
                { id: "eid385", tween: [ "style", "${_Curent}", "top", '306px', { fromValue: '204px'}], position: 15000, duration: 0 },
                { id: "eid388", tween: [ "style", "${_Curent}", "top", '354px', { fromValue: '229px'}], position: 15500, duration: 0 },
                { id: "eid390", tween: [ "style", "${_Curent}", "top", '155px', { fromValue: '178px'}], position: 16000, duration: 0 },
                { id: "eid391", tween: [ "style", "${_Curent}", "top", '180px', { fromValue: '202px'}], position: 16500, duration: 0 },
                { id: "eid394", tween: [ "style", "${_Curent}", "top", '206px', { fromValue: '228px'}], position: 17000, duration: 0 },
                { id: "eid396", tween: [ "style", "${_Curent}", "top", '232px', { fromValue: '178px'}], position: 17500, duration: 0 },
                { id: "eid397", tween: [ "style", "${_Curent}", "top", '255px', { fromValue: '378px'}], position: 18000, duration: 0 },
                { id: "eid400", tween: [ "style", "${_Curent}", "top", '280px', { fromValue: '151px'}], position: 18500, duration: 0 },
                { id: "eid401", tween: [ "style", "${_Curent}", "top", '306px', { fromValue: '178px'}], position: 19000, duration: 0 },
                { id: "eid402", tween: [ "style", "${_Curent}", "top", '355px', { fromValue: '204px'}], position: 19500, duration: 0 },
                { id: "eid405", tween: [ "style", "${_Curent}", "top", '156px', { fromValue: '229px'}], position: 20000, duration: 0 },
                { id: "eid406", tween: [ "style", "${_Curent}", "top", '181px', { fromValue: '279px'}], position: 20500, duration: 0 },
                { id: "eid410", tween: [ "style", "${_Curent}", "top", '205px', { fromValue: '305px'}], position: 21000, duration: 0 },
                { id: "eid413", tween: [ "style", "${_Curent}", "top", '232px', { fromValue: '177px'}], position: 21500, duration: 0 },
                { id: "eid414", tween: [ "style", "${_Curent}", "top", '256px', { fromValue: '204px'}], position: 22000, duration: 0 },
                { id: "eid417", tween: [ "style", "${_Curent}", "top", '231px', { fromValue: '229px'}], position: 22500, duration: 0 },
                { id: "eid419", tween: [ "style", "${_Curent}", "top", '255px', { fromValue: '178px'}], position: 23000, duration: 0 },
                { id: "eid420", tween: [ "style", "${_Curent}", "top", '281px', { fromValue: '378px'}], position: 23500, duration: 0 },
                { id: "eid423", tween: [ "style", "${_Curent}", "top", '306px', { fromValue: '151px'}], position: 24000, duration: 0 },
                { id: "eid429", tween: [ "style", "${_Curent}", "top", '331px', { fromValue: '178px'}], position: 24500, duration: 0 },
                { id: "eid430", tween: [ "style", "${_Curent}", "top", '306px', { fromValue: '379px'}], position: 25000, duration: 0 },
                { id: "eid433", tween: [ "style", "${_Curent}", "top", '355px', { fromValue: '151px'}], position: 25500, duration: 0 },
                { id: "eid434", tween: [ "style", "${_Curent}", "top", '156px', { fromValue: '176px'}], position: 26000, duration: 0 },
                { id: "eid435", tween: [ "style", "${_Curent}", "top", '181px', { fromValue: '203px'}], position: 26500, duration: 0 },
                { id: "eid438", tween: [ "style", "${_Curent}", "top", '206px', { fromValue: '229px'}], position: 27000, duration: 0 },
                { id: "eid439", tween: [ "style", "${_Curent}", "top", '231px', { fromValue: '278px'}], position: 27500, duration: 0 },
                { id: "eid442", tween: [ "style", "${_Curent}", "top", '256px', { fromValue: '305px'}], position: 28000, duration: 0 },
                { id: "eid445", tween: [ "style", "${_Curent}", "top", '232px', { fromValue: '177px'}], position: 28500, duration: 0 },
                { id: "eid446", tween: [ "style", "${_Curent}", "top", '256px', { fromValue: '204px'}], position: 29000, duration: 0 },
                { id: "eid449", tween: [ "style", "${_Curent}", "top", '232px', { fromValue: '229px'}], position: 29500, duration: 0 },
                { id: "eid454", tween: [ "style", "${_Curent}", "top", '255px', { fromValue: '279px'}], position: 30000, duration: 0 },
                { id: "eid484", tween: [ "style", "${_Curent}", "top", '280px', { fromValue: '305px'}], position: 30500, duration: 0 },
                { id: "eid485", tween: [ "style", "${_Curent}", "top", '306px', { fromValue: '176px'}], position: 31000, duration: 0 },
                { id: "eid486", tween: [ "style", "${_Curent}", "top", '331px', { fromValue: '203px'}], position: 31500, duration: 0 },
                { id: "eid487", tween: [ "style", "${_Curent}", "top", '307px', { fromValue: '229px'}], position: 32000, duration: 0 },
                { id: "eid488", tween: [ "style", "${_Curent}", "top", '331px', { fromValue: '177px'}], position: 32500, duration: 0 },
                { id: "eid489", tween: [ "style", "${_Curent}", "top", '306px', { fromValue: '204px'}], position: 33000, duration: 0 },
                { id: "eid490", tween: [ "style", "${_Curent}", "top", '355px', { fromValue: '229px'}], position: 33500, duration: 0 },
                { id: "eid491", tween: [ "style", "${_Curent}", "top", '156px', { fromValue: '177px'}], position: 34000, duration: 0 },
                { id: "eid492", tween: [ "style", "${_Curent}", "top", '181px', { fromValue: '379px'}], position: 34500, duration: 0 },
                { id: "eid493", tween: [ "style", "${_Curent}", "top", '206px', { fromValue: '152px'}], position: 35000, duration: 0 },
                { id: "eid494", tween: [ "style", "${_Curent}", "top", '232px', { fromValue: '178px'}], position: 35500, duration: 0 },
                { id: "eid495", tween: [ "style", "${_Curent}", "top", '256px', { fromValue: '203px'}], position: 36000, duration: 0 },
                { id: "eid496", tween: [ "style", "${_Curent}", "top", '280px', { fromValue: '228px'}], position: 36500, duration: 0 },
                { id: "eid497", tween: [ "style", "${_Curent}", "top", '306px', { fromValue: '278px'}], position: 37000, duration: 0 },
                { id: "eid498", tween: [ "style", "${_Curent}", "top", '356px', { fromValue: '304px'}], position: 37500, duration: 0 },
                { id: "eid499", tween: [ "style", "${_Curent}", "top", '155px', { fromValue: '177px'}], position: 38000, duration: 0 },
                { id: "eid500", tween: [ "style", "${_Curent}", "top", '181px', { fromValue: '203px'}], position: 38500, duration: 0 },
                { id: "eid501", tween: [ "style", "${_Curent}", "top", '205px', { fromValue: '228px'}], position: 39000, duration: 0 },
                { id: "eid502", tween: [ "style", "${_Curent}", "top", '232px', { fromValue: '177px'}], position: 39500, duration: 0 },
                { id: "eid503", tween: [ "style", "${_Curent}", "top", '255px', { fromValue: '378px'}], position: 40000, duration: 0 },
                { id: "eid504", tween: [ "style", "${_Curent}", "top", '232px', { fromValue: '151px'}], position: 40500, duration: 0 },
                { id: "eid505", tween: [ "style", "${_Curent}", "top", '256px', { fromValue: '177px'}], position: 41000, duration: 0 },
                { id: "eid506", tween: [ "style", "${_Curent}", "top", '281px', { fromValue: '379px'}], position: 41500, duration: 0 },
                { id: "eid507", tween: [ "style", "${_Curent}", "top", '306px', { fromValue: '151px'}], position: 42000, duration: 0 },
                { id: "eid508", tween: [ "style", "${_Curent}", "top", '331px', { fromValue: '178px'}], position: 42500, duration: 0 },
                { id: "eid509", tween: [ "style", "${_Curent}", "top", '306px', { fromValue: '203px'}], position: 43000, duration: 0 },
                { id: "eid529", tween: [ "style", "${_Curent}", "top", '355px', { fromValue: '229px'}], position: 43500, duration: 0 },
                { id: "eid530", tween: [ "style", "${_Curent}", "top", '156px', { fromValue: '279px'}], position: 44000, duration: 0 },
                { id: "eid531", tween: [ "style", "${_Curent}", "top", '181px', { fromValue: '305px'}], position: 44500, duration: 0 },
                { id: "eid532", tween: [ "style", "${_Curent}", "top", '206px', { fromValue: '177px'}], position: 45000, duration: 0 },
                { id: "eid533", tween: [ "style", "${_Curent}", "top", '232px', { fromValue: '203px'}], position: 45500, duration: 0 },
                { id: "eid534", tween: [ "style", "${_Curent}", "top", '256px', { fromValue: '229px'}], position: 46000, duration: 0 },
                { id: "eid535", tween: [ "style", "${_Curent}", "top", '231px', { fromValue: '279px'}], position: 46500, duration: 0 },
                { id: "eid536", tween: [ "style", "${_Curent}", "top", '256px', { fromValue: '305px'}], position: 47000, duration: 0 },
                { id: "eid537", tween: [ "style", "${_Curent}", "top", '232px', { fromValue: '178px'}], position: 47500, duration: 0 },
                { id: "eid538", tween: [ "style", "${_Curent}", "top", '256px', { fromValue: '204px'}], position: 48000, duration: 0 },
                { id: "eid539", tween: [ "style", "${_Curent}", "top", '280px', { fromValue: '229px'}], position: 48500, duration: 0 },
                { id: "eid540", tween: [ "style", "${_Curent}", "top", '306px', { fromValue: '178px'}], position: 49000, duration: 0 },
                { id: "eid541", tween: [ "style", "${_Curent}", "top", '331px', { fromValue: '379px'}], position: 49500, duration: 0 },
                { id: "eid542", tween: [ "style", "${_Curent}", "top", '306px', { fromValue: '152px'}], position: 50000, duration: 0 },
                { id: "eid543", tween: [ "style", "${_Curent}", "top", '331px', { fromValue: '177px'}], position: 50500, duration: 0 },
                { id: "eid544", tween: [ "style", "${_Curent}", "top", '306px', { fromValue: '379px'}], position: 51000, duration: 0 },
                { id: "eid545", tween: [ "style", "${_Curent}", "top", '355px', { fromValue: '152px'}], position: 51500, duration: 0 },
                { id: "eid546", tween: [ "style", "${_Curent}", "top", '157px', { fromValue: '177px'}], position: 52000, duration: 0 },
                { id: "eid547", tween: [ "style", "${_Curent}", "top", '181px', { fromValue: '378px'}], position: 52500, duration: 0 },
                { id: "eid548", tween: [ "style", "${_Curent}", "top", '206px', { fromValue: '151px'}], position: 53000, duration: 0 },
                { id: "eid1383", tween: [ "style", "${_Curent}", "top", '232px', { fromValue: '206px'}], position: 53500, duration: 0 },
                { id: "eid1388", tween: [ "style", "${_Curent}", "top", '256px', { fromValue: '232px'}], position: 54000, duration: 0 },
                { id: "eid1393", tween: [ "style", "${_Curent}", "top", '231px', { fromValue: '256px'}], position: 54500, duration: 0 },
                { id: "eid1398", tween: [ "style", "${_Curent}", "top", '256px', { fromValue: '231px'}], position: 55000, duration: 0 },
                { id: "eid1403", tween: [ "style", "${_Curent}", "top", '232px', { fromValue: '256px'}], position: 55500, duration: 0 },
                { id: "eid1408", tween: [ "style", "${_Curent}", "top", '255px', { fromValue: '232px'}], position: 56000, duration: 0 },
                { id: "eid1421", tween: [ "style", "${_Curent}", "top", '231px', { fromValue: '231px'}], position: 56500, duration: 0 },
                { id: "eid1426", tween: [ "style", "${_Curent}", "top", '156px', { fromValue: '231px'}], position: 57000, duration: 0 },
                { id: "eid1435", tween: [ "style", "${_Curent}", "top", '430px', { fromValue: '156px'}], position: 57500, duration: 0 },
                { id: "eid276", tween: [ "style", "${__1_2_5}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid364", tween: [ "style", "${__1_2_5}", "display", 'none', { fromValue: 'none'}], position: 10000, duration: 0 },
                { id: "eid691", tween: [ "style", "${__1_2_5}", "display", 'block', { fromValue: 'none'}], position: 11000, duration: 0 },
                { id: "eid1007", tween: [ "style", "${__1_2_5}", "display", 'block', { fromValue: 'block'}], position: 32500, duration: 0 },
                { id: "eid279", tween: [ "style", "${__1_4_5}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid418", tween: [ "style", "${__1_4_5}", "display", 'none', { fromValue: 'none'}], position: 22500, duration: 0 },
                { id: "eid934", tween: [ "style", "${__1_4_5}", "display", 'block', { fromValue: 'none'}], position: 27000, duration: 0 },
                { id: "eid278", tween: [ "style", "${__1_3_5}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid395", tween: [ "style", "${__1_3_5}", "display", 'none', { fromValue: 'none'}], position: 17000, duration: 0 },
                { id: "eid853", tween: [ "style", "${__1_3_5}", "display", 'block', { fromValue: 'none'}], position: 21000, duration: 0 },
                { id: "eid275", tween: [ "style", "${__1_2_4}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid610", tween: [ "style", "${__1_2_4}", "display", 'block', { fromValue: 'none'}], position: 7000, duration: 0 },
                { id: "eid357", tween: [ "style", "${__1_2_4}", "display", 'block', { fromValue: 'block'}], position: 8500, duration: 0 },
                { id: "eid283", tween: [ "style", "${__3_4_5}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1187", tween: [ "style", "${__3_4_5}", "display", 'none', { fromValue: 'none'}], position: 45000, duration: 0 },
                { id: "eid522", tween: [ "style", "${__3_4_5}", "display", 'none', { fromValue: 'none'}], position: 48500, duration: 0 },
                { id: "eid1308", tween: [ "style", "${__3_4_5}", "display", 'block', { fromValue: 'none'}], position: 53000, duration: 0 },
                { id: "eid274", tween: [ "style", "${__1_2_3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid552", tween: [ "style", "${__1_2_3}", "display", 'none', { fromValue: 'none'}], position: 1000, duration: 0 },
                { id: "eid553", tween: [ "style", "${__1_2_3}", "display", 'block', { fromValue: 'none'}], position: 3000, duration: 0 },
                { id: "eid351", tween: [ "style", "${__1_2_3}", "display", 'block', { fromValue: 'block'}], position: 7000, duration: 0 },
                { id: "eid281", tween: [ "style", "${__2_3_5}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid462", tween: [ "style", "${__2_3_5}", "display", 'none', { fromValue: 'none'}], position: 33500, duration: 0 },
                { id: "eid1093", tween: [ "style", "${__2_3_5}", "display", 'block', { fromValue: 'none'}], position: 39000, duration: 0 },
                { id: "eid282", tween: [ "style", "${__2_4_5}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid475", tween: [ "style", "${__2_4_5}", "display", 'none', { fromValue: 'none'}], position: 39000, duration: 0 },
                { id: "eid1186", tween: [ "style", "${__2_4_5}", "display", 'block', { fromValue: 'none'}], position: 45000, duration: 0 },
                { id: "eid280", tween: [ "style", "${__2_3_4}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid459", tween: [ "style", "${__2_3_4}", "display", 'none', { fromValue: 'none'}], position: 32000, duration: 0 },
                { id: "eid1036", tween: [ "style", "${__2_3_4}", "display", 'block', { fromValue: 'none'}], position: 35000, duration: 0 },
                { id: "eid557", tween: [ "style", "${_Curent}", "-webkit-transform-origin", [46,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [46,50]}], position: 4500, duration: 0 },
                { id: "eid2168", tween: [ "style", "${_Curent}", "-moz-transform-origin", [46,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [46,50]}], position: 4500, duration: 0 },
                { id: "eid2169", tween: [ "style", "${_Curent}", "-ms-transform-origin", [46,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [46,50]}], position: 4500, duration: 0 },
                { id: "eid2170", tween: [ "style", "${_Curent}", "msTransformOrigin", [46,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [46,50]}], position: 4500, duration: 0 },
                { id: "eid2171", tween: [ "style", "${_Curent}", "-o-transform-origin", [46,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [46,50]}], position: 4500, duration: 0 }            ]
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
