var banner_page = document.querySelector(".miaosha_right_box");
var imglist = banner_page.querySelector(".miaosha_right_box>ul");
var left_btn = document.querySelector(".miaosha_btn-box>.btn-prev");
var right_btn = document.querySelector(".miaosha_btn-box>.btn-next");

var offset = banner_page.offsetWidth;
var left = 0;
console.log(left);


right_btn.addEventListener("click", function(e) {
	if(left!=-1984){		
		left -= offset;
		imglist.style.left = left + "px";
		}
		console.log(left);
}, false);



left_btn.addEventListener("click", function() {
	if(left!=0){	
	left += offset;
	imglist.style.left = left + "px";
	}
		console.log(left);
	// if (left == 0) {
	// 	setTimeout(function() {
	// 		left = 1 * offset;
	// 		imglist.style.transition = "none";
	// 		imglist.style.transform = "translateX(" + left + "px)";
	// 	}, 300);
	// }
}, false);

