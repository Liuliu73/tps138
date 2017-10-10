require.config({
    // baseUrl:
    
    // 配置短路径（别名）
    paths:{
        jquery:'../lib/jquery-3.1.1',
        xcarousel:'../lib/jquery-xCarousel/jquery.xcarousel'
    },

    // 配置依赖
    shim:{
        // xcarousel依赖jquery
        xcarousel:['jquery']
    }
});

require(['jquery','xcarousel'],function($){
    $('.catalog').hover(function(){
        $('.catalog-menu').show();
    },function(){
        $('.catalog-menu').hide();
    })
    $('.sec-nav dt').mouseenter(function(){
        $('.sec-nav dt').css('background','rgba(51,49,87,0.9)');
        $('.sec-nav dt').find('a').css('color','#f2f2f2');    
        $('.sec-nav dt').next().hide();
        $(this).css('background','#fff');
        $(this).next().show();
        $(this).find('a').css('color','#333');
    })
    $('.sec-nav dt').mouseleave(function(){
        $(this).css('background','rgba(51,49,87,0.9)');
        // $(this).next().hide();
        $(this).find('a').css('color','#f2f2f2');
    })
    $('.thd-nav').on('mouseover','a',function(){
        $(this).addClass('active');
        $(this).parents('.sec-nav').show().find('dt').css('background','#fff').find('a').css('color','#333');    
    })
    $('.thd-nav').on('mouseout','a',function(){
        $(this).removeClass('active');
        // $(this).parents('.sec-nav').show().find('dt').css('background','#fff').find('a').css('color','#333');    
    })

    $('.banner').xCarousel({
        imgs:['img/bd1.png','img/bd2.png','img/bd3.jpg','img/bd4.jpg','img/bd5.jpg'],
        width: 1263,
        height: 450,
        showSmall:false,
        showPage:true,
        type:'fade',
        autoPlay:true
    })
});
