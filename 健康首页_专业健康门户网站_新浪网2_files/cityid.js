citymap={
		"12": "http://tj.sina.com.cn/iframe/2014/1204/1.html",
		"13": "http://hebei.sina.com.cn/iframe/2014/1118/1.html",
		"14": "http://shanxi.sina.com.cn/iframe/2014/1205/1.html",
		"21": "http://ln.sina.com.cn/iframe/2014/1205/1.html",
		"22": "http://jl.sina.com.cn/iframe/2014/1204/1.html",
		"23": "http://hlj.sina.com.cn/iframe/2014/1204/1.html",
		"31": "http://sh.sina.com.cn/iframe/2014/1204/1.html",
		"32": "http://jiangsu.sina.com.cn/iframe/2014/12/04/1.html",
		"33": "http://zj.sina.com.cn/iframe/2014/1204/1.html",
		"35": "http://fj.sina.com.cn/iframe/2014/1204/1.html",
		"36": "http://jx.sina.com.cn/iframe/2014/1204/1.html",
		"37": "http://sd.sina.com.cn/iframe/2014/1205/1.html",
		"41": "http://henan.sina.com.cn/iframe/2014/1204/1.html",
		"42": "http://hb.sina.com.cn/iframe/2014/1204/1.html",
		"43": "http://hunan.sina.com.cn/iframe/2015/0623/1.html",
		"50": "http://cq.sina.com.cn/iframe/2014/1204/1.html",
		"51": "http://sc.sina.com.cn/iframe/2014/1205/1.html",
		"61": "http://sx.sina.com.cn/iframe/2014/1205/1.html",
		"2102": "http://dl.sina.com.cn/iframe/2014/1204/1.html",
		"3202": "http://wx.sina.com.cn/iframe/2014/1204/1.html",
		"3302": "http://nb.sina.com.cn/iframe/2014/1205/1.html",
    }
$(function(){
   var dfzFrame=$('#dfzFrame');	
   var city_info = get_ip_city();
	var city_code = city_info['citycode'],city_name=city_info['city'];
	var province_id=city_code;
	if(city_code=="2102"){
	 dfzFrame.attr("src",citymap[2102])
	 return;
	}else if(city_code=="3202"){
		dfzFrame.attr("src",citymap[3202])
	 return;
	}else if(city_code=="3302"){
		dfzFrame.attr("src",citymap[3302])
	 return;
	}
	var provinceId=province_id.substring(0,province_id.length-2)
	if(citymap[provinceId]){
		dfzFrame.attr("src",citymap[provinceId])
	}else{
	dfzFrame.remove();
	}
	
})