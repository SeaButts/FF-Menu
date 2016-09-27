$(document).ready(function(){
    $(".content_wrapper").velocity({
        opacity:1
    },
    {
        delay: 330,
        duration: 680
    });
    $(".animation_box").velocity({
        bottom: 0
    },
    {
        delay:730,
        duration: 340,
        easing: "ease-out"
    });                             

   // jQuery methods go here...   
    $(".main_navItem").hover(
        function() {
            $(this).prepend('<img class="cursor cursor_main" src="images/FF9Cursor.png" alt="FF9_Cursor"/>');
            $(".cursor").show();
    },
        function() {
            $(".cursor").remove();
    });

});
