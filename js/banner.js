var bannerRight=document.querySelector(".banner-box");

var prev=bannerRight.querySelector(".prev"); 
var next=bannerRight.querySelector(".next"); 
var imgList=bannerRight.querySelectorAll(".banner-right>a");

var index=0;
var pointList=bannerRight.querySelectorAll(".pointer>span")



function  SwitchImg(i){
	imgList[index].style.opacity="0";
	pointList[index].className="";

	index=i;
	imgList[index].style.opacity="1";
	pointList[index].className="active";
}


function NextSwitchImg(){
	var i=index;
	i++;
	if(i==imgList.length){
		i=0;
	}
	SwitchImg(i);
}

next.onclick=function(){
   NextSwitchImg();
}

prev.onclick=function(){
  var i=index;
  i--;
  if(i<0){
	  i=imgList.length-1;
  }
  SwitchImg(i);
}

var timer = setInterval(function(){
	NextSwitchImg();
},3000)

bannerRight.onmouseenter=function(){
	clearInterval(timer);
}
bannerRight.onmouseleave=function(){
	timer = setInterval(function(){
		NextSwitchImg();
	},3000)
}

pointList.forEach(function(item,i){
	item.onclick=function(){
		SwitchImg(i);
	}
})





