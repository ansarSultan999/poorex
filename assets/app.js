// var swiper = new Swiper(".mySwiper", {
//     watchSlidesProgress: true,
//     slidesPerView: 3,
//   });

// $('.humburger > img').click(() => {
//     $(".tp-header-2").toggleClass('showbar');
// });
// $('.closebtn > img').click(() => {
//     $(".tp-header-2").removeClass('showbar');
// });


$('.humburger-1 > img').click(() => {
    $(".nav_links").toggleClass('showbar');
});
$('.closebtn > img').click(() => {
    $(".nav_links").removeClass('showbar');
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