//mongodb
Ideas = new Mongo.Collection('ideas');
Comments = new Mongo.Collection("comments");

//define routes
Router.route('/', {name: 'ideasList'})
Router.route('/submit', {name: 'ideasSubmit'});
Router.route('/login', {name: 'accounts'});
Router.route('/ideas/:_id', {
  name: 'ideaPage',
  data: function() {
    return Ideas.findOne(this.params._id);
  }
});
