var a=5;
var bold=0, italic=0, line=0, font="normal", color="black",size=20;
var tabs=1;
var tabslist=["0","1","0","0","0","0","0","0","0"];
var i=1;
var nowtab=1;
var text;
bolds =new Array(7);
italics =new Array(7);
lines =new Array(7);
fonts =new Array(7);
colors =new Array(7);
sizes =new Array(7);
var textes =["empty1","empty2","empty3","empty4","empty5","empty6","empty7","empty8"];

function loadpage(a)
{
	//save
	bolds[nowtab]=bold;
	italics[nowtab]=italic;
	lines[nowtab]=line;
	fonts[nowtab]=font;
	colors[nowtab]=color;
	sizes[nowtab]=size;
	textes[nowtab]=$("#out").val();
	//load next
	bold=bolds[a];
	italic=italics[a];
	line=lines[a];
	font=fonts[a];
	color=colors[a];
	size=sizes[a];
	text=textes[a];
	nowtab=a;
	$(document).ready(function(){
		$("#out").val(text);
		$("#out").css("font-style",font);
        document.getElementById('tired').selected=true;  /////////////////
		$("#out").css("font-size",size);
		document.getElementById('tired2').selected=true; /////////
		$("#out").css("color",color);
		 document.getElementById('color').value=color; //////////////////
		if(bold)
		{$("#out").css("font-weight","bold");
		$("#boldbutton").css("background-color","#cccc99");
		}
	    else
	    {$("#out").css("font-weight","normal");
		$("#boldbutton").css("background-color","#c4bfab");
		}

		if(italic)
		{$("#out").css("font-style","italic");
		$("#italicbutton").css("background-color","#cccc99");
		}
	    else
	    {$("#out").css("font-style","normal");
		$("#italicbutton").css("background-color","#c4bfab");
		}

	    if(line)
		{$("#out").css("text-decoration","underline");
		$("#underlined").css("background-color","#cccc99");
		}
	    else
	    {$("#out").css("text-decoration","none");
		$("#underlined").css("background-color","#c4bfab");
		}

	});

}
$("#nametab"+1).css("background-color","#cccc99");

$("#boldbutton").click(function(){
	if(!bold)
	{
		$("#out").css("font-weight","bold");
		$("#boldbutton").css("background-color","#cccc99");
		bold=1;
	}
	else
	{
		$("#out").css("font-weight","normal");
		$("#boldbutton").css("background-color","#c4bfab");
		bold=0;	
	}
});

$("#italicbutton").click(function(){
	if(!italic)
	{
		$("#out").css("font-style","italic");
		$("#italicbutton").css("background-color","#cccc99");
		italic=1;
	}
	else
	{
		$("#out").css("font-style","normal");
		$("#italicbutton").css("background-color","#c4bfab");
		italic=0;
	}
});


$("#underlined").click(function(){
	if(!line)
	{
		$("#out").css("text-decoration","underline");
		$("#underlined").css("background-color","#cccc99");
		line=1;
	}
	else
	{
		$("#out").css("text-decoration","none");
		$("#underlined").css("background-color","#c4bfab");
		line=0;
	}
});

$("#sizes").change(function(){
	size=$("#sizes option:selected").text();
	$("#out").css("font-size",size);
});

$("#fonts").change(function(){
	font=$("#fonts option:selected").text();
	$("#out").css("font-style",font);
});

$("#color").change(function(){
	color=$(this).val();
	$("#out").css("color",color);
});

$("#plustab").click(function(){
	if(tabs<8)
	{
	//// here to do everything !!!!!

		for(i=1; i<9; i++)
		{
			if(tabslist[i]=="0")
			{
				tabs++;
				tabslist[i]="1";
				$("#tab"+i).css("display","inline");
				var j=1;
				for(j=1; j<9; j++)
				{
					$("#nametab"+j).css("background-color","#c4bfab");
				}
				$("#nametab"+i).css("background-color","#cccc99");
				loadpage(i);
				nowtab=i;		
				break;
		}
	}

	//tabs++;
	//$("#tab"+tabs).css("display","inline");	
	}
	else
	{
		alert("can't load more tabs");
	}
	
});

$("#minus1").click(function(){
	$("#tab1").css("display","none");
	tabslist[1]="0";
	tabs--;
});

$("#minus2").click(function(){
	$("#tab2").css("display","none");
	tabslist[2]="0";
	tabs--;
});

$("#minus3").click(function(){
	$("#tab3").css("display","none");
	tabslist[3]="0";
	tabs--;
	//zarhirgz ghzeg hghzer zehgrhze gerhgezrg
});

$("#minus4").click(function(){
	$("#tab4").css("display","none");
	tabslist[4]="0";
	tabs--;
});

$("#minus5").click(function(){
	$("#tab5").css("display","none");
	tabslist[5]="0";
	tabs--;
});

$("#minus6").click(function(){
	$("#tab6").css("display","none");
	tabslist[6]="0";
	tabs--;
});
$("#minus7").click(function(){
	$("#tab7").css("display","none");
	tabslist[7]="0";
	tabs--;
});

$("#minus8").click(function(){
	$("#tab8").css("display","none");
	tabslist[8]="0";
	tabs--;
});

$("#nametab1").click(function(){
	var j=1;
	for(j=1; j<9; j++)
	{
		$("#nametab"+j).css("background-color","#c4bfab");
	}
	$("#nametab"+1).css("background-color","#cccc99");
	loadpage(1);

});

$("#nametab2").click(function(){
	var j=1;
	for(j=1; j<9; j++)
	{
		$("#nametab"+j).css("background-color","#c4bfab");
	}
	$("#nametab"+2).css("background-color","#cccc99");
	loadpage(2);
});

$("#nametab3").click(function(){
	var j=1;
	for(j=1; j<9; j++)
	{
		$("#nametab"+j).css("background-color","#c4bfab");
	}
	$("#nametab"+3).css("background-color","#cccc99");
	loadpage(3);
});

$("#nametab4").click(function(){
	var j=1;
	for(j=1; j<9; j++)
	{
		$("#nametab"+j).css("background-color","#c4bfab");
	}
	$("#nametab"+4).css("background-color","#cccc99");
	loadpage(4);
});

$("#nametab5").click(function(){
	var j=1;
	for(j=1; j<9; j++)
	{
		$("#nametab"+j).css("background-color","#c4bfab");
	}
	$("#nametab"+5).css("background-color","#cccc99");
	loadpage(5);
});

$("#nametab6").click(function(){
	var j=1;
	for(j=1; j<9; j++)
	{
		$("#nametab"+j).css("background-color","#c4bfab");
	}
	$("#nametab"+6).css("background-color","#cccc99");
	loadpage(6);
});


$("#nametab7").click(function(){
	var j=1;
	for(j=1; j<9; j++)
	{
		$("#nametab"+j).css("background-color","#c4bfab");
	}
	$("#nametab"+7).css("background-color","#cccc99");
	loadpage(7);
});


$("#nametab8").click(function(){
	var j=1;
	for(j=1; j<9; j++)
	{
		$("#nametab"+j).css("background-color","#c4bfab");
	}
	$("#nametab"+8).css("background-color","#cccc99");
	loadpage(8);
});