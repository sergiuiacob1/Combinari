<?xml version="1.0" encoding="ISO-8859-1"?>

<hotpot-jcloze-file>
<rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:dc="http://purl.org/dc/elements/1.1/">
  <rdf:Description rdf:about="">
    <dc:creator>Concept</dc:creator>
  </rdf:Description>
</rdf:RDF><version>6</version>

<data>
<title></title>

<timer><seconds>60</seconds><include-timer>0</include-timer></timer>

<reading>
<include-reading>0</include-reading>
<reading-title></reading-title>
<reading-text></reading-text>

</reading>

<gap-fill>int TP[DMAX][DMAX],i,j,n,m;
int main() {
cin&amp;#x003E;&amp;#x003E;n&amp;#x003E;&amp;#x003E;m;
TP[0][0]=<question-record><question></question><answer><text>1</text><feedback></feedback><correct>1</correct></answer><clue>Cu c&amp;#x0026;acirct ini&amp;#x0026;#355;ializ&amp;#x0026;#259;m?</clue></question-record>; 
for (i=1;i&amp;#x003C;=n;i++) {
&amp;#x0026;nbsp;&amp;#x0026;nbsp;&amp;#x0026;nbsp;&amp;#x0026;nbsp;&amp;#x0026;nbsp;<question-record><question></question><answer><text>TP[i][0]</text><feedback></feedback><correct>1</correct></answer><clue>Ce element trebuie ini&amp;#x0026;#355;ializat separat?</clue></question-record>=1;
&amp;#x0026;nbsp;&amp;#x0026;nbsp;&amp;#x0026;nbsp;&amp;#x0026;nbsp;&amp;#x0026;nbsp;for (j=1;j&amp;#x003C;=<question-record><question></question><answer><text>i</text><feedback></feedback><correct>1</correct></answer><clue>C&amp;#x0026;acirc;t de mult mergem pentru ca generarea s&amp;#x0026;#259; fie eficient&amp;#x0026;#259;?</clue></question-record>;j++) TP[i][j]=TP[<question-record><question></question><answer><text>i-1</text><feedback></feedback><correct>1</correct></answer><clue>Formula de recuren&amp;#x0026;#355;&amp;#x0026;#259;.</clue></question-record>][j-1]+TP[i-1][<question-record><question></question><answer><text>j</text><feedback></feedback><correct>1</correct></answer><clue>Formula de recuren&amp;#x0026;#355;&amp;#x0026;#259;.</clue></question-record>];
&amp;#x0026;nbsp;&amp;#x0026;nbsp;&amp;#x0026;nbsp;&amp;#x0026;nbsp;&amp;#x0026;nbsp;}
cout&amp;#x003C;&amp;#x003C;<question-record><question></question><answer><text>TP[n][m]</text><feedback></feedback><correct>1</correct></answer><clue>Unde se va afla solu&amp;#x0026;#355;ia?</clue></question-record>&amp;#x003C;&amp;#x003C;&apos;\n&apos;; 
&amp;#x0026;nbsp;&amp;#x0026;nbsp;&amp;#x0026;nbsp;&amp;#x0026;nbsp;&amp;#x0026;nbsp;return 0; }
</gap-fill>
</data>

<hotpot-config-file>
<jcloze>
<exercise-subtitle></exercise-subtitle>
<instructions>Completa&amp;#x0026;#355;i codul de mai jos pentru ca acesta s&amp;#x0026;#259; construiasc&amp;#x0026;#259; &amp;#x0026;icirc;n mod corect Triunghiul lui Pascal.
La final ap&amp;#x0026;#259;sa&amp;#x0163;i butonul &amp;#x201E;Verific&amp;#x0026;#259;&amp;#x201D; pentru a afla rezultatul. &amp;#x00CE;n urma ap&amp;#x0026;#259;s&amp;#x0026;#259;rii butonului &amp;#x201E;Verific&amp;#x0026;#259;&amp;#x201D;, orice r&amp;#x0026;#259;spuns gre&amp;#x0026;#351it va r&amp;#x0026;#259;m&amp;#x00E2;ne a&amp;#x0026;#351a cum este pentru a v&amp;#x0026;#259; da posibilitatea s&amp;#x0026;#259;-l corecta&amp;#x0163;i, iar toate r&amp;#x0026;#259;spunsurile corecte vor deveni nemodificabile. Dac&amp;#x0026;#259; nu &amp;#x0026;#351ti&amp;#x0163;i s&amp;#x0026;#259; rezolva&amp;#x0163;i un spa&amp;#x0163;iu ap&amp;#x0026;#259;sa&amp;#x0163;i butonul &amp;#x201E;[?]&amp;#x201D; pentru a primi indica&amp;#x0163;ii de rezolvare. De asemenea, dac&amp;#x0026;#259; ap&amp;#x0026;#259;sa&amp;#x0163;i butonul &amp;#x201E;Indiciu&amp;#x201D; se va ad&amp;#x0026;#259;uga r&amp;#x0026;#259;spunsului dumneavoastr&amp;#x0026;#259; urm&amp;#x0026;#259;toarea liter&amp;#x0026;#259; corect&amp;#x0026;#259;. Re&amp;#x0163;ine&amp;#x0163;i c&amp;#x0026;#259; ve&amp;#x0163;i pierde puncte dac&amp;#x0026;#259; folosi&amp;#x0163;i indica&amp;#x0163;ii sau indicii!</instructions>
<guesses-correct>Corect. Bravo!</guesses-correct>
<guesses-incorrect>O parte din r&amp;#x0026;#259;spunsurile tale sunt incorecte. Acestea au r&amp;#x0026;#259;mas nemodificate pentru a le corecta.</guesses-incorrect>
<next-correct-letter>Urm&amp;#x0026;#259;toarea liter&amp;#x0026;#259; corect&amp;#x0026;#259; a fost ad&amp;#x0026;#259;ugat&amp;#x0026;#259; r&amp;#x0026;#259;spunsului.</next-correct-letter>
<include-hint>1</include-hint>
<case-sensitive>0</case-sensitive>
<include-word-list>0</include-word-list>
<use-drop-down-list>0</use-drop-down-list>
<minimum-gap-size>6</minimum-gap-size>
<next-ex-url>nextpage.htm</next-ex-url>
<send-email>0</send-email>
<include-clues>1</include-clues>
<include-keypad>0</include-keypad>
<separate-javascript-file>1</separate-javascript-file>
</jcloze>

<global>

<times-up>Your time is over!</times-up>
<check-caption>Verific&amp;#x0026;#259;</check-caption>
<ok-caption>OK</ok-caption>
<hint-caption>Indiciu</hint-caption>
<clue-caption>[?]</clue-caption>
<process-for-rtl>0</process-for-rtl>
<include-scorm-12>0</include-scorm-12>
<your-score-is>Scorul t&amp;#x0026;#259;u este:</your-score-is>
<keypad-characters></keypad-characters>
<next-ex-caption>=&amp;#x003E;</next-ex-caption>
<back-caption>&amp;#x003C;=</back-caption>
<contents-caption>Index</contents-caption>
<include-next-ex>0</include-next-ex>
<include-contents>0</include-contents>
<include-back>0</include-back>
<contents-url>contents.htm</contents-url>
<contents-url>contents.htm</contents-url>
<graphic-url></graphic-url>
<font-face>Geneva,Arial,sans-serif</font-face>
<font-size>small</font-size>
<page-bg-color>#C0C0C0</page-bg-color>
<title-color>#000000</title-color>
<ex-bg-color>#FFFFFF</ex-bg-color>
<text-color>#000000</text-color>
<link-color>#0000FF</link-color>
<vlink-color>#0000CC</vlink-color>
<nav-bar-color>#000000</nav-bar-color>
<formmail-url>http://yourserver.com/cgi-bin/FormMail.pl</formmail-url>
<email>you@yourserver.com</email>
<name-please>Please enter your name:</name-please>
<user-string-1>one</user-string-1>
<user-string-2>two</user-string-2>
<user-string-3>three</user-string-3>
<header-code></header-code>
</global>
</hotpot-config-file>
</hotpot-jcloze-file>
