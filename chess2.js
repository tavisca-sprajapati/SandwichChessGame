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


/*
var bBoardList = [];
var wBoardList=[];
		bBoardList.push({id:1,peace:'bRook'});	
        bBoardList.push({id:2,peace:'bNight'});
		bBoardList.push({id:3,peace:'bBishop'});
		bBoardList.push({id:4,peace:'bQueen'});
		bBoardList.push({id:5,peace:'bKing'});
		bBoardList.push({id:6,peace:'bPawn'});
		
		wBoardList.push({id:1,peace:'wRook'});	
		wBoardList.push({id:2,peace:'wNight'});
		wBoardList.push({id:3,peace:'wBishop'});
		wBoardList.push({id:4,peace:'wQueen'});
		wBoardList.push({id:5,peace:'wKing'});
		wBoardList.push({id:6,peace:'wPawn'});*/
		

		
window.onload=function()
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
		document.getElementById(str).innerHTML=myimage;
		document.getElementById(str).setAttribute("style","cursor:pointer;");
		document.getElementById(str).setAttribute("onclick","play(this)");
	}
i=i+5;	


}
/*
   a=3;
   for(i=0;i<8;i++)
   {	
     
	str1=""+0+i;
        if(i<=4)
        documnet.getElementById("00").innerHTML=bBoardList[i+1].peace;
		else
		{
		documnet.getElementById("11").innerHTML=bBoardList[i-a].peace;
		 a++;
		}
		
		document.getElementById(str).setAttribute("style","cursor:pointer;");
		document.getElementById(str).setAttribute("onclick","play(this)");
		}
		*/
		
		//black peace
		document.getElementById("00").innerHTML=bRook;
		document.getElementById("00").setAttribute("style","cursor:pointer;");
		document.getElementById("00").setAttribute("onclick","play(this)");
		
		
         document.getElementById("01").innerHTML=bNight;
		document.getElementById("01").setAttribute("style","cursor:pointer;");
		document.getElementById("01").setAttribute("onclick","play(this)");
		
		
		  document.getElementById("02").innerHTML=bBishop;
		document.getElementById("02").setAttribute("style","cursor:pointer;");
		document.getElementById("02").setAttribute("onclick","play(this)");
		
		
		  document.getElementById("03").innerHTML=bQueen;
		document.getElementById("03").setAttribute("style","cursor:pointer;");
		document.getElementById("03").setAttribute("onclick","play(this)");
		
		
		  document.getElementById("04").innerHTML=bKing;
		document.getElementById("04").setAttribute("style","cursor:pointer;");
		document.getElementById("04").setAttribute("onclick","play(this)");
		
		
		 document.getElementById("05").innerHTML=bBishop;
		document.getElementById("05").setAttribute("style","cursor:pointer;");
		document.getElementById("05").setAttribute("onclick","play(this)");
		
		
		
				
         document.getElementById("06").innerHTML=bNight;
		document.getElementById("06").setAttribute("style","cursor:pointer;");
		document.getElementById("06").setAttribute("onclick","play(this)");
		
		
		document.getElementById("07").innerHTML=bRook;
		document.getElementById("07").setAttribute("style","cursor:pointer;");
		document.getElementById("07").setAttribute("onclick","play(this)");
		
		
		
		
		
		//WHITE PEACE
		
		
		document.getElementById("70").innerHTML=wRook;
		document.getElementById("70").setAttribute("style","cursor:pointer;");
		document.getElementById("70").setAttribute("onclick","play(this)");
		
		
         document.getElementById("71").innerHTML=wNight;
		document.getElementById("71").setAttribute("style","cursor:pointer;");
		document.getElementById("71").setAttribute("onclick","play(this)");
		

		  document.getElementById("72").innerHTML=wBishop;
		document.getElementById("72").setAttribute("style","cursor:pointer;");
		document.getElementById("72").setAttribute("onclick","play(this)");
		
		
		  document.getElementById("73").innerHTML=wQueen;
		document.getElementById("73").setAttribute("style","cursor:pointer;");
		document.getElementById("73").setAttribute("onclick","play(this)");
		
		
		  document.getElementById("74").innerHTML=wKing;
		document.getElementById("74").setAttribute("style","cursor:pointer;");
		document.getElementById("74").setAttribute("onclick","play(this)");
		
		
		 document.getElementById("75").innerHTML=wBishop;
		document.getElementById("75").setAttribute("style","cursor:pointer;");
		document.getElementById("75").setAttribute("onclick","play(this)");
		
	
         document.getElementById("76").innerHTML=wNight;
		document.getElementById("76").setAttribute("style","cursor:pointer;");
		document.getElementById("76").setAttribute("onclick","play(this)");
		
		
		document.getElementById("77").innerHTML=wRook;
		document.getElementById("77").setAttribute("style","cursor:pointer;");
		document.getElementById("77").setAttribute("onclick","play(this)");
		
			
}