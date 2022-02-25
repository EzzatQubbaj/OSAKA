let homeHeight = $('.home').outerHeight();
$(window).scroll(function(){
    let x =  $(window).scrollTop();
    if(x>=homeHeight ){
        $('.navbar').addClass('bg-dark');
        $('.navbar').removeClass(' bg-transparent');
        $('.btn-up').fadeIn();
    }else{
        $('.navbar').addClass('bg-transparent');
        $('.navbar').removeClass('bg-dark');
        $('.btn-up').fadeOut();
    }
})

$('.btn-up').click(function(){
    $('body,html').animate({
        scrollTop:0
    },3000)
})
$('.nav-link ').click(function(e){
    let x = $(e.target).attr(href);
    console.log(x);
    let off = $(x).offset().top
    $('body,html').animate({
        scrollTop:off
    },3000)
})
let colors = ['blue','teal','orange','#fff','#ff206e','red']
for(let i=0;i<6;i++) {
    $('.options ul li').eq(i).css({backgroundColor:colors[i]})
}

$('.options i').click(function(){
    let infoWidth=$('.option-slide').outerWidth();
    let x = $('.options').offset().left;
    if(x==0){
        $('.options').animate({left:-infoWidth},3000)
    }else{
        $('.options').animate({left:0},3000)
    }
   
})
$('.options ul li').click(function(e){
    let bg = $(e.target).css('backgroundColor');
    $('html').attr('style',` --mainColor:${bg}`);
})
$('.options img').click(function(e){
    let bm = $(e.target).attr('src');
    $('.header').css({backgroundImage:`url(${bm})`})
    $(e.target).css({transform:"scale(2)"});
    $(e.target).siblings().css({transform:"scale(1)"});
})

$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items:5,
        margin:20,
        loop:true,
        
    });
  });