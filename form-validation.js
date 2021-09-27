$(function () {
  $('#submit-form').validate({
    rules: {
      name: {
        required: true,
        minlength: 5
      },
      email: {
        required: true,
        email: true
      },
      subject: {
        required: true,
        minlength: 10
      }
    },
    messages: {
      name: {
        minlength: 'Enter Minimum of 5 characters'
      },
      email: {
        email: 'Enter a Valid Email'
      },
      subject: {
        minlength: 'Enter Minimum of 10 characters '
      }
    }
  })
})
