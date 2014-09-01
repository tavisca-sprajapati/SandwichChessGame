var howIsNext;
var Mypiece="";
var validateMove="m";
var pieceColor="";
var pieceType="";
function IsEmpty(divid)
{
	//alert("true");
	var ids=document.getElementById(divid);
			var childImage=ids.getElementsByTagName("img")[0];
			if(!childImage)
			{
				//alert("in");
				return true;
			}
			else
			return false;
}

function setBoardAgain()
{
	//alert("m first");

	for(i=0;i<8;i++)
	{
		for(j=0;j<8;j++)
		{
			var str=""+i+j;
			//alert("akjf");
			var ids=document.getElementById(str);
					//ids.setAttribute("style","cursor:pointer;");
					//ids.setAttribute("onclick","play(this)");
			if(IsEmpty(str))
			{
					ids.removeAttribute("style","cursor:pointer;");
					ids.removeAttribute("onclick");
			}
			else
			{
				ids.setAttribute("onclick","play(this)");
				ids.setAttribute("style","cursor:pointer;")
			}
		}
	}
}





function play(obj)
{
	//alert("play");
	setBoardAgain();


	//testing2();

	var childImage=obj.getElementsByTagName("img")[0];
	if(childImage)
	{
		Mypiece=obj.id;
		
		
		if (childImage.src.match("b"))
		{
			pieceColor="b";

    	} 
    	else 
    	{
        	pieceColor="w";
    	}
    	if(pieceColor=="m")
    		validateMove=pieceColor;

    	if(pieceColor!=validateMove || validateMove=="m")
    	{
		pieceType=childImage.getAttribute("src");
        	var pieceType=pieceType.charAt(8);
        	if(pieceType=="B")
        	{
        		playBishop(obj,pieceColor);
        		
        	}
        	if(pieceType=="P")
        	{
        		playPawn(obj,pieceColor);
        	}
        	if(pieceType=="R")
        	{
        		playRook(obj,pieceColor);
        	}
			if(pieceType=="Q")
			{
				playQuen(obj,pieceColor);
			}
			if(pieceType=="K")
			{
				playKing(obj,pieceColor);
			}
			if(pieceType=="N")
			{
				playKnight(obj,pieceColor);
				
			}
		//this.setAttribute("style","cursor:pointer;");
		obj.style.backgroundColor = "green";
		}
		else 
		{
			alert("not yr move");
		}
        
    }
    else {
        obj.setAttribute("Style", "none;");
    }

}



function movePiece(obj)
{
	//alert(Mypiece+" "+obj.id);
	//var myContent=

	setBoardAgain();
	
		document.getElementById(obj.id).innerHTML=document.getElementById(Mypiece).innerHTML;
		document.getElementById(Mypiece).innerHTML="";
		obj.setAttribute("onclick","play(this)");
		obj.setAttribute("style","cursor:pointer;");
		validateMove=pieceColor;
		isCheckMate();
}

function setHighLight(divid)
{
	var temp=document.getElementById(divid);
	//temp.setAttribute("class","border:green;");
	temp.setAttribute("style","cursor:pointer;border:3px solid red;");
	temp.setAttribute("onclick","movePiece(this)");
}

function IsFriend(pieceColor,divid)
{
	//alert(pieceColor+" "+divid);
	var frendCheck=document.getElementById(divid).getElementsByTagName("img")[0];
	if(!frendCheck.src.match(pieceColor))
	{
		setHighLight(divid);
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
