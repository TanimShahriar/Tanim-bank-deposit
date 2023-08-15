//step-1:  add - click event handler with the submit button
document.getElementById('btnSubmit').addEventListener('click', function () {
  //step-2: get the email adderess inside the email field
  //always remember to use .value to get text from an input field
  const emailField = document.getElementById('userEmail');
  const email = emailField.value;
  //step-3: get password
  //set id on the html element
  //get the element by id
  //get the value from the element
  const passwordField = document.getElementById('userPassword');
  const password = passwordField.value;

  //Danger: we will not use this method. using this for just now 😢😢
  //step-4: verify email and password
  if (email === 'tanim.shahriar@gmail.com' && password === 'Tanim4461') {
    window.location.href = 'bank.html'
  } else {
    alert('invalid user')
  }
})