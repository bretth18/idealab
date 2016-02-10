Template.register.events({
  'submit #register-form' : function(e, t) {
    e.preventDefault();
    var email = t.find('#account-email').value;
    var password = t.find('#account-password').value;

    //validation

    //trim whitespace from email
    var trimInput = function(val) {
      return val.replace(/^\s*|\s*$/g, "");
    }
    var email = trimInput(email);

    //validate password to be atleast 6 chars
    var isValidPassword = function(val, field) {
      if(val.length >= 6){
        return true;
      }
      else {
        Session.set('displayMessage', 'Error: Too Short.')
        return false;
      }
    }

    //if(isValidPassword(userPassword))

    Accounts.createUser({email: email, password: password}),
    function(err){
      if (err) {
        //inform that creation failed
      }
      else{
        //success, user account logged in
      }
    }
    return false;
  }
});
