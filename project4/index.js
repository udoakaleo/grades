var engscore = document.getElementById("english").value
	  function getgradeforenglish(){
		  engscore = document.getElementById("english").value 
		  if (engscore < 40){
			  document.getElementById("englishgrade").value="F";}
		else  if (engscore >= 40 && engscore < 45 ){
			   document.getElementById("englishgrade").value="E";} 
			else    if (engscore >= 45 && engscore < 50 ){
			   document.getElementById("englishgrade").value="D";}
	       else  if (engscore >= 50 && engscore < 60 ){
			   document.getElementById("englishgrade").value="C";}
	          else if (engscore >= 60 && engscore <=69 ){
			   document.getElementById("englishgrade").value="B";} 
			  else if (engscore >= 70 ){
			   document.getElementById("englishgrade").value="A";}
	  else {document.getElementById("englishgrade").value="F"}};
	  
	 var mathscore = document.getElementById("math").value
	 function getgradeformath(){
		  mathscore = document.getElementById("math").value 
		  if (mathscore < 40){
			  document.getElementById("mathgrade").value="F";}
		 else if (mathscore >= 40 && mathscore < 45 ){
			   document.getElementById("mathgrade").value="E";} 
			   else if (mathscore >= 45 && mathscore < 50 ){
			   document.getElementById("mathgrade").value="D";}
	         else if (mathscore >= 50 && mathscore < 60 ){
			   document.getElementById("mathgrade").value="C";}
	          else if (mathscore >= 60 && mathscore <=69 ){
			   document.getElementById("mathgrade").value="B";} 
			  else if (mathscore >= 70 ){
			   document.getElementById("mathgrade").value="A";}
	  else {document.getElementById("mathgrade").value="F"}
	 };
	  
	   var chemscore = document.getElementById("chem").value
	 function getgradeforchem(){
		  chemscore = document.getElementById("chem").value 
		  if (chemscore < 40){
			  document.getElementById("chemgrade").value="F";}
		 else if (chemscore >= 40 && chemscore < 45 ){
			   document.getElementById("chemgrade").value="E";} 
			   else if (chemscore >= 45 && chemscore < 50 ){
			   document.getElementById("chemgrade").value="D";}
	          else if (chemscore >= 50 && chemscore < 60 ){
			   document.getElementById("chemgrade").value="C";}
	          else if (chemscore >= 60 && chemscore <=69 ){
			   document.getElementById("chemgrade").value="B";} 
			 else  if (chemscore >= 70 ){
	 document.getElementById("chemgrade").value="A";}
	  else {document.getElementById("chemgrade").value="F"}
	 }
	  
	  
	  var bioscore = document.getElementById("bio").value
	  function getgradeforbio(){
		  bioscore = document.getElementById("bio").value 
		  if (bioscore < 40){
			  document.getElementById("biograde").value="F";}
		 else if (bioscore >= 40 && bioscore < 45 ){
			   document.getElementById("biograde").value="E";} 
			    else if (bioscore >= 45 && bioscore < 50 ){
			   document.getElementById("biograde").value="D";}
	        else  if (bioscore >= 50 && bioscore < 60 ){
			   document.getElementById("biograde").value="C";}
	          else if (bioscore >= 60 && bioscore <=69 ){
			   document.getElementById("biograde").value="B";} 
			   else if (bioscore >= 70 ){
	  document.getElementById("biograde").value="A";}
	   else {document.getElementById("biograde").value="F"}
	  }
			   
			   
			   var frenchscore = document.getElementById("french").value
	  function getgradeforfrench(){
		  frenchscore = document.getElementById("french").value 
		  if (frenchscore < 40){
			  document.getElementById("frenchgrade").value="F";}
		else if (frenchscore >= 40 && frenchscore < 45 ){
			   document.getElementById("frenchgrade").value="E";} 
			  else  if (frenchscore >= 45 && frenchscore < 50 ){
			   document.getElementById("frenchgrade").value="D";}
	       else if (frenchscore >= 50 && frenchscore < 60 ){
			   document.getElementById("frenchgrade").value="C";}
	          else if (frenchscore >= 60 && frenchscore <=69 ){
			   document.getElementById("frenchgrade").value="B";} 
			  else if (frenchscore >= 70 ){
	  document.getElementById("frenchgrade").value="A";}
	   else {document.getElementById("frenchgrade").value="F"}
	  }
	  
	  
	    
		
		function result(){
		
		
		var total= parseInt(engscore) + parseInt(mathscore) + parseInt(chemscore) + parseInt(bioscore) + parseInt(frenchscore); 
		document.getElementById("totalresult").innerHTML = total;
		
		var average = total / 5;
		document.getElementById("average2").innerHTML = average;
		
		if (average < 50){
			
		document.getElementById("remark2").innerHTML = "you have disappointed your father"	
			
		}
		else{document.getElementById("remark2").innerHTML = "you have done well"}
		
		}
	 
	 
	    