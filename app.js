
// /* =====================================================
// // 		toggle collapse button
// ===================================================== */
// $(document).ready(function(){
//     $("#accodingBtn").click(function(){
//       $("#accoding").slideToggle()
//     });
// });

// $(document).ready(function(){
//   $(".removeicon").click(function(){
//     $("#accoding").slideToggle()
//   });
// });
  

// // toggle in outsie of accdoing
// $(document).on('click', function(e) {
//    const container = $("#accoding");
  
//    if(!container.is(e.target) && container.has(e.target).length === 0){
//       container.hide();
//    }
// });

$(document).ready(function(){
  $(".accodingBtn").click(function(){
    $("#accoding").show()
  });
});


window.addEventListener('mouseup',function(event){
  var pol = document.querySelector('.collapse');
  console.log(pol)
  if(event.target != pol && event.target.parentNode != pol){
      pol.style.display = 'none';
  }
}); 