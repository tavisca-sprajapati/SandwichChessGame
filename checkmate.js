function isCheckMate()
{

	//alert("hi");
	this.bcheck=false;
	this.wcheck=false;
	var bpos="";
	var wpos="";
	var piece="";

	for(i=0;i<=7;i++)
	{
		for(j=0;j<=7;j++)
		{
			tempID=""+i+j;
			
			var obj=document.getElementById(tempID);
			var x=obj.getElementsByTagName("img")[0];
			
			
			if(x)
			{
			    piece=x.getAttribute("src");
			    piece=piece.charAt(8);
				
				if(x.src.match("b")&& piece=="K")
				{
				  
				  if(cbc(tempID,"b"))
				  {
				   bcheck=true;
				   alert(bcheck);
				  }
				  //bpos=tempID;
				 //alert(bpos);
				
				 
				}
				
				
				if(x.src.match("w") && piece=="K")
				{
				  if(cbc(tempID,"w"))
				  {
				    wcheck=true;
					alert(wcheck);
				  }
				  //wpos=tempID;
				  //alert(wpos);
				}
				
				
			}
		
	
		}	
    }	
	
	
}
function cbc(kpos,kcolor)
{
  
	
	var i=parseInt(kpos.charAt(0));
	//alert(i);
	var j=parseInt(kpos.charAt(1));
	//alert(j);

	var tempID;

	
	var l=0;
	
	
	
	
	
	//code for knight
	var l=i-2;
	var m=j-1;
	if(l>=0)
		{
		   if(m>=0)
			{
			  tempID=""+l+m;
			  //alert(tempID);
							if(!IsEmpty(tempID))
			{
			       var frendCheck=document.getElementById(tempID).getElementsByTagName("img")[0];
				  
				   //alert(frendCheck);
				   if(frendCheck.src.match(kcolor))
				   {
				         
						 
				   }
				   else
				   {
				        var obj=document.getElementById(tempID);
			            var x=obj.getElementsByTagName("img")[0];
						if(x)
						{
							piece=x.getAttribute("src");
							piece=piece.charAt(8);
							if(piece=="N")
							{
							  alert("Check !!!take care of your KING."); return true;
							  return true;
							  
							}
						}	

					}	

			    }

			}
			m=j+1;
			if(m<=7)
			{
			    tempID=""+l+m;
			  //alert(tempID);
			  
			  
			  
			  
			  
			 if(!IsEmpty(tempID))
			{
			       var frendCheck=document.getElementById(tempID).getElementsByTagName("img")[0];
				  
				   //alert(frendCheck);
				   if(frendCheck.src.match(kcolor))
				   {
				        
						// break;
				   }
				   else
				   {
				        var obj=document.getElementById(tempID);
			            var x=obj.getElementsByTagName("img")[0];
						if(x)
						{
							piece=x.getAttribute("src");
							piece=piece.charAt(8);
							if(piece=="N")
							{
							  alert("Check !!!take care of your KING.");
							  return true;
							  
							}
						}	

					}	

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
			  
			  
			  
			  
			  
			 if(!IsEmpty(tempID))
			{
			       var frendCheck=document.getElementById(tempID).getElementsByTagName("img")[0];
				  
				   //alert(frendCheck);
				   if(frendCheck.src.match(kcolor))
				   {
				        
						// break;
				   }
				   else
				   {
				        var obj=document.getElementById(tempID);
			            var x=obj.getElementsByTagName("img")[0];
						if(x)
						{
							piece=x.getAttribute("src");
							piece=piece.charAt(8);
							if(piece=="N")
							{
							  alert("Check !!!take care of your KING."); return true;
							  
							}
						}	

					}	

			}
			    			  
			  

			}
			m=j+1;
			if(m<=7)
			{
			   tempID=""+l+m;
			  //alert(tempID);
			  
			  
			  
			  
			  
			 if(!IsEmpty(tempID))
			{
			       var frendCheck=document.getElementById(tempID).getElementsByTagName("img")[0];
				  
				   //alert(frendCheck);
				   if(frendCheck.src.match(kcolor))
				   {
				        
						// break;
				   }
				   else
				   {
				        var obj=document.getElementById(tempID);
			            var x=obj.getElementsByTagName("img")[0];
						if(x)
						{
							piece=x.getAttribute("src");
							piece=piece.charAt(8);
							if(piece=="N")
							{
							  alert("Check !!!take care of your KING."); return true;
							  
							}
						}	

					}	

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
			  
			  
			  
			  
			  
			 if(!IsEmpty(tempID))
			{
			       var frendCheck=document.getElementById(tempID).getElementsByTagName("img")[0];
				  
				   //alert(frendCheck);
				   if(frendCheck.src.match(kcolor))
				   {
				        
						// break;
				   }
				   else
				   {
				        var obj=document.getElementById(tempID);
			            var x=obj.getElementsByTagName("img")[0];
						if(x)
						{
							piece=x.getAttribute("src");
							piece=piece.charAt(8);
							if(piece=="N")
							{
							  alert("Check !!!take care of your KING."); return true;
							  
							}
						}	

					}	

			}
			}
			m=j+1;
			if(m<=7)
			{
					tempID=""+l+m;
			  //alert(tempID);
			  
			  
			  
			  
			  
			 if(!IsEmpty(tempID))
			{
			       var frendCheck=document.getElementById(tempID).getElementsByTagName("img")[0];
				  
				   //alert(frendCheck);
				   if(frendCheck.src.match(kcolor))
				   {
				        
						// break;
				   }
				   else
				   {
				        var obj=document.getElementById(tempID);
			            var x=obj.getElementsByTagName("img")[0];
						if(x)
						{
							piece=x.getAttribute("src");
							piece=piece.charAt(8);
							if(piece=="N")
							{
							  alert("Check !!!take care of your KING."); return true;
							  
							}
						}	

					}	

			}
			}
	
		
		} 
	
	

	if(i>0)
	{	m=j;
		for(l=i-1; l>=0 ; l--)
		{
			tempID=""+l+m;
			//alert(tempID);
			
			if(!IsEmpty(tempID))
			{
			       var frendCheck=document.getElementById(tempID).getElementsByTagName("img")[0];
				  
				   //alert(frendCheck);
				   if(frendCheck.src.match(kcolor))
				   {
				        // 
						 break;
				   }
				   else
				   {
				        var obj=document.getElementById(tempID);
			            var x=obj.getElementsByTagName("img")[0];
						if(x)
						{
							piece=x.getAttribute("src");
							piece=piece.charAt(8);
							if(piece=="R"||	piece=="Q")
							{
							  alert("Check !!!take care of your KING."); return true;
							  
							}
						}	

					}	

			}
			
		}
	}
	
	if(i<7)
	{
	  
		m=j;
		for(l=i+1; l<=7 ; l++)
		{
          tempID=""+l+m;
			//alert(tempID);
			
			if(!IsEmpty(tempID))
			{
			       var frendCheck=document.getElementById(tempID).getElementsByTagName("img")[0];
				  
				   //alert(frendCheck);
				   if(frendCheck.src.match(kcolor))
				   {
				        // 
						 break;
				   }
				   else
				   {
				        var obj=document.getElementById(tempID);
			            var x=obj.getElementsByTagName("img")[0];
						if(x)
						{
							piece=x.getAttribute("src");
							piece=piece.charAt(8);
							if(piece=="R"||	piece=="Q")
							{
							  alert("Check !!!take care of your KING."); return true;
							  
							}
						}	

					}	

			}
			
		
			

		}
	}
	
	
			m=j+2;
			l=i-1;
			if(m<=7)
			{ 
			   if(l>=0)
			   {

					tempID=""+l+m;
			//alert(tempID);
			
			if(!IsEmpty(tempID))
			{
			       var frendCheck=document.getElementById(tempID).getElementsByTagName("img")[0];
				  
				   //alert(frendCheck);
				   if(frendCheck.src.match(kcolor))
				   {
				        
						 //break;
				   }
				   else
				   {
				        var obj=document.getElementById(tempID);
			            var x=obj.getElementsByTagName("img")[0];
						if(x)
						{
							piece=x.getAttribute("src");
							piece=piece.charAt(8);
							if(piece=="N")
							{
							  alert("Check !!!take care of your KING."); return true;
							  
							}
						}	

					}	

			}

			   
			   }
			   
			   l=i+1;
			   if(l<=7)
			   {
			   tempID=""+l+m;
			//alert(tempID);
			
			if(!IsEmpty(tempID))
			{
			       var frendCheck=document.getElementById(tempID).getElementsByTagName("img")[0];
				  
				   //alert(frendCheck);
				   if(frendCheck.src.match(kcolor))
				   {
				         
						 //break;
				   }
				   else
				   {
				        var obj=document.getElementById(tempID);
			            var x=obj.getElementsByTagName("img")[0];
						if(x)
						{
							piece=x.getAttribute("src");
							piece=piece.charAt(8);
							if(piece=="N")
							{
							  alert("Check !!!take care of your KING."); return true;
							  
							}
						}	

					}	

			}

				
			   }
			
			}
	
	
	for(l=i-1,m=j+1 ; l>=0 && m<=7 ; l--,m++)
	{   
			tempID=""+l+m;
			if(!IsEmpty(tempID))
			{
			       var frendCheck=document.getElementById(tempID).getElementsByTagName("img")[0];
				  
				   //alert(frendCheck);
				   if(frendCheck.src.match(kcolor))
				   {
				        // 
						 break;
				   }
				   else
				   {
				        var obj=document.getElementById(tempID);
			            var x=obj.getElementsByTagName("img")[0];
						if(x)
						{
							piece=x.getAttribute("src");
							piece=piece.charAt(8);
							if(piece=="B"||	piece=="Q")
							{
							  alert("Check !!!take care of your KING."); return true;
							  
							}
						}	

					}	

			}
	}
	for(l=i-1,m=j-1; l>=0 && m>=0; l--,m--)
	{
		tempID=""+l+m;
			if(!IsEmpty(tempID))
			{
			       var frendCheck=document.getElementById(tempID).getElementsByTagName("img")[0];
				  
				   //alert(frendCheck);
				   if(frendCheck.src.match(kcolor))
				   {
				        // 
						 break;
				   }
				   else
				   {
				        var obj=document.getElementById(tempID);
			            var x=obj.getElementsByTagName("img")[0];
						if(x)
						{
							piece=x.getAttribute("src");
							piece=piece.charAt(8);
							if(piece=="B"||	piece=="Q")
							{
							  alert("Check !!!take care of your KING."); return true;
							  
							}
						}	

					}	

			}
		
	}

	for(l=i+1,m=j-1; l<=7 && m>=0; l++,m--)
	{
	   tempID=""+l+m;
			if(!IsEmpty(tempID))
			{
			       var frendCheck=document.getElementById(tempID).getElementsByTagName("img")[0];
				  
				   //alert(frendCheck);
				   if(frendCheck.src.match(kcolor))
				   {
				        // 
						 break;
				   }
				   else
				   {
				        var obj=document.getElementById(tempID);
			            var x=obj.getElementsByTagName("img")[0];
						if(x)
						{
							piece=x.getAttribute("src");
							piece=piece.charAt(8);
							if(piece=="B"||	piece=="Q")
							{
							  alert("Check !!!take care of your KING."); return true;
							  
							}
						}	

					}	

			}
	}

	
	for(l=i+1,m=j+1; l<=7 && m<=7; l++,m++)
	{
	     tempID=""+l+m;
			if(!IsEmpty(tempID))
			{
			       var frendCheck=document.getElementById(tempID).getElementsByTagName("img")[0];
				  
				   //alert(frendCheck);
				   if(frendCheck.src.match(kcolor))
				   {
				        // 
						 break;
				   }
				   else
				   {
				        var obj=document.getElementById(tempID);
			            var x=obj.getElementsByTagName("img")[0];
						if(x)
						{
							piece=x.getAttribute("src");
							piece=piece.charAt(8);
							if(piece=="B"||	piece=="Q")
							{
							  alert("Check !!!take care of your KING."); return true;
							  
							}
						}	

					}	

			}
		
		
		
	}
		

    }
		

/*
function checkLine(tempID)
{
    var obj=document.getElementById(tempID);
			         var x=obj.getElementsByTagName("img")[0];
						if(x)
						{
							piece=x.getAttribute("src");
							piece=piece.charAt(8);
							if(piece=="R"||	piece=="Q")
							{
							  return true;
							  
							}
							else 
							return false;
						
							   
				   
				        }
						else
						return false;
}






*/





