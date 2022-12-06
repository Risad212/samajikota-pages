
// /* =====================================================
// // 		toggle collapse button
// ===================================================== */

const selectOuterBox = document.querySelector('.outer');
const box = document.querySelector('#accoding');


$(document).ready(function(){
  $(".sabtn").click(function(){
    $("#accoding").slideToggle()
  });
});

$(document).ready(function(){
  $(".removeicon").click(function(){
    $("#accoding").slideToggle()
  });
});




selectOuterBox.addEventListener('click', function(){
    if(box.style.display = 'block'){
       box.style.display = 'none'
    }
})





