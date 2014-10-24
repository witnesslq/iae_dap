/*到达率按天*/
{
	"DaodaDay":{
		"name":["cctv1","cctv2"],
		"data":[[1,3,6,3,5,7,2,7,24,4],[7,3,6,7,9,3,12,4,8,12]],
		"categories":["09-10","09-11","09-12","09-13","09-14","09-15","09-16","09-17","09-18","09-19"],
		"beginShijian":"09-10",
	    "endShijian":"09-19"
	}
}
/*到达率按时段*/
{
	"DaodaTime":{
		"name":"cctv2",
		"data":[1,3,6,3,5,7,2,7,24,4],
		"categories":["11:01","11:02","11:03","11:04","11:05","11:06","11:07","11:08","11:09","11:10"],
		"beginTime":"11:01",
		"endTime":"11:10"
	}
}
/*到达率按区域*/
{
	"DaodaArea":{
		"name":["cctv1","cctv2"],
		"data":[[1,3,6,3,5,7,2,7,24,4],[7,3,6,7,9,3,12,4,8,12]],
		//"categories":["09-10","09-11","09-12","09-13","09-14","09-15","09-16","09-17","09-18","09-19"],
		"area":["长沙","长沙","长沙","长沙","长沙","长沙","长沙","长沙","长沙","长沙"],
		"beginShijian":"09-10",
	    "endShijian":"09-19"
	}
}
/*收视率按天*/
{
	"ShoushiDay":{
		"name":["cctv1","cctv2"],
		"data":[[1,3,6,3,5,7,2,7,24,4],[7,3,6,7,9,3,12,4,8,12]],
		"categories":["09-10","09-11","09-12","09-13","09-14","09-15","09-16","09-17","09-18","09-19"],
		"beginShijian":"09-10",
	    "endShijian":"09-19"
	}
}
/*收视率按时段*/
{
	"ShoushiTime":{
		"name":"cctv2",
		"data":[1,3,6,3,5,7,2,7,24,4],
		"categories":["11:01","11:02","11:03","11:04","11:05","11:06","11:07","11:08","11:09","11:10"],
		"beginTime":"11:01",
		"endTime":"11:10"
	}
}
/*收视率按区域*/
{
	"ShoushiArea":{
		"name":["cctv1","cctv2"],
		"data":[[1,3,6,3,5,7,2,7,24,4],[7,3,6,7,9,3,12,4,8,12]],
		"categories":["09-10","09-11","09-12","09-13","09-14","09-15","09-16","09-17","09-18","09-19"],
		"area":["长沙","长沙","长沙","长沙","长沙","长沙","长沙","长沙","长沙","长沙"],
		"beginShijian":"09-10",
	    "endShijian":"09-19"
	}
}
/*市场份额按天*/
{"shichangDay":
	{
		"name":["湖南卫视","cctv1","cctv2"],
		"data":[45,35,20],
		"shijian":"09-10"	
	}
}
/*市场份额按时段*/
{"shichangTime":
	{
		"name":["湖南卫视","cctv1","cctv2"],
		"data":[45,35,20],
		"beginShiduan":"11:02",
		"endShiduan":"11:23"
	}
}
/*流入流出率*/
{
	"liuruliuchu":{
		"name":"湖南卫视",
		"type":['流入','流出'],
		"data":[[1,3,6,3,5,7,2,7,24,4],[7,3,6,7,9,3,12,4,8,12]],
		"categories":["11:01","11:02","11:03","11:04","11:05","11:06","11:07","11:08","11:09","11:10"],
		"first":"pindao1",
	    "second":"pindao2",
	    "third":"pindao3",
	    "beginTime":"11:01",
		"endTime":"11:10"
	}
}
/*系统设置*/
{"SystemSet":
	[{
		"name":"全省",
		"qzdaoda":10,
		"qzshoushi":20,
		"qzzongti":20
	},{
		"name":"长沙",
		"qzdaoda":10,
		"qzshoushi":20,
		"qzzongti":20
	},{
		"name":"株洲",
		"qzdaoda":10,
		"qzshoushi":20,
		"qzzongti":20
	}]
}