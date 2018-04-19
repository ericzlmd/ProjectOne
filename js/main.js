// validation if main.js is working
window.onload = function() {
  //alert("This is main.js ~ hi!");
}

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
	var error = document.getElementById("reg-firstname-error");
    var fname = $("#firstname").val();
    if(fname == "") {
		error.innerHTML = "This Field is Required";
		$("label#reg-firstname-error").show();
		$("input#firstname").focus();
      return false;
    }
	else if(fname.length < 3){
		error.innerHTML = "Minimum 3 characters";
		$("label#reg-firstname-error").show();
		$("input#firstname").focus();
      return false;
	}
	else if(fname.length > 16){
		error.innerHTML = "Maximum 16 characters";
		$("label#reg-firstname-error").show();
		$("input#firstname").focus();
		return false;
	}
	else{
		//FIELD OK
		//PHP HERE
	}

    // last name
	var error = document.getElementById("reg-lastname-error");
    var lname = $("#lastname").val();
    if(lname == "") {
		error.innerHTML = "This Field is Required";
		$("label#reg-lastname-error").show();
		$("input#lastname").focus();
      return false;
    }
	else if(lname.length < 2){
		error.innerHTML = "Minimum 2 characters";
		$("label#reg-lastname-error").show();
		$("input#lastname").focus();
      return false;
	}
	else if(lname.length > 16){
		error.innerHTML = "Maximum 16 characters";
		$("label#reg-lastname-error").show();
		$("input#lastname").focus();
		return false;
	}
	else{
		//FIELD OK
		//PHP HERE
	}

    // email
	
    var error = document.getElementById("reg-email-error");
	var email = $("#email").val();
    if(email == "") {
		error.innerHTML = "This Field is Required";
		$("label#reg-email-error").show();
		$("input#email").focus();
      return false;
    }
	else if(!validateEmail(email)){
		error.innerHTML = "Invalid Email";
		$("label#reg-email-error").show();
		$("input#email").focus();
      return false;
	}
	else{
		//FIELD OK
		//PHP HERE
	}
	
function validateEmail(email) {
	var regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return regex.test(email);
}

function validatePassword(password) {
	var regex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])$/;
	return regex.test(password);
}	


    // password
	
	var error = document.getElementById("reg-pass-error");
    var pass = $("#password").val();
	
    if(pass == "") {
		error.innerHTML = "This Field is Required";
      $("label#reg-pass-error").show();
      $("input#password").focus();
      return false;
    }
	else if(pass.length < 8){
		error.innerHTML = "Minimum 8 characters";
		$("label#reg-pass-error").show();
		$("input#pass").focus();
      return false;
	}
	else if(pass.length > 16){
		error.innerHTML = "Maximum 16 characters";
		$("label#reg-pass-error").show();
		$("input#pass").focus();
		return false;
	}
	else if(!validatePassword(pass)){
		error.innerHTML = "Must contain at least:" 
								+ "<br />" + "*1 upper case letter" 
								+ "<br />" + "*1 lower case letter"
								+ "<br />" + "*1 digit 0-9"
								+ "<br />" + "*1 special character";
		$("label#reg-pass-error").show();
		$("input#pass").focus();
		return false;
	}
	else{
		//FIELD OK
		//PHP HERE
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
	
	// radiofeed
	var radiof = $("#radiofeed").val();
    if(radiof == "") {
      $("label#fb-radiofeed-error").show();
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
