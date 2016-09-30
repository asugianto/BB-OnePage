$(document).ready(function() {
    $(function() {
       // Lazy Load images
       $('.lazy').Lazy({
            effect: "fadeIn",
            effectTime: 2000,
            threshold: 0
        });

        // Dropdown Toggle
        // $(".dropdown-menu li a").click(function(){
        //     $(this).parents(".dropdown").find('.btn').html($(this).text() + ' <img src="assets/icons/arrow-dropdown-down.png"/>');
        //     $(this).parents(".dropdown").find('.btn').val($(this).data('value'));
        // });


        // Scroll to the top after refresh
        win.on('beforeunload', function() {
            win.scrollTop(0); 
        });
    });
})
  

