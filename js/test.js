// 二维字符串
// 数组
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
function setScreeenAnimate(screenCls) {
    var screen=document.querySelector(screenCls);
    var animatwElements=screenAnimateElements[screenCls];
    var  issetanimatInit=false;
    var  issetanimatDone=false;
    screen.onclick=function (){
        if (issetanimatInit===false) {
            for (var i=0;i<animatwElements.length;i++) {
                var element=document.querySelector(animatwElements[i]);
                console.log(element.getAttribute("class" ));
                var baCls=element.getAttribute("class" );
                element.setAttribute("class" ,baCls+" "+animatwElements[i].substr(1)+'_animate_init');

            }
            issetanimatInit=true;
            return;
        }
        if (issetanimatDone===false) {
            for (var i=0;i<animatwElements.length;i++) {
                var element=document.querySelector(animatwElements[i]);
                console.log(element.getAttribute("class" ));
                var baCls=element.getAttribute("class" );
                element.setAttribute("class" ,baCls.replace('_animate_init','_animate_done'));
            }
            issetanimatDone=true;
            return;
        }
        if (issetanimatDone===true) {
            for (var i=0;i<animatwElements.length;i++) {
                var element=document.querySelector(animatwElements[i]);
                var baCls=element.getAttribute("class" );
                element.setAttribute("class" ,baCls.replace('_animate_done','_animate_init'));
            }
            issetanimatDone=false;
            return;
        }
    }


}

for(k in screenAnimateElements){
    setScreeenAnimate(k);
}

// function setScreenAnimate( screenCLs){
//     var screen=document.getElementsByClassName("screenCLs")
// }