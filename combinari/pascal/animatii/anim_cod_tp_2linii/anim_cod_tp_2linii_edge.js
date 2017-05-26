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
                rect: ['-2px', '-2px','570px','563px','auto', 'auto'],
                fill: ["rgba(192,192,192,0.00)"],
                stroke: [2,"rgba(77,169,128,1.00)","solid"]
            },
            {
                id: 'Curent',
                type: 'rect',
                rect: ['36px', '163px','518px','23px','auto', 'auto'],
                borderRadius: ["10px", "10px", "10px", "10px"],
                fill: ["rgba(192,192,192,0)"],
                stroke: [1,"rgb(77, 169, 128)","solid"]
            },
            {
                id: 'Text44',
                type: 'text',
                rect: ['37px', '443px','auto','auto','auto', 'auto'],
                text: "}",
                align: "left",
                font: ['ubuntu-mono, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'Text43',
                type: 'text',
                rect: ['85px', '235px','auto','auto','auto', 'auto'],
                text: "TP[lp][0]=TP[lc][0]=1;",
                align: "left",
                font: ['ubuntu-mono, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'Text12',
                type: 'text',
                rect: ['85px', '415px','auto','auto','auto', 'auto'],
                text: "return 0;",
                align: "left",
                font: ['ubuntu-mono, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'Text11',
                type: 'text',
                rect: ['85px', '390px','auto','auto','auto', 'auto'],
                text: "cout&lt;&lt;TP[lp][m]&lt;&lt;'\\n';",
                align: "left",
                font: ['ubuntu-mono, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'Text10',
                type: 'text',
                rect: ['85px', '367px','auto','auto','auto', 'auto'],
                text: "}",
                align: "left",
                font: ['ubuntu-mono, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'Text9',
                type: 'text',
                rect: ['143px', '313px','auto','auto','auto', 'auto'],
                text: "TP[lc][j]=TP[lp][j-1]+TP[lp][j];",
                align: "left",
                font: ['ubuntu-mono, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'Text9Copy2',
                type: 'text',
                rect: ['119px', '341px','auto','auto','auto', 'auto'],
                text: "lp=1-lp; lc=1-lc;",
                align: "left",
                font: ['ubuntu-mono, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'Text8',
                type: 'text',
                rect: ['119px', '286px','auto','auto','auto', 'auto'],
                text: "for (j=1; j&lt;=i; j++)",
                align: "left",
                font: ['ubuntu-mono, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'Text7',
                type: 'text',
                rect: ['85px', '210px','auto','auto','auto', 'auto'],
                text: "cin&gt;&gt;n; cin&gt;&gt;m;",
                align: "left",
                font: ['ubuntu-mono, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'Text6',
                type: 'text',
                rect: ['85px', '185px','auto','auto','auto', 'auto'],
                text: "int lp=0, lc=1;",
                align: "left",
                font: ['ubuntu-mono, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'Text5',
                type: 'text',
                rect: ['85px', '161px','auto','auto','auto', 'auto'],
                text: "int i, j;",
                align: "left",
                font: ['ubuntu-mono, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'Text4',
                type: 'text',
                rect: ['85px', '260px','auto','auto','auto', 'auto'],
                text: "for (i=1;i&lt;=n;i++) {",
                align: "left",
                font: ['ubuntu-mono, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'Text3',
                type: 'text',
                rect: ['37px', '135px','auto','auto','auto', 'auto'],
                text: "int main() {",
                align: "left",
                font: ['ubuntu-mono, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'Text2',
                type: 'text',
                rect: ['37px', '93px','auto','auto','auto', 'auto'],
                text: "int TP[2][DMAX];",
                align: "left",
                font: ['ubuntu-mono, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'Text',
                type: 'text',
                rect: ['37px', '67px','auto','auto','auto', 'auto'],
                text: "int n, m;",
                font: ['ubuntu-mono, sans-serif', 24, "rgba(0,0,0,1)", "normal", "none", ""]
            },
            {
                id: 'com1',
                type: 'group',
                rect: ['30px', '62px','528','33','auto', 'auto'],
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
                id: 'com3',
                type: 'group',
                rect: ['30px', '158px','528','33','auto', 'auto'],
                c: [
                {
                    id: 'RoundRect4Copy2',
                    type: 'rect',
                    rect: ['0px', '1px','526px','31px','auto', 'auto'],
                    borderRadius: ["10px", "10px", "10px", "10px"],
                    fill: ["rgba(77,169,128,1.00)"],
                    stroke: [1,"rgb(77, 169, 128)","solid"]
                },
                {
                    id: 'Text42Copy2',
                    type: 'text',
                    rect: ['16px', '7px','auto','auto','auto', 'auto'],
                    text: "//folosim doi indici pentru a ne plimba prin triunghi",
                    align: "left",
                    font: ['ubuntu-mono, sans-serif', 18, "rgba(0,0,0,1)", "400", "none", "normal"]
                }]
            },
            {
                id: 'com2',
                type: 'group',
                rect: ['30px', '185px','528','33px','auto', 'auto'],
                c: [
                {
                    id: 'RoundRect4Copy',
                    type: 'rect',
                    rect: ['0px', '0px','526px','50px','auto', 'auto'],
                    borderRadius: ["10px", "10px", "10px", "10px"],
                    fill: ["rgba(77,169,128,1.00)"],
                    stroke: [1,"rgb(77, 169, 128)","solid"]
                },
                {
                    id: 'Text42Copy',
                    type: 'text',
                    rect: ['16px', '7px','auto','auto','auto', 'auto'],
                    text: "//lp=linia pe care am completat-o anterior<br>//lc=linia pe care urmeaza sa o completez",
                    align: "left",
                    font: ['ubuntu-mono, sans-serif', 18, "rgba(0,0,0,1)", "400", "none", "normal"]
                }]
            },
            {
                id: 'com4',
                type: 'group',
                rect: ['30px', '208px','528','33px','auto', 'auto'],
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
                    text: "//citim indicii combinari",
                    align: "left",
                    font: ['ubuntu-mono, sans-serif', 18, "rgba(0,0,0,1)", "400", "none", "normal"]
                }]
            },
            {
                id: 'com5',
                type: 'group',
                rect: ['30px', '234px','528','33','auto', 'auto'],
                c: [
                {
                    id: 'RoundRect4Copy4',
                    type: 'rect',
                    rect: ['0px', '0px','526px','31px','auto', 'auto'],
                    borderRadius: ["10px", "10px", "10px", "10px"],
                    fill: ["rgba(77,169,128,1.00)"],
                    stroke: [1,"rgb(77, 169, 128)","solid"]
                },
                {
                    id: 'Text42Copy4',
                    type: 'text',
                    rect: ['16px', '7px','auto','auto','auto', 'auto'],
                    text: "//initializam separat combinari de 0 luate cate 0",
                    align: "left",
                    font: ['ubuntu-mono, sans-serif', 18, "rgba(0,0,0,1)", "400", "none", "normal"]
                }]
            },
            {
                id: 'com6',
                type: 'group',
                rect: ['30px', '258px','528','33','auto', 'auto'],
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
                    text: "//parcurgem toate liniile Triunghiului lui Pascal, dar<br>lucram numai cu doua dintre ele",
                    align: "left",
                    font: ['ubuntu-mono, sans-serif', 18, "rgba(0,0,0,1)", "400", "none", "normal"]
                }]
            },
            {
                id: 'com7',
                type: 'group',
                rect: ['30px', '283px','528','33','auto', 'auto'],
                c: [
                {
                    id: 'RoundRect4Copy6',
                    type: 'rect',
                    rect: ['0px', '0px','526px','50px','auto', 'auto'],
                    borderRadius: ["10px", "10px", "10px", "10px"],
                    fill: ["rgba(77,169,128,1.00)"],
                    stroke: [1,"rgb(77, 169, 128)","solid"]
                },
                {
                    id: 'Text42Copy6',
                    type: 'text',
                    rect: ['16px', '7px','auto','auto','auto', 'auto'],
                    text: "//parcurgem linia curenta si construim combinari de i<br>luate cate j pe baza relatiei de recurenta",
                    align: "left",
                    font: ['ubuntu-mono, sans-serif', 18, "rgba(0,0,0,1)", "400", "none", "normal"]
                }]
            },
            {
                id: 'com8',
                type: 'group',
                rect: ['30px', '309px','528','33','auto', 'auto'],
                c: [
                {
                    id: 'RoundRect4Copy7',
                    type: 'rect',
                    rect: ['0px', '0px','526px','31px','auto', 'auto'],
                    borderRadius: ["10px", "10px", "10px", "10px"],
                    fill: ["rgba(77,169,128,1.00)"],
                    stroke: [1,"rgb(77, 169, 128)","solid"]
                },
                {
                    id: 'Text42Copy7',
                    type: 'text',
                    rect: ['16px', '7px','auto','auto','auto', 'auto'],
                    text: "//aplicam relatia de recurenta",
                    align: "left",
                    font: ['ubuntu-mono, sans-serif', 18, "rgba(0,0,0,1)", "400", "none", "normal"]
                }]
            },
            {
                id: 'com9',
                type: 'group',
                rect: ['30px', '337px','528','33','auto', 'auto'],
                c: [
                {
                    id: 'RoundRect4Copy8',
                    type: 'rect',
                    rect: ['0px', '0px','526px','70px','auto', 'auto'],
                    borderRadius: ["10px", "10px", "10px", "10px"],
                    fill: ["rgba(77,169,128,1.00)"],
                    stroke: [1,"rgb(77, 169, 128)","solid"]
                },
                {
                    id: 'Text42Copy8',
                    type: 'text',
                    rect: ['16px', '7px','auto','auto','auto', 'auto'],
                    text: "//linia precedent completata devine cea curenta, iar<br>linia pe care tocmai am completat-o devine linia<br>precedenta",
                    align: "left",
                    font: ['ubuntu-mono, sans-serif', 18, "rgba(0,0,0,1)", "400", "none", "normal"]
                }]
            },
            {
                id: 'com10',
                type: 'group',
                rect: ['30px', '394px','528','33','auto', 'auto'],
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
                    text: "//afisam numarul de combinari",
                    align: "left",
                    font: ['ubuntu-mono, sans-serif', 18, "rgba(0,0,0,1)", "400", "none", "normal"]
                }]
            },
            {
                id: 'Ecran',
                type: 'text',
                rect: ['600px', '464px','auto','auto','auto', 'auto'],
                text: "Ecran:",
                align: "left",
                font: ['ubuntu-mono, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'backward2',
                type: 'image',
                rect: ['378px', '481px','27px','28px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"backward2.png",'0px','0px']
            },
            {
                id: 'pause2',
                type: 'image',
                rect: ['450px', '481px','27px','28px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"pause2.png",'0px','0px']
            },
            {
                id: 'play2',
                type: 'image',
                rect: ['489px', '481px','27px','28px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"play2.png",'0px','0px']
            },
            {
                id: 'back2',
                type: 'image',
                rect: ['412px', '481px','27px','28px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"play2.png",'0px','0px'],
                transform: [[],['180']]
            },
            {
                id: 'forward2',
                type: 'image',
                rect: ['525px', '481px','27px','28px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"forward2.png",'0px','0px']
            },
            {
                id: 'indici',
                type: 'group',
                rect: ['653', '32','119','25','auto', 'auto'],
                c: [
                {
                    id: 'nt',
                    type: 'text',
                    rect: ['0px', '0px','auto','auto','auto', 'auto'],
                    text: "n=",
                    align: "left",
                    font: ['ubuntu-mono, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: 'mt',
                    type: 'text',
                    rect: ['80px', '0px','auto','auto','auto', 'auto'],
                    text: "m=",
                    align: "left",
                    font: ['ubuntu-mono, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: 'n',
                    display: 'none',
                    type: 'text',
                    rect: ['27px', '0px','auto','auto','auto', 'auto'],
                    text: "5",
                    align: "left",
                    font: ['ubuntu-mono, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: 'm',
                    display: 'none',
                    type: 'text',
                    rect: ['107px', '0px','auto','auto','auto', 'auto'],
                    text: "3",
                    align: "left",
                    font: ['ubuntu-mono, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: 'it',
                    type: 'text',
                    rect: ['0px', '40px','auto','auto','auto', 'auto'],
                    text: "i=",
                    align: "left",
                    font: ['ubuntu-mono, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: 'lpt',
                    type: 'text',
                    rect: ['0px', '80px','auto','auto','auto', 'auto'],
                    text: "lp=",
                    align: "left",
                    font: ['ubuntu-mono, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: 'jt',
                    type: 'text',
                    rect: ['80px', '40px','auto','auto','auto', 'auto'],
                    text: "j=",
                    align: "left",
                    font: ['ubuntu-mono, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: 'lct',
                    type: 'text',
                    rect: ['80px', '80px','auto','auto','auto', 'auto'],
                    text: "lc=",
                    align: "left",
                    font: ['ubuntu-mono, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: 'lp0',
                    display: 'none',
                    type: 'text',
                    rect: ['41px', '80px','auto','auto','auto', 'auto'],
                    text: "0",
                    align: "left",
                    font: ['ubuntu-mono, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: 'lp1',
                    display: 'none',
                    type: 'text',
                    rect: ['41px', '80px','auto','auto','auto', 'auto'],
                    text: "1",
                    align: "left",
                    font: ['ubuntu-mono, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: 'lc0',
                    display: 'none',
                    type: 'text',
                    rect: ['121px', '80px','auto','auto','auto', 'auto'],
                    text: "0",
                    align: "left",
                    font: ['ubuntu-mono, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: 'lc1',
                    display: 'none',
                    type: 'text',
                    rect: ['121px', '80px','auto','auto','auto', 'auto'],
                    text: "1",
                    align: "left",
                    font: ['ubuntu-mono, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: 'i1',
                    display: 'none',
                    type: 'text',
                    rect: ['27px', '40px','auto','auto','auto', 'auto'],
                    text: "1",
                    align: "left",
                    font: ['ubuntu-mono, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: 'i1Copy',
                    display: 'none',
                    type: 'text',
                    rect: ['27px', '40px','auto','auto','auto', 'auto'],
                    text: "2",
                    align: "left",
                    font: ['ubuntu-mono, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: 'i1Copy2',
                    display: 'none',
                    type: 'text',
                    rect: ['27px', '40px','auto','auto','auto', 'auto'],
                    text: "3",
                    align: "left",
                    font: ['ubuntu-mono, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: 'i1Copy3',
                    display: 'none',
                    type: 'text',
                    rect: ['27px', '40px','auto','auto','auto', 'auto'],
                    text: "4",
                    align: "left",
                    font: ['ubuntu-mono, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: 'i1Copy4',
                    display: 'none',
                    type: 'text',
                    rect: ['27px', '40px','auto','auto','auto', 'auto'],
                    text: "5",
                    align: "left",
                    font: ['ubuntu-mono, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: 'i1Copy5',
                    display: 'none',
                    type: 'text',
                    rect: ['27px', '40px','auto','auto','auto', 'auto'],
                    text: "6",
                    align: "left",
                    font: ['ubuntu-mono, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: 'j1',
                    display: 'none',
                    type: 'text',
                    rect: ['107px', '40px','auto','auto','auto', 'auto'],
                    text: "1",
                    align: "left",
                    font: ['ubuntu-mono, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: 'j1Copy',
                    display: 'none',
                    type: 'text',
                    rect: ['107px', '40px','auto','auto','auto', 'auto'],
                    text: "2",
                    align: "left",
                    font: ['ubuntu-mono, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: 'j1Copy2',
                    display: 'none',
                    type: 'text',
                    rect: ['107px', '40px','auto','auto','auto', 'auto'],
                    text: "3",
                    align: "left",
                    font: ['ubuntu-mono, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: 'j1Copy3',
                    display: 'none',
                    type: 'text',
                    rect: ['107px', '40px','auto','auto','auto', 'auto'],
                    text: "4",
                    align: "left",
                    font: ['ubuntu-mono, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: 'j1Copy4',
                    display: 'none',
                    type: 'text',
                    rect: ['107px', '40px','auto','auto','auto', 'auto'],
                    text: "5",
                    align: "left",
                    font: ['ubuntu-mono, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: 'j1Copy5',
                    display: 'none',
                    type: 'text',
                    rect: ['107px', '40px','auto','auto','auto', 'auto'],
                    text: "6",
                    align: "left",
                    font: ['ubuntu-mono, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
                }]
            },
            {
                id: 'val',
                display: 'none',
                type: 'text',
                rect: ['703px', '503px','auto','auto','auto', 'auto'],
                text: "10",
                align: "left",
                font: ['ubuntu-mono, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'tp',
                type: 'text',
                rect: ['600', '167px','auto','auto','auto', 'auto'],
                text: "TP:",
                align: "left",
                font: ['ubuntu-mono, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'matr',
                type: 'group',
                rect: ['635px', '214px','180','240','auto', 'auto'],
                c: [
                {
                    id: 'Rectangle',
                    type: 'rect',
                    rect: ['10px', '40px','176px','77px','auto', 'auto'],
                    fill: ["rgba(192,192,192,0)"],
                    stroke: [2,"rgb(77, 169, 128)","solid"]
                },
                {
                    id: 'lin1',
                    type: 'group',
                    rect: ['11px', '42px','177','40','auto', 'auto'],
                    c: [
                    {
                        id: 'Rectangle2',
                        type: 'rect',
                        rect: ['0px', '0px','28px','36px','auto', 'auto'],
                        fill: ["rgba(192,192,192,0)"],
                        stroke: [2,"rgb(77, 169, 128)","solid"]
                    },
                    {
                        id: 'Rectangle2Copy',
                        type: 'rect',
                        rect: ['29px', '0px','28px','36px','auto', 'auto'],
                        fill: ["rgba(192,192,192,0)"],
                        stroke: [2,"rgb(77, 169, 128)","solid"]
                    },
                    {
                        id: 'Rectangle2Copy2',
                        type: 'rect',
                        rect: ['58px', '0px','28px','36px','auto', 'auto'],
                        fill: ["rgba(192,192,192,0)"],
                        stroke: [2,"rgb(77, 169, 128)","solid"]
                    },
                    {
                        id: 'Rectangle2Copy3',
                        type: 'rect',
                        rect: ['87px', '0px','28px','36px','auto', 'auto'],
                        fill: ["rgba(192,192,192,0)"],
                        stroke: [2,"rgb(77, 169, 128)","solid"]
                    },
                    {
                        id: 'Rectangle2Copy4',
                        type: 'rect',
                        rect: ['116px', '0px','28px','36px','auto', 'auto'],
                        fill: ["rgba(192,192,192,0)"],
                        stroke: [2,"rgb(77, 169, 128)","solid"]
                    },
                    {
                        id: 'Rectangle2Copy5',
                        type: 'rect',
                        rect: ['145px', '0px','28px','36px','auto', 'auto'],
                        fill: ["rgba(192,192,192,0)"],
                        stroke: [2,"rgb(77, 169, 128)","solid"]
                    }]
                },
                {
                    id: 'lin2',
                    type: 'group',
                    rect: ['10px', '81px','180px','40','auto', 'auto'],
                    c: [
                    {
                        id: 'Rectangle2Copy11',
                        type: 'rect',
                        rect: ['0px', '-2px','28px','38px','auto', 'auto'],
                        fill: ["rgba(192,192,192,0)"],
                        stroke: [2,"rgba(189,106,106,1.00)","solid"]
                    },
                    {
                        id: 'Rectangle2Copy10',
                        type: 'rect',
                        rect: ['29px', '-2px','28px','38px','auto', 'auto'],
                        fill: ["rgba(192,192,192,0)"],
                        stroke: [2,"rgba(189,106,106,1.00)","solid"]
                    },
                    {
                        id: 'Rectangle2Copy9',
                        type: 'rect',
                        rect: ['59px', '-2px','28px','38px','auto', 'auto'],
                        fill: ["rgba(192,192,192,0)"],
                        stroke: [2,"rgba(189,106,106,1.00)","solid"]
                    },
                    {
                        id: 'Rectangle2Copy8',
                        type: 'rect',
                        rect: ['88px', '-2px','28px','38px','auto', 'auto'],
                        fill: ["rgba(192,192,192,0)"],
                        stroke: [2,"rgba(189,106,106,1.00)","solid"]
                    },
                    {
                        id: 'Rectangle2Copy7',
                        type: 'rect',
                        rect: ['117px', '-2px','28px','38px','auto', 'auto'],
                        fill: ["rgba(192,192,192,0)"],
                        stroke: [2,"rgba(189,106,106,1.00)","solid"]
                    },
                    {
                        id: 'Rectangle2Copy6',
                        type: 'rect',
                        rect: ['147px', '-2px','28px','38px','auto', 'auto'],
                        fill: ["rgba(192,192,192,0)"],
                        stroke: [2,"rgba(189,106,106,1.00)","solid"]
                    }]
                },
                {
                    id: 'lprec',
                    type: 'text',
                    rect: ['-25px', '47px','auto','auto','auto', 'auto'],
                    text: "lp",
                    align: "left",
                    font: ['ubuntu-mono, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: 'lurm',
                    type: 'text',
                    rect: ['-25px', '87px','auto','auto','auto', 'auto'],
                    text: "lc",
                    align: "left",
                    font: ['ubuntu-mono, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
                }]
            },
            {
                id: 'val_matr',
                type: 'group',
                rect: ['655px', '261px','158','70px','auto', 'auto'],
                c: [
                {
                    id: 'jos',
                    type: 'group',
                    rect: ['0', '41px','158','25','auto', 'auto'],
                    c: [
                    {
                        id: '_001Copy2',
                        display: 'none',
                        type: 'text',
                        rect: ['0px', '0px','auto','auto','auto', 'auto'],
                        text: "1",
                        align: "left",
                        font: ['ubuntu-mono, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
                    },
                    {
                        id: '_21Copy',
                        display: 'none',
                        type: 'text',
                        rect: ['30px', '0px','auto','auto','auto', 'auto'],
                        text: "1",
                        align: "left",
                        font: ['ubuntu-mono, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
                    },
                    {
                        id: '_31Copy',
                        display: 'none',
                        type: 'text',
                        rect: ['59px', '0px','auto','auto','auto', 'auto'],
                        text: "1",
                        align: "left",
                        font: ['ubuntu-mono, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
                    },
                    {
                        id: '_41Copy',
                        display: 'none',
                        type: 'text',
                        rect: ['88px', '0px','auto','auto','auto', 'auto'],
                        text: "1",
                        align: "left",
                        font: ['ubuntu-mono, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
                    },
                    {
                        id: '_51Copy',
                        display: 'none',
                        type: 'text',
                        rect: ['116px', '0px','auto','auto','auto', 'auto'],
                        text: "1",
                        align: "left",
                        font: ['ubuntu-mono, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
                    },
                    {
                        id: '_61Copy',
                        display: 'none',
                        type: 'text',
                        rect: ['146px', '0px','auto','auto','auto', 'auto'],
                        text: "1",
                        align: "left",
                        font: ['ubuntu-mono, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
                    },
                    {
                        id: '_22Copy',
                        display: 'none',
                        type: 'text',
                        rect: ['30px', '0px','auto','auto','auto', 'auto'],
                        text: "2",
                        align: "left",
                        font: ['ubuntu-mono, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
                    },
                    {
                        id: '_23Copy',
                        display: 'none',
                        type: 'text',
                        rect: ['30px', '0px','auto','auto','auto', 'auto'],
                        text: "3",
                        align: "left",
                        font: ['ubuntu-mono, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
                    },
                    {
                        id: '_24Copy',
                        display: 'none',
                        type: 'text',
                        rect: ['30px', '0px','auto','auto','auto', 'auto'],
                        text: "4",
                        align: "left",
                        font: ['ubuntu-mono, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
                    },
                    {
                        id: '_25Copy',
                        display: 'none',
                        type: 'text',
                        rect: ['30px', '0px','auto','auto','auto', 'auto'],
                        text: "5",
                        align: "left",
                        font: ['ubuntu-mono, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
                    },
                    {
                        id: '_33Copy',
                        display: 'none',
                        type: 'text',
                        rect: ['60px', '0px','auto','auto','auto', 'auto'],
                        text: "3",
                        align: "left",
                        font: ['ubuntu-mono, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
                    },
                    {
                        id: '_36Copy',
                        display: 'none',
                        type: 'text',
                        rect: ['60px', '0px','auto','auto','auto', 'auto'],
                        text: "6",
                        align: "left",
                        font: ['ubuntu-mono, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
                    },
                    {
                        id: '_310Copy',
                        display: 'none',
                        type: 'text',
                        rect: ['53px', '0px','auto','auto','auto', 'auto'],
                        text: "10",
                        align: "left",
                        font: ['ubuntu-mono, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
                    },
                    {
                        id: '_44Copy',
                        display: 'none',
                        type: 'text',
                        rect: ['88px', '0px','auto','auto','auto', 'auto'],
                        text: "4",
                        align: "left",
                        font: ['ubuntu-mono, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
                    },
                    {
                        id: '_410Copy',
                        display: 'none',
                        type: 'text',
                        rect: ['83px', '0px','auto','auto','auto', 'auto'],
                        text: "10",
                        align: "left",
                        font: ['ubuntu-mono, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
                    },
                    {
                        id: '_55Copy',
                        display: 'none',
                        type: 'text',
                        rect: ['117px', '0px','auto','auto','auto', 'auto'],
                        text: "5",
                        align: "left",
                        font: ['ubuntu-mono, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
                    }]
                },
                {
                    id: 'sus',
                    type: 'group',
                    rect: ['0', '2','158','25','auto', 'auto'],
                    c: [
                    {
                        id: '_001Copy',
                        display: 'none',
                        type: 'text',
                        rect: ['0px', '0px','auto','auto','auto', 'auto'],
                        text: "1",
                        align: "left",
                        font: ['ubuntu-mono, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
                    },
                    {
                        id: '_21',
                        display: 'none',
                        type: 'text',
                        rect: ['30px', '0px','auto','auto','auto', 'auto'],
                        text: "1",
                        align: "left",
                        font: ['ubuntu-mono, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
                    },
                    {
                        id: '_31',
                        display: 'none',
                        type: 'text',
                        rect: ['59px', '0px','auto','auto','auto', 'auto'],
                        text: "1",
                        align: "left",
                        font: ['ubuntu-mono, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
                    },
                    {
                        id: '_41',
                        display: 'none',
                        type: 'text',
                        rect: ['88px', '0px','auto','auto','auto', 'auto'],
                        text: "1",
                        align: "left",
                        font: ['ubuntu-mono, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
                    },
                    {
                        id: '_51',
                        display: 'none',
                        type: 'text',
                        rect: ['116px', '0px','auto','auto','auto', 'auto'],
                        text: "1",
                        align: "left",
                        font: ['ubuntu-mono, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
                    },
                    {
                        id: '_61',
                        display: 'none',
                        type: 'text',
                        rect: ['146px', '0px','auto','auto','auto', 'auto'],
                        text: "1",
                        align: "left",
                        font: ['ubuntu-mono, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
                    },
                    {
                        id: '_22',
                        display: 'none',
                        type: 'text',
                        rect: ['30px', '0px','auto','auto','auto', 'auto'],
                        text: "2",
                        align: "left",
                        font: ['ubuntu-mono, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
                    },
                    {
                        id: '_23',
                        display: 'none',
                        type: 'text',
                        rect: ['30px', '0px','auto','auto','auto', 'auto'],
                        text: "3",
                        align: "left",
                        font: ['ubuntu-mono, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
                    },
                    {
                        id: '_24',
                        display: 'none',
                        type: 'text',
                        rect: ['30px', '0px','auto','auto','auto', 'auto'],
                        text: "4",
                        align: "left",
                        font: ['ubuntu-mono, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
                    },
                    {
                        id: '_25',
                        display: 'none',
                        type: 'text',
                        rect: ['30px', '0px','auto','auto','auto', 'auto'],
                        text: "5",
                        align: "left",
                        font: ['ubuntu-mono, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
                    },
                    {
                        id: '_33',
                        display: 'none',
                        type: 'text',
                        rect: ['60px', '0px','auto','auto','auto', 'auto'],
                        text: "3",
                        align: "left",
                        font: ['ubuntu-mono, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
                    },
                    {
                        id: '_36',
                        display: 'none',
                        type: 'text',
                        rect: ['60px', '0px','auto','auto','auto', 'auto'],
                        text: "6",
                        align: "left",
                        font: ['ubuntu-mono, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
                    },
                    {
                        id: '_310',
                        display: 'none',
                        type: 'text',
                        rect: ['53px', '0px','auto','auto','auto', 'auto'],
                        text: "10",
                        align: "left",
                        font: ['ubuntu-mono, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
                    },
                    {
                        id: '_44',
                        display: 'none',
                        type: 'text',
                        rect: ['88px', '0px','auto','auto','auto', 'auto'],
                        text: "4",
                        align: "left",
                        font: ['ubuntu-mono, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
                    },
                    {
                        id: '_410',
                        display: 'none',
                        type: 'text',
                        rect: ['83px', '0px','auto','auto','auto', 'auto'],
                        text: "10",
                        align: "left",
                        font: ['ubuntu-mono, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
                    },
                    {
                        id: '_55',
                        display: 'none',
                        type: 'text',
                        rect: ['117px', '0px','auto','auto','auto', 'auto'],
                        text: "5",
                        align: "left",
                        font: ['ubuntu-mono, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
                    }]
                }]
            },
            {
                id: 'col_matr',
                type: 'group',
                rect: ['655px', '193px','158','25','auto', 'auto'],
                c: [
                {
                    id: '_001Copy3',
                    type: 'text',
                    rect: ['0px', '30px','auto','auto','auto', 'auto'],
                    text: "0",
                    align: "left",
                    font: ['ubuntu-mono, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: '_21Copy2',
                    type: 'text',
                    rect: ['30px', '30px','auto','auto','auto', 'auto'],
                    text: "1",
                    align: "left",
                    font: ['ubuntu-mono, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: '_31Copy2',
                    type: 'text',
                    rect: ['59px', '30px','auto','auto','auto', 'auto'],
                    text: "2",
                    align: "left",
                    font: ['ubuntu-mono, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: '_41Copy2',
                    type: 'text',
                    rect: ['88px', '30px','auto','auto','auto', 'auto'],
                    text: "3",
                    align: "left",
                    font: ['ubuntu-mono, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: '_51Copy2',
                    type: 'text',
                    rect: ['116px', '30px','auto','auto','auto', 'auto'],
                    text: "4",
                    align: "left",
                    font: ['ubuntu-mono, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: '_61Copy2',
                    type: 'text',
                    rect: ['146px', '30px','auto','auto','auto', 'auto'],
                    text: "5",
                    align: "left",
                    font: ['ubuntu-mono, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
                }]
            },
            {
                id: 'lin_cul',
                type: 'group',
                rect: ['618', '363','194','25','auto', 'auto'],
                c: [
                {
                    id: 'lurmCopy',
                    type: 'text',
                    rect: ['133px', '30px','auto','auto','auto', 'auto'],
                    text: "lc",
                    align: "left",
                    font: ['ubuntu-mono, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: 'lprecCopy',
                    type: 'text',
                    rect: ['30px', '30px','auto','auto','auto', 'auto'],
                    text: "lp",
                    align: "left",
                    font: ['ubuntu-mono, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: 'Ellipse',
                    type: 'ellipse',
                    rect: ['174px', '35px','16px','16px','auto', 'auto'],
                    borderRadius: ["50%", "50%", "50%", "50%"],
                    fill: ["rgba(189,106,106,1.00)"],
                    stroke: [2,"rgba(189,106,106,1.00)","solid"]
                },
                {
                    id: 'EllipseCopy',
                    type: 'ellipse',
                    rect: ['70px', '35px','16px','16px','auto', 'auto'],
                    borderRadius: ["50%", "50%", "50%", "50%"],
                    fill: ["rgba(77,169,128,1.00)"],
                    stroke: [2,"rgba(77,169,128,1.00)","solid"]
                }]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${__41Copy}": [
                ["style", "top", '0px'],
                ["style", "left", '88px'],
                ["style", "display", 'none']
            ],
            "${_m}": [
                ["style", "display", 'none'],
                ["style", "left", '107px'],
                ["style", "top", '0px']
            ],
            "${__001Copy3}": [
                ["style", "top", '30px'],
                ["style", "left", '0px']
            ],
            "${_j1}": [
                ["style", "display", 'none'],
                ["style", "left", '107px'],
                ["style", "top", '40px']
            ],
            "${_j1Copy5}": [
                ["style", "display", 'none'],
                ["style", "left", '107px'],
                ["style", "top", '40px']
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
            "${__55}": [
                ["style", "display", 'none'],
                ["style", "left", '117px'],
                ["style", "top", '0px']
            ],
            "${__21}": [
                ["style", "display", 'none'],
                ["style", "left", '30px'],
                ["style", "top", '0px']
            ],
            "${_lurm}": [
                ["style", "top", '87px'],
                ["style", "left", '-25px'],
                ["style", "text-decoration", 'none']
            ],
            "${__51Copy2}": [
                ["style", "top", '30px'],
                ["style", "left", '116px']
            ],
            "${__61Copy}": [
                ["style", "top", '0px'],
                ["style", "left", '146px'],
                ["style", "display", 'none']
            ],
            "${_Ellipse}": [
                ["color", "background-color", 'rgba(189,106,106,1.00)'],
                ["style", "top", '35px'],
                ["style", "height", '16px'],
                ["color", "border-color", 'rgba(189,106,106,1.00)'],
                ["style", "left", '174px'],
                ["style", "width", '16px']
            ],
            "${__12Copy}": [
                ["style", "display", 'none'],
                ["style", "left", '94px'],
                ["style", "top", '0px']
            ],
            "${_lc1}": [
                ["style", "display", 'none'],
                ["style", "left", '121px'],
                ["style", "top", '80px']
            ],
            "${_Ecran}": [
                ["style", "top", '464px'],
                ["style", "text-decoration", 'none'],
                ["style", "left", '600px'],
                ["style", "font-size", '24px']
            ],
            "${__11Copy}": [
                ["style", "top", '-1px'],
                ["style", "display", 'none'],
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
            "${_lin1}": [
                ["style", "top", '42px'],
                ["style", "left", '11px']
            ],
            "${_lurmCopy}": [
                ["style", "top", '30px'],
                ["style", "left", '133px'],
                ["style", "text-decoration", 'none']
            ],
            "${_matr}": [
                ["style", "left", '635px'],
                ["style", "top", '214px']
            ],
            "${_EllipseCopy}": [
                ["color", "background-color", 'rgba(77,169,128,1.00)'],
                ["style", "top", '35px'],
                ["style", "height", '16px'],
                ["color", "border-color", 'rgba(77,169,128,1.00)'],
                ["style", "left", '70px'],
                ["style", "width", '16px']
            ],
            "${_Rectangle2Copy10}": [
                ["style", "top", '-2px'],
                ["style", "height", '38px'],
                ["color", "border-color", 'rgba(189,106,106,1.00)'],
                ["style", "left", '29px'],
                ["style", "width", '28px']
            ],
            "${__410Copy}": [
                ["style", "top", '0px'],
                ["style", "left", '83px'],
                ["style", "display", 'none']
            ],
            "${__22Copy}": [
                ["style", "top", '0px'],
                ["style", "left", '30px'],
                ["style", "display", 'none']
            ],
            "${_com7}": [
                ["style", "top", '283px'],
                ["style", "left", '30px'],
                ["style", "overflow", 'visible']
            ],
            "${_lct}": [
                ["style", "top", '80px'],
                ["style", "left", '80px']
            ],
            "${_Text6}": [
                ["style", "top", '185px'],
                ["style", "left", '85px']
            ],
            "${_RoundRect4Copy2}": [
                ["style", "top", '1px'],
                ["style", "height", '31px'],
                ["color", "background-color", 'rgba(77,169,128,1)'],
                ["style", "left", '0px'],
                ["style", "width", '526px']
            ],
            "${_lprecCopy}": [
                ["style", "top", '30px'],
                ["style", "left", '30px'],
                ["style", "text-decoration", 'none']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '563px'],
                ["style", "width", '850px']
            ],
            "${_com4}": [
                ["style", "top", '208px'],
                ["style", "left", '30px'],
                ["style", "overflow", 'visible']
            ],
            "${_Rectangle2Copy9}": [
                ["style", "top", '-2px'],
                ["style", "height", '38px'],
                ["color", "border-color", 'rgba(189,106,106,1.00)'],
                ["style", "left", '59px'],
                ["style", "width", '28px']
            ],
            "${_Text42Copy7}": [
                ["style", "top", '7px'],
                ["style", "left", '16px'],
                ["style", "font-size", '18px']
            ],
            "${__61Copy2}": [
                ["style", "top", '30px'],
                ["style", "left", '146px']
            ],
            "${__41}": [
                ["style", "display", 'none'],
                ["style", "left", '88px'],
                ["style", "top", '0px']
            ],
            "${_it}": [
                ["style", "top", '40px'],
                ["style", "left", '0px']
            ],
            "${__001Copy}": [
                ["style", "display", 'none'],
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_RoundRect4Copy7}": [
                ["style", "top", '0px'],
                ["style", "height", '31px'],
                ["color", "background-color", 'rgba(77,169,128,1)'],
                ["style", "left", '0px'],
                ["style", "width", '526px']
            ],
            "${_Text4}": [
                ["style", "top", '260px'],
                ["style", "left", '85px']
            ],
            "${_i1}": [
                ["style", "display", 'none'],
                ["style", "left", '27px'],
                ["style", "top", '40px']
            ],
            "${__55Copy}": [
                ["style", "top", '0px'],
                ["style", "left", '117px'],
                ["style", "display", 'none']
            ],
            "${_Text42}": [
                ["style", "top", '7px'],
                ["style", "left", '16px'],
                ["style", "font-size", '18px']
            ],
            "${_com5}": [
                ["style", "top", '234px'],
                ["style", "left", '30px'],
                ["style", "overflow", 'visible']
            ],
            "${_col_matr}": [
                ["style", "left", '655px'],
                ["style", "top", '193px']
            ],
            "${_RoundRect4Copy}": [
                ["style", "top", '0px'],
                ["style", "height", '50px'],
                ["color", "background-color", 'rgba(77,169,128,1)'],
                ["style", "left", '0px'],
                ["style", "width", '526px']
            ],
            "${_backward2}": [
                ["style", "left", '378px'],
                ["style", "top", '481px']
            ],
            "${_i1Copy4}": [
                ["style", "display", 'none'],
                ["style", "left", '27px'],
                ["style", "top", '40px']
            ],
            "${_Text9}": [
                ["style", "top", '313px'],
                ["style", "left", '143px']
            ],
            "${_com1}": [
                ["style", "top", '62px'],
                ["style", "left", '30px'],
                ["style", "overflow", 'visible']
            ],
            "${_Text7}": [
                ["style", "top", '210px'],
                ["style", "left", '85px']
            ],
            "${_n}": [
                ["style", "display", 'none'],
                ["style", "left", '27px'],
                ["style", "top", '0px']
            ],
            "${_Rectangle2Copy3}": [
                ["style", "top", '0px'],
                ["style", "height", '36px'],
                ["style", "left", '87px'],
                ["style", "width", '28px']
            ],
            "${__21Copy}": [
                ["style", "top", '0px'],
                ["style", "left", '30px'],
                ["style", "display", 'none']
            ],
            "${__310}": [
                ["style", "display", 'none'],
                ["style", "left", '53px'],
                ["style", "top", '0px']
            ],
            "${_j1Copy4}": [
                ["style", "display", 'none'],
                ["style", "left", '107px'],
                ["style", "top", '40px']
            ],
            "${_Rectangle}": [
                ["style", "height", '77px'],
                ["style", "top", '40px'],
                ["style", "left", '10px'],
                ["style", "width", '176px']
            ],
            "${__33Copy}": [
                ["style", "top", '0px'],
                ["style", "left", '60px'],
                ["style", "display", 'none']
            ],
            "${_Text42Copy6}": [
                ["style", "top", '7px'],
                ["style", "left", '16px'],
                ["style", "font-size", '18px']
            ],
            "${_Text44}": [
                ["style", "left", '37px'],
                ["style", "top", '443px']
            ],
            "${__25}": [
                ["style", "display", 'none'],
                ["style", "left", '30px'],
                ["style", "top", '0px']
            ],
            "${_Text42Copy8}": [
                ["style", "top", '7px'],
                ["style", "left", '16px'],
                ["style", "font-size", '18px']
            ],
            "${__2stelutaCopy4}": [
                ["style", "top", '85px'],
                ["style", "left", '766px'],
                ["style", "display", 'none']
            ],
            "${_i1Copy3}": [
                ["style", "display", 'none'],
                ["style", "left", '27px'],
                ["style", "top", '40px']
            ],
            "${__41Copy2}": [
                ["style", "top", '30px'],
                ["style", "left", '88px']
            ],
            "${_com9}": [
                ["style", "top", '337px'],
                ["style", "left", '30px'],
                ["style", "overflow", 'visible']
            ],
            "${_Chenar_cod}": [
                ["style", "top", '-2px'],
                ["color", "background-color", 'rgba(192,192,192,0.00)'],
                ["style", "border-width", '2px'],
                ["color", "border-color", 'rgba(77,169,128,1.00)'],
                ["style", "height", '563px'],
                ["style", "border-style", 'solid'],
                ["style", "left", '-2px'],
                ["style", "width", '570px']
            ],
            "${__24Copy}": [
                ["style", "top", '0px'],
                ["style", "left", '30px'],
                ["style", "display", 'none']
            ],
            "${_lin2}": [
                ["style", "top", '81px'],
                ["style", "left", '10px'],
                ["style", "width", '180px']
            ],
            "${__31}": [
                ["style", "display", 'none'],
                ["style", "left", '59px'],
                ["style", "top", '0px']
            ],
            "${_Text10}": [
                ["style", "top", '367px'],
                ["style", "left", '85px']
            ],
            "${_RoundRect4Copy9}": [
                ["style", "top", '0px'],
                ["style", "height", '31px'],
                ["color", "background-color", 'rgba(77,169,128,1)'],
                ["style", "left", '0px'],
                ["style", "width", '526px']
            ],
            "${_nt}": [
                ["style", "top", '0px'],
                ["style", "left", '0px']
            ],
            "${__310Copy}": [
                ["style", "top", '0px'],
                ["style", "left", '53px'],
                ["style", "display", 'none']
            ],
            "${__14Copy2}": [
                ["style", "display", 'none'],
                ["style", "left", '142px'],
                ["style", "top", '0px']
            ],
            "${_forward2}": [
                ["style", "left", '525px'],
                ["style", "top", '481px']
            ],
            "${__51Copy}": [
                ["style", "top", '0px'],
                ["style", "left", '116px'],
                ["style", "display", 'none']
            ],
            "${_Rectangle2Copy4}": [
                ["style", "top", '0px'],
                ["style", "height", '36px'],
                ["style", "left", '116px'],
                ["style", "width", '28px']
            ],
            "${_Text3}": [
                ["style", "top", '135px'],
                ["style", "left", '37px']
            ],
            "${__61}": [
                ["style", "display", 'none'],
                ["style", "left", '146px'],
                ["style", "top", '0px']
            ],
            "${__36Copy}": [
                ["style", "top", '0px'],
                ["style", "left", '60px'],
                ["style", "display", 'none']
            ],
            "${__36}": [
                ["style", "display", 'none'],
                ["style", "left", '60px'],
                ["style", "top", '0px']
            ],
            "${_lp1}": [
                ["style", "display", 'none'],
                ["style", "left", '41px'],
                ["style", "top", '80px']
            ],
            "${__44}": [
                ["style", "display", 'none'],
                ["style", "left", '88px'],
                ["style", "top", '0px']
            ],
            "${_com10}": [
                ["style", "top", '394px'],
                ["style", "left", '30px'],
                ["style", "overflow", 'visible']
            ],
            "${__44Copy}": [
                ["style", "top", '0px'],
                ["style", "left", '88px'],
                ["style", "display", 'none']
            ],
            "${_val}": [
                ["style", "display", 'none'],
                ["style", "left", '703px'],
                ["style", "top", '503px']
            ],
            "${__31Copy}": [
                ["style", "top", '0px'],
                ["style", "left", '59px'],
                ["style", "display", 'none']
            ],
            "${_Rectangle2Copy}": [
                ["style", "top", '0px'],
                ["style", "height", '36px'],
                ["style", "left", '29px'],
                ["style", "width", '28px']
            ],
            "${_RoundRect4}": [
                ["style", "top", '0px'],
                ["style", "height", '31px'],
                ["color", "background-color", 'rgba(77,169,128,1.00)'],
                ["style", "left", '0px'],
                ["style", "width", '526px']
            ],
            "${_Text}": [
                ["style", "top", '67px'],
                ["style", "font-family", 'ubuntu-mono, sans-serif'],
                ["style", "left", '37px']
            ],
            "${_lprec}": [
                ["style", "top", '47px'],
                ["style", "left", '-25px'],
                ["style", "text-decoration", 'none']
            ],
            "${_Text42Copy4}": [
                ["style", "top", '7px'],
                ["style", "left", '16px'],
                ["style", "font-size", '18px']
            ],
            "${_tp}": [
                ["style", "text-decoration", 'none'],
                ["style", "top", '167px']
            ],
            "${__410}": [
                ["style", "display", 'none'],
                ["style", "left", '83px'],
                ["style", "top", '0px']
            ],
            "${_i1Copy5}": [
                ["style", "display", 'none'],
                ["style", "left", '27px'],
                ["style", "top", '40px']
            ],
            "${_Text8}": [
                ["style", "top", '286px'],
                ["style", "left", '119px']
            ],
            "${_jos}": [
                ["style", "top", '41px']
            ],
            "${_Rectangle2Copy5}": [
                ["style", "top", '0px'],
                ["style", "height", '36px'],
                ["style", "left", '145px'],
                ["style", "width", '28px']
            ],
            "${_back2}": [
                ["style", "top", '481px'],
                ["style", "left", '412px'],
                ["transform", "rotateZ", '180deg']
            ],
            "${__001Copy2}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "display", 'none']
            ],
            "${_Rectangle2Copy8}": [
                ["style", "top", '-2px'],
                ["style", "height", '38px'],
                ["color", "border-color", 'rgba(189,106,106,1.00)'],
                ["style", "left", '88px'],
                ["style", "width", '28px']
            ],
            "${_RoundRect4Copy6}": [
                ["style", "top", '0px'],
                ["style", "height", '50px'],
                ["color", "background-color", 'rgba(77,169,128,1)'],
                ["style", "left", '0px'],
                ["style", "width", '526px']
            ],
            "${_jt}": [
                ["style", "top", '40px'],
                ["style", "left", '80px']
            ],
            "${_i1Copy2}": [
                ["style", "display", 'none'],
                ["style", "left", '27px'],
                ["style", "top", '40px']
            ],
            "${__31Copy2}": [
                ["style", "top", '30px'],
                ["style", "left", '59px']
            ],
            "${__15Copy}": [
                ["style", "display", 'none'],
                ["style", "left", '142px'],
                ["style", "top", '0px']
            ],
            "${_lpt}": [
                ["style", "top", '80px'],
                ["style", "left", '0px']
            ],
            "${__24}": [
                ["style", "display", 'none'],
                ["style", "left", '30px'],
                ["style", "top", '0px']
            ],
            "${_Rectangle2Copy6}": [
                ["style", "top", '-2px'],
                ["style", "height", '38px'],
                ["color", "border-color", 'rgba(189,106,106,1.00)'],
                ["style", "left", '147px'],
                ["style", "width", '28px']
            ],
            "${_pause2}": [
                ["style", "top", '481px'],
                ["style", "left", '450px']
            ],
            "${_Rectangle3}": [
                ["color", "background-color", 'rgba(241,241,241,1.00)']
            ],
            "${_lp0}": [
                ["style", "display", 'none'],
                ["style", "left", '41px'],
                ["style", "top", '80px']
            ],
            "${_Text43}": [
                ["style", "top", '235px'],
                ["style", "left", '85px']
            ],
            "${_RoundRect4Copy8}": [
                ["style", "top", '0px'],
                ["style", "height", '70px'],
                ["color", "background-color", 'rgba(77,169,128,1)'],
                ["style", "left", '0px'],
                ["style", "width", '526px']
            ],
            "${_com2}": [
                ["style", "top", '185px'],
                ["style", "left", '30px'],
                ["style", "overflow", 'visible']
            ],
            "${_RoundRect4Copy5}": [
                ["style", "top", '0px'],
                ["style", "height", '50px'],
                ["color", "background-color", 'rgba(77,169,128,1)'],
                ["style", "left", '0px'],
                ["style", "width", '526px']
            ],
            "${_Text9Copy2}": [
                ["style", "top", '341px'],
                ["style", "left", '119px']
            ],
            "${_val_matr}": [
                ["style", "top", '261px'],
                ["style", "left", '655px'],
                ["style", "height", '70px']
            ],
            "${__23Copy}": [
                ["style", "top", '0px'],
                ["style", "left", '30px'],
                ["style", "display", 'none']
            ],
            "${_Text2}": [
                ["style", "top", '93px'],
                ["style", "left", '37px']
            ],
            "${_Text11}": [
                ["style", "top", '390px'],
                ["style", "left", '85px']
            ],
            "${_Rectangle2}": [
                ["style", "height", '36px'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "width", '28px']
            ],
            "${_j1Copy}": [
                ["style", "display", 'none'],
                ["style", "left", '107px'],
                ["style", "top", '40px']
            ],
            "${_Text5}": [
                ["style", "top", '161px'],
                ["style", "left", '85px']
            ],
            "${_Curent}": [
                ["style", "top", '163px'],
                ["style", "left", '39px']
            ],
            "${_Text42Copy5}": [
                ["style", "top", '7px'],
                ["style", "left", '16px'],
                ["style", "font-size", '18px']
            ],
            "${_Text42Copy9}": [
                ["style", "top", '7px'],
                ["style", "left", '16px'],
                ["style", "font-size", '18px']
            ],
            "${_Rectangle2Copy2}": [
                ["style", "top", '0px'],
                ["style", "height", '36px'],
                ["style", "left", '58px'],
                ["style", "width", '28px']
            ],
            "${_play2}": [
                ["style", "left", '489px'],
                ["style", "top", '481px']
            ],
            "${_j1Copy2}": [
                ["style", "display", 'none'],
                ["style", "left", '107px'],
                ["style", "top", '40px']
            ],
            "${_com3}": [
                ["style", "top", '158px'],
                ["style", "left", '30px'],
                ["style", "overflow", 'visible']
            ],
            "${_lc0}": [
                ["style", "display", 'none'],
                ["style", "left", '121px'],
                ["style", "top", '80px']
            ],
            "${__23}": [
                ["style", "display", 'none'],
                ["style", "left", '30px'],
                ["style", "top", '0px']
            ],
            "${_i1Copy}": [
                ["style", "display", 'none'],
                ["style", "left", '27px'],
                ["style", "top", '40px']
            ],
            "${_RoundRect4Copy4}": [
                ["style", "top", '0px'],
                ["style", "height", '31px'],
                ["color", "background-color", 'rgba(77,169,128,1)'],
                ["style", "left", '0px'],
                ["style", "width", '526px']
            ],
            "${_mt}": [
                ["style", "top", '0px'],
                ["style", "left", '80px']
            ],
            "${__13Copy}": [
                ["style", "display", 'none'],
                ["style", "left", '142px'],
                ["style", "top", '0px']
            ],
            "${__51}": [
                ["style", "display", 'none'],
                ["style", "left", '116px'],
                ["style", "top", '0px']
            ],
            "${_j1Copy3}": [
                ["style", "display", 'none'],
                ["style", "left", '107px'],
                ["style", "top", '40px']
            ],
            "${__33}": [
                ["style", "display", 'none'],
                ["style", "left", '60px'],
                ["style", "top", '0px']
            ],
            "${_Text42Copy2}": [
                ["style", "top", '7px'],
                ["style", "left", '16px'],
                ["style", "font-size", '18px']
            ],
            "${_Rectangle2Copy11}": [
                ["style", "top", '-2px'],
                ["style", "height", '38px'],
                ["color", "border-color", 'rgba(189,106,106,1.00)'],
                ["style", "left", '0px'],
                ["style", "width", '28px']
            ],
            "${__22}": [
                ["style", "display", 'none'],
                ["style", "left", '30px'],
                ["style", "top", '0px']
            ],
            "${_com8}": [
                ["style", "top", '309px'],
                ["style", "left", '30px'],
                ["style", "overflow", 'visible']
            ],
            "${_Text12}": [
                ["style", "top", '415px'],
                ["style", "left", '85px']
            ],
            "${_Rectangle2Copy7}": [
                ["style", "top", '-2px'],
                ["style", "height", '38px'],
                ["color", "border-color", 'rgba(189,106,106,1.00)'],
                ["style", "left", '117px'],
                ["style", "width", '28px']
            ],
            "${__25Copy}": [
                ["style", "top", '0px'],
                ["style", "left", '30px'],
                ["style", "display", 'none']
            ],
            "${__21Copy2}": [
                ["style", "top", '30px'],
                ["style", "left", '30px']
            ],
            "${_com6}": [
                ["style", "top", '258px'],
                ["style", "left", '30px'],
                ["style", "overflow", 'visible']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 26000,
            autoPlay: true,
            timeline: [
                { id: "eid752", tween: [ "style", "${__25Copy}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1088", tween: [ "style", "${__25Copy}", "display", 'block', { fromValue: 'none'}], position: 19500, duration: 0 },
                { id: "eid762", tween: [ "style", "${_val}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1096", tween: [ "style", "${_val}", "display", 'block', { fromValue: 'none'}], position: 25500, duration: 0 },
                { id: "eid741", tween: [ "style", "${__51}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1087", tween: [ "style", "${__51}", "display", 'block', { fromValue: 'none'}], position: 17000, duration: 0 },
                { id: "eid845", tween: [ "style", "${_lc0}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid999", tween: [ "style", "${_lc0}", "display", 'block', { fromValue: 'none'}], position: 4500, duration: 0 },
                { id: "eid1022", tween: [ "style", "${_lc0}", "display", 'none', { fromValue: 'block'}], position: 8000, duration: 0 },
                { id: "eid1027", tween: [ "style", "${_lc0}", "display", 'block', { fromValue: 'none'}], position: 12500, duration: 0 },
                { id: "eid1031", tween: [ "style", "${_lc0}", "display", 'none', { fromValue: 'block'}], position: 18000, duration: 0 },
                { id: "eid1035", tween: [ "style", "${_lc0}", "display", 'block', { fromValue: 'none'}], position: 24500, duration: 0 },
                { id: "eid736", tween: [ "style", "${__25}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid774", tween: [ "style", "${_j1Copy5}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1075", tween: [ "style", "${_j1Copy5}", "display", 'block', { fromValue: 'none'}], position: 23500, duration: 0 },
                { id: "eid747", tween: [ "style", "${__410Copy}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1092", tween: [ "style", "${__410Copy}", "display", 'block', { fromValue: 'none'}], position: 21500, duration: 0 },
                { id: "eid757", tween: [ "style", "${__51Copy}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid844", tween: [ "style", "${_lc1}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid848", tween: [ "style", "${_lc1}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
                { id: "eid1000", tween: [ "style", "${_lc1}", "display", 'none', { fromValue: 'block'}], position: 4500, duration: 0 },
                { id: "eid1023", tween: [ "style", "${_lc1}", "display", 'block', { fromValue: 'none'}], position: 8000, duration: 0 },
                { id: "eid1026", tween: [ "style", "${_lc1}", "display", 'none', { fromValue: 'block'}], position: 12500, duration: 0 },
                { id: "eid1030", tween: [ "style", "${_lc1}", "display", 'block', { fromValue: 'none'}], position: 18000, duration: 0 },
                { id: "eid1034", tween: [ "style", "${_lc1}", "display", 'none', { fromValue: 'block'}], position: 24500, duration: 0 },
                { id: "eid764", tween: [ "style", "${_i1Copy}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1013", tween: [ "style", "${_i1Copy}", "display", 'block', { fromValue: 'none'}], position: 4500, duration: 0 },
                { id: "eid1039", tween: [ "style", "${_i1Copy}", "display", 'none', { fromValue: 'block'}], position: 8000, duration: 0 },
                { id: "eid746", tween: [ "style", "${__55Copy}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1094", tween: [ "style", "${__55Copy}", "display", 'block', { fromValue: 'none'}], position: 22500, duration: 0 },
                { id: "eid776", tween: [ "style", "${_m}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid851", tween: [ "style", "${_m}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0 },
                { id: "eid731", tween: [ "style", "${__410}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid735", tween: [ "style", "${__33}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid773", tween: [ "style", "${_j1Copy4}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1063", tween: [ "style", "${_j1Copy4}", "display", 'block', { fromValue: 'none'}], position: 17000, duration: 0 },
                { id: "eid1064", tween: [ "style", "${_j1Copy4}", "display", 'none', { fromValue: 'block'}], position: 18500, duration: 0 },
                { id: "eid1073", tween: [ "style", "${_j1Copy4}", "display", 'block', { fromValue: 'none'}], position: 22500, duration: 0 },
                { id: "eid1074", tween: [ "style", "${_j1Copy4}", "display", 'none', { fromValue: 'block'}], position: 23500, duration: 0 },
                { id: "eid765", tween: [ "style", "${_i1Copy2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1038", tween: [ "style", "${_i1Copy2}", "display", 'block', { fromValue: 'none'}], position: 8000, duration: 0 },
                { id: "eid1041", tween: [ "style", "${_i1Copy2}", "display", 'none', { fromValue: 'block'}], position: 12500, duration: 0 },
                { id: "eid743", tween: [ "style", "${__31}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1076", tween: [ "style", "${__31}", "display", 'block', { fromValue: 'none'}], position: 7000, duration: 0 },
                { id: "eid1085", tween: [ "style", "${__31}", "display", 'none', { fromValue: 'block'}], position: 15000, duration: 0 },
                { id: "eid750", tween: [ "style", "${__36Copy}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid759", tween: [ "style", "${__31Copy}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid846", tween: [ "style", "${_lp1}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid997", tween: [ "style", "${_lp1}", "display", 'block', { fromValue: 'none'}], position: 4500, duration: 0 },
                { id: "eid1024", tween: [ "style", "${_lp1}", "display", 'none', { fromValue: 'block'}], position: 8000, duration: 0 },
                { id: "eid1028", tween: [ "style", "${_lp1}", "display", 'block', { fromValue: 'none'}], position: 12500, duration: 0 },
                { id: "eid1032", tween: [ "style", "${_lp1}", "display", 'none', { fromValue: 'block'}], position: 18000, duration: 0 },
                { id: "eid1036", tween: [ "style", "${_lp1}", "display", 'block', { fromValue: 'none'}], position: 24500, duration: 0 },
                { id: "eid753", tween: [ "style", "${__24Copy}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid742", tween: [ "style", "${__41}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid754", tween: [ "style", "${__23Copy}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1077", tween: [ "style", "${__23Copy}", "display", 'block', { fromValue: 'none'}], position: 9500, duration: 0 },
                { id: "eid1089", tween: [ "style", "${__23Copy}", "display", 'none', { fromValue: 'block'}], position: 19500, duration: 0 },
                { id: "eid730", tween: [ "style", "${__55}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid770", tween: [ "style", "${_j1Copy}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid995", tween: [ "style", "${_j1Copy}", "display", 'block', { fromValue: 'none'}], position: 3500, duration: 0 },
                { id: "eid1016", tween: [ "style", "${_j1Copy}", "display", 'none', { fromValue: 'block'}], position: 5000, duration: 0 },
                { id: "eid1018", tween: [ "style", "${_j1Copy}", "display", 'block', { fromValue: 'none'}], position: 6000, duration: 0 },
                { id: "eid1021", tween: [ "style", "${_j1Copy}", "display", 'none', { fromValue: 'block'}], position: 7000, duration: 0 },
                { id: "eid1049", tween: [ "style", "${_j1Copy}", "display", 'block', { fromValue: 'none'}], position: 9500, duration: 0 },
                { id: "eid1050", tween: [ "style", "${_j1Copy}", "display", 'none', { fromValue: 'block'}], position: 10500, duration: 0 },
                { id: "eid1057", tween: [ "style", "${_j1Copy}", "display", 'block', { fromValue: 'none'}], position: 14000, duration: 0 },
                { id: "eid1058", tween: [ "style", "${_j1Copy}", "display", 'none', { fromValue: 'block'}], position: 15000, duration: 0 },
                { id: "eid1067", tween: [ "style", "${_j1Copy}", "display", 'block', { fromValue: 'none'}], position: 19500, duration: 0 },
                { id: "eid1068", tween: [ "style", "${_j1Copy}", "display", 'none', { fromValue: 'block'}], position: 20500, duration: 0 },
                { id: "eid734", tween: [ "style", "${__36}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1084", tween: [ "style", "${__36}", "display", 'block', { fromValue: 'none'}], position: 15000, duration: 0 },
                { id: "eid740", tween: [ "style", "${__61}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid748", tween: [ "style", "${__44Copy}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid756", tween: [ "style", "${__61Copy}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1095", tween: [ "style", "${__61Copy}", "display", 'block', { fromValue: 'none'}], position: 23500, duration: 0 },
                { id: "eid744", tween: [ "style", "${__21}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid733", tween: [ "style", "${__310}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid738", tween: [ "style", "${__23}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid768", tween: [ "style", "${_i1Copy5}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1045", tween: [ "style", "${_i1Copy5}", "display", 'block', { fromValue: 'none'}], position: 24500, duration: 0 },
                { id: "eid763", tween: [ "style", "${_i1}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid852", tween: [ "style", "${_i1}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
                { id: "eid1014", tween: [ "style", "${_i1}", "display", 'none', { fromValue: 'block'}], position: 4500, duration: 0 },
                { id: "eid745", tween: [ "style", "${__001Copy}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid856", tween: [ "style", "${__001Copy}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
                { id: "eid758", tween: [ "style", "${__41Copy}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1080", tween: [ "style", "${__41Copy}", "display", 'block', { fromValue: 'none'}], position: 11500, duration: 0 },
                { id: "eid1093", tween: [ "style", "${__41Copy}", "display", 'none', { fromValue: 'block'}], position: 21500, duration: 0 },
                { id: "eid737", tween: [ "style", "${__24}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1083", tween: [ "style", "${__24}", "display", 'block', { fromValue: 'none'}], position: 14000, duration: 0 },
                { id: "eid761", tween: [ "style", "${__001Copy2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid855", tween: [ "style", "${__001Copy2}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
                { id: "eid865", tween: [ "style", "${_lprec}", "top", '47px', { fromValue: '47px'}], position: 0, duration: 0 },
                { id: "eid892", tween: [ "style", "${_lprec}", "top", '87px', { fromValue: '47px'}], position: 4500, duration: 0 },
                { id: "eid903", tween: [ "style", "${_lprec}", "top", '47px', { fromValue: '87px'}], position: 8000, duration: 0 },
                { id: "eid1002", tween: [ "style", "${_lprec}", "top", '87px', { fromValue: '47px'}], position: 12500, duration: 0 },
                { id: "eid1006", tween: [ "style", "${_lprec}", "top", '47px', { fromValue: '87px'}], position: 18000, duration: 0 },
                { id: "eid1010", tween: [ "style", "${_lprec}", "top", '87px', { fromValue: '47px'}], position: 24500, duration: 0 },
                { id: "eid739", tween: [ "style", "${__22}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1017", tween: [ "style", "${__22}", "display", 'block', { fromValue: 'none'}], position: 6000, duration: 0 },
                { id: "eid1081", tween: [ "style", "${__22}", "display", 'none', { fromValue: 'block'}], position: 14000, duration: 0 },
                { id: "eid766", tween: [ "style", "${_i1Copy3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1040", tween: [ "style", "${_i1Copy3}", "display", 'block', { fromValue: 'none'}], position: 12500, duration: 0 },
                { id: "eid1043", tween: [ "style", "${_i1Copy3}", "display", 'none', { fromValue: 'block'}], position: 18000, duration: 0 },
                { id: "eid760", tween: [ "style", "${__21Copy}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid854", tween: [ "style", "${__21Copy}", "display", 'block', { fromValue: 'none'}], position: 3500, duration: 0 },
                { id: "eid1078", tween: [ "style", "${__21Copy}", "display", 'none', { fromValue: 'block'}], position: 9500, duration: 0 },
                { id: "eid772", tween: [ "style", "${_j1Copy3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1053", tween: [ "style", "${_j1Copy3}", "display", 'block', { fromValue: 'none'}], position: 11500, duration: 0 },
                { id: "eid1055", tween: [ "style", "${_j1Copy3}", "display", 'none', { fromValue: 'block'}], position: 13000, duration: 0 },
                { id: "eid1061", tween: [ "style", "${_j1Copy3}", "display", 'block', { fromValue: 'none'}], position: 16000, duration: 0 },
                { id: "eid1062", tween: [ "style", "${_j1Copy3}", "display", 'none', { fromValue: 'block'}], position: 17000, duration: 0 },
                { id: "eid1071", tween: [ "style", "${_j1Copy3}", "display", 'block', { fromValue: 'none'}], position: 21500, duration: 0 },
                { id: "eid1072", tween: [ "style", "${_j1Copy3}", "display", 'none', { fromValue: 'block'}], position: 22500, duration: 0 },
                { id: "eid864", tween: [ "style", "${_lurm}", "top", '87px', { fromValue: '87px'}], position: 0, duration: 0 },
                { id: "eid891", tween: [ "style", "${_lurm}", "top", '47px', { fromValue: '87px'}], position: 4500, duration: 0 },
                { id: "eid902", tween: [ "style", "${_lurm}", "top", '87px', { fromValue: '47px'}], position: 8000, duration: 0 },
                { id: "eid1001", tween: [ "style", "${_lurm}", "top", '47px', { fromValue: '87px'}], position: 12500, duration: 0 },
                { id: "eid1005", tween: [ "style", "${_lurm}", "top", '87px', { fromValue: '47px'}], position: 18000, duration: 0 },
                { id: "eid1009", tween: [ "style", "${_lurm}", "top", '47px', { fromValue: '87px'}], position: 24500, duration: 0 },
                { id: "eid777", tween: [ "style", "${_Curent}", "top", '163px', { fromValue: '163px'}], position: 0, duration: 0 },
                { id: "eid778", tween: [ "style", "${_Curent}", "top", '187px', { fromValue: '163px'}], position: 500, duration: 0 },
                { id: "eid779", tween: [ "style", "${_Curent}", "top", '213px', { fromValue: '187px'}], position: 1000, duration: 0 },
                { id: "eid780", tween: [ "style", "${_Curent}", "top", '238px', { fromValue: '213px'}], position: 1500, duration: 0 },
                { id: "eid781", tween: [ "style", "${_Curent}", "top", '263px', { fromValue: '238px'}], position: 2000, duration: 0 },
                { id: "eid782", tween: [ "style", "${_Curent}", "top", '289px', { fromValue: '263px'}], position: 2500, duration: 0 },
                { id: "eid783", tween: [ "style", "${_Curent}", "top", '317px', { fromValue: '289px'}], position: 3000, duration: 0 },
                { id: "eid784", tween: [ "style", "${_Curent}", "top", '289px', { fromValue: '317px'}], position: 3500, duration: 0 },
                { id: "eid883", tween: [ "style", "${_Curent}", "top", '343px', { fromValue: '289px'}], position: 4000, duration: 0 },
                { id: "eid890", tween: [ "style", "${_Curent}", "top", '263px', { fromValue: '343px'}], position: 4500, duration: 0 },
                { id: "eid895", tween: [ "style", "${_Curent}", "top", '289px', { fromValue: '263px'}], position: 5000, duration: 0 },
                { id: "eid896", tween: [ "style", "${_Curent}", "top", '317px', { fromValue: '289px'}], position: 5500, duration: 0 },
                { id: "eid897", tween: [ "style", "${_Curent}", "top", '289px', { fromValue: '317px'}], position: 6000, duration: 0 },
                { id: "eid899", tween: [ "style", "${_Curent}", "top", '317px', { fromValue: '289px'}], position: 6500, duration: 0 },
                { id: "eid900", tween: [ "style", "${_Curent}", "top", '289px', { fromValue: '317px'}], position: 7000, duration: 0 },
                { id: "eid898", tween: [ "style", "${_Curent}", "top", '343px', { fromValue: '289px'}], position: 7500, duration: 0 },
                { id: "eid901", tween: [ "style", "${_Curent}", "top", '262px', { fromValue: '343px'}], position: 8000, duration: 0 },
                { id: "eid946", tween: [ "style", "${_Curent}", "top", '289px', { fromValue: '263px'}], position: 8500, duration: 0 },
                { id: "eid947", tween: [ "style", "${_Curent}", "top", '317px', { fromValue: '289px'}], position: 9000, duration: 0 },
                { id: "eid948", tween: [ "style", "${_Curent}", "top", '289px', { fromValue: '317px'}], position: 9500, duration: 0 },
                { id: "eid951", tween: [ "style", "${_Curent}", "top", '317px', { fromValue: '289px'}], position: 10000, duration: 0 },
                { id: "eid952", tween: [ "style", "${_Curent}", "top", '289px', { fromValue: '317px'}], position: 10500, duration: 0 },
                { id: "eid989", tween: [ "style", "${_Curent}", "top", '317px', { fromValue: '289px'}], position: 11000, duration: 0 },
                { id: "eid990", tween: [ "style", "${_Curent}", "top", '289px', { fromValue: '317px'}], position: 11500, duration: 0 },
                { id: "eid949", tween: [ "style", "${_Curent}", "top", '343px', { fromValue: '289px'}], position: 12000, duration: 0 },
                { id: "eid950", tween: [ "style", "${_Curent}", "top", '263px', { fromValue: '343px'}], position: 12500, duration: 0 },
                { id: "eid953", tween: [ "style", "${_Curent}", "top", '289px', { fromValue: '263px'}], position: 13000, duration: 0 },
                { id: "eid954", tween: [ "style", "${_Curent}", "top", '317px', { fromValue: '289px'}], position: 13500, duration: 0 },
                { id: "eid955", tween: [ "style", "${_Curent}", "top", '289px', { fromValue: '317px'}], position: 14000, duration: 0 },
                { id: "eid956", tween: [ "style", "${_Curent}", "top", '317px', { fromValue: '289px'}], position: 14500, duration: 0 },
                { id: "eid957", tween: [ "style", "${_Curent}", "top", '289px', { fromValue: '317px'}], position: 15000, duration: 0 },
                { id: "eid960", tween: [ "style", "${_Curent}", "top", '317px', { fromValue: '289px'}], position: 15500, duration: 0 },
                { id: "eid961", tween: [ "style", "${_Curent}", "top", '289px', { fromValue: '317px'}], position: 16000, duration: 0 },
                { id: "eid991", tween: [ "style", "${_Curent}", "top", '317px', { fromValue: '289px'}], position: 16500, duration: 0 },
                { id: "eid992", tween: [ "style", "${_Curent}", "top", '289px', { fromValue: '317px'}], position: 17000, duration: 0 },
                { id: "eid958", tween: [ "style", "${_Curent}", "top", '343px', { fromValue: '289px'}], position: 17500, duration: 0 },
                { id: "eid959", tween: [ "style", "${_Curent}", "top", '263px', { fromValue: '343px'}], position: 18000, duration: 0 },
                { id: "eid962", tween: [ "style", "${_Curent}", "top", '289px', { fromValue: '263px'}], position: 18500, duration: 0 },
                { id: "eid963", tween: [ "style", "${_Curent}", "top", '317px', { fromValue: '289px'}], position: 19000, duration: 0 },
                { id: "eid964", tween: [ "style", "${_Curent}", "top", '289px', { fromValue: '317px'}], position: 19500, duration: 0 },
                { id: "eid965", tween: [ "style", "${_Curent}", "top", '317px', { fromValue: '289px'}], position: 20000, duration: 0 },
                { id: "eid966", tween: [ "style", "${_Curent}", "top", '289px', { fromValue: '317px'}], position: 20500, duration: 0 },
                { id: "eid967", tween: [ "style", "${_Curent}", "top", '317px', { fromValue: '289px'}], position: 21000, duration: 0 },
                { id: "eid968", tween: [ "style", "${_Curent}", "top", '289px', { fromValue: '317px'}], position: 21500, duration: 0 },
                { id: "eid971", tween: [ "style", "${_Curent}", "top", '317px', { fromValue: '289px'}], position: 22000, duration: 0 },
                { id: "eid972", tween: [ "style", "${_Curent}", "top", '289px', { fromValue: '317px'}], position: 22500, duration: 0 },
                { id: "eid993", tween: [ "style", "${_Curent}", "top", '317px', { fromValue: '289px'}], position: 23000, duration: 0 },
                { id: "eid994", tween: [ "style", "${_Curent}", "top", '289px', { fromValue: '317px'}], position: 23500, duration: 0 },
                { id: "eid969", tween: [ "style", "${_Curent}", "top", '343px', { fromValue: '289px'}], position: 24000, duration: 0 },
                { id: "eid970", tween: [ "style", "${_Curent}", "top", '263px', { fromValue: '343px'}], position: 24500, duration: 0 },
                { id: "eid973", tween: [ "style", "${_Curent}", "top", '392px', { fromValue: '263px'}], position: 25000, duration: 0 },
                { id: "eid974", tween: [ "style", "${_Curent}", "top", '417px', { fromValue: '289px'}], position: 25500, duration: 0 },
                { id: "eid975", tween: [ "style", "${_Curent}", "top", '445px', { fromValue: '317px'}], position: 26000, duration: 0 },
                { id: "eid767", tween: [ "style", "${_i1Copy4}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1042", tween: [ "style", "${_i1Copy4}", "display", 'block', { fromValue: 'none'}], position: 18000, duration: 0 },
                { id: "eid1044", tween: [ "style", "${_i1Copy4}", "display", 'none', { fromValue: 'block'}], position: 24500, duration: 0 },
                { id: "eid732", tween: [ "style", "${__44}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1082", tween: [ "style", "${__44}", "display", 'none', { fromValue: 'none'}], position: 14000, duration: 0 },
                { id: "eid1086", tween: [ "style", "${__44}", "display", 'block', { fromValue: 'none'}], position: 16000, duration: 0 },
                { id: "eid775", tween: [ "style", "${_n}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid850", tween: [ "style", "${_n}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0 },
                { id: "eid771", tween: [ "style", "${_j1Copy2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1020", tween: [ "style", "${_j1Copy2}", "display", 'block', { fromValue: 'none'}], position: 7000, duration: 0 },
                { id: "eid1046", tween: [ "style", "${_j1Copy2}", "display", 'none', { fromValue: 'block'}], position: 8500, duration: 0 },
                { id: "eid1051", tween: [ "style", "${_j1Copy2}", "display", 'block', { fromValue: 'none'}], position: 10500, duration: 0 },
                { id: "eid1052", tween: [ "style", "${_j1Copy2}", "display", 'none', { fromValue: 'block'}], position: 11500, duration: 0 },
                { id: "eid1059", tween: [ "style", "${_j1Copy2}", "display", 'block', { fromValue: 'none'}], position: 15000, duration: 0 },
                { id: "eid1060", tween: [ "style", "${_j1Copy2}", "display", 'none', { fromValue: 'block'}], position: 16000, duration: 0 },
                { id: "eid1069", tween: [ "style", "${_j1Copy2}", "display", 'block', { fromValue: 'none'}], position: 20500, duration: 0 },
                { id: "eid1070", tween: [ "style", "${_j1Copy2}", "display", 'none', { fromValue: 'block'}], position: 21500, duration: 0 },
                { id: "eid751", tween: [ "style", "${__33Copy}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1079", tween: [ "style", "${__33Copy}", "display", 'block', { fromValue: 'none'}], position: 10500, duration: 0 },
                { id: "eid1090", tween: [ "style", "${__33Copy}", "display", 'none', { fromValue: 'block'}], position: 20500, duration: 0 },
                { id: "eid866", tween: [ "style", "${_lin2}", "top", '81px', { fromValue: '81px'}], position: 0, duration: 0 },
                { id: "eid893", tween: [ "style", "${_lin2}", "top", '42px', { fromValue: '81px'}], position: 4500, duration: 0 },
                { id: "eid904", tween: [ "style", "${_lin2}", "top", '81px', { fromValue: '42px'}], position: 8000, duration: 0 },
                { id: "eid1003", tween: [ "style", "${_lin2}", "top", '42px', { fromValue: '81px'}], position: 12500, duration: 0 },
                { id: "eid1007", tween: [ "style", "${_lin2}", "top", '81px', { fromValue: '42px'}], position: 18000, duration: 0 },
                { id: "eid1011", tween: [ "style", "${_lin2}", "top", '42px', { fromValue: '81px'}], position: 24500, duration: 0 },
                { id: "eid769", tween: [ "style", "${_j1}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid853", tween: [ "style", "${_j1}", "display", 'block', { fromValue: 'none'}], position: 2500, duration: 0 },
                { id: "eid996", tween: [ "style", "${_j1}", "display", 'none', { fromValue: 'block'}], position: 3500, duration: 0 },
                { id: "eid1015", tween: [ "style", "${_j1}", "display", 'block', { fromValue: 'none'}], position: 5000, duration: 0 },
                { id: "eid1019", tween: [ "style", "${_j1}", "display", 'none', { fromValue: 'block'}], position: 6000, duration: 0 },
                { id: "eid1047", tween: [ "style", "${_j1}", "display", 'block', { fromValue: 'none'}], position: 8500, duration: 0 },
                { id: "eid1048", tween: [ "style", "${_j1}", "display", 'none', { fromValue: 'block'}], position: 9500, duration: 0 },
                { id: "eid1054", tween: [ "style", "${_j1}", "display", 'block', { fromValue: 'none'}], position: 13000, duration: 0 },
                { id: "eid1056", tween: [ "style", "${_j1}", "display", 'none', { fromValue: 'block'}], position: 14000, duration: 0 },
                { id: "eid1065", tween: [ "style", "${_j1}", "display", 'block', { fromValue: 'none'}], position: 18500, duration: 0 },
                { id: "eid1066", tween: [ "style", "${_j1}", "display", 'none', { fromValue: 'block'}], position: 19500, duration: 0 },
                { id: "eid755", tween: [ "style", "${__22Copy}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid847", tween: [ "style", "${_lp0}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid849", tween: [ "style", "${_lp0}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
                { id: "eid998", tween: [ "style", "${_lp0}", "display", 'none', { fromValue: 'block'}], position: 4500, duration: 0 },
                { id: "eid1025", tween: [ "style", "${_lp0}", "display", 'block', { fromValue: 'none'}], position: 8000, duration: 0 },
                { id: "eid1029", tween: [ "style", "${_lp0}", "display", 'none', { fromValue: 'block'}], position: 12500, duration: 0 },
                { id: "eid1033", tween: [ "style", "${_lp0}", "display", 'block', { fromValue: 'none'}], position: 18000, duration: 0 },
                { id: "eid1037", tween: [ "style", "${_lp0}", "display", 'none', { fromValue: 'block'}], position: 24500, duration: 0 },
                { id: "eid749", tween: [ "style", "${__310Copy}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1091", tween: [ "style", "${__310Copy}", "display", 'block', { fromValue: 'none'}], position: 20500, duration: 0 },
                { id: "eid867", tween: [ "style", "${_lin1}", "top", '42px', { fromValue: '42px'}], position: 0, duration: 0 },
                { id: "eid894", tween: [ "style", "${_lin1}", "top", '81px', { fromValue: '42px'}], position: 4500, duration: 0 },
                { id: "eid905", tween: [ "style", "${_lin1}", "top", '42px', { fromValue: '81px'}], position: 8000, duration: 0 },
                { id: "eid1004", tween: [ "style", "${_lin1}", "top", '81px', { fromValue: '42px'}], position: 12500, duration: 0 },
                { id: "eid1008", tween: [ "style", "${_lin1}", "top", '42px', { fromValue: '81px'}], position: 18000, duration: 0 },
                { id: "eid1012", tween: [ "style", "${_lin1}", "top", '81px', { fromValue: '42px'}], position: 24500, duration: 0 }            ]
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
