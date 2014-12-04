jQuery(function($){
    $('.menu-toggle, .overlay').click(function(){
        $('body').toggleClass('menu-open');
    })



    $('.search-button').click(function(){
        if ($('.search-box > input').val().length==0){
            $('.search-box').toggleClass('search-open');
            return false;
        }
    });
    $('.layer').click(function(){
            $('.search-box').toggleClass('search-open');
        $('.search-box > input').val('');
    });
});