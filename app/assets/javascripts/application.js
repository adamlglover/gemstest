// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs

//= require nested_form
 
//= require number-helpers


$(function() {
  $('.popover').popover({ trigger: 'click' });

  // disable scroll on html5 input type number
  $('form').on('focus', 'input[type=number]', function (e) {
    $(this).on('mousewheel.disableScroll', function (e) {
      e.preventDefault();
    });
  });

  $('form').on('blur', 'input[type=number]', function (e) {
    $(this).off('mousewheel.disableScroll')
  });

  // We have duplicated search forms. Let's make the one in the navbar trigger the main one.
  $('form#header_mixed_search_form').on('submit', function(ev) {
    var $this     = $(this),
        main_form = $('.mixed_search_form');

    if (main_form.length > 0) {
      ev.preventDefault();

      // Copy my inputs into the main form and submit it
      $this.find('input').each(function() {
        main_form.find('input[name="'+$(this).attr('name')+'"]').val($(this).val())
      })
      main_form.submit()
    } else { return true };
  })
});
