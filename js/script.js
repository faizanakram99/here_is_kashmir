$(document).ready(function () {

     $(".main-nav li").on("click", function () {
        $(".main-nav li").removeClass("active");
        $(this).addClass("active");
    });

     $(".mobile-nav").on("click", function(){
       $(".main-nav ul").slideToggle();
    });
});
