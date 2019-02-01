/**
 * some JavaScript code for this blog theme
 */
/* jshint asi:true */

/////////////////////////header////////////////////////////
/**
 * clickMenu
 */
(function() {
  if (window.innerWidth <= 770) {
    var menuBtn = document.querySelector('#headerMenu')
    var nav = document.querySelector('#headerNav')
    menuBtn.onclick = function(e) {
      e.stopPropagation()
      if (menuBtn.classList.contains('active')) {
        menuBtn.classList.remove('active')
        nav.classList.remove('nav-show')
      } else {
        nav.classList.add('nav-show')
        menuBtn.classList.add('active')
      }
    }
    document.querySelector('body').addEventListener('click', function() {
      nav.classList.remove('nav-show')
      menuBtn.classList.remove('active')
    })
  }
}());

//////////////////////////back to top////////////////////////////
(function() {
	var backToTop = document.querySelector('.back-to-top')
	var backToTopA = document.querySelector('.back-to-top a')
	var t = 0;//判断上滚动
	var d = 0;//判断下滚动
	// console.log(backToTop);
	window.addEventListener('scroll', function() {
		//判断浏览器页面上下滚动来确定导航栏是否显示
		d = Math.max(document.documentElement.scrollTop, document.body.scrollTop)
		if (t > d)
		{
			//如果t大于p就是往上滚动，反之
			document.getElementById("top").style.visibility = "visible";
			document.getElementById("top").style.background = "rgba(255, 255, 255, 0.9)";
		}
		else
		{
			document.getElementById("top").style.visibility = "hidden";
		}
		t = d;
		// 页面顶部滚进去的距离来确定是否显示回顶部按钮和导航栏透明
		var scrollTop = Math.max(document.documentElement.scrollTop, document.body.scrollTop)

		if (scrollTop > 200) 
		{
			backToTop.classList.add('back-to-top-show')
		} 
		else 
		{
			backToTop.classList.remove('back-to-top-show')
			document.getElementById("top").style.visibility = "visible";
			document.getElementById("top").style.background = "rgba(255, 255, 255, 0)";
		}
	})

	// backToTopA.addEventListener('click',function (e) {
	//     e.preventDefault()
	//     window.scrollTo(0,0)
	// })
}());

//////////////////////////hover on demo//////////////////////////////
(function() {
	var demoItems = document.querySelectorAll('.grid-item')
}());
//////////////////////////TopImage//////////////////////////////
(function() {
	//初始化时根据网页可显示大小来决定占位div的高度
	var VisibleHeight = document.documentElement.clientHeight;
	var TargetHeight = VisibleHeight - 60;
	var TopImageDocu = document.getElementById("TopImage");
	TopImageDocu.style.height = TargetHeight + "px"
	//窗口改变大小事件，动态改变占位div的高度
	window.onresize = function(){ 
		VisibleHeight = document.documentElement.clientHeight;
		VisibleHeight -= 60;
		TargetHeight = Math.round(window.outerWidth / 1.7777777777778);//当前浏览器宽度/(16:9)的倍率得到占位div应有高度
		if (TargetHeight <= VisibleHeight)//如果计算出来的占位高度不大于当前可视高度-60的话才使其生效
		{
			TopImageDocu.style.height = TargetHeight + "px"
		}
		if (TargetHeight > VisibleHeight)
		{
			TargetHeight = VisibleHeight;
			TopImageDocu.style.height = TargetHeight + "px"
		}
	}
}());