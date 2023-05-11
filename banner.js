document.addEventListener('DOMContentLoaded', function() {
    // Set the start and end dates and times
    var startDate = new Date('May 9, 2023 10:00:00').getTime(); // start time
    var endDate = new Date('May 9, 2023 13:55:00').getTime(); // end time
  
    // Get the banner element
    var banner = document.getElementById('banner');
  
    // Update the banner every second
    var interval = setInterval(function() {
      // Get the current date and time
      var currentDate = new Date().getTime();
  
      // Calculate the duration between the start and end times
      var duration = endDate - startDate;
  
      // Calculate the remaining time until the end time
      var remaining = endDate - currentDate;
  
      // If the end time is in the future, show the banner
      if (remaining > 0) {
        // Convert the remaining time to days, hours, minutes, and seconds
        var days = Math.floor(remaining / (1000 * 60 * 60 * 24));
        var hours = Math.floor((remaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((remaining % (1000 * 60)) / 1000);
  
        // Set the text of the banner to the remaining time
        banner.innerHTML = 
        '<h3>Clothes on sale for 15% off.</h3>' + '<p>This offer ends in ' + days + ' days, ' + hours + ' hours, ' + minutes + ' minutes, and ' + seconds + ' seconds.</p>'; // edit the beginning of the row to say what you want to say
        banner.classList.remove('d-none'); // Show the banner
      } else {
        // Clear the interval
        clearInterval(interval);
  
        // Hide the banner
        banner.classList.add('d-none');
      }
    }, 1000); // Update every second (1000 milliseconds)
  });
  