//定制的轮播图插件

(function(doc,owner){
	/*初始化轮播图
	 * @params data list
	 */
	let current = 1;
	
	owner.initSlider = function(data){
//		if(typeof data !== 'object'){
//			return
//		}
		console.log('========111111111=========')
		let sliderList = document.getElementsByClassName('mySlider-img-active');
		if(sliderList.length == 0){
			return
		}
		
		var startX,startY,endX,endY;
		sliderList[0].addEventListener('touchstart',function(event){
			startX = event.touches[0].clientX;
			startY = event.touches[0].clientY;
		})
			
		sliderList[0].addEventListener('touchend',function(event){
			endX = event.changedTouches[0].clientX;
			endY = event.changedTouches[0].clientY;
			if(Math.abs(endX - startX) > Math.abs(endY - startY)){
				//左右滑动
				if((endX - startX)<-60){
					//左滑
					console.log('左滑')
					moveLeft();
				}else if((endX - startX)>60){
					//右滑
					console.log('右滑')
				}
			}
		})
		
		sliderList[0].addEventListener('touchcancel',function(event){
			console.log('cancel');
			endX = event.changedTouches.clientX;
			endY = event.changedTouches.clientY;
		})
		
		sliderList[0].addEventListener('tap',function(event){
			console.log('swipeleft');
		})
	};
	
	function moveLeft(fn){
		var icur = 1;
    		clearInterval(timer);
    		let preObj = document.getElementById('mysliderImg0');
    		let activeObj = document.getElementById('mysliderImg1');
    		let nextObj = document.getElementById('mysliderImg2');
    		document.getElementById('mysliderImg3').style.display = 'block';
    		console.log(preObj,activeObj,nextObj);
    		var timer = setInterval(function(){
//  			preObj.style.left = ((icur * -10.4) + 2) +'%';
    			
    			activeObj.style.left = ((icur * -0.5) + 7) +'%';
    			activeObj.style.width = ((icur * -2.6)+86)+'%';
    			activeObj.style.height = ((icur * -2.6)+86)+'%';
    			activeObj.style.top = ((icur * 1.3)+7)+'%';
    			
    			nextObj.style.width = ((icur * 2.6)+60)+'%';
    			nextObj.style.height = ((icur * 2.6)+60)+'%';
    			nextObj.style.top = ((icur * -1.3)+20)+'%';
    			nextObj.style.right =  ((icur * 0.5)+2)+'%';
    			
    			if(icur == 5){
    				activeObj.style.zIndex = 1;
    				nextObj.style.zIndex = 2;
    			}
    			icur += 1;
    			if(icur == 11){
    				clearInterval(timer)
    				
    			}
    		},25)
	}
	
	function moveRight(){
		
	}
	
	
	
}(document,window.mySlider = {}))
