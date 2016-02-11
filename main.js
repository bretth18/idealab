//mongodb
Ideas = new Mongo.Collection('ideas');
codeIdeas = new Mongo.Collection('code');
Comments = new Mongo.Collection("comments");

// //define routes
// Router.route('/', {name: 'ideasList'})
// Router.route('/submit', {name: 'ideasSubmit'});
//
// //accounts routing
// Router.route('/login', {name: 'accounts'});
// Router.route('/sign-out', {
//   name:'sign-out',
//   onBeforeAction: function() {
//     AccountsTemplates.logout();
//     // gfk: notifications
//     // currently being appended on login??
//   //  Notifications.info('title', 'logged out');
//     Router.go('/');
//   }
// });
//
// //router for our code channel
// Router.route('/code', {name:'code'});
// Router.route('/codeSubmit', {name:'codeSubmit'});
// Router.route('/ideas/:_id', {
//   name: 'ideaPage',
//   data: function() {
//     return Ideas.findOne(this.params._id);
//   }
// });
