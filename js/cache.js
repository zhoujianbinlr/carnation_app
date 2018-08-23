/**
 * app的缓存项目
 **/
(function($, owner) {
	/**
	 * 获取接口
	 **/
	
	//获取设备的信息
	owner.getDeviceInfo = function(){
		let deviceInfo = localStorage.getItem('deviceInfo') || "{}";
		return JSON.parse(deviceInfo);
	}
	
	//	获取登录状态
	owner.getUserInfo = function(){
		var userInfo = localStorage.getItem('userInfo') || "{}";
		return JSON.parse(userInfo);
	};
	
	//  获取是否自动登录
	owner.getAutoLogin = function(){
		var autologin = localStorage.getItem('autoLogin') || "false";
		return autologin === 'true';
	};
	
	
	
	
	/**
	 * 设置接口
	 * */
	//设置自动登录
	owner.setAutoLogin = function(autologin){
		if(autologin){
			localStorage.setItem('autoLogin','true')
		}else{
			localStorage.setItem('autoLogin','false')
		}
	};
	
	//设置设备信息
	owner.setDeviceInfo = function(deviceInfo){
		deviceInfo = JSON.stringify(deviceInfo);
		localStorage.setItem('deviceInfo',deviceInfo);
	}
	
}(mui,window.cache = {}))