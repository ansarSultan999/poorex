

$('.humburger-1 > img ,.closebtn > img').click(() => {
    $(".nav_links").toggleClass('showbar');
});


$("span.menu_plus").click(function() {
    let parent = $(this).parent();
    parent.siblings().find('ul').slideUp();
    $(this).siblings("ul").slideToggle();
});






var a = document.querySelector('#plus');
var b = document.querySelector('#minus');
var c = document.querySelector('#counter');
var count = 1;

a.addEventListener('click',()=>{
    count += 2;
    c.innerHTML = count;

})

// for decrement 

b.addEventListener('click',()=>{
    if ( count > 1) {
        count -= 2;
        c.innerHTML = count;
    }

})