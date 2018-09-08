$(document).ready(function () {
   
    
    
    // hide .navbar first
        $(".navbar").hide();

        // fade in .navbar
        $(function () {
            $(window).scroll(function () {
                // set distance user needs to scroll before we fadeIn navbar
                if ($(this).scrollTop() > 100) {
                    $('.navbar').fadeIn();
                } else {
                    $('.navbar').fadeOut();
                }
            });
        });
    
var ran = 0;

var subts = ["Insecure", "Atlanta", "Luke Cage", "Black-ish"];
var images = ["insecure.jpg","atlanta.jpeg",  "luke.jpg", "blackish.jpg"];
    
var videos = ["https://www.youtube.com/embed/Mia51fMAGJw?list=PL019D7AE1C3429770","https://www.youtube.com/embed/MpEdJ-mmTlY","https://www.youtube.com/embed/ytkjQvSk2VA","https://www.youtube.com/embed/f2oHMze7RwY"] ;

var fcolors1 = ["#F0EAEA", "#7C8E82", "#F0AD27", "#D98B49"] ;
var fcolors2 = ["#2F1F43", "#423C2C", "#374852", "#82508B"] ;
var fcolors3 = ["#F0EAEA", "#7C8E82", "#F0AD27", "#D98B49"] ;
    
    
var pics = ["img/issa.jpg", "img/atla.jpg", "img/king.png", "img/black.jpg"] ;


//$('h1').text(topic +" Central")
//$('h3').addClass("title")
//$('.topic').text(topic)
//var image = choice(photos)
//$('img').attr("src", image)


    
    
/*function rand(){
  return Math.floor(Math.random() * 4 )
   
}*/

ran = Math.floor(Math.random() * 4 )

    $('#stage').css({'background-image': 'url(img/' + images[ran] + ')'});

    $('#stage').find('p').text(subts[ran]);

    $('iframe').attr('src', videos[ran]);
        
    $('.feature1').css("background",fcolors1[ran]);
    
    $('.feature-dark').css("background",fcolors2[ran]);
        
    $('.feature3').css("background",fcolors3[ran]);
    
    $('#feature-two img').attr('src', pics[ran]);    





    $('#change').click(function(){
        ran = Math.floor(Math.random() * 4 )

    $('#stage').css({'background-image': 'url(img/' + images[ran] + ')'});

    $('#stage').find('p').text(subts[ran]);

    $('iframe').attr('src', videos[ran]);
        
    $('.feature1').css("background",fcolors1[ran]);
    
    $('.feature-dark').css("background",fcolors2[ran]);
        
    $('.feature3').css("background",fcolors3[ran]);
    
    $('#feature-two img').attr('src', pics[ran]);    
    
    

    });






});
    
    