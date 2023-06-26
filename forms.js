function submitForm(event) {
  event.preventDefault(); // Prevent form submission

  const form = event.target;
  const formData = new FormData(form);
  const url = 'https://formsubmit.co/d9a50db1ba50c5ce9ac9c61ab6bf414a';

  fetch(url, {
    method: 'POST',
    body: formData
  });

  return false;
}

document.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  // Perform actions based on form ID
  if (event.target.id === 'groups-form') {
    // Actions for groups-form
    // ...
  } else if (event.target.id === 'quit-application-form') {
    // Actions for quit-application-form
  } else if (event.target.id === 'application-form') {
    // Actions for application-form
    // ...
  }

  // Reset the form (optional)
  event.target.reset();

  // Display the success message
  var successMessage = document.getElementById('message');
  successMessage.style.display = 'flex'; // Change display to flex for centering the content
});

// Update the showPopup function
function showPopup() {
  var popup = document.getElementById('message');
  popup.style.display = 'flex'; // Change display to flex for centering the content
}

// Update the closePopup function
function closePopup() {
  var popup = document.getElementById('message');
  popup.style.display = 'none';
}

// Example usage:
// Call the closePopup function when the close button is clicked
document.getElementById('close-button').addEventListener('click', closePopup);

