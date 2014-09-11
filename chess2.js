 bBishop="<img src='images/bB.png'>";
bKing="<img src='images/bK.png'>"; 
bNight="<img src='images/bN.png'>";
 bQueen="<img src='images/bQ.png'>";
 bRook="<img src='images/bR.png'>";
bPawn="<img src='images/bP.png'>";

 wBishop="<img src='images/wB.png'>";

wKing="<img src='images/wK.png'>"; 
wNight="<img src='images/wN.png'>";
 wQueen="<img src='images/wQ.png'>";
 wRook="<img src='images/wR.png'>";
wPawn="<img src='images/wP.png'>";
		
function makeBoard()
{
//dispaly all pawn
for (i = 1; i < 7 ;)
{
	var obj;
	for(j=0;j<8;j++)
	{ 
		str=""+i+j;
		obj=document.getElementById(str);
		 myimage=bPawn;
		 if(i==6)
		 myimage=wPawn;
		tempObjects=document.getElementById(str);
		tempObjects.innerHTML=myimage;
		tempObjects.setAttribute("style","cursor:pointer;");
		tempObjects.setAttribute("onclick","play(this)");
	}
i=i+5;	


}

	 tempObjects=document.getElementById("00");
		tempObjects.innerHTML=bRook;
		tempObjects.setAttribute("style","cursor:pointer;");
		tempObjects.setAttribute("onclick","play(this)");
		
		
		tempObjects=document.getElementById("01");
        tempObjects.innerHTML=bNight;
		tempObjects.setAttribute("style","cursor:pointer;");
		tempObjects.setAttribute("onclick","play(this)");
		
		
		tempObjects=document.getElementById("02");
		  tempObjects.innerHTML=bBishop;
		tempObjects.setAttribute("style","cursor:pointer;");
		tempObjects.setAttribute("onclick","play(this)");
		
		

		 tempObjects =document.getElementById("03");
		 tempObjects.innerHTML=bQueen;
		tempObjects.setAttribute("style","cursor:pointer;");
		tempObjects.setAttribute("onclick","play(this)");
		
		
		 tempObjects= document.getElementById("04");
		 tempObjects.innerHTML=bKing;
		tempObjects.setAttribute("style","cursor:pointer;");
		tempObjects.setAttribute("onclick","play(this)");
		
		
		tempObjects= document.getElementById("05");
		tempObjects.innerHTML=bBishop;
		tempObjects.setAttribute("style","cursor:pointer;");
		tempObjects.setAttribute("onclick","play(this)");
		
		
		
				
        tempObjects= document.getElementById("06");
        tempObjects.innerHTML=bNight;
		tempObjects.setAttribute("style","cursor:pointer;");
		tempObjects.setAttribute("onclick","play(this)");
		
		
		tempObjects=document.getElementById("07");
		tempObjects.innerHTML=bRook;
		tempObjects.setAttribute("style","cursor:pointer;");
		tempObjects.setAttribute("onclick","play(this)");
		
		
		
		
		
		//WHITE PEACE
		
		
		tempObjects=document.getElementById("70");
		tempObjects.innerHTML=wRook;
		tempObjects.setAttribute("style","cursor:pointer;");
		tempObjects.setAttribute("onclick","play(this)");
		
		
        tempObjects= document.getElementById("71");
        tempObjects.innerHTML=wNight;
		tempObjects.setAttribute("style","cursor:pointer;");
		tempObjects.setAttribute("onclick","play(this)");
		

		 tempObjects= document.getElementById("72");
		 tempObjects.innerHTML=wBishop;
		tempObjects.setAttribute("style","cursor:pointer;");
		tempObjects.setAttribute("onclick","play(this)");
		
		
		 tempObjects= document.getElementById("73");
		 tempObjects.innerHTML=wQueen;
		tempObjects.setAttribute("style","cursor:pointer;");
		tempObjects.setAttribute("onclick","play(this)");
		
		
		 tempObjects = document.getElementById("74");
		 tempObjects.innerHTML=wKing;
		tempObjects.setAttribute("style","cursor:pointer;");
		tempObjects.setAttribute("onclick","play(this)");
		
		
		tempObjects= document.getElementById("75");
		tempObjects.innerHTML=wBishop;
		tempObjects.setAttribute("style","cursor:pointer;");
		tempObjects.setAttribute("onclick","play(this)");
		
	
        tempObjects= document.getElementById("76");
        tempObjects.innerHTML=wNight;
		tempObjects.setAttribute("style","cursor:pointer;");
		tempObjects.setAttribute("onclick","play(this)");
		
		
		tempObjects=document.getElementById("77");
		tempObjects.innerHTML=wRook;
		tempObjects.setAttribute("style","cursor:pointer;");
		tempObjects.setAttribute("onclick","play(this)");
		
			
}