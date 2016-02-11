
// Template.userManagement.helpers({
//   create: function(){
//
//   },
//   rendered: function(){
//
//   },
//   destroyed: function(){
//
//   },
// });

//send our account signup information to our DB
Template.signup.events({
  "click #signup": function() {
    var user = {
      username: $('#signup-username').val(),
      password: $('#signup-password').val(),
      profile : {
        email : $('#signup-email').val(),
        name : $('#signup-fullname').val(),
      }
    };

    Accounts.createUser(user, function(error) {
      if (error) alert(error)
    });
  }
});
