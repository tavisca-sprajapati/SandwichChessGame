
var arr = ["10-30","11-31","12-32","60-40","61-41","62-42"];

var replay = function(i) {
  // var s = document.getElementById("div1"); //you could pass this element as a parameter as well
   i = i || 0;
   if(i < arr1.length) {
      str2=""+arr1[i];

		var res1 = str2.substring(0,2);
		var res2 = str2.substring(3,5);

			var xyx=document.getElementById(res1).innerHTML;
			document.getElementById(res2).innerHTML=xyx;
			document.getElementById(res1).innerHTML="";

      i++;
      if(i==arr1.length)
         alert("over");
      //create a pause of 2 seconds.
      setTimeout(function() { replay(i) }, 2000);          
   }
}



function replay1()
{
   //window.location.reload();
   var str="";
   for(i=2;i<6;i++)
   {
      for(j=0;j<8;j++)
      {
         str=""+i+j;
         document.getElementById(str).innerHTML="";
      }
   }
   makeBoard();
   replay();
}

