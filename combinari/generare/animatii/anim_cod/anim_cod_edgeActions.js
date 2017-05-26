/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_play2}", "click", function(sym, e) {
         var pos = sym.getPosition()
         sym.play();
         sym.stop(pos+500);
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_back2}", "click", function(sym, e) {
         var pos = sym.getPosition()
         sym.playReverse();
         sym.stop(pos-499);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_pause2}", "click", function(sym, e) {
         sym.stop();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_forward2}", "click", function(sym, e) {
         sym.play();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_backward2}", "click", function(sym, e) {
         sym.playReverse();
         sym.stop (-1);
         sym.play();
         sym.stop(0);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         // Hide an Element.
         sym.$("com1").hide();
         sym.$("com2").hide();
         sym.$("com3").hide();
         sym.$("com4").hide();
         sym.$("com5").hide();
         sym.$("com6").hide();
         sym.$("com7").hide();
         sym.$("com8").hide();
         sym.$("com9").hide();
         sym.$("com10").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Text}", "mouseleave", function(sym, e) {
         // Hide an Element.
         sym.$("com1").hide();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Text}", "mouseenter", function(sym, e) {
         // insert code to be run when the mouse enters an element
         // Show an Element.
         sym.$("com1").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Text2}", "mouseenter", function(sym, e) {
         // Show an Element.
         sym.$("com2").show();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Text2}", "mouseleave", function(sym, e) {
         // Hide an Element.
         sym.$("com2").hide();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Text5}", "mouseenter", function(sym, e) {
         // Show an Element.
         sym.$("com3").show();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Text5}", "mouseleave", function(sym, e) {
         // Hide an Element.
         sym.$("com3").hide();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Text6}", "mouseenter", function(sym, e) {
         // Show an Element.
         sym.$("com4").show();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Text6}", "mouseleave", function(sym, e) {
         // Hide an Element.
         sym.$("com4").hide();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Text8}", "mouseenter", function(sym, e) {
         // Show an Element.
         sym.$("com5").show();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Text8}", "mouseleave", function(sym, e) {
         // Hide an Element.
         sym.$("com5").hide();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Text9}", "mouseenter", function(sym, e) {
         // Show an Element.
         sym.$("com6").show();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Text9}", "mouseleave", function(sym, e) {
         // Hide an Element.
         sym.$("com6").hide();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Text10}", "mouseenter", function(sym, e) {
         // Show an Element.
         sym.$("com7").show();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Text10}", "mouseleave", function(sym, e) {
         // Hide an Element.
         sym.$("com7").hide();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Text11}", "mouseenter", function(sym, e) {
         // Show an Element.
         sym.$("com8").show();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Text11}", "mouseleave", function(sym, e) {
         // Hide an Element.
         sym.$("com8").hide();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Text12}", "mouseenter", function(sym, e) {
         // Show an Element.
         sym.$("com9").show();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Text12}", "mouseleave", function(sym, e) {
         // Hide an Element.
         sym.$("com9").hide();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Text13}", "mouseenter", function(sym, e) {
         // Show an Element.
         sym.$("com10").show();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Text13}", "mouseleave", function(sym, e) {
         // Hide an Element.
         sym.$("com10").hide();
         

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

})(jQuery, AdobeEdge, "EDGE-86966772");