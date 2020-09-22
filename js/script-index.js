$('#planos .planos-slider').slick({
    centerMode:true,
    slidesToShow:3,
    arrows:false,
    autoplay:true,
    focusOnSelect:true,
    infinite:false,
    initialSlide:1,
    responsive:[
        {
            breakpoint:768,
            settings:{
                centerMode:true,
                slidesToShow:2,
                arrows:false,
                autoplay:true,
                focusOnSelect:true,
                infinite:false,
                initialSlide:1,
            }
        },
        {
            breakpoint:580,
            settings:{
                centerMode:true,
                slidesToShow:1,
                arrows:false,
                autoplay:true,
                focusOnSelect:true,
                infinite:false,
                initialSlide:1,
            }
        },
        {
            breakpoint:400,
            settings:{
                centerMode:false,
                slidesToShow:1,
                arrows:false,
                autoplay:true,
                focusOnSelect:true,
                infinite:false,
                initialSlide:1,
            }
        }
    ]
})

$('.mobile > i').css('display','none')
$('.mobile > div > i').click(function(){
    $('.mobile > div').slideToggle(400,function(){
        $('.mobile > i').css('display','block')
    })
})

$('.mobile > i').click(function(){
    $('.mobile > i').css('display','none')
    $('.mobile > div').slideToggle()
})
