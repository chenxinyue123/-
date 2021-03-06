/**
 * Created by lenovo on 17/12/5 005.
 */

//Initialize Swiper
var swiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    loop:true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,

    },

    // 如果需要前进后退按钮
    navigation: {
        nextEl: '.swiper-button-next',
    },

    on:{
        init: function(){
            swiperAnimateCache(this); //隐藏动画元素
            swiperAnimate(this); //初始化完成开始动画
        },
        slideChangeTransitionEnd: function(){
            swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
        }
    }
});

//音乐处理开始
var music=document.getElementById("music");
var musicbg=document.querySelector(".musicbg");
var musicImg=document.querySelectorAll(".musicImg")[0];
var audio1=document.getElementById("audio");

//添加点击事件
var flag=1;
music.onclick=function(){
    if(flag==1){
        musicbg.style.display="none";
        musicImg.style.animation="none";
        audio1.pause();//停止播放
        flag=0;
    }else{
        musicbg.style.display="block";
        musicImg.style.animation="music 4s linear infinite";
        audio1.play(); //播放
        flag=1;
    }
};