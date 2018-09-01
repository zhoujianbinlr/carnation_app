document.getElementById('routines').addEventListener('tap',function(){
	updateRoutines();
	document.getElementById('routines').className = 'mui-row zyf-active-tab';
	document.getElementById('dailyNews').className = 'mui-row';
});

document.getElementById('dailyNews').addEventListener('tap',function(){
	updateNewsList();
	document.getElementById('routines').className = 'mui-row';
	document.getElementById('dailyNews').className = 'mui-row zyf-active-tab';
	
});

/*let data = [
	'http://img1.gamersky.com/image2016/02/20160222_gxh_289_9/image096_S.jpg',
	'http://img1.gamersky.com/image2016/02/20160222_gxh_289_9/image001_S.jpg',
	'http://upload.anqu.com/20160226/1456468514740519.jpg',
	'http://img1.gamersky.com/image2016/02/20160222_gxh_289_9/image006_S.jpg',
	'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1535625716094&di=b937bab2eff4429152770877d6dbdc1b&imgtype=0&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F13%2F19%2F83%2F51J58PIC8be_1024.jpg',
	'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1535625716094&di=0aead7502b1e7caf9dd05611859c626d&imgtype=0&src=http%3A%2F%2Fimg5.duitang.com%2Fuploads%2Fitem%2F201512%2F06%2F20151206213804_snrPw.jpeg',
	'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1535625716093&di=f5b87993f022637f745075dc53b969c6&imgtype=0&src=http%3A%2F%2Fi10.topitme.com%2Fo080%2F100805058240349bb9.jpg'
	];
mySlider.initSlider(data,true);*/

let data = [
	'../../images/Slider1.jpg',
	'../../images/Slider2.jpg',
	'../../images/Slider3.jpg'
	];
mySlider.initSlider(data,true);

updateNewsList = function(){
	//刷新日常新闻列表
	let list = [
		{
			title:"测试",
			src:"http://upload.anqu.com/20160226/1456468514740519.jpg",
			content:"翻译是在准确、通顺的基础上，把一种语言信息转变成另一种语言信息的行为。翻译是将一种相对陌生的表达方式"
		}
	];
	let data = {
		newsList:list
	}
	
	document.getElementById('container').innerHTML = template('template2',data);
}

updateRoutines = function(){
	//刷新日常事项
	let list = [
		{
			title:"发表动态",
			content:"增加1点活力值",
			bgColor:"#FF7F7F",
			fontColor:'white',
			circleColor:'#FEA6A6',
			src:"http://upload.anqu.com/20160226/1456468514740519.jpg"
		}
	]
	let data = {
		tabList:list
	}
	document.getElementById('container').innerHTML = template('template1',data);
}
