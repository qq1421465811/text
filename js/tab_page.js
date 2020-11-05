var page_tab = document.querySelector(".page_three_home");
var panels = page_tab.querySelectorAll(".home_right_box>.panel");
var index = 0;
var hot = document.querySelector("#hot");
var hot1= document.querySelector("#hot1");
var mover = document.querySelector("#mover");
var eave = document.querySelector("#eave");

hot.onmouseenter = function(){
	index=0;
	hot.className="tab-active";
	panels[index].className="panel active";
	index++;
	mover.className="";
	panels[index].className="panel";
}

mover.onmouseenter = function(){
	index=1;
	mover.className="tab-active";
	panels[index].className="panel active";
	index--;
	hot.className="";
	panels[index].className="panel";
}



hot1.onmouseenter = function(){
	index=0;
	hot1.className="tab-active";
	panels[index].className="panel active";
	index++;
	eave.className="";
	panels[index].className="panel";
}
eave.onmouseenter = function(){
	index=1;
	eave.className="tab-active";
	panels[index].className="panel active";
	index--;
	hot1.className="";
	panels[index].className="panel";
}

