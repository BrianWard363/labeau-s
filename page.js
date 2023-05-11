function loadPage() {
  $(document).ready(function() {
    // Use $.ajax() to load the header and footer files asynchronously
    var headerRequest = $.ajax({
      url: 'header.html',
      method: 'GET',
      async: true
    });
    var footerRequest = $.ajax({
      url: 'footer.html',
      method: 'GET',
      async: true
    });
    // Use $.when() to wait for both requests to complete
    $.when(headerRequest, footerRequest).done(function(header, footer) {
      // Append the header and footer to the page
      $('#header').html(header[0]);
      $('#footer').html(footer[0]);
    });
  });
}

// Load the page when jQuery is fully loaded
if (window.jQuery) {
  loadPage();
} else {
  // If jQuery is not yet loaded, wait for the 'load' event
  window.addEventListener('load', loadPage);
}
