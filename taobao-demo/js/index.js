$(function(){

    $("#menu-item li a").click(function(){
        let href = $(this).attr("href") ;
        $('#xuanxiangka a[href="'+href+'"]').tab('show')
    }) ;

});