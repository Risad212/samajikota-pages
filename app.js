
// /* =====================================================
// // 		toggle collapse button
// ===================================================== */
$(document).ready(function () {
  $('.sabtn').click(function (e) {
      $('#accoding').stop(true).slideToggle();
  });
  $(document).click(function (e) {
      if (!$(e.target).closest('.sabtn, #accoding').length) {
          $('#accoding').stop(true).slideUp();
      }
  });
});

// close icons box when click on remove Icon
$(document).ready(function(){
  $(".removeicon").click(function(){
    $("#accoding").slideUp()
  });
});