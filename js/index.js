// 获取元素
var screenAnimateElements = {

    '.screen-1' : [
        '.screen-1__header',
        '.screen-1__phone',
        '.screen-1__shadow'
    ],
    '.screen-2' : [
        '.screen-2__header',
        '.screen-2__subheader',
        '.screen-2__phone',
        '.screen-2_point_i_1',
        '.screen-2_point_i_2',
        '.screen-2_point_i_3'
    ],
    '.screen-3' : [
        '.screen-3__header',
        '.screen-3__subheader',
        '.screen-3__phone',
        '.screen-3__feature'],
    '.screen-4' : [
        '.screen-4__header',
        '.screen-4__subheader',
        '.screen-4__type__item__bg1',
        '.screen-4__type__item__bg2',
        '.screen-4__type__item__bg3',
        '.screen-4__type__item__bg4'],
    '.screen-5' : [
        '.screen-5__header',
        '.screen-5__subheader',
        '.screen-5__bg']
};
var getElem = function( selector ){
    return document.querySelector(selector);
}
var getAllElem = function( selector ){
    return document.querySelectorAll(selector);
}
// 获取元素的样式
var getCls = function ( element ) {
    return element.getAttribute('class');
}
// 设置元素的样式
var setCls = function( element ,cls){
    return element.setAttribute('class',cls);
}

// 为元素添加样式
var addCls = function( element , cls ){
    var baseCls  = getCls(element);
    if( baseCls.indexOf(cls) === -1){
        setCls(element,baseCls+' '+cls); // 注意空格
    }
    return ;
}
// 为元素删减样式
var delCls = function( element , cls){
    var baseCls  = getCls(element);
    if( baseCls.indexOf(cls) > -1){ // 更精确的需要用正则表达式 ,因为这里只用于切换 _animate_in 所以没事
        setCls( element,baseCls.split(cls).join(' ').replace(/\s+/g,' ') );
    }
    return ;
}
// 设置屏内元素为初始状态
 var  setScreeenAnimatInit=function(screenCls){
     var animatwElements=screenAnimateElements[screenCls];
     for (var i=0;i<animatwElements.length;i++) {
         var element=document.querySelector(animatwElements[i]);

         var baCls=element.getAttribute("class" );
         element.setAttribute("class" ,baCls+" "+animatwElements[i].substr(1)+'_animate_init');

     }
     return;
 }



 window.onload=function () {
    for (k in screenAnimateElements)
    {
        if(k==".screen-1"){
            continue;
        }
        setScreeenAnimatInit(k);
    }

 }


 // 设置屏内元素为Done状态
    var  setScreeenAnimatDone=function(screenCls){
        var animatwElements=screenAnimateElements[screenCls];
        for (var i=0;i<animatwElements.length;i++) {
            var element=document.querySelector(animatwElements[i]);

                var baCls=element.getAttribute("class" );
                element.setAttribute("class" ,baCls.replace('_animate_init','_animate_done'));}
                 return;
    }

//  第二步附加：初始化第一屏的动画（1. skipScreenAnimateInit 2.跳过 init ）


    window.onscroll=function () {
    var top= document.documentElement.scrollTop;

        if(top>100){
            addCls(getElem(".header"),"header_status_black")
             }
        else{
            switchNavItemsActive(0);
            delCls(getElem(".header"),"header_status_black")
        }
        if (top>800*1-400) {
            setScreeenAnimatDone('.screen-2')
            //
            switchNavItemsActive(1);
             }
        if (top>800*2-400) {
                setScreeenAnimatDone('.screen-3')
            //导航大纲变换
            switchNavItemsActive(2);
            }
        if (top>800*3-400) {
            setScreeenAnimatDone('.screen-4')
            //导航大纲变换
            switchNavItemsActive(3);
        }
        if (top>800*4-400) {
            setScreeenAnimatDone('.screen-5')
            //导航大纲变换
            switchNavItemsActive(4);
        }
     }
setTimeout(function(){setScreeenAnimatDone('.screen-1');},20);
//导航、大纲与页面绑定
var navItems=getAllElem('.header_nav_item');
var lineItems=getAllElem('.outline_item');
var setnavjump=function (i,lib){
    lib[i].onclick=function () {
        document.documentElement.scrollTop=800*i-300;
    }
}
for (var i=0;i<navItems.length;i++){
    setnavjump(i,navItems);
}
for (var i=0;i<lineItems.length;i++){
    setnavjump(i,lineItems);
}
//导航与大纲绑定
var switchNavItemsActive = function( idx){
    for(var i=0;i<lineItems.length;i++){

        delCls(navItems[i],'header_nav_item_status_active');
        console.log(lineItems[i]);
        console.log(lineItems[i]);
        delCls(lineItems[i],'outline_item_status_active');
    }
    addCls(navItems[idx],'header_nav_item_status_active');
    addCls(lineItems[idx],'outline_item_status_active');
}
//滑动门
var navtip=getElem(".header_nav-tip");

function setTip(i, navItems) {
    navItems[i].onmouseover=function () {
        navtip.style.left=i*78.4+'px'
    }

    navItems[i].onmouseout=function () {
        var z;
        for (var i=0;i<navItems.length;i++)
            if (getCls(navItems[i]).indexOf('header_nav_item_status_active')>-1){
          z=i;
          break;
            }
        navtip.style.left=i*78.4+'px'
    }
}

for (var i=0;i<navItems.length;i++){
    setTip(i,navItems);
}
