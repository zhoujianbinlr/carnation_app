//获取原始窗口的高度
var originalHeight=document.documentElement.clientHeight || document.body.clientHeight;
window.onresize=function(){
    //软键盘弹起与隐藏  都会引起窗口的高度发生变化
    var  resizeHeight=document.documentElement.clientHeight || document.body.clientHeight;
    if(resizeHeight*1<originalHeight*1){ //resizeHeight<originalHeight证明窗口被挤压了
            plus.webview.currentWebview().setStyle({
                height:originalHeight
            });
      }
}