$(function() {

   $.deck.defaults.countNested = false;
   $.deck('.slide');

   $('#style-themes').change(function() {
      $('#style-theme-link').attr('href', $(this).val());
   });

   $('#transition-themes').change(function() {
      $('#transition-theme-link').attr('href', $(this).val());
   });

});
