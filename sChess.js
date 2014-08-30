var howIsNext;

function setBoard()
{
	
}




function play(obj)
{
	//alert("play");
	var childImage=obj.getElementsByTagName("img")[0];
	if(childImage)
	{
		if (childImage.src.match("b")) 
		{
        	alert("this is black");
    	} 
    	else 
    	{
        	alert("this is white");
    	}
		//this.setAttribute("style","cursor:pointer;");
		obj.style.backgroundColor = "green";
        
    }
    else {
        obj.setAttribute("Style", "none;");
    }

}

function white()
{
	var getit=document.getElementById("00");
	getit.style.backgroundColor = "red";
}

function black()
{
	var getit=document.getElementById("00");
	getit.style.backgroundColor = "red";
}
