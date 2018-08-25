(function(owner){
	// 判断是否为空
	owner.isEmpty = function(obj){
		if(obj == undefined || obj == null || obj == NaN || obj == ''){
			return true
		}else if(typeof obj == 'object'){
			for(var key in obj) {
				return false;
			}
			return true;
		}
		return false
	}
}(window.util={}))
