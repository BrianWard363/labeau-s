function submitForm(formId) {
    event.preventDefault(); // Prevent form submission
    
    // Submit the form
    document.getElementById(formId).submit();
    
    // Clear the form fields after a delay of 1 second (1000 milliseconds)
    setTimeout(function() {
      document.getElementById(formId).reset();
    }, 1000);
  }