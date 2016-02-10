Template.login.events({
  'submit #login-form' : function(e, t){
    e.preventDefault();
    //get input field values
    var email = t.find('#login-email').value;
    var password = t.find('#login-password').value;

    //assuming validation passes we pass to meteor.login func
    Meteor.loginWithPassword(email, password, function(err){
      if(err)
        //user not found
      else
        //user logged in
    });
    return false;
  }
});
