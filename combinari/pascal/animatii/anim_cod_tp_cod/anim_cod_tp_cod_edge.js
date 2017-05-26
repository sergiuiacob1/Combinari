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
                rect: ['-27px', '-49px','902px','646px','auto', 'auto'],
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
                rect: ['37px', '414px','auto','auto','auto', 'auto'],
                text: "}",
                align: "left",
                font: ['ubuntu-mono, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'Text43',
                type: 'text',
                rect: ['85px', '235px','auto','auto','auto', 'auto'],
                text: "for (i=1; i&lt;=n; i++) {",
                align: "left",
                font: ['ubuntu-mono, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'Text12',
                type: 'text',
                rect: ['85px', '386px','auto','auto','auto', 'auto'],
                text: "return 0;",
                align: "left",
                font: ['ubuntu-mono, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'Text11',
                type: 'text',
                rect: ['85px', '361px','auto','auto','auto', 'auto'],
                text: "cout&lt;&lt;TP[n][m]&lt;&lt;'\\n';",
                align: "left",
                font: ['ubuntu-mono, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'Text10',
                type: 'text',
                rect: ['85px', '338px','auto','auto','auto', 'auto'],
                text: "}",
                align: "left",
                font: ['ubuntu-mono, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'Text9',
                type: 'text',
                rect: ['143px', '313px','auto','auto','auto', 'auto'],
                text: "TP[i][j]=TP[i-1][j-1]+TP[i-1][j];",
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
                text: "TP[0][0]=1;",
                align: "left",
                font: ['ubuntu-mono, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'Text6',
                type: 'text',
                rect: ['85px', '185px','auto','auto','auto', 'auto'],
                text: "cin&gt;&gt;n; cin&gt;&gt;m;",
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
                rect: ['119px', '261px','auto','auto','auto', 'auto'],
                text: "TP[i][0]=1;",
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
                text: "int TP[DMAX][DMAX];",
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
                id: 'com2',
                type: 'group',
                rect: ['30px', '91px','528','33','auto', 'auto'],
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
                    text: "//reprezentam triunghiul lui Pascal cu DMAX linii si<br>DMAX coloane",
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
                id: 'com4',
                type: 'group',
                rect: ['30px', '183px','528','33px','auto', 'auto'],
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
                rect: ['30px', '207px','528','33','auto', 'auto'],
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
                rect: ['30px', '233px','528','33','auto', 'auto'],
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
                    text: "//luam fiecare linie de la 1 la n",
                    align: "left",
                    font: ['ubuntu-mono, sans-serif', 18, "rgba(0,0,0,1)", "400", "none", "normal"]
                }]
            },
            {
                id: 'com7',
                type: 'group',
                rect: ['30px', '258px','528','33','auto', 'auto'],
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
                    text: "//initializam separat combinari de i luate cate 0",
                    align: "left",
                    font: ['ubuntu-mono, sans-serif', 18, "rgba(0,0,0,1)", "400", "none", "normal"]
                }]
            },
            {
                id: 'com8',
                type: 'group',
                rect: ['30px', '283px','528','33','auto', 'auto'],
                c: [
                {
                    id: 'RoundRect4Copy7',
                    type: 'rect',
                    rect: ['0px', '0px','526px','52px','auto', 'auto'],
                    borderRadius: ["10px", "10px", "10px", "10px"],
                    fill: ["rgba(77,169,128,1.00)"],
                    stroke: [1,"rgb(77, 169, 128)","solid"]
                },
                {
                    id: 'Text42Copy7',
                    type: 'text',
                    rect: ['16px', '7px','auto','auto','auto', 'auto'],
                    text: "//parcurgem linia curenta si construim combinari de i<br>luate cate j pe baza relatiei de recurenta",
                    align: "left",
                    font: ['ubuntu-mono, sans-serif', 18, "rgba(0,0,0,1)", "400", "none", "normal"]
                }]
            },
            {
                id: 'com9',
                type: 'group',
                rect: ['30px', '308px','528','33','auto', 'auto'],
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
                    text: "//C(i,j)=C(i-1,j-1)+C(i-1,j)",
                    align: "left",
                    font: ['ubuntu-mono, sans-serif', 18, "rgba(0,0,0,1)", "400", "none", "normal"]
                }]
            },
            {
                id: 'com10',
                type: 'group',
                rect: ['30px', '364px','528','33','auto', 'auto'],
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
                    id: 'jt',
                    type: 'text',
                    rect: ['80px', '40px','auto','auto','auto', 'auto'],
                    text: "j=",
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
                rect: ['600', '117px','auto','auto','auto', 'auto'],
                text: "TP:",
                align: "left",
                font: ['ubuntu-mono, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'matr',
                type: 'group',
                rect: ['635px', '154px','180','240','auto', 'auto'],
                c: [
                {
                    id: 'Rectangle',
                    type: 'rect',
                    rect: ['0px', '40px','176px','236px','auto', 'auto'],
                    fill: ["rgba(192,192,192,0)"],
                    stroke: [2,"rgb(77, 169, 128)","solid"]
                },
                {
                    id: 'lin1',
                    type: 'group',
                    rect: ['1px', '42px','177','40','auto', 'auto'],
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
                    rect: ['1px', '81px','177','40','auto', 'auto'],
                    c: [
                    {
                        id: 'Rectangle2Copy11',
                        type: 'rect',
                        rect: ['0px', '0px','28px','36px','auto', 'auto'],
                        fill: ["rgba(192,192,192,0)"],
                        stroke: [2,"rgb(77, 169, 128)","solid"]
                    },
                    {
                        id: 'Rectangle2Copy10',
                        type: 'rect',
                        rect: ['29px', '0px','28px','36px','auto', 'auto'],
                        fill: ["rgba(192,192,192,0)"],
                        stroke: [2,"rgb(77, 169, 128)","solid"]
                    },
                    {
                        id: 'Rectangle2Copy9',
                        type: 'rect',
                        rect: ['58px', '0px','28px','36px','auto', 'auto'],
                        fill: ["rgba(192,192,192,0)"],
                        stroke: [2,"rgb(77, 169, 128)","solid"]
                    },
                    {
                        id: 'Rectangle2Copy8',
                        type: 'rect',
                        rect: ['87px', '0px','28px','36px','auto', 'auto'],
                        fill: ["rgba(192,192,192,0)"],
                        stroke: [2,"rgb(77, 169, 128)","solid"]
                    },
                    {
                        id: 'Rectangle2Copy7',
                        type: 'rect',
                        rect: ['116px', '0px','28px','36px','auto', 'auto'],
                        fill: ["rgba(192,192,192,0)"],
                        stroke: [2,"rgb(77, 169, 128)","solid"]
                    },
                    {
                        id: 'Rectangle2Copy6',
                        type: 'rect',
                        rect: ['145px', '0px','28px','36px','auto', 'auto'],
                        fill: ["rgba(192,192,192,0)"],
                        stroke: [2,"rgb(77, 169, 128)","solid"]
                    }]
                },
                {
                    id: 'lin3',
                    type: 'group',
                    rect: ['1px', '120px','177','40','auto', 'auto'],
                    c: [
                    {
                        id: 'Rectangle2Copy17',
                        type: 'rect',
                        rect: ['0px', '0px','28px','36px','auto', 'auto'],
                        fill: ["rgba(192,192,192,0)"],
                        stroke: [2,"rgb(77, 169, 128)","solid"]
                    },
                    {
                        id: 'Rectangle2Copy16',
                        type: 'rect',
                        rect: ['29px', '0px','28px','36px','auto', 'auto'],
                        fill: ["rgba(192,192,192,0)"],
                        stroke: [2,"rgb(77, 169, 128)","solid"]
                    },
                    {
                        id: 'Rectangle2Copy15',
                        type: 'rect',
                        rect: ['58px', '0px','28px','36px','auto', 'auto'],
                        fill: ["rgba(192,192,192,0)"],
                        stroke: [2,"rgb(77, 169, 128)","solid"]
                    },
                    {
                        id: 'Rectangle2Copy14',
                        type: 'rect',
                        rect: ['87px', '0px','28px','36px','auto', 'auto'],
                        fill: ["rgba(192,192,192,0)"],
                        stroke: [2,"rgb(77, 169, 128)","solid"]
                    },
                    {
                        id: 'Rectangle2Copy13',
                        type: 'rect',
                        rect: ['116px', '0px','28px','36px','auto', 'auto'],
                        fill: ["rgba(192,192,192,0)"],
                        stroke: [2,"rgb(77, 169, 128)","solid"]
                    },
                    {
                        id: 'Rectangle2Copy12',
                        type: 'rect',
                        rect: ['145px', '0px','28px','36px','auto', 'auto'],
                        fill: ["rgba(192,192,192,0)"],
                        stroke: [2,"rgb(77, 169, 128)","solid"]
                    }]
                },
                {
                    id: 'lin4',
                    type: 'group',
                    rect: ['1px', '159px','177','40','auto', 'auto'],
                    c: [
                    {
                        id: 'Rectangle2Copy23',
                        type: 'rect',
                        rect: ['0px', '0px','28px','36px','auto', 'auto'],
                        fill: ["rgba(192,192,192,0)"],
                        stroke: [2,"rgb(77, 169, 128)","solid"]
                    },
                    {
                        id: 'Rectangle2Copy22',
                        type: 'rect',
                        rect: ['29px', '0px','28px','36px','auto', 'auto'],
                        fill: ["rgba(192,192,192,0)"],
                        stroke: [2,"rgb(77, 169, 128)","solid"]
                    },
                    {
                        id: 'Rectangle2Copy21',
                        type: 'rect',
                        rect: ['58px', '0px','28px','36px','auto', 'auto'],
                        fill: ["rgba(192,192,192,0)"],
                        stroke: [2,"rgb(77, 169, 128)","solid"]
                    },
                    {
                        id: 'Rectangle2Copy20',
                        type: 'rect',
                        rect: ['87px', '0px','28px','36px','auto', 'auto'],
                        fill: ["rgba(192,192,192,0)"],
                        stroke: [2,"rgb(77, 169, 128)","solid"]
                    },
                    {
                        id: 'Rectangle2Copy19',
                        type: 'rect',
                        rect: ['116px', '0px','28px','36px','auto', 'auto'],
                        fill: ["rgba(192,192,192,0)"],
                        stroke: [2,"rgb(77, 169, 128)","solid"]
                    },
                    {
                        id: 'Rectangle2Copy18',
                        type: 'rect',
                        rect: ['145px', '0px','28px','36px','auto', 'auto'],
                        fill: ["rgba(192,192,192,0)"],
                        stroke: [2,"rgb(77, 169, 128)","solid"]
                    }]
                },
                {
                    id: 'lin5',
                    type: 'group',
                    rect: ['1px', '198px','177','40','auto', 'auto'],
                    c: [
                    {
                        id: 'Rectangle2Copy29',
                        type: 'rect',
                        rect: ['0px', '0px','28px','36px','auto', 'auto'],
                        fill: ["rgba(192,192,192,0)"],
                        stroke: [2,"rgb(77, 169, 128)","solid"]
                    },
                    {
                        id: 'Rectangle2Copy28',
                        type: 'rect',
                        rect: ['29px', '0px','28px','36px','auto', 'auto'],
                        fill: ["rgba(192,192,192,0)"],
                        stroke: [2,"rgb(77, 169, 128)","solid"]
                    },
                    {
                        id: 'Rectangle2Copy27',
                        type: 'rect',
                        rect: ['58px', '0px','28px','36px','auto', 'auto'],
                        fill: ["rgba(192,192,192,0)"],
                        stroke: [2,"rgb(77, 169, 128)","solid"]
                    },
                    {
                        id: 'Rectangle2Copy26',
                        type: 'rect',
                        rect: ['87px', '0px','28px','36px','auto', 'auto'],
                        fill: ["rgba(192,192,192,0)"],
                        stroke: [2,"rgb(77, 169, 128)","solid"]
                    },
                    {
                        id: 'Rectangle2Copy25',
                        type: 'rect',
                        rect: ['116px', '0px','28px','36px','auto', 'auto'],
                        fill: ["rgba(192,192,192,0)"],
                        stroke: [2,"rgb(77, 169, 128)","solid"]
                    },
                    {
                        id: 'Rectangle2Copy24',
                        type: 'rect',
                        rect: ['145px', '0px','28px','36px','auto', 'auto'],
                        fill: ["rgba(192,192,192,0)"],
                        stroke: [2,"rgb(77, 169, 128)","solid"]
                    }]
                },
                {
                    id: 'lin6',
                    type: 'group',
                    rect: ['1px', '238px','177','40','auto', 'auto'],
                    c: [
                    {
                        id: 'Rectangle2Copy35',
                        type: 'rect',
                        rect: ['0px', '0px','28px','36px','auto', 'auto'],
                        fill: ["rgba(192,192,192,0)"],
                        stroke: [2,"rgb(77, 169, 128)","solid"]
                    },
                    {
                        id: 'Rectangle2Copy34',
                        type: 'rect',
                        rect: ['29px', '0px','28px','36px','auto', 'auto'],
                        fill: ["rgba(192,192,192,0)"],
                        stroke: [2,"rgb(77, 169, 128)","solid"]
                    },
                    {
                        id: 'Rectangle2Copy33',
                        type: 'rect',
                        rect: ['58px', '0px','28px','36px','auto', 'auto'],
                        fill: ["rgba(192,192,192,0)"],
                        stroke: [2,"rgb(77, 169, 128)","solid"]
                    },
                    {
                        id: 'Rectangle2Copy32',
                        type: 'rect',
                        rect: ['87px', '0px','28px','36px','auto', 'auto'],
                        fill: ["rgba(192,192,192,0)"],
                        stroke: [2,"rgb(77, 169, 128)","solid"]
                    },
                    {
                        id: 'Rectangle2Copy31',
                        type: 'rect',
                        rect: ['116px', '0px','28px','36px','auto', 'auto'],
                        fill: ["rgba(192,192,192,0)"],
                        stroke: [2,"rgb(77, 169, 128)","solid"]
                    },
                    {
                        id: 'Rectangle2Copy30',
                        type: 'rect',
                        rect: ['145px', '0px','28px','36px','auto', 'auto'],
                        fill: ["rgba(192,192,192,0)"],
                        stroke: [2,"rgb(77, 169, 128)","solid"]
                    }]
                },
                {
                    id: 'Text15',
                    type: 'text',
                    rect: ['-23px', '47px','auto','auto','auto', 'auto'],
                    text: "0",
                    align: "left",
                    font: ['ubuntu-mono, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: 'Text15Copy',
                    type: 'text',
                    rect: ['-23px', '87px','auto','auto','auto', 'auto'],
                    text: "1",
                    align: "left",
                    font: ['ubuntu-mono, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: 'Text15Copy2',
                    type: 'text',
                    rect: ['-23px', '127px','auto','auto','auto', 'auto'],
                    text: "2",
                    align: "left",
                    font: ['ubuntu-mono, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: 'Text15Copy3',
                    type: 'text',
                    rect: ['-23px', '166px','auto','auto','auto', 'auto'],
                    text: "3",
                    align: "left",
                    font: ['ubuntu-mono, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: 'Text15Copy4',
                    type: 'text',
                    rect: ['-23px', '205px','auto','auto','auto', 'auto'],
                    text: "4",
                    align: "left",
                    font: ['ubuntu-mono, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: 'Text15Copy5',
                    type: 'text',
                    rect: ['-23px', '245px','auto','auto','auto', 'auto'],
                    text: "5",
                    align: "left",
                    font: ['ubuntu-mono, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: 'Text15Copy6',
                    type: 'text',
                    rect: ['10px', '7px','auto','auto','auto', 'auto'],
                    text: "0",
                    align: "left",
                    font: ['ubuntu-mono, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: 'Text15Copy7',
                    type: 'text',
                    rect: ['40px', '7px','auto','auto','auto', 'auto'],
                    text: "1",
                    align: "left",
                    font: ['ubuntu-mono, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: 'Text15Copy8',
                    type: 'text',
                    rect: ['69px', '7px','auto','auto','auto', 'auto'],
                    text: "2",
                    align: "left",
                    font: ['ubuntu-mono, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: 'Text15Copy9',
                    type: 'text',
                    rect: ['97px', '7px','auto','auto','auto', 'auto'],
                    text: "3",
                    align: "left",
                    font: ['ubuntu-mono, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: 'Text15Copy10',
                    type: 'text',
                    rect: ['127px', '7px','auto','auto','auto', 'auto'],
                    text: "4",
                    align: "left",
                    font: ['ubuntu-mono, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: 'Text15Copy11',
                    type: 'text',
                    rect: ['156px', '7px','auto','auto','auto', 'auto'],
                    text: "5",
                    align: "left",
                    font: ['ubuntu-mono, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
                }]
            },
            {
                id: 'val_matr',
                type: 'group',
                rect: ['645px', '201px','158','223','auto', 'auto'],
                c: [
                {
                    id: '_001',
                    display: 'none',
                    type: 'text',
                    rect: ['0px', '0px','auto','auto','auto', 'auto'],
                    text: "1",
                    align: "left",
                    font: ['ubuntu-mono, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: '_101',
                    display: 'none',
                    type: 'text',
                    rect: ['0px', '40px','auto','auto','auto', 'auto'],
                    text: "1",
                    align: "left",
                    font: ['ubuntu-mono, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: '_201',
                    display: 'none',
                    type: 'text',
                    rect: ['0px', '80px','auto','auto','auto', 'auto'],
                    text: "1",
                    align: "left",
                    font: ['ubuntu-mono, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: 'Text16Copy3',
                    display: 'none',
                    type: 'text',
                    rect: ['0px', '118px','auto','auto','auto', 'auto'],
                    text: "1",
                    align: "left",
                    font: ['ubuntu-mono, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: 'Text16Copy4',
                    display: 'none',
                    type: 'text',
                    rect: ['0px', '157px','auto','auto','auto', 'auto'],
                    text: "1",
                    align: "left",
                    font: ['ubuntu-mono, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: 'Text16Copy5',
                    display: 'none',
                    type: 'text',
                    rect: ['0px', '198px','auto','auto','auto', 'auto'],
                    text: "1",
                    align: "left",
                    font: ['ubuntu-mono, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: 'Text16Copy6',
                    display: 'none',
                    type: 'text',
                    rect: ['30px', '40px','auto','auto','auto', 'auto'],
                    text: "1",
                    align: "left",
                    font: ['ubuntu-mono, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: 'Text16Copy7',
                    display: 'none',
                    type: 'text',
                    rect: ['59px', '80px','auto','auto','auto', 'auto'],
                    text: "1",
                    align: "left",
                    font: ['ubuntu-mono, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: 'Text16Copy8',
                    display: 'none',
                    type: 'text',
                    rect: ['88px', '118px','auto','auto','auto', 'auto'],
                    text: "1",
                    align: "left",
                    font: ['ubuntu-mono, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: 'Text16Copy9',
                    display: 'none',
                    type: 'text',
                    rect: ['116px', '156px','auto','auto','auto', 'auto'],
                    text: "1",
                    align: "left",
                    font: ['ubuntu-mono, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: 'Text16Copy10',
                    display: 'none',
                    type: 'text',
                    rect: ['146px', '197px','auto','auto','auto', 'auto'],
                    text: "1",
                    align: "left",
                    font: ['ubuntu-mono, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: 'Text16Copy15',
                    display: 'none',
                    type: 'text',
                    rect: ['30px', '80px','auto','auto','auto', 'auto'],
                    text: "2",
                    align: "left",
                    font: ['ubuntu-mono, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: 'Text16Copy16',
                    display: 'none',
                    type: 'text',
                    rect: ['30px', '118px','auto','auto','auto', 'auto'],
                    text: "3",
                    align: "left",
                    font: ['ubuntu-mono, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: 'Text16Copy17',
                    display: 'none',
                    type: 'text',
                    rect: ['30px', '157px','auto','auto','auto', 'auto'],
                    text: "4",
                    align: "left",
                    font: ['ubuntu-mono, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: 'Text16Copy18',
                    display: 'none',
                    type: 'text',
                    rect: ['30px', '198px','auto','auto','auto', 'auto'],
                    text: "5",
                    align: "left",
                    font: ['ubuntu-mono, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: 'Text16Copy19',
                    display: 'none',
                    type: 'text',
                    rect: ['60px', '118px','auto','auto','auto', 'auto'],
                    text: "3",
                    align: "left",
                    font: ['ubuntu-mono, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: 'Text16Copy20',
                    display: 'none',
                    type: 'text',
                    rect: ['60px', '157px','auto','auto','auto', 'auto'],
                    text: "6",
                    align: "left",
                    font: ['ubuntu-mono, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: 'Text16Copy21',
                    display: 'none',
                    type: 'text',
                    rect: ['53px', '198px','auto','auto','auto', 'auto'],
                    text: "10",
                    align: "left",
                    font: ['ubuntu-mono, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: 'Text16Copy22',
                    display: 'none',
                    type: 'text',
                    rect: ['88px', '157px','auto','auto','auto', 'auto'],
                    text: "4",
                    align: "left",
                    font: ['ubuntu-mono, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: 'Text16Copy23',
                    display: 'none',
                    type: 'text',
                    rect: ['88px', '198px','auto','auto','auto', 'auto'],
                    text: "10",
                    align: "left",
                    font: ['ubuntu-mono, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: 'Text16Copy24',
                    display: 'none',
                    type: 'text',
                    rect: ['111px', '198px','auto','auto','auto', 'auto'],
                    text: "5",
                    align: "left",
                    font: ['ubuntu-mono, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
                }]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_m}": [
                ["style", "top", '0px'],
                ["style", "left", '107px'],
                ["style", "display", 'none']
            ],
            "${_j1}": [
                ["style", "top", '40px'],
                ["style", "left", '107px'],
                ["style", "display", 'none']
            ],
            "${_j1Copy5}": [
                ["style", "top", '40px'],
                ["style", "left", '107px'],
                ["style", "display", 'none']
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
            "${_Text15Copy}": [
                ["style", "top", '87px'],
                ["style", "left", '-23px'],
                ["style", "text-decoration", 'none']
            ],
            "${__12Copy}": [
                ["style", "display", 'none'],
                ["style", "left", '94px'],
                ["style", "top", '0px']
            ],
            "${_Ecran}": [
                ["style", "top", '464px'],
                ["style", "left", '600px'],
                ["style", "text-decoration", 'none'],
                ["style", "font-size", '24px']
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
            "${_lin1}": [
                ["style", "top", '42px'],
                ["style", "left", '1px']
            ],
            "${_Text16Copy12}": [
                ["style", "top", '40px'],
                ["style", "left", '30px']
            ],
            "${_RoundRect4Copy4}": [
                ["style", "top", '0px'],
                ["style", "height", '31px'],
                ["color", "background-color", 'rgba(77,169,128,1)'],
                ["style", "left", '0px'],
                ["style", "width", '526px']
            ],
            "${_Rectangle2Copy10}": [
                ["style", "top", '0px'],
                ["style", "height", '36px'],
                ["style", "left", '29px'],
                ["style", "width", '28px']
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
            "${_com7}": [
                ["style", "top", '258px'],
                ["style", "left", '30px'],
                ["style", "overflow", 'visible']
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
            "${_Rectangle2Copy27}": [
                ["style", "top", '0px'],
                ["style", "height", '36px'],
                ["style", "left", '58px'],
                ["style", "width", '28px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "width", '850px'],
                ["style", "height", '563px'],
                ["style", "overflow", 'hidden']
            ],
            "${_com4}": [
                ["style", "top", '183px'],
                ["style", "left", '30px'],
                ["style", "overflow", 'visible']
            ],
            "${_Rectangle2Copy18}": [
                ["style", "top", '0px'],
                ["style", "height", '36px'],
                ["style", "left", '145px'],
                ["style", "width", '28px']
            ],
            "${_Rectangle2Copy9}": [
                ["style", "top", '0px'],
                ["style", "height", '36px'],
                ["style", "left", '58px'],
                ["style", "width", '28px']
            ],
            "${_Text15Copy2}": [
                ["style", "top", '127px'],
                ["style", "left", '-23px'],
                ["style", "text-decoration", 'none']
            ],
            "${_Text42Copy7}": [
                ["style", "top", '7px'],
                ["style", "left", '16px'],
                ["style", "font-size", '18px']
            ],
            "${_lin6}": [
                ["style", "top", '238px'],
                ["style", "left", '1px']
            ],
            "${_it}": [
                ["style", "top", '40px'],
                ["style", "left", '0px']
            ],
            "${_i1Copy2}": [
                ["style", "top", '40px'],
                ["style", "left", '27px'],
                ["style", "display", 'none']
            ],
            "${_Text16Copy18}": [
                ["style", "top", '198px'],
                ["style", "left", '30px'],
                ["style", "display", 'none']
            ],
            "${_RoundRect4Copy7}": [
                ["style", "top", '0px'],
                ["style", "height", '52px'],
                ["color", "background-color", 'rgba(77,169,128,1)'],
                ["style", "left", '0px'],
                ["style", "width", '526px']
            ],
            "${_Rectangle2Copy35}": [
                ["style", "height", '36px'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "width", '28px']
            ],
            "${_Rectangle2Copy16}": [
                ["style", "top", '0px'],
                ["style", "height", '36px'],
                ["style", "left", '29px'],
                ["style", "width", '28px']
            ],
            "${_Text16Copy24}": [
                ["style", "top", '198px'],
                ["style", "left", '117px'],
                ["style", "display", 'none']
            ],
            "${_i1}": [
                ["style", "top", '40px'],
                ["style", "left", '27px'],
                ["style", "display", 'none']
            ],
            "${_Rectangle2Copy8}": [
                ["style", "top", '0px'],
                ["style", "height", '36px'],
                ["style", "left", '87px'],
                ["style", "width", '28px']
            ],
            "${_Text42}": [
                ["style", "top", '7px'],
                ["style", "left", '16px'],
                ["style", "font-size", '18px']
            ],
            "${_Text15Copy3}": [
                ["style", "top", '166px'],
                ["style", "left", '-23px'],
                ["style", "text-decoration", 'none']
            ],
            "${_RoundRect4Copy}": [
                ["style", "top", '0px'],
                ["style", "height", '50px'],
                ["color", "background-color", 'rgba(77,169,128,1.00)'],
                ["style", "left", '0px'],
                ["style", "width", '526px']
            ],
            "${_backward2}": [
                ["style", "left", '378px'],
                ["style", "top", '481px']
            ],
            "${_i1Copy4}": [
                ["style", "top", '40px'],
                ["style", "left", '27px'],
                ["style", "display", 'none']
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
            "${_Text16Copy14}": [
                ["style", "top", '40px'],
                ["style", "left", '30px']
            ],
            "${_n}": [
                ["style", "top", '0px'],
                ["style", "left", '27px'],
                ["style", "display", 'none']
            ],
            "${_Rectangle2Copy3}": [
                ["style", "height", '36px'],
                ["style", "top", '0px'],
                ["style", "left", '87px'],
                ["style", "width", '28px']
            ],
            "${_Rectangle2Copy32}": [
                ["style", "top", '0px'],
                ["style", "height", '36px'],
                ["style", "left", '87px'],
                ["style", "width", '28px']
            ],
            "${_j1Copy4}": [
                ["style", "top", '40px'],
                ["style", "left", '107px'],
                ["style", "display", 'none']
            ],
            "${_Rectangle}": [
                ["style", "top", '40px'],
                ["style", "height", '236px'],
                ["style", "left", '0px'],
                ["style", "width", '176px']
            ],
            "${_Text42Copy6}": [
                ["style", "top", '7px'],
                ["style", "left", '16px'],
                ["style", "font-size", '18px']
            ],
            "${_Text16Copy13}": [
                ["style", "top", '40px'],
                ["style", "left", '30px']
            ],
            "${_Text44}": [
                ["style", "left", '37px'],
                ["style", "top", '414px']
            ],
            "${_Text16Copy20}": [
                ["style", "top", '157px'],
                ["style", "left", '60px'],
                ["style", "display", 'none']
            ],
            "${_Rectangle2Copy20}": [
                ["style", "top", '0px'],
                ["style", "height", '36px'],
                ["style", "left", '87px'],
                ["style", "width", '28px']
            ],
            "${_Rectangle2Copy17}": [
                ["style", "height", '36px'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "width", '28px']
            ],
            "${_Text42Copy8}": [
                ["style", "top", '7px'],
                ["style", "left", '16px'],
                ["style", "font-size", '18px']
            ],
            "${_Rectangle2Copy22}": [
                ["style", "top", '0px'],
                ["style", "height", '36px'],
                ["style", "left", '29px'],
                ["style", "width", '28px']
            ],
            "${__2stelutaCopy4}": [
                ["style", "top", '85px'],
                ["style", "left", '766px'],
                ["style", "display", 'none']
            ],
            "${_lin4}": [
                ["style", "top", '159px'],
                ["style", "left", '1px']
            ],
            "${_i1Copy3}": [
                ["style", "top", '40px'],
                ["style", "left", '27px'],
                ["style", "display", 'none']
            ],
            "${_com9}": [
                ["style", "top", '308px'],
                ["style", "left", '30px'],
                ["style", "overflow", 'visible']
            ],
            "${_Text15Copy8}": [
                ["style", "top", '7px'],
                ["style", "left", '69px'],
                ["style", "text-decoration", 'none']
            ],
            "${_Rectangle2Copy23}": [
                ["style", "height", '36px'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "width", '28px']
            ],
            "${_Text16Copy7}": [
                ["style", "top", '80px'],
                ["style", "left", '59px'],
                ["style", "display", 'none']
            ],
            "${_Text16Copy5}": [
                ["style", "top", '198px'],
                ["style", "left", '0px'],
                ["style", "display", 'none']
            ],
            "${_Chenar_cod}": [
                ["style", "top", '-2px'],
                ["color", "background-color", 'rgba(192,192,192,0.00)'],
                ["style", "left", '-2px'],
                ["style", "border-style", 'solid'],
                ["style", "height", '563px'],
                ["color", "border-color", 'rgba(77,169,128,1.00)'],
                ["style", "border-width", '2px'],
                ["style", "width", '570px']
            ],
            "${_Text16Copy4}": [
                ["style", "top", '157px'],
                ["style", "left", '0px'],
                ["style", "display", 'none']
            ],
            "${_lin2}": [
                ["style", "top", '81px'],
                ["style", "left", '1px']
            ],
            "${_Text16Copy8}": [
                ["style", "top", '118px'],
                ["style", "left", '88px'],
                ["style", "display", 'none']
            ],
            "${_Text10}": [
                ["style", "top", '338px'],
                ["style", "left", '85px']
            ],
            "${_Rectangle2Copy34}": [
                ["style", "top", '0px'],
                ["style", "height", '36px'],
                ["style", "left", '29px'],
                ["style", "width", '28px']
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
            "${_Rectangle2Copy12}": [
                ["style", "top", '0px'],
                ["style", "height", '36px'],
                ["style", "left", '145px'],
                ["style", "width", '28px']
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
            "${_Rectangle2Copy4}": [
                ["style", "height", '36px'],
                ["style", "top", '0px'],
                ["style", "left", '116px'],
                ["style", "width", '28px']
            ],
            "${_Text16Copy10}": [
                ["style", "top", '197px'],
                ["style", "left", '146px'],
                ["style", "display", 'none']
            ],
            "${_Rectangle2Copy21}": [
                ["style", "top", '0px'],
                ["style", "height", '36px'],
                ["style", "left", '58px'],
                ["style", "width", '28px']
            ],
            "${_back2}": [
                ["style", "top", '481px'],
                ["style", "left", '412px'],
                ["transform", "rotateZ", '180deg']
            ],
            "${_j1Copy2}": [
                ["style", "top", '40px'],
                ["style", "left", '107px'],
                ["style", "display", 'none']
            ],
            "${_Text16Copy11}": [
                ["style", "top", '40px'],
                ["style", "left", '30px']
            ],
            "${_com10}": [
                ["style", "top", '364px'],
                ["style", "left", '30px'],
                ["style", "overflow", 'visible']
            ],
            "${_Text7}": [
                ["style", "top", '210px'],
                ["style", "left", '85px']
            ],
            "${__201}": [
                ["style", "top", '80px'],
                ["style", "left", '0px'],
                ["style", "display", 'none']
            ],
            "${_val}": [
                ["style", "top", '503px'],
                ["style", "left", '703px'],
                ["style", "display", 'none']
            ],
            "${_com5}": [
                ["style", "top", '207px'],
                ["style", "left", '30px'],
                ["style", "overflow", 'visible']
            ],
            "${_Rectangle2Copy}": [
                ["style", "height", '36px'],
                ["style", "top", '0px'],
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
            "${_Text16Copy9}": [
                ["style", "top", '156px'],
                ["style", "left", '116px'],
                ["style", "display", 'none']
            ],
            "${_j1Copy}": [
                ["style", "top", '40px'],
                ["style", "left", '107px'],
                ["style", "display", 'none']
            ],
            "${_Text}": [
                ["style", "top", '67px'],
                ["style", "font-family", 'ubuntu-mono, sans-serif'],
                ["style", "left", '37px']
            ],
            "${_com8}": [
                ["style", "top", '283px'],
                ["style", "left", '30px'],
                ["style", "overflow", 'visible']
            ],
            "${_Text4}": [
                ["style", "top", '261px'],
                ["style", "left", '119px']
            ],
            "${_Rectangle2Copy29}": [
                ["style", "height", '36px'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "width", '28px']
            ],
            "${_RoundRect4Copy5}": [
                ["style", "top", '0px'],
                ["style", "height", '34px'],
                ["color", "background-color", 'rgba(77,169,128,1)'],
                ["style", "left", '0px'],
                ["style", "width", '526px']
            ],
            "${_i1Copy}": [
                ["style", "top", '40px'],
                ["style", "left", '27px'],
                ["style", "display", 'none']
            ],
            "${_Text42Copy4}": [
                ["style", "top", '7px'],
                ["style", "left", '16px'],
                ["style", "font-size", '18px']
            ],
            "${_Rectangle2}": [
                ["style", "top", '0px'],
                ["style", "height", '36px'],
                ["style", "left", '0px'],
                ["style", "width", '28px']
            ],
            "${_Text15}": [
                ["style", "top", '47px'],
                ["style", "left", '-23px'],
                ["style", "text-decoration", 'none']
            ],
            "${_Text15Copy10}": [
                ["style", "top", '7px'],
                ["style", "left", '127px'],
                ["style", "text-decoration", 'none']
            ],
            "${_i1Copy5}": [
                ["style", "top", '40px'],
                ["style", "left", '27px'],
                ["style", "display", 'none']
            ],
            "${_Text42Copy2}": [
                ["style", "top", '7px'],
                ["style", "left", '16px'],
                ["style", "font-size", '18px']
            ],
            "${_Text8}": [
                ["style", "top", '286px'],
                ["style", "left", '119px']
            ],
            "${_Text43}": [
                ["style", "top", '235px'],
                ["style", "left", '85px']
            ],
            "${_Rectangle2Copy25}": [
                ["style", "top", '0px'],
                ["style", "height", '36px'],
                ["style", "left", '116px'],
                ["style", "width", '28px']
            ],
            "${_com3}": [
                ["style", "top", '158px'],
                ["style", "left", '30px'],
                ["style", "overflow", 'visible']
            ],
            "${_Rectangle2Copy14}": [
                ["style", "top", '0px'],
                ["style", "height", '36px'],
                ["style", "left", '87px'],
                ["style", "width", '28px']
            ],
            "${_Rectangle2Copy5}": [
                ["style", "height", '36px'],
                ["style", "top", '0px'],
                ["style", "left", '145px'],
                ["style", "width", '28px']
            ],
            "${_Rectangle2Copy28}": [
                ["style", "top", '0px'],
                ["style", "height", '36px'],
                ["style", "left", '29px'],
                ["style", "width", '28px']
            ],
            "${_Text15Copy5}": [
                ["style", "top", '245px'],
                ["style", "left", '-23px'],
                ["style", "text-decoration", 'none']
            ],
            "${__001}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "display", 'none']
            ],
            "${_Text15Copy4}": [
                ["style", "top", '205px'],
                ["style", "left", '-23px'],
                ["style", "text-decoration", 'none']
            ],
            "${_lin5}": [
                ["style", "top", '198px'],
                ["style", "left", '1px']
            ],
            "${_play2}": [
                ["style", "left", '489px'],
                ["style", "top", '481px']
            ],
            "${_Text2}": [
                ["style", "top", '93px'],
                ["style", "left", '37px']
            ],
            "${_tp}": [
                ["style", "text-decoration", 'none'],
                ["style", "top", '117px']
            ],
            "${__15Copy}": [
                ["style", "display", 'none'],
                ["style", "left", '142px'],
                ["style", "top", '0px']
            ],
            "${_Text16Copy22}": [
                ["style", "top", '157px'],
                ["style", "left", '88px'],
                ["style", "display", 'none']
            ],
            "${_Rectangle2Copy33}": [
                ["style", "top", '0px'],
                ["style", "height", '36px'],
                ["style", "left", '58px'],
                ["style", "width", '28px']
            ],
            "${_Text16Copy3}": [
                ["style", "top", '118px'],
                ["style", "left", '0px'],
                ["style", "display", 'none']
            ],
            "${_Text42Copy5}": [
                ["style", "top", '7px'],
                ["style", "left", '16px'],
                ["style", "font-size", '18px']
            ],
            "${_Rectangle3}": [
                ["style", "top", '-49px'],
                ["style", "left", '-27px'],
                ["color", "background-color", 'rgba(241,241,241,1)']
            ],
            "${_Rectangle2Copy6}": [
                ["style", "top", '0px'],
                ["style", "height", '36px'],
                ["style", "left", '145px'],
                ["style", "width", '28px']
            ],
            "${_Rectangle2Copy13}": [
                ["style", "top", '0px'],
                ["style", "height", '36px'],
                ["style", "left", '116px'],
                ["style", "width", '28px']
            ],
            "${_RoundRect4Copy8}": [
                ["style", "top", '0px'],
                ["style", "height", '31px'],
                ["color", "background-color", 'rgba(77,169,128,1)'],
                ["style", "left", '0px'],
                ["style", "width", '526px']
            ],
            "${_com2}": [
                ["style", "top", '91px'],
                ["style", "left", '30px'],
                ["style", "overflow", 'visible']
            ],
            "${_Text16Copy15}": [
                ["style", "top", '80px'],
                ["style", "left", '30px'],
                ["style", "display", 'none']
            ],
            "${_Text11}": [
                ["style", "top", '361px'],
                ["style", "left", '85px']
            ],
            "${_val_matr}": [
                ["style", "top", '201px']
            ],
            "${_RoundRect4Copy6}": [
                ["style", "top", '0px'],
                ["style", "height", '31px'],
                ["color", "background-color", 'rgba(77,169,128,1)'],
                ["style", "left", '0px'],
                ["style", "width", '526px']
            ],
            "${_Rectangle2Copy15}": [
                ["style", "top", '0px'],
                ["style", "height", '36px'],
                ["style", "left", '58px'],
                ["style", "width", '28px']
            ],
            "${_lin3}": [
                ["style", "top", '120px'],
                ["style", "left", '1px']
            ],
            "${_Rectangle2Copy24}": [
                ["style", "top", '0px'],
                ["style", "height", '36px'],
                ["style", "left", '145px'],
                ["style", "width", '28px']
            ],
            "${_Text3}": [
                ["style", "top", '135px'],
                ["style", "left", '37px']
            ],
            "${_Text5}": [
                ["style", "top", '161px'],
                ["style", "left", '85px']
            ],
            "${_Text15Copy6}": [
                ["style", "top", '7px'],
                ["style", "left", '10px'],
                ["style", "text-decoration", 'none']
            ],
            "${_Curent}": [
                ["style", "top", '163px'],
                ["style", "left", '36px']
            ],
            "${_Text42Copy9}": [
                ["style", "top", '7px'],
                ["style", "left", '16px'],
                ["style", "font-size", '18px']
            ],
            "${_Rectangle2Copy2}": [
                ["style", "height", '36px'],
                ["style", "top", '0px'],
                ["style", "left", '58px'],
                ["style", "width", '28px']
            ],
            "${__101}": [
                ["style", "top", '40px'],
                ["style", "left", '0px'],
                ["style", "display", 'none']
            ],
            "${_Text16Copy23}": [
                ["style", "top", '198px'],
                ["style", "left", '83px'],
                ["style", "display", 'none']
            ],
            "${_Text15Copy9}": [
                ["style", "top", '7px'],
                ["style", "left", '97px'],
                ["style", "text-decoration", 'none']
            ],
            "${_Rectangle2Copy30}": [
                ["style", "top", '0px'],
                ["style", "height", '36px'],
                ["style", "left", '145px'],
                ["style", "width", '28px']
            ],
            "${_Text16Copy16}": [
                ["style", "top", '118px'],
                ["style", "left", '30px'],
                ["style", "display", 'none']
            ],
            "${_Text16Copy6}": [
                ["style", "top", '40px'],
                ["style", "left", '30px'],
                ["style", "display", 'none']
            ],
            "${_jt}": [
                ["style", "top", '40px'],
                ["style", "left", '80px']
            ],
            "${_pause2}": [
                ["style", "top", '481px'],
                ["style", "left", '450px']
            ],
            "${_Text16Copy21}": [
                ["style", "top", '198px'],
                ["style", "left", '53px'],
                ["style", "display", 'none']
            ],
            "${_j1Copy3}": [
                ["style", "top", '40px'],
                ["style", "left", '107px'],
                ["style", "display", 'none']
            ],
            "${_Rectangle2Copy11}": [
                ["style", "height", '36px'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "width", '28px']
            ],
            "${_Text16Copy19}": [
                ["style", "top", '118px'],
                ["style", "left", '60px'],
                ["style", "display", 'none']
            ],
            "${_Text15Copy7}": [
                ["style", "top", '7px'],
                ["style", "left", '40px'],
                ["style", "text-decoration", 'none']
            ],
            "${_Rectangle2Copy26}": [
                ["style", "top", '0px'],
                ["style", "height", '36px'],
                ["style", "left", '87px'],
                ["style", "width", '28px']
            ],
            "${_Text15Copy11}": [
                ["style", "top", '7px'],
                ["style", "left", '156px'],
                ["style", "text-decoration", 'none']
            ],
            "${_Text16Copy17}": [
                ["style", "top", '157px'],
                ["style", "left", '30px'],
                ["style", "display", 'none']
            ],
            "${_Text12}": [
                ["style", "top", '386px'],
                ["style", "left", '85px']
            ],
            "${_Rectangle2Copy7}": [
                ["style", "top", '0px'],
                ["style", "height", '36px'],
                ["style", "left", '116px'],
                ["style", "width", '28px']
            ],
            "${_Rectangle2Copy31}": [
                ["style", "top", '0px'],
                ["style", "height", '36px'],
                ["style", "left", '116px'],
                ["style", "width", '28px']
            ],
            "${_Rectangle2Copy19}": [
                ["style", "top", '0px'],
                ["style", "height", '36px'],
                ["style", "left", '116px'],
                ["style", "width", '28px']
            ],
            "${_com6}": [
                ["style", "top", '233px'],
                ["style", "left", '30px'],
                ["style", "overflow", 'visible']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 25500,
            autoPlay: true,
            timeline: [
                { id: "eid556", tween: [ "style", "${_Text16Copy17}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid676", tween: [ "style", "${_Text16Copy17}", "display", 'block', { fromValue: 'none'}], position: 14000, duration: 0 },
                { id: "eid570", tween: [ "style", "${_val}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid713", tween: [ "style", "${_val}", "display", 'block', { fromValue: 'none'}], position: 25000, duration: 0 },
                { id: "eid557", tween: [ "style", "${_Text16Copy16}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid663", tween: [ "style", "${_Text16Copy16}", "display", 'block', { fromValue: 'none'}], position: 9500, duration: 0 },
                { id: "eid563", tween: [ "style", "${_Text16Copy6}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid642", tween: [ "style", "${_Text16Copy6}", "display", 'block', { fromValue: 'none'}], position: 3500, duration: 0 },
                { id: "eid709", tween: [ "style", "${_j1Copy5}", "display", 'block', { fromValue: 'none'}], position: 23500, duration: 0 },
                { id: "eid550", tween: [ "style", "${_Text16Copy23}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid699", tween: [ "style", "${_Text16Copy23}", "display", 'block', { fromValue: 'none'}], position: 21500, duration: 0 },
                { id: "eid582", tween: [ "style", "${_i1Copy}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid645", tween: [ "style", "${_i1Copy}", "display", 'block', { fromValue: 'none'}], position: 4000, duration: 0 },
                { id: "eid657", tween: [ "style", "${_i1Copy}", "display", 'none', { fromValue: 'block'}], position: 7500, duration: 0 },
                { id: "eid572", tween: [ "style", "${_m}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid587", tween: [ "style", "${_m}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
                { id: "eid551", tween: [ "style", "${_Text16Copy22}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid684", tween: [ "style", "${_Text16Copy22}", "display", 'block', { fromValue: 'none'}], position: 16000, duration: 0 },
                { id: "eid549", tween: [ "style", "${_Text16Copy24}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid706", tween: [ "style", "${_Text16Copy24}", "display", 'block', { fromValue: 'none'}], position: 22500, duration: 0 },
                { id: "eid580", tween: [ "style", "${_i1Copy3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid670", tween: [ "style", "${_i1Copy3}", "display", 'block', { fromValue: 'none'}], position: 12000, duration: 0 },
                { id: "eid689", tween: [ "style", "${_i1Copy3}", "display", 'none', { fromValue: 'block'}], position: 17500, duration: 0 },
                { id: "eid553", tween: [ "style", "${_Text16Copy20}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid681", tween: [ "style", "${_Text16Copy20}", "display", 'block', { fromValue: 'none'}], position: 15000, duration: 0 },
                { id: "eid566", tween: [ "style", "${_Text16Copy3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid658", tween: [ "style", "${_Text16Copy3}", "display", 'block', { fromValue: 'none'}], position: 8500, duration: 0 },
                { id: "eid568", tween: [ "style", "${__101}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid640", tween: [ "style", "${__101}", "display", 'block', { fromValue: 'none'}], position: 2500, duration: 0 },
                { id: "eid552", tween: [ "style", "${_Text16Copy21}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid698", tween: [ "style", "${_Text16Copy21}", "display", 'block', { fromValue: 'none'}], position: 20500, duration: 0 },
                { id: "eid575", tween: [ "style", "${_j1Copy4}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid686", tween: [ "style", "${_j1Copy4}", "display", 'block', { fromValue: 'none'}], position: 17000, duration: 0 },
                { id: "eid692", tween: [ "style", "${_j1Copy4}", "display", 'none', { fromValue: 'block'}], position: 18500, duration: 0 },
                { id: "eid704", tween: [ "style", "${_j1Copy4}", "display", 'block', { fromValue: 'none'}], position: 22500, duration: 0 },
                { id: "eid710", tween: [ "style", "${_j1Copy4}", "display", 'none', { fromValue: 'block'}], position: 23500, duration: 0 },
                { id: "eid561", tween: [ "style", "${_Text16Copy8}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid667", tween: [ "style", "${_Text16Copy8}", "display", 'block', { fromValue: 'none'}], position: 11500, duration: 0 },
                { id: "eid711", tween: [ "style", "${_i1Copy5}", "display", 'block', { fromValue: 'none'}], position: 24000, duration: 0 },
                { id: "eid573", tween: [ "style", "${_i1}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid590", tween: [ "style", "${_i1}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0 },
                { id: "eid646", tween: [ "style", "${_i1}", "display", 'none', { fromValue: 'block'}], position: 4000, duration: 0 },
                { id: "eid564", tween: [ "style", "${_Text16Copy5}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid690", tween: [ "style", "${_Text16Copy5}", "display", 'block', { fromValue: 'none'}], position: 18500, duration: 0 },
                { id: "eid565", tween: [ "style", "${_Text16Copy4}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid673", tween: [ "style", "${_Text16Copy4}", "display", 'block', { fromValue: 'none'}], position: 13000, duration: 0 },
                { id: "eid562", tween: [ "style", "${_Text16Copy7}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid655", tween: [ "style", "${_Text16Copy7}", "display", 'block', { fromValue: 'none'}], position: 7000, duration: 0 },
                { id: "eid571", tween: [ "style", "${_n}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid586", tween: [ "style", "${_n}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
                { id: "eid576", tween: [ "style", "${_j1Copy3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid668", tween: [ "style", "${_j1Copy3}", "display", 'block', { fromValue: 'none'}], position: 11500, duration: 0 },
                { id: "eid675", tween: [ "style", "${_j1Copy3}", "display", 'none', { fromValue: 'block'}], position: 13000, duration: 0 },
                { id: "eid682", tween: [ "style", "${_j1Copy3}", "display", 'block', { fromValue: 'none'}], position: 16000, duration: 0 },
                { id: "eid687", tween: [ "style", "${_j1Copy3}", "display", 'none', { fromValue: 'block'}], position: 17000, duration: 0 },
                { id: "eid703", tween: [ "style", "${_j1Copy3}", "display", 'block', { fromValue: 'none'}], position: 21500, duration: 0 },
                { id: "eid705", tween: [ "style", "${_j1Copy3}", "display", 'none', { fromValue: 'block'}], position: 22500, duration: 0 },
                { id: "eid560", tween: [ "style", "${_Text16Copy9}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid685", tween: [ "style", "${_Text16Copy9}", "display", 'block', { fromValue: 'none'}], position: 17000, duration: 0 },
                { id: "eid583", tween: [ "style", "${_Curent}", "top", '163px', { fromValue: '163px'}], position: 0, duration: 0 },
                { id: "eid584", tween: [ "style", "${_Curent}", "top", '189px', { fromValue: '163px'}], position: 500, duration: 0 },
                { id: "eid585", tween: [ "style", "${_Curent}", "top", '211px', { fromValue: '189px'}], position: 1000, duration: 0 },
                { id: "eid588", tween: [ "style", "${_Curent}", "top", '237px', { fromValue: '211px'}], position: 1500, duration: 0 },
                { id: "eid591", tween: [ "style", "${_Curent}", "top", '264px', { fromValue: '237px'}], position: 2000, duration: 0 },
                { id: "eid592", tween: [ "style", "${_Curent}", "top", '288px', { fromValue: '264px'}], position: 2500, duration: 0 },
                { id: "eid593", tween: [ "style", "${_Curent}", "top", '317px', { fromValue: '288px'}], position: 3000, duration: 0 },
                { id: "eid594", tween: [ "style", "${_Curent}", "top", '288px', { fromValue: '317px'}], position: 3500, duration: 0 },
                { id: "eid595", tween: [ "style", "${_Curent}", "top", '238px', { fromValue: '288px'}], position: 4000, duration: 0 },
                { id: "eid596", tween: [ "style", "${_Curent}", "top", '265px', { fromValue: '238px'}], position: 4500, duration: 0 },
                { id: "eid597", tween: [ "style", "${_Curent}", "top", '288px', { fromValue: '265px'}], position: 5000, duration: 0 },
                { id: "eid598", tween: [ "style", "${_Curent}", "top", '317px', { fromValue: '288px'}], position: 5500, duration: 0 },
                { id: "eid599", tween: [ "style", "${_Curent}", "top", '289px', { fromValue: '317px'}], position: 6000, duration: 0 },
                { id: "eid600", tween: [ "style", "${_Curent}", "top", '317px', { fromValue: '289px'}], position: 6500, duration: 0 },
                { id: "eid601", tween: [ "style", "${_Curent}", "top", '289px', { fromValue: '317px'}], position: 7000, duration: 0 },
                { id: "eid602", tween: [ "style", "${_Curent}", "top", '237px', { fromValue: '289px'}], position: 7500, duration: 0 },
                { id: "eid603", tween: [ "style", "${_Curent}", "top", '264px', { fromValue: '237px'}], position: 8000, duration: 0 },
                { id: "eid604", tween: [ "style", "${_Curent}", "top", '288px', { fromValue: '264px'}], position: 8500, duration: 0 },
                { id: "eid605", tween: [ "style", "${_Curent}", "top", '317px', { fromValue: '288px'}], position: 9000, duration: 0 },
                { id: "eid606", tween: [ "style", "${_Curent}", "top", '288px', { fromValue: '317px'}], position: 9500, duration: 0 },
                { id: "eid607", tween: [ "style", "${_Curent}", "top", '317px', { fromValue: '288px'}], position: 10000, duration: 0 },
                { id: "eid608", tween: [ "style", "${_Curent}", "top", '289px', { fromValue: '317px'}], position: 10500, duration: 0 },
                { id: "eid609", tween: [ "style", "${_Curent}", "top", '317px', { fromValue: '289px'}], position: 11000, duration: 0 },
                { id: "eid610", tween: [ "style", "${_Curent}", "top", '289px', { fromValue: '317px'}], position: 11500, duration: 0 },
                { id: "eid611", tween: [ "style", "${_Curent}", "top", '238px', { fromValue: '289px'}], position: 12000, duration: 0 },
                { id: "eid612", tween: [ "style", "${_Curent}", "top", '265px', { fromValue: '238px'}], position: 12500, duration: 0 },
                { id: "eid613", tween: [ "style", "${_Curent}", "top", '288px', { fromValue: '265px'}], position: 13000, duration: 0 },
                { id: "eid614", tween: [ "style", "${_Curent}", "top", '317px', { fromValue: '288px'}], position: 13500, duration: 0 },
                { id: "eid615", tween: [ "style", "${_Curent}", "top", '288px', { fromValue: '317px'}], position: 14000, duration: 0 },
                { id: "eid616", tween: [ "style", "${_Curent}", "top", '317px', { fromValue: '288px'}], position: 14500, duration: 0 },
                { id: "eid617", tween: [ "style", "${_Curent}", "top", '288px', { fromValue: '317px'}], position: 15000, duration: 0 },
                { id: "eid618", tween: [ "style", "${_Curent}", "top", '317px', { fromValue: '288px'}], position: 15500, duration: 0 },
                { id: "eid619", tween: [ "style", "${_Curent}", "top", '288px', { fromValue: '317px'}], position: 16000, duration: 0 },
                { id: "eid620", tween: [ "style", "${_Curent}", "top", '317px', { fromValue: '288px'}], position: 16500, duration: 0 },
                { id: "eid621", tween: [ "style", "${_Curent}", "top", '288px', { fromValue: '317px'}], position: 17000, duration: 0 },
                { id: "eid622", tween: [ "style", "${_Curent}", "top", '237px', { fromValue: '288px'}], position: 17500, duration: 0 },
                { id: "eid623", tween: [ "style", "${_Curent}", "top", '265px', { fromValue: '237px'}], position: 18000, duration: 0 },
                { id: "eid625", tween: [ "style", "${_Curent}", "top", '288px', { fromValue: '265px'}], position: 18500, duration: 0 },
                { id: "eid626", tween: [ "style", "${_Curent}", "top", '317px', { fromValue: '288px'}], position: 19000, duration: 0 },
                { id: "eid627", tween: [ "style", "${_Curent}", "top", '288px', { fromValue: '317px'}], position: 19500, duration: 0 },
                { id: "eid628", tween: [ "style", "${_Curent}", "top", '317px', { fromValue: '288px'}], position: 20000, duration: 0 },
                { id: "eid629", tween: [ "style", "${_Curent}", "top", '288px', { fromValue: '317px'}], position: 20500, duration: 0 },
                { id: "eid630", tween: [ "style", "${_Curent}", "top", '317px', { fromValue: '288px'}], position: 21000, duration: 0 },
                { id: "eid631", tween: [ "style", "${_Curent}", "top", '288px', { fromValue: '317px'}], position: 21500, duration: 0 },
                { id: "eid632", tween: [ "style", "${_Curent}", "top", '317px', { fromValue: '288px'}], position: 22000, duration: 0 },
                { id: "eid633", tween: [ "style", "${_Curent}", "top", '288px', { fromValue: '317px'}], position: 22500, duration: 0 },
                { id: "eid634", tween: [ "style", "${_Curent}", "top", '317px', { fromValue: '288px'}], position: 23000, duration: 0 },
                { id: "eid635", tween: [ "style", "${_Curent}", "top", '288px', { fromValue: '317px'}], position: 23500, duration: 0 },
                { id: "eid636", tween: [ "style", "${_Curent}", "top", '237px', { fromValue: '288px'}], position: 24000, duration: 0 },
                { id: "eid637", tween: [ "style", "${_Curent}", "top", '365px', { fromValue: '237px'}], position: 24500, duration: 0 },
                { id: "eid638", tween: [ "style", "${_Curent}", "top", '387px', { fromValue: '365px'}], position: 25000, duration: 0 },
                { id: "eid639", tween: [ "style", "${_Curent}", "top", '416px', { fromValue: '387px'}], position: 25500, duration: 0 },
                { id: "eid577", tween: [ "style", "${_j1Copy2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid654", tween: [ "style", "${_j1Copy2}", "display", 'block', { fromValue: 'none'}], position: 7000, duration: 0 },
                { id: "eid660", tween: [ "style", "${_j1Copy2}", "display", 'none', { fromValue: 'block'}], position: 8500, duration: 0 },
                { id: "eid665", tween: [ "style", "${_j1Copy2}", "display", 'block', { fromValue: 'none'}], position: 10500, duration: 0 },
                { id: "eid669", tween: [ "style", "${_j1Copy2}", "display", 'none', { fromValue: 'block'}], position: 11500, duration: 0 },
                { id: "eid679", tween: [ "style", "${_j1Copy2}", "display", 'block', { fromValue: 'none'}], position: 15000, duration: 0 },
                { id: "eid683", tween: [ "style", "${_j1Copy2}", "display", 'none', { fromValue: 'block'}], position: 16000, duration: 0 },
                { id: "eid696", tween: [ "style", "${_j1Copy2}", "display", 'block', { fromValue: 'none'}], position: 20500, duration: 0 },
                { id: "eid702", tween: [ "style", "${_j1Copy2}", "display", 'none', { fromValue: 'block'}], position: 21500, duration: 0 },
                { id: "eid567", tween: [ "style", "${__201}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid647", tween: [ "style", "${__201}", "display", 'block', { fromValue: 'none'}], position: 5000, duration: 0 },
                { id: "eid555", tween: [ "style", "${_Text16Copy18}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid693", tween: [ "style", "${_Text16Copy18}", "display", 'block', { fromValue: 'none'}], position: 19500, duration: 0 },
                { id: "eid558", tween: [ "style", "${_Text16Copy15}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid650", tween: [ "style", "${_Text16Copy15}", "display", 'block', { fromValue: 'none'}], position: 6000, duration: 0 },
                { id: "eid569", tween: [ "style", "${__001}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid589", tween: [ "style", "${__001}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0 },
                { id: "eid578", tween: [ "style", "${_j1Copy}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid643", tween: [ "style", "${_j1Copy}", "display", 'block', { fromValue: 'none'}], position: 3500, duration: 0 },
                { id: "eid649", tween: [ "style", "${_j1Copy}", "display", 'none', { fromValue: 'block'}], position: 5000, duration: 0 },
                { id: "eid651", tween: [ "style", "${_j1Copy}", "display", 'block', { fromValue: 'none'}], position: 6000, duration: 0 },
                { id: "eid653", tween: [ "style", "${_j1Copy}", "display", 'none', { fromValue: 'block'}], position: 7000, duration: 0 },
                { id: "eid661", tween: [ "style", "${_j1Copy}", "display", 'block', { fromValue: 'none'}], position: 9500, duration: 0 },
                { id: "eid666", tween: [ "style", "${_j1Copy}", "display", 'none', { fromValue: 'block'}], position: 10500, duration: 0 },
                { id: "eid677", tween: [ "style", "${_j1Copy}", "display", 'block', { fromValue: 'none'}], position: 14000, duration: 0 },
                { id: "eid680", tween: [ "style", "${_j1Copy}", "display", 'none', { fromValue: 'block'}], position: 15000, duration: 0 },
                { id: "eid694", tween: [ "style", "${_j1Copy}", "display", 'block', { fromValue: 'none'}], position: 19500, duration: 0 },
                { id: "eid697", tween: [ "style", "${_j1Copy}", "display", 'none', { fromValue: 'block'}], position: 20500, duration: 0 },
                { id: "eid574", tween: [ "style", "${_j1}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid641", tween: [ "style", "${_j1}", "display", 'block', { fromValue: 'none'}], position: 2500, duration: 0 },
                { id: "eid644", tween: [ "style", "${_j1}", "display", 'none', { fromValue: 'block'}], position: 3500, duration: 0 },
                { id: "eid648", tween: [ "style", "${_j1}", "display", 'block', { fromValue: 'none'}], position: 5000, duration: 0 },
                { id: "eid652", tween: [ "style", "${_j1}", "display", 'none', { fromValue: 'block'}], position: 6000, duration: 0 },
                { id: "eid659", tween: [ "style", "${_j1}", "display", 'block', { fromValue: 'none'}], position: 8500, duration: 0 },
                { id: "eid662", tween: [ "style", "${_j1}", "display", 'none', { fromValue: 'block'}], position: 9500, duration: 0 },
                { id: "eid674", tween: [ "style", "${_j1}", "display", 'block', { fromValue: 'none'}], position: 13000, duration: 0 },
                { id: "eid678", tween: [ "style", "${_j1}", "display", 'none', { fromValue: 'block'}], position: 14000, duration: 0 },
                { id: "eid691", tween: [ "style", "${_j1}", "display", 'block', { fromValue: 'none'}], position: 18500, duration: 0 },
                { id: "eid695", tween: [ "style", "${_j1}", "display", 'none', { fromValue: 'block'}], position: 19500, duration: 0 },
                { id: "eid559", tween: [ "style", "${_Text16Copy10}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid708", tween: [ "style", "${_Text16Copy10}", "display", 'block', { fromValue: 'none'}], position: 23500, duration: 0 },
                { id: "eid579", tween: [ "style", "${_i1Copy4}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid688", tween: [ "style", "${_i1Copy4}", "display", 'block', { fromValue: 'none'}], position: 17500, duration: 0 },
                { id: "eid712", tween: [ "style", "${_i1Copy4}", "display", 'none', { fromValue: 'block'}], position: 24000, duration: 0 },
                { id: "eid554", tween: [ "style", "${_Text16Copy19}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid664", tween: [ "style", "${_Text16Copy19}", "display", 'block', { fromValue: 'none'}], position: 10500, duration: 0 },
                { id: "eid581", tween: [ "style", "${_i1Copy2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid656", tween: [ "style", "${_i1Copy2}", "display", 'block', { fromValue: 'none'}], position: 7500, duration: 0 },
                { id: "eid671", tween: [ "style", "${_i1Copy2}", "display", 'none', { fromValue: 'block'}], position: 12000, duration: 0 }            ]
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
