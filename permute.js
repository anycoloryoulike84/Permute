 // DECLARE GLOBALLY THAT THERE SHALL BE A GOODE ARRAY.
 allPermutations = [];

 makePermutations = function(input) {
   permute = function(existing, remaining) {
     // HAVE WE ANY ELEMENTS SQUIRE?
     if (remaining.length > 0) {
       for (var k = 0; k < remaining.length; k++) {
         // FORSOOTH, DO NOT USE GLOBAL VARIABLES, THERE IS MUCH HARM THERE
         var localExisting = existing.slice(0);
         var splicedRemaining = remaining.slice(0);
         // KINDLY BESTOW A NOBLE ELEMENT UPON THE ARRAY
         localExisting.push(remaining[k]);
         // VERRILY REMOVE THAT ELEMENT FROM THE REMAINING
         splicedRemaining.splice(k,1);
         // CONTINUE ONWARD TO THE END, AS OUROBOROUS FEASTING UPON HIS TAIL
         permute(localExisting, splicedRemaining);
       }
     }
     else {
       // REJOICE, FOR WE SHALL GLADLY RECORD OUR DISCOVERED PERMUTATION 
       allPermutations.push(existing);
       return;
     }
   }

   // WE BEGIN OUR JOURNEY
   permute([], input);
 }
