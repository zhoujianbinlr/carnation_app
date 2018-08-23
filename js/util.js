(function(owner){
	// 判断是否为空
	owner.isEmpty = function(obj){
		if(obj == undefined || obj == null){
			return true
		}else if(obj.length == 0){
			return true
		}
		return false
	}
}(window.util={}))
