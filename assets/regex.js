$(function(){
  $('#valid').click(function(){
    validFirstName = $('#firstName').val();
    validLastName = $('#lastName').val();
    validMail = $('#mail').val();
    validPhoneNumber = $('#phoneNumber').val();
    regexFirstName = /^[a-zA-Zéè\-\s]*$/;
    regexMail = /^[a-z0-9_.-]+@[a-z0-9_.-]+\.[a-z]{2,6}$/;
    regexPhoneNumber = /^0[1-9][0-9]{8}$/;
    if(regexFirstName.test(validFirstName)){
      alert('Your firstname is ok');
    } else {
      alert('Your firstname is NOT ok');
    }
    if(regexFirstName.test(validLastName)){
      alert('Your lastname is ok');
    } else {
      alert('Your lastname is NOT ok');
    }
    if(regexPhoneNumber.test(validPhoneNumber)){
      alert('Your phone number is ok');
    } else {
      alert('Your phone number is NOT ok');
    }
    if(regexMail.test(validMail)){
      alert('Your mail is ok');
    } else {
      alert('Your mail is NOT ok');
    }
  });
});
