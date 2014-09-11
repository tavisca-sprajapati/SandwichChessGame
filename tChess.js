
var replay = function(i) {
     i = i || 0;
   if(i < arr1.length) {
      Step=""+arr1[i];

		var res1 = Step.substring(0,2);
		var res2 = Step.substring(3,5);

			var FromPosition=document.getElementById(res1);
			document.getElementById(res2).innerHTML=FromPosition.innerHTML;
			FromPosition.innerHTML="";

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

function resetme()
{
   
   window.location.reload();
}