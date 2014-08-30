
var arr = ["10","30","11","31","12","32","60","40","61","41","62","42"];
	



var myVar=setInterval(function () {replay()}, 1000);

function replay(){
	
		for( i=0; i<arr.length; i+2)
		{
		
			var abc=document.getElementById(arr[i]).innerHTML;
			
	
			//document.getElementById(arr[i+1]).innerHTML="";

			document.getElementById(arr[i+1]).innerHTML=abc;	
			document.getElementById(arr[i]).innerHTML="";	
		
		
		}
	}


