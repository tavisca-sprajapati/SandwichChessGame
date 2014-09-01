var howIsNext;
var Mypiece="";
var validateMove="m";
var pieceColor="";
var pieceType="";
var arr1=[];
//arr1.push("abc");
var movesStored="";
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

function clearIt()
{
	alert("cl");
	localStorage.removeItem("lastname");
}



function play(obj)
{
	//alert("play");
	setBoardAgain();
	localStorage.setItem("lastname", "Smith");
	//alert(arr1);
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
			alert("Your Opponent's Turn..");
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
		arr1.push(Mypiece+"-"+obj.id);
		if(!IsEmpty(obj.id))
		{
		DashBoard(obj);
		}
		document.getElementById(obj.id).innerHTML=document.getElementById(Mypiece).innerHTML;
		document.getElementById(Mypiece).innerHTML="";
		obj.setAttribute("onclick","play(this)");
		obj.setAttribute("style","cursor:pointer;");
		validateMove=pieceColor;
		

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


function DashBoard(obj)
{
	//alert("hello");
	var strimages=obj.getElementsByTagName("img")[0].getAttribute("src");
	if(strimages.charAt(8)=="K")
		{
			alert("Game Over");
			window.location.reload();
		}
	strimages="<img src='"+strimages+"' width:10px height:10px;>";
			
		if(pieceColor=="b")
		{
			document.getElementById("wArea").innerHTML+=strimages;
		}
		else
			document.getElementById("bArea").innerHTML+=strimages;
	//alert(strimages);
}

function playKnight(obj,pieceColor)
{



    //alert("in night");
	var i=parseInt(obj.id.charAt(0));
	//alert(i);
	var j=parseInt(obj.id.charAt(1));
	var tempID="";
	//alert(j);
	var l=i-2;
	var m=j-1;
	if(l>=0)
		{
		   if(m>=0)
			{
			  tempID=""+l+m;
			  //alert(tempID);
				if(IsEmpty(tempID))
					{
					setHighLight(tempID);	
					}
				else
		          {
					IsFriend(pieceColor,tempID);
			       
		          }

			}
			m=j+1;
			if(m<=7)
			{
			    tempID=""+l+m;
			  //alert(tempID);
				if(IsEmpty(tempID))
					{
					setHighLight(tempID);	
					}
				else
				{
					IsFriend(pieceColor,tempID);
				}
			}
	
		
		}
		l=i+2;
		m=j-1;
		//alert(l)
		if(l<=7)
		{
		   if(m>=0)
			{
			  tempID=""+l+m;
			  //alert(tempID);
				if(IsEmpty(tempID))
					{
					setHighLight(tempID);	
					}
				else
		          {
					IsFriend(pieceColor,tempID);
			       
		          }

			}
			m=j+1;
			if(m<=7)
			{
			    tempID=""+l+m;
			  //alert(tempID);
				if(IsEmpty(tempID))
					{
					setHighLight(tempID);	
					}
				else
				{
					IsFriend(pieceColor,tempID);
				}
			}
	
		
		}
			m=j+2;
			l=i-1;
			if(j<=7)
			{ 
			   if(l>=0)
			   {
					tempID=""+l+m;
					//alert(tempID);
					if(IsEmpty(tempID))
						{
							setHighLight(tempID);	
						}
					else
						{
							IsFriend(pieceColor,tempID);
						}
			   
			   }
			   
			   l=i+1;
			   if(l<=7)
			   {
					tempID=""+l+m;
					//alert(tempID);
					if(IsEmpty(tempID))
						{
							setHighLight(tempID);	
						}
					else
						{
							IsFriend(pieceColor,tempID);
						}
				
			   }
			
			}
			m=j-2;
			l=i-1;
			if(j>=0)
			{
			   if(l>=0)
			   {
					tempID=""+l+m;
					//alert(tempID);
					if(IsEmpty(tempID))
						{
							setHighLight(tempID);	
						}
					else
						{
							IsFriend(pieceColor,tempID);
						}
			   
			   }
			   
			   l=i+1;
			   if(l<=7)
			   {
					tempID=""+l+m;
					//alert(tempID);
					if(IsEmpty(tempID))
						{
							setHighLight(tempID);	
						}
					else
						{
							IsFriend(pieceColor,tempID);
						}
				
			   }
				
			}
			
}



function playKing(divid,pieceColor)
{
	var i=parseInt(divid.id.charAt(0));
	//alert(i);
	var j=parseInt(divid.id.charAt(1));
	//alert(j);
	//var tempID;
	//alert(i+" "+j);
	tempID="";
	var l=0;
	var m=0;
	if(i>0)
	{
		l=i-1;
		m=j;
		tempID=""+l+m;
		//alert(tempID);
		if(IsEmpty(tempID))
		{
			setHighLight(tempID);
		}
		else
		{
			IsFriend(pieceColor,tempID);
		}
	}
	if(i<7)
	{
		l=i+1;
		m=j;
		tempID=""+l+m;
		//alert(tempID);
		if(IsEmpty(tempID))
		{
			setHighLight(tempID);
		}
		else
		{
			IsFriend(pieceColor,tempID);
		}	
	}
	if(j>0)
	{
		l=i;
		m=j-1;
		tempID=""+l+m;
		//alert(tempID);
		if(IsEmpty(tempID))
		{
			setHighLight(tempID);
		}
		else
		{
			IsFriend(pieceColor,tempID);
		}

		if(i<7)
      	{	 	
			l=i+1;
			m=j-1;
			tempID=""+l+m;
			//alert(tempID);
			if(IsEmpty(tempID))
			{
			setHighLight(tempID);
			}
			else
			{
			IsFriend(pieceColor,tempID);
			}
		}
		if(i>0)
		{
			l=i-1;
			m=j-1;
			tempID=""+l+m;
			//alert(tempID);
			if(IsEmpty(tempID))
			{
			setHighLight(tempID);
			}
			else
			{
			IsFriend(pieceColor,tempID);
			}
		}	




	}
	if(j<7)
	{
		l=i;
		m=j+1;
		tempID=""+l+m;
		//alert(tempID);
		if(IsEmpty(tempID))
		{
			setHighLight(tempID);
		}
		else
		{
			IsFriend(pieceColor,tempID);
		}	

      	if(i<7)
      	{	 	
			l=i+1;
			m=j+1;
			tempID=""+l+m;
			//alert(tempID);
			if(IsEmpty(tempID))
			{
			setHighLight(tempID);
			}
			else
			{
			IsFriend(pieceColor,tempID);
			}
		}
		if(i>0)
		{
			l=i-1;
			m=j+1;
			tempID=""+l+m;
			//alert(tempID);
			if(IsEmpty(tempID))
			{
			setHighLight(tempID);
			}
			else
			{
			IsFriend(pieceColor,tempID);
			}
		}	
				
	}
	

}

function playQuen(divid,pieceColor)
{
	//alert("queen");

	//alert(pieceColor);
	var i=parseInt(divid.id.charAt(0));
	//alert(i);
	var j=parseInt(divid.id.charAt(1));
	//alert(j);
	var tempID;

	var m=0;
	var l=0;

	/*code of rook*/

	if(i>0)
	{	m=j;
		for(l=i-1; l>=0 ; l--)
		{
			tempID=""+l+m;
			if(IsEmpty(tempID))
			{
				setHighLight(tempID);
			}
			else
			{
				IsFriend(pieceColor,tempID);
				break;
			}

		}
	}

	if(i<7)
	{
		m=j;
		for(l=i+1; l<=7 ; l++)
		{
			tempID=""+l+m;
			if(IsEmpty(tempID))
			{
				setHighLight(tempID);
			}
			else
			{
				IsFriend(pieceColor,tempID);
				break;
			}

		}
	}
	if(j>0)
	{
		l=i;
		for(m=j-1; m>=0 ; m--)
		{
			tempID=""+l+m;
			if(IsEmpty(tempID))
			{
				setHighLight(tempID);
			}
			else
			{
				IsFriend(pieceColor,tempID);
				break;
			}
		}
	}

	if(j<7)
	{
		l=i;
		for(m=j+1; m<=7; m++)
		{
			tempID=""+l+m;
			if(IsEmpty(tempID))
			{
				setHighLight(tempID);
			}
			else
			{
				IsFriend(pieceColor,tempID);
				break;
			}	
		}
	}

	/*end of rook code*/


	for(l=i-1,m=j+1 ; l>=0 && m<=7 ; l--,m++)
	{
		tempID=""+l+m;
		if(IsEmpty(tempID))
		{
			setHighLight(tempID);	
		}
		else
		{
			IsFriend(pieceColor,tempID);
			break;
		}
	}
	for(l=i-1,m=j-1; l>=0 && m>=0; l--,m--)
	{
		//if(!IsEmpty())
		tempID=""+l+m;
		if(IsEmpty(tempID))
		{
			setHighLight(tempID);	
		}
		else
		{
			IsFriend(pieceColor,tempID);
			break;
		}
		
	}

	for(l=i+1,m=j-1; l<=7 && m>=0; l++,m--)
	{
		tempID=""+l+m;
		if(IsEmpty(tempID))
		{
			setHighLight(tempID);	
		}
		else
		{
			IsFriend(pieceColor,tempID);
			break;
		}
	}

	for(l=i+1,m=j+1; l<=7 && m<=7; l++,m++)
	{
		tempID=""+l+m;
		if(IsEmpty(tempID))
		{
			setHighLight(tempID);	
		}
		else
		{
			IsFriend(pieceColor,tempID);
			break;
		}
	}

}


function playBishop(divid,pieceColor)
{
	//alert(pieceColor);
	var i=parseInt(divid.id.charAt(0));
	//alert(i);
	var j=parseInt(divid.id.charAt(1));
	//alert(j);
	var tempID;
	for(l=i-1,m=j+1 ; l>=0 && m<=7 ; l--,m++)
	{
		tempID=""+l+m;
		if(IsEmpty(tempID))
		{
			setHighLight(tempID);	
		}
		else
		{
			IsFriend(pieceColor,tempID);
			break;
		}
	}
	for(l=i-1,m=j-1; l>=0 && m>=0; l--,m--)
	{
		//if(!IsEmpty())
		tempID=""+l+m;
		if(IsEmpty(tempID))
		{
			setHighLight(tempID);	
		}
		else
		{
			IsFriend(pieceColor,tempID);
			break;
		}
		
	}

	for(l=i+1,m=j-1; l<=7 && m>=0; l++,m--)
	{
		tempID=""+l+m;
		if(IsEmpty(tempID))
		{
			setHighLight(tempID);	
		}
		else
		{
			IsFriend(pieceColor,tempID);
			break;
		}
	}

	for(l=i+1,m=j+1; l<=7 && m<=7; l++,m++)
	{
		tempID=""+l+m;
		if(IsEmpty(tempID))
		{
			setHighLight(tempID);	
		}
		else
		{
			IsFriend(pieceColor,tempID);
			break;
		}
	}
	
}



function playRook(obj,pieceColor)
{
	var i=parseInt(obj.id.charAt(0));
	
	var j=parseInt(obj.id.charAt(1));
	//alert(i+" "+j);
	var l=0;
	var m=0;
	var tempID="";
	if(i>0)
	{	m=j;
		for(l=i-1; l>=0 ; l--)
		{
			tempID=""+l+m;
			if(IsEmpty(tempID))
			{
				setHighLight(tempID);
			}
			else
			{
				IsFriend(pieceColor,tempID);
				break;
			}

		}
	}

	if(i<7)
	{
		m=j;
		for(l=i+1; l<=7 ; l++)
		{
			tempID=""+l+m;
			if(IsEmpty(tempID))
			{
				setHighLight(tempID);
			}
			else
			{
				IsFriend(pieceColor,tempID);
				break;
			}

		}
	}
	if(j>0)
	{
		l=i;
		for(m=j-1; m>=0 ; m--)
		{
			tempID=""+l+m;
			if(IsEmpty(tempID))
			{
				setHighLight(tempID);
			}
			else
			{
				IsFriend(pieceColor,tempID);
				break;
			}
		}
	}

	if(j<7)
	{
		l=i;
		for(m=j+1; m<=7; m++)
		{
			tempID=""+l+m;
			if(IsEmpty(tempID))
			{
				setHighLight(tempID);
			}
			else
			{
				IsFriend(pieceColor,tempID);
				break;
			}	
		}
	}

}



function playPawn(obj,pieceColor)
{
	var i=parseInt(obj.id.charAt(0));
	//alert(i);
	var j=parseInt(obj.id.charAt(1));
	//alert(pieceColor);
	var tempID="";
	if(pieceColor=="b")
	{
		var l=i+1;
		var m=j;
		tempID=""+l+m;
		//alert(l+" "+m);
		if(IsEmpty(tempID))
		{
			//alert("Empty");
			setHighLight(tempID);

			if(i==1)
			{
				l=i+2;
				m=j;
				tempID=""+l+m;
				if(IsEmpty(tempID))
				{
					setHighLight(tempID);
				}
			}

		}
		if(j!==0 && i<7)
		{   
			l=i+1;
			m=j-1;
			tempID=""+l+m;
			if(!IsEmpty(tempID))
			{
				IsFriend(pieceColor,tempID);
			}
		}
		if(j!=7 && i<7)
		{
			l=i+1;
			m=j+1;
			tempID=""+l+m;
			if(!IsEmpty(tempID))
			{
				IsFriend(pieceColor,tempID);
			}
		}

		
	}

	

	if(pieceColor=="w")
	{
		var l=i-1;
		var m=j;
		tempID=""+l+m;
		if(IsEmpty(tempID))
		{
			//alert(tempID);
			setHighLight(tempID);	

			if(i==6)
			{ 
				l=i-2;
				m=j;
				tempID=""+l+m;
				if(IsEmpty(tempID))
				{
					setHighLight(tempID);
				}


			}
		}
	
	if(j!=0 && i>0)
		{   l=i-1;
			m=j-1;
			tempID=""+l+m;
			if(!IsEmpty(tempID))
			{
				IsFriend(pieceColor,tempID);
			}

		}
	if(j!=7 && i>0)
		{    
			l=i-1;
            m=j+1;
			tempID=""+l+m;
			if(!IsEmpty(tempID))
			{
				IsFriend(pieceColor,tempID);
			}
		}

	
		
	}


	
}
