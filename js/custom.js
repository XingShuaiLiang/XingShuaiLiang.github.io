<script type="text/javascript"> 
	var scrollFunc=function(e){ 
		e = e || window.event; 
		if (e.wheelDelta) {//IE/Opera/Chrome 
			if (e.wheelDelta > 0)
			{
				showBar();
			}
			else
			{
				hideBar();
			}
		} else if (e.detail) {//Firefox 
			if (e.wheelDelta > 0)
			{
				showBar();
			}
			else
			{
				hideBar();
			}
		} 
	} 
	var showBar = function()
	{
		document.getElementById("top").style.position = "fixed";
	}
	var hideBar = function()
	{
		document.getElementById("top").style.position = "";
	}
	/*注册事件*/ 
	if(document.addEventListener){ 
		document.addEventListener('DOMMouseScroll',scrollFunc,false); 
	}//W3C 
	window.onmousewheel=document.onmousewheel=scrollFunc;//IE/Opera/Chrome 
</script>  