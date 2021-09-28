$('#name-error-message').hide()
$('#email-error-message').hide()
$('#subject-error-message').hide()
$('#message-error-message').hide()

var error_name = false
var error_email = false
var error_subject = false
var error_message = false

$('#name').focusout(function () {
  check_name()
})

$('#email').focusout(function () {
  check_email()
})

$('#subject').focusout(function () {
  check_subject()
})

$('#message').focusout(function () {
  check_message()
})

function check_name () {
  var content = /^[a-zA-Z]*$/
  var name = $('#name').val()

  if (content.test(name) && name !== '') {
    $('#name_error_message').hide()
  } else {
    $('#name-error-message').html('Only Characters are allowed')
    $('#name-error-message').show()
    $('#name').css('border-bottom', '2px solid #F90A0A')
    error_name = true
  }
}

function check_email () {
  var content = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/
  var email = $('#email').val()
  if (content.test(email) && email !== '') {
    $('#email-error-message').hide()
  } else {
    $('#email-error-message').html('Enter a Valid Email')
    $('#email-error-message').show()
    $('#email').css('border-bottom', '2px solid #F90A0A')
    error_email = true
  }
}

function check_subject () {
  var subject = $('#subject').val()
  if (subject !== '') {
    $('#subject-error-message').hide()
  } else {
    $('#subject-error-message').html('Type a Subject')
    $('#subject-error-message').show()
    $('#subject').css('border-bottom', '2px solid #F90A0A')
    error_subject = true
  }
}
function check_message () {
  var message = $('#subject').val()
  if (message !== '') {
    $('#message-error-message').hide()
  } else {
    $('#message-error-message').html('Type a Message')
    $('#message-error-message').show()
    $('#message').css('border-bottom', '2px solid #F90A0A')
    error_subject = true
  }
}

function validator () {
  error_name = false
  error_email = false
  error_subject = false
  error_message = false

  check_name()
  check_email()
  check_subject()
  check_message()

  if (
    error_name === false &&
    error_email === false &&
    error_subject === false &&
    error_message === false
  ) {
    alert('Registration Successful')
    return true
  } else {
    alert('Please Check and Fill the Form')
    return false
  }
}
