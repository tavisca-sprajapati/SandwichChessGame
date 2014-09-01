function save1()
{
	alert('hi');
	//var list =[];
	var playerName=prompt("Enter the name of the player:", "Parul Gupta");
	if(playerName!=null)
	{ 
	var playerName=[];
	//document.getElementById("savebtn");
	//document.write("Hello");
		innerHTML="Your game" + playerName + ", is saved";
		for(var i=0; i<8;i++)
		{
			for(var j=0;j<8;j++)
			{
				var ids=""+i+j;
				alert(ids);
				var str=" "+document.getElementById(ids).innerHTML;
				alert(str);
				
				obj=document.getElementById(ids);
				var childImage=obj.getElementsByTagName("img")[0];
				
				if(childImage)
				{
				playerName.push({id: ids , image: str});
				alert(playerName);
				}
			}
		}
	}
}
