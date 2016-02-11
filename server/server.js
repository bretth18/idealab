Meteor.methods({
  ideaInsert: function(idea) {
    var postId = Ideas.insert({
      idea : idea,
      score : 0,
      submitted : new Date(),
      user : Meteor.userId(),
    });
  },
  commentInsert: function(comment) {
    Comments.insert(comment, Meteor.userId());
  }
  //server call to insert commentUser into our comment
  // commentUserInsert: function(comment) {
  //   Comments.insert(commentUser);
  // }
});
