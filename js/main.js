$(function(){$("a,lable").focus(function(){this.blur();});});

$(function(){
	$(".setFavorite").on("click",function(e){
		e.preventDefault();
		setFav('上海交通大学二草行为学学院','http://2cibs.sj-tu.com/')
	});
	$(".setIndex").on("click",function(e){
		e.preventDefault();
		setHome(this,'http://2cibs.sj-tu.com/')
	});
	
	function setFav(sTitle,sURL){
		var ctrl = (navigator.userAgent.toLowerCase()).indexOf('mac') != -1 ? 'Command/Cmd' : 'CTRL';
		try{ 
			window.external.addFavorite(sURL, sTitle); 
		} 
		catch(e){ 
			try{ 
				window.sidebar.addPanel(sTitle, sURL, ""); 
			} 
			catch(e){ 
				alert("加入收藏失败，请使用" + ctrl + "+D进行添加"); 
			}
		}
	};

	function setHome(obj,url){
		try{
			obj.style.behavior='url(#default#homepage)';
			obj.setHomePage(url);
		}catch(e){
			if(window.netscape){
				try{
					netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
				}catch(e){
					alert("抱歉，此操作被浏览器拒绝！\n\n请在浏览器地址栏输入“about:config”并回车然后将[signed.applets.codebase_principal_support]设置为'true'");
				}
			}
			else{
				alert("抱歉，您所使用的浏览器无法完成此操作。\n\n您需要手动将【"+url+"】设置为首页。");
			}
		}
	};

	// head time
	function showLocale(obj){
		var str;
		var yy = obj.getYear();
		if(yy<1900) yy = yy+1900;
		var MM = obj.getMonth()+1;
		if(MM<10) MM = '0' + MM;
		var dd = obj.getDate();
		if(dd<10) dd = '0' + dd;
		var hh = obj.getHours();
		if(hh<10) hh = '0' + hh;
		var mm = obj.getMinutes();
		if(mm<10) mm = '0' + mm;
		var ss = obj.getSeconds();
		if(ss<10) ss = '0' + ss;
		var ww = obj.getDay();
		if  (ww==0)  ww="星期日";
		if  (ww==1)  ww="星期一";
		if  (ww==2)  ww="星期二";
		if  (ww==3)  ww="星期三";
		if  (ww==4)  ww="星期四";
		if  (ww==5)  ww="星期五";
		if  (ww==6)  ww="星期六";
		str = yy + "年" + MM + "月" + dd + "日   " + ww + "  " + hh + ":" + mm + ":" + ss ;
		return(str);
	};
	function tick(){
		var now = new Date();
		$(".hd-text .thistime").html(showLocale(now));
		window.setTimeout(tick, 1000);
	}
	tick();

	// index slide
	var islide = new Swiper(".islide .swiper-container",{
		autoplay: 4000,
		autoplayDisableOnInteraction: false,
		loop: true,
		pagination: ".islide .pagination",
		paginationClickable: true
	});

	// index meeting
	function imeeting(){
		var num = $(".im-list .im-block").length;
		for(i = 1;i <= num;i++){
			$(".im-control").append("<span></span>");
		};
		$(".im-control span").eq(0).addClass("act");
		$(".im-control span").on("mouseenter",function(){
			var index = $(this).index();
			$(".im-control span").removeClass("act") && $(".im-control span").eq(index).addClass("act");
			$(".im-list .im-block").removeClass("act") && $(".im-list .im-block").eq(index).addClass("act");
		});
	};
	imeeting();

	function leftbg(){
		var height = $(".page-left-bg .en").width();
		$(".page-left-bg").height(height);
	};
	leftbg();

	$(".ts-tab-nav span").on("mouseenter",function(){
		var index = $(this).index();
		$(".ts-tab-nav span").removeClass("act") && $(this).addClass("act");
		$(".ts-tab .tst-item").removeClass("act") && $(".ts-tab .tst-item").eq(index).addClass("act");
	});

});

function vclick(id){
	var div = document.getElementById(id);
	if(div.style.display == "none")
		div.style.display = "block";
	else
		div.style.display = "none";
}
