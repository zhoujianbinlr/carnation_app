/**
 * 实现ajax的post和get方法封装，以及系统层面的配置
 **/
const ROOT = 'http://116.62.40.165:8090/Tubebaby/api/v1/';

(function($, doc,owner) {
	
	owner.URL = {
		"LOGIN":"newUser/login"
	}
	
	owner.Post = function(url,param,callback,errorHandler){
		callback = callback || $.noop;;
		let rootURl = ROOT+url;
		let userInfo = cache.getUserInfo();
		if(typeof userInfo == 'object' && userInfo!= null && userInfo != undefined){
			param.userID =  userInfo.userID
		}
		let data = JSON.stringify(param);
		$.ajax({
			type:"post",
			url:rootURl,
			async:true,
			data:data,
			headers:{'Content-Type':'application/json','Access-Control-Allow-Origin':'*','Access-Control-Allow-Method':'POST,GET'},
			timeout:10000,//超时时间设置为10秒；
			success:function(data){
				return callback(data);
			},
			error:function(xhr,type,errorThrown){
				if(errorHandler == undefined || errorHandler==null){
					plus.nativeUI.toast("请求错误"+type+":"+errorThrown);
					return
				}else{
					return errorHandler(type,errorThrown);	
				}
				
			}
		});
	}
	/**
	 * 获取应用本地配置
	 **/
	owner.setSettings = function(settings) {
		settings = settings || {};
		localStorage.setItem('$settings', JSON.stringify(settings));
	}

	/**
	 * 设置应用本地配置
	 **/
	owner.getSettings = function() {
			var settingsText = localStorage.getItem('$settings') || "{}";
			return JSON.parse(settingsText);
	}
	
	//获取页面配置
	owner.getSubPages = function(path){
		if(path == undefined || path == null){
			path = '';
		}
		let screenInfo = cache.getScreenInfo();
		let bottom;
		if(screenInfo.height == 812 && screenInfo.width == 375){
			bottom = '82px'; 	//	iphoneX需要额外加上34PX的圆角边距 
		}else{
			bottom = '48px';	//底部导航栏高度
		}
		return [{
		      url:path+'homepage/homepage.html',//子页面HTML地址，支持本地地址和网络地址
		      id:'homepage',//子页面标志
		      styles:{
		        top:'0px',//子页面顶部位置
		        bottom:bottom//子页面底部位置
		      },
		      extras:{}//额外扩展参数
		    },{
		      url:path+'ART/artHomepage.html',//子页面HTML地址，支持本地地址和网络地址
		      id:'art',//子页面标志
		      styles:{
		        top:'0px',//子页面顶部位置
		        bottom:bottom//子页面底部位置
		      },
		      extras:{}//额外扩展参数
		    },{
		      url:path+'inform/inform.html',//子页面HTML地址，支持本地地址和网络地址
		      id:'inform',//子页面标志
		      styles:{
		        top:'0px',//子页面顶部位置
		        bottom:bottom//子页面底部位置
		      },
		      extras:{}//额外扩展参数
		    },{
		      url:path+'user/userinfo.html',//子页面HTML地址，支持本地地址和网络地址
		      id:'userinfo',//子页面标志
		      styles:{
		        top:'0px',//子页面顶部位置
		        bottom:bottom//子页面底部位置
		      },
		      extras:{}//额外扩展参数
		    }];
	}
}(mui,document,window.app = {}));