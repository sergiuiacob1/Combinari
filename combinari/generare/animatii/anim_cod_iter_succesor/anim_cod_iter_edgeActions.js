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
         
         
         // Hide an element 
         sym.$("n_si_m").hide();
         sym.$("variabile").hide();
         sym.$("val_variabile").hide();
         // Hide an element 
         sym.$("poz_sol").hide();
         
         // Hide an element 
         sym.$("sol").hide();
         
         // Hide an element 
         sym.$("val_sol").hide();
         sym.$("vect_sol2").hide();
         sym.$("com12").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_play2}", "click", function(sym, e) {
         var pos = sym.getPosition()
         while (pos%500)
         	--pos;
         sym.play();
         sym.stop(pos+500);
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_back2}", "click", function(sym, e) {
         var pos = sym.getPosition();
         while (pos%500)
         	++pos;
         sym.playReverse();
         if (pos>500)
         {
         	sym.stop (pos-501);
         	sym.play ();
         	sym.stop (pos-500);
         	}
         	else
         	{
         	sym.stop (-1);
         	sym.play ();
         	sym.stop (0);
         	}

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_pause2}", "click", function(sym, e) {
         var pos=sym.getPosition();
         sym.stop;
         if (sym.isPlaying())
         {
         	if (sym.isPlayDirectionReverse())
         	{
         		while (pos%500)
         			++pos;
         		sym.playReverse();
         		sym.stop (pos-501);
         		sym.play();
         		sym.stop (pos-500);
         	}
         		else
         		{
         		while (pos%500)
         			--pos;
         		sym.playReverse();
         		sym.stop(pos-1);
         		sym.play();
         		sym.stop (pos);
         		}
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_forward2}", "click", function(sym, e) {
         sym.play();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_backward2}", "click", function(sym, e) {
         sym.play(-1);
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
         sym.$("com11").hide();

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
         sym.$("com8").show();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Text8}", "mouseleave", function(sym, e) {
         // Hide an Element.
         sym.$("com8").hide();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Text9}", "mouseenter", function(sym, e) {
         // Show an Element.
         sym.$("com9").show();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Text9}", "mouseleave", function(sym, e) {
         // Hide an Element.
         sym.$("com9").hide();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Text10}", "mouseenter", function(sym, e) {
         // Show an Element.
         sym.$("com10").show();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Text10}", "mouseleave", function(sym, e) {
         // Hide an Element.
         sym.$("com10").hide();
         

      });
      //Edge binding end

      

      

      

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${_Text7}", "mouseenter", function(sym, e) {
         // Show an Element.
         sym.$("com5").show();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Text7}", "mouseleave", function(sym, e) {
         // Hide an Element.
         sym.$("com5").hide();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Text4}", "mouseenter", function(sym, e) {
         // Show an Element.
         sym.$("com7").show();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Text4}", "mouseleave", function(sym, e) {
         // Hide an Element.
         sym.$("com7").hide();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Text43}", "mouseenter", function(sym, e) {
         // Show an Element.
         sym.$("com6").show();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Text43}", "mouseleave", function(sym, e) {
         // Hide an Element.
         sym.$("com6").hide();
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         // insert code here
         
         // Show an element 
         sym.$("n_si_m").show();
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         // insert code here
         // Change the text in an element
         sym.$("poz1").html("1");
         sym.$("poz2").html("2");
         sym.$("poz3").html("3");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         // insert code here
         sym.$("poz_sol").show();
         sym.$("sol").show(); 
         sym.$("val_sol").show();
         sym.$("vect_sol2").show();
         
         sym.$("poz1").html("0");
         sym.$("poz2").html("0");
         sym.$("poz3").html("0");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         // insert code here
         // Show an element 
         sym.$("variabile").show();
         sym.$("val_variabile").show();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3500, function(sym, e) {
         // insert code here
         // Change the text in an element
         sym.$("val_succesor").html("false");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4000, function(sym, e) {
         // insert code here
         // Change the text in an element
         sym.$("val_i").html("3");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4500, function(sym, e) {
         // insert code here
      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5000, function(sym, e) {
         // insert code here
         // Change the text in an element
         sym.$("poz3").html("4");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5500, function(sym, e) {
         // insert code here
         // Change the text in an element
         sym.$("val_j").html("4");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6000, function(sym, e) {
         // insert code here
         // Change the text in an element
         sym.$("val_succesor").html("true");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7500, function(sym, e) {
         // insert code here
         sym.$("val_succesor").html("false");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 9000, function(sym, e) {
         // insert code here
         sym.$("poz3").html("5");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 10000, function(sym, e) {
         // insert code here
         sym.$("val_succesor").html("true");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 11000, function(sym, e) {
         // insert code here
      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 11500, function(sym, e) {
         // insert code here
         sym.$("val_succesor").html("false");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 13000, function(sym, e) {
         // insert code here
         sym.$("val_i").html("2");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 14000, function(sym, e) {
         // insert code here
         sym.$("poz2").html("3");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 14500, function(sym, e) {
         // insert code here
         sym.$("val_j").html("3");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 15500, function(sym, e) {
         // insert code here
         sym.$("val_j").html("4");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 15000, function(sym, e) {
         // insert code here
         sym.$("poz3").html("4");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 16000, function(sym, e) {
         // insert code here
         sym.$("val_succesor").html("true");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 17000, function(sym, e) {
         // insert code here
      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 17500, function(sym, e) {
         // insert code here
         sym.$("val_succesor").html("false");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 18000, function(sym, e) {
         // insert code here
         sym.$("val_i").html("3");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 19000, function(sym, e) {
         // insert code here
         sym.$("poz3").html("5");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 20000, function(sym, e) {
         // insert code here
         sym.$("val_succesor").html("true");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 21500, function(sym, e) {
         // insert code here
         sym.$("val_succesor").html("false");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 23000, function(sym, e) {
         // insert code here
         sym.$("val_i").html("2");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 24000, function(sym, e) {
         // insert code here
         sym.$("poz2").html("4");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 24500, function(sym, e) {
         // insert code here
         sym.$("val_j").html("3");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 25000, function(sym, e) {
         // insert code here
         sym.$("poz3").html("5");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 25500, function(sym, e) {
         // insert code here
         sym.$("val_j").html("4");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 26000, function(sym, e) {
         // insert code here
         sym.$("val_succesor").html("true");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 27500, function(sym, e) {
         // insert code here
         sym.$("val_succesor").html("false");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 28000, function(sym, e) {
         sym.$("val_i").html("3");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 29000, function(sym, e) {
         sym.$("val_i").html("2");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 30000, function(sym, e) {
         sym.$("val_i").html("1");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 31000, function(sym, e) {
         sym.$("poz1").html("2");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 31500, function(sym, e) {
         sym.$("val_j").html("2");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 32000, function(sym, e) {
         sym.$("poz2").html("3");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 32500, function(sym, e) {
         sym.$("val_j").html("3");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 33000, function(sym, e) {
         sym.$("poz3").html("4");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 33500, function(sym, e) {
         sym.$("val_j").html("4");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 34000, function(sym, e) {
         sym.$("val_succesor").html("true");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 35500, function(sym, e) {
         sym.$("val_succesor").html("false");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 36000, function(sym, e) {
         sym.$("val_i").html("3");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 37000, function(sym, e) {
         sym.$("poz3").html("5");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 38000, function(sym, e) {
         sym.$("val_succesor").html("true");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 39500, function(sym, e) {
         sym.$("val_succesor").html("false");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 40000, function(sym, e) {
         sym.$("val_i").html("3");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 41000, function(sym, e) {
         sym.$("val_i").html("2");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 42000, function(sym, e) {
         sym.$("poz2").html("4");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 42500, function(sym, e) {
         sym.$("val_j").html("3");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 43000, function(sym, e) {
         sym.$("poz3").html("5");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 43500, function(sym, e) {
         sym.$("val_j").html("4");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 44000, function(sym, e) {
         sym.$("val_succesor").html("true");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 45500, function(sym, e) {
         sym.$("val_succesor").html("false");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 46000, function(sym, e) {
         sym.$("val_i").html("3");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 47000, function(sym, e) {
         sym.$("val_i").html("2");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 48000, function(sym, e) {
         sym.$("val_i").html("1");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 49000, function(sym, e) {
         sym.$("poz1").html("3");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 49500, function(sym, e) {
         sym.$("val_j").html("2");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 50000, function(sym, e) {
         sym.$("poz2").html("4");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 50500, function(sym, e) {
         sym.$("val_j").html("3");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 51000, function(sym, e) {
         sym.$("poz3").html("5");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 51500, function(sym, e) {
         sym.$("val_j").html("4");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 52000, function(sym, e) {
         sym.$("val_succesor").html("true");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 53500, function(sym, e) {
         sym.$("val_succesor").html("false");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 54000, function(sym, e) {
         sym.$("val_i").html("3");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 55000, function(sym, e) {
         sym.$("val_i").html("2");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 56000, function(sym, e) {
         sym.$("val_i").html("1");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 57000, function(sym, e) {
         
         // Change the text in an element
         sym.$("val_i").html("0");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Text14}", "mouseover", function(sym, e) {
         sym.$("com12").show();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Text14}", "mouseleave", function(sym, e) {
         sym.$("com12").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Text12}", "mouseover", function(sym, e) {
         sym.$("com11").show();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Text12}", "mouseleave", function(sym, e) {
         sym.$("com11").hide();
         

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

})(jQuery, AdobeEdge, "EDGE-86966772");