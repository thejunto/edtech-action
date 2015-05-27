
/*smoothscroll*/
jQuery(document).ready(function(e) {
  e(".scroll").click(function(t) {
    t.preventDefault();
    e("html,body").animate({
      scrollTop: e(this.hash).offset().top
    }, 1e3)
  })
});


// magnificPopup for Mentors section
jQuery(function($) {
$('.overlay').magnificPopup({
  type: 'iframe',


  iframe: {
     markup: '<div class="mfp-iframe-scaler">'+
                '<div class="mfp-close"></div>'+
                '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
              '</div>'
  },
  callbacks: {
    markupParse: function(template, values, item) {
     values.title = item.el.attr('title');
    }
  }
});
});
