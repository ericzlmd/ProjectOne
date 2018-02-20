// validation if main.js is working
window.onload = function() {
  alert("This is main.js ~ hi!");
}

$(document).ready(function() {
  $(".error").hide();
  
  $(".btn-submit").click(function() {
    $(".error").hide();

    // check email
    var email = $("#email").val();
    if(email == "") {
      $("label#lgn-email-error").show();
      $("input#email").focus();
      return false;
    }

    // check password
    var pass = $("#password").val();
    if(pass == "") {
      $("label#lgn-pass-error").show();
      $("input#password").focus();
      return false;
    }
  });
});

function checkPasswordLength(pwd) {
  check = false;
  if(pwd.length >= 8) {
     check = true;
  }
  return check;
}