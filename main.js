//mongodb
Ideas = new Mongo.Collection('ideas');
codeIdeas = new Mongo.Collection('code');
Comments = new Mongo.Collection("comments");

//define routes
Router.route('/', {name: 'ideasList'})
Router.route('/submit', {name: 'ideasSubmit'});
Router.route('/login', {name: 'accounts'});
//router for our code channel
Router.route('/code', {name:'code'});
Router.route('/ideas/:_id', {
  name: 'ideaPage',
  data: function() {
    return Ideas.findOne(this.params._id);
  }
});
