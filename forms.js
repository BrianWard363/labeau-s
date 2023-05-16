function submitForm(event) {
  event.preventDefault(); // Prevent form submission

  var form = event.target; // Get the form element
  var formId = form.id; // Get the form ID

  // Submit the form
  form.submit();

  // Clear the form fields after a delay of 1 second (1000 milliseconds)
  setTimeout(function() {
    form.reset();
  }, 1000);
}
