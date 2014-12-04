jQuery(function ($) {
    $(document).ready(function(){
        $('a[href^="#"], a[href^="."]').click( function(){
            var scroll_el = $(this).attr('href');
            if ($(scroll_el).length != 0) {
                $('html, body').animate({ scrollTop:0 }, 800);
            }
            return false;
        });
    });
});