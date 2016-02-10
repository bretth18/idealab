Template.register.events({
  'submit #register-form' : function(e, t) {
    e.preventDefault();
    var email = t.find('#account-email').value;
    var password = t.find('#account-password').value;

    Accounts.createUser({email: email, password: password}),
    function(err){
      if (err) {
        //inform that creation failed
      }
      else{
        //success, user account logged in
      }
    });
    return false;
  }
});
