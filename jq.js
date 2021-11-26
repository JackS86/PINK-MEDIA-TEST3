let $menu = $(".hamburger-menu");

$(".hamburger-menu").on("click", function() {
    $(".navigation").slideToggle({
        scrollTop: 400, 
    },1000)
})

