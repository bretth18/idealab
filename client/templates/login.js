//
// Template.name.helpers({
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

//client side processing for login
Template.login.events({
  "click #login": function() {
    var username = $('login-username').val();
    var password = $('login-password').val();

    Meteor.loginWithPassword(username, password, function(error) {
        if(error) alert(error);
      });
   }
});
