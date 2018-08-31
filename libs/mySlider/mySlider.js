//定制的轮播图插件

(function(doc,owner){
	/*初始化轮播图
	 * @params data list
	 */
	let current = 0;
	let total;
	let autoTimer = null;		//自动播放定时器
	let moveFlag = true;				//播放的方向标志
	let touchFlag = true;				//触摸的允许标志
	var startX,startY,endX,endY;
	
	owner.initSlider = function(data,auto){
		
		if(typeof data !== 'object'){
			return
		}else{
			total = data.length;
			initDom(data)
		}
		if(auto){
			autoTimer = setInterval(autoLoop,3000);
		}
		addEventListen();//增加事件监听
		
	}
	
	function initDom(data){
		current = 0;
		let html = '	<div class="mySlider-slider"></div>';
		for(let i =0 ;i<data.length;i++){
			if(i == 0){
				className = 'mySlider-img-active';
			}else if(i == 1){
				className = 'mySlider-img-next';
			}else{
				className = 'mySlider-img';
			}
			html += '<div id="mysliderImg'+i.toString()+'" class="'+className+'"><img src="'+data[i]+'"/></div>'
		}
		doc.getElementById('mySlider-container').innerHTML = html;
	}
	
	function autoLoop(){
		if(current == total-1){
			moveRight();
			moveFlag = false;
		}else if(current == 0){
			moveLeft();
			moveFlag = true;
		}else{
			if(moveFlag){
				moveLeft();
			}else{
				moveRight();
			}
		}
	}

	//控制图片左移
	function moveLeft(){
		touchFlag = false;
		var icur = 1;
    		clearInterval(timer);
    		let activeID = 'mysliderImg'+current.toString();
    		let nextID = 'mysliderImg'+(current+1).toString();
    		let activeObj = doc.getElementById(activeID);
    		let nextObj = doc.getElementById(nextID);
		
    		var timer = setInterval(function(){
    			activeObj.style.left = ((icur * -0.5) + 7) +'%';
    			activeObj.style.width = ((icur * -2.6)+86)+'%';
    			activeObj.style.height = ((icur * -2.6)+86)+'%';
    			activeObj.style.top = ((icur * 1.3)+7)+'%';
    			
    			nextObj.style.width = ((icur * 2.6)+60)+'%';
    			nextObj.style.height = ((icur * 2.6)+60)+'%';
    			nextObj.style.top = ((icur * -1.3)+20)+'%';
    			nextObj.style.left =  ((icur * -3.1)+38)+'%';
    			
    			if(icur == 5){
    				activeObj.style.zIndex = 102;
    				nextObj.style.zIndex = 103;
    				if(current <= total-3){
		    			nextnextID = 'mysliderImg'+(current+2).toString();
		    			doc.getElementById(nextnextID).className = 'mySlider-img-next';
		    		}
    			}
    			icur += 1;
    			if(icur == 11){
    				clearInterval(timer);
    				animateOver(1);
    			}
    		},25)
	}
	
	//控制图片右移
	function moveRight(){
		var icur = 1;
    		clearInterval(timer);
    		touchFlag = false;
    		if(current != total-1){
    			let nextID = 'mysliderImg'+(current+1).toString();
    			let nextObj = doc.getElementById(nextID);
    			nextObj.style.zIndex=total - current;
    		}
    		
    		let preID = 'mysliderImg'+(current-1).toString();
    		let activeID = 'mysliderImg'+current.toString();
    		let preObj = doc.getElementById(preID);
    		let activeObj = doc.getElementById(activeID);
    		
		var timer = setInterval(function(){
    			activeObj.style.left = ((icur * 3.1) + 7) +'%';
    			activeObj.style.width = ((icur * -2.6)+86)+'%';
    			activeObj.style.height = ((icur * -2.6)+86)+'%';
    			activeObj.style.top = ((icur * 1.3)+7)+'%';
    			
    			preObj.style.width = ((icur * 2.6)+60)+'%';
    			preObj.style.height = ((icur * 2.6)+60)+'%';
    			preObj.style.top = ((icur * -1.3)+20)+'%';
    			preObj.style.left =  ((icur * 0.5)+2)+'%';
    			
    			if(icur == 5){
    				activeObj.style.zIndex = 102;
    				preObj.style.zIndex = 103;
    				if(current >= 2){
		    			nextnextID = 'mysliderImg'+(current-2).toString();
		    			doc.getElementById(nextnextID).className = 'mySlider-img-pre';
		    		}
    			}
    			icur += 1;
    			if(icur == 11){
    				clearInterval(timer);
    				animateOver(-1);
    			}
    		},20)
		
	}
	
	function animateOver(param){
//		doc.getElementById('')
		touchFlag = true;
		if(param == -1){
			//右滑
			let preID = 'mysliderImg'+(current-1).toString();
    			let activeID = 'mysliderImg'+current.toString();
    			
    			doc.getElementById(preID).className = 'mySlider-img-active';
    			doc.getElementById(activeID).className = 'mySlider-img-next';
    			
		}else{
			//左滑
			let nextID = 'mysliderImg'+(current+1).toString();
    			let activeID = 'mysliderImg'+current.toString();
    			
    			doc.getElementById(nextID).className = 'mySlider-img-active';
    			doc.getElementById(activeID).className = 'mySlider-img-pre';
    			
		}
		current += param;
		
	}
	
	function addEventListen(){
		let sliderList = doc.getElementsByClassName('mySlider-slider');
		let slider = sliderList[0];
		if(slider == null || slider == undefined){
			return
		}
		slider.addEventListener('touchstart',startTouch)
		slider.addEventListener('touchend',endTouch)
		slider.addEventListener('touchcancel',endTouch)
		slider.addEventListener('tap',handleTap)
	}
	
	//开始滑动
	function startTouch(event){
		startX = event.touches[0].clientX;
		startY = event.touches[0].clientY;
	}
	
	//结束滑动
	function endTouch(event){
		endX = event.changedTouches[0].clientX;
		endY = event.changedTouches[0].clientY;
		if(!touchFlag){
			return;
		}
		if(Math.abs(endX - startX) > Math.abs(endY - startY)){
			//左右滑动
			if((endX - startX)<-60){
				//左滑
				if(current == total-1){
					return
				}else{
					if(autoTimer !== null){
						clearInterval(autoTimer);
						autoTimer = setInterval(autoLoop,3000);
					}
					moveLeft();
				}
				
			}else if((endX - startX)>60){
				//右滑
				if(current == 0){
					return
				}else{
					moveRight();
					if(autoTimer !== null){
						clearInterval(autoTimer);
						autoTimer = setInterval(autoLoop,3000);
					}
				}
				
			}
		}
	}
	
	//接收点击
	function handleTap(){
		console.log('tap')
	}
	
	
}(document,window.mySlider = {}))
