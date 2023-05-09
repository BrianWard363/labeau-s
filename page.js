$(document).ready(function() {
  // Use $.get() to load the header and footer files asynchronously with the async attribute
  var headerRequest = $.get('header.html', { async: true });
  var footerRequest = $.get('footer.html', { async: true });
  // Use $.when() to wait for both requests to complete
  $.when(headerRequest, footerRequest).done(function(header, footer) {
    // Append the header and footer to the page
    $('#header').html(header[0]);
    $('#footer').html(footer[0]);
  });
});
