document.addEventListener("DOMContentLoaded", function() {

  var signIn = document.querySelector('.signin');
  var close = document.querySelector('.close');
  var submit = document.querySelector('.submit');
  // var error = document.querySelector('.error');
  var modal = document.querySelector('.modal');
  var button = document.querySelector('button');
  var inputs = document.querySelectorAll('input');

  signIn.addEventListener('click', function(e) {
      modal.style.display = 'block';
  });

  close.addEventListener('click',  function(e) {
    modal.style.display = 'none';
  });

  submit.addEventListener('click', function(e) {
    inputs.forEach(function(input) {
	     input.classList.add('error');
    });
  });

    inputs.forEach(function(input) {
      input.addEventListener('focus', function(e){
        input.classList.remove('error');
      });
    });

});


// When the user presses the .signin button, display the modal window
// When the user presses the .close button, hide the modal window
// When the user presses the .submit button, add an .error class to both input elements
// When the user puts their cursor in one of the input fields, remove the .error class
// (Bonus) Allow the user to click the .modal to close itself
// Tricky, consider what happens when two elements that are overlapping are both waiting for a click
// Things to consider:
//
// How do you select a CSS element by "name" attribute?
// Can you create the animation using just CSS? (you don't have to do it, just consider how)
