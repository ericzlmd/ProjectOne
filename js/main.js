// validation if main.js is working
// window.onload = function() {
//   alert("This is main.js ~ hi!");
// }

$(document).ready(function() {
  $(".error").hide();
  

  // login.html form check
  $("#login-btn").click(function() {
    $(".error").hide();

    // email
    var email = $("#email").val();
    if(email == "") {
      $("label#lgn-email-error").show();
      $("input#email").focus();
      return false;
    }

    // password
    var pass = $("#password").val();
    if(pass == "") {
      $("label#lgn-pass-error").show();
      $("input#password").focus();
      return false;
    }
  });


  // register.html form check
  $("#register-btn").click(function() {
    $(".error").hide();

    // first name
    var fname = $("#firstname").val();
    if(fname == "") {
      $("label#reg-firstname-error").show();
      $("input#firstname").focus();
      return false;
    }

    // last name
    var lname = $("#lastname").val();
    if(lname == "") {
      $("label#reg-lastname-error").show();
      $("input#lastname").focus();
      return false;
    }

    // email
    var email = $("#email").val();
    if(email == "") {
      $("label#reg-email-error").show();
      $("input#email").focus();
      return false;
    }

    // password
    var pass = $("#password").val();
    if(pass == "") {
      $("label#reg-pass-error").show();
      $("input#password").focus();
      return false;
    }

  });

  // feedback.html form validation
  $("#feedback-btn").click(function() {
    $(".error").hide();

    // email
    var email = $("#email").val();
    if(email == "") {
      $("label#fb-email-error").show();
      $("input#email").focus();
      return false;
    }

    // textarea
    var txtarea = $("#fb-textarea").val();
    if(txtarea == "") {
      $("label#fb-textarea-error").show();
      $("input#fb-textarea").focus();
      return false;
    }
  });
});

// checkPasswordLength() - password user input must be > 8 characters
function checkPasswordLength(pwd) {
  check = false;
  if(pwd.length >= 8) {
     check = true;
  }
  return check;
}

// checkNameEntryLength() - name entries on register.html should be > 3 characters
function checkNameEntryLength(name) {
  check = false;
  if(name.length > 3) {
    check = true;
  }
  return check;
}