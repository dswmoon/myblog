/**
 * Created by Administrator on 2016/8/25.
 */
window.onload=function(){
    //调用轮播图的功能
    banner ();
    //激活工具提示
    $('[data-toggle="tooltip"]').tooltip();
    //调用产品模块 导航宽度
    productNav();
};
//轮播图的功能
function banner (){
    //获取目标元素
    var bannerBox=document.querySelector(".wjs-banner");
    //储存数据
    var startX=0;
    var moveX=0;
    var distanceX=0;

    //绑定touch事件
    bannerBox.addEventListener("touchstart",function(e){
        //获取起始坐标
        startX= e.changedTouches[0].clientX;

    })
    //绑定移动事件
    bannerBox.addEventListener("touchmove",function(e){
        moveX= e.changedTouches[0].clientX;
        //计算距离差
        distanceX=moveX-startX;
    })
    //绑定结束事件
    bannerBox.addEventListener("touchend",function(){
        if(distanceX>0){
            $(".carousel").carousel("prev");
        }
        if(distanceX<0){
            $(".carousel").carousel("next");
        }
        //数据清零
        startX=0;
        moveX=0;
        distanceX=0;
    })
}

//产品模块 导航宽度
function productNav(){
    //获取元素
    var nav=$(".wjs-nav-tabs");
    //  获取所有的li标签
    var lis=nav.find("li");
    //遍历li标签 记录累加数据
    var w=0;
    $.each(lis,function(index,item){
        w+=$(item).innerWidth();
    })
    //将累加的宽度 添加给nav
    nav.width(w);
}





