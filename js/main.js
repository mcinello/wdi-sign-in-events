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
