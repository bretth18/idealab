Meteor.methods({
  ideaInsert: function(idea) {
    var postId = Ideas.insert({
      idea : idea,
      score : 0,
      submitted : new Date(),
    });
  },
  commentInsert: function(comment) {
    Comments.insert(comment);
  }
});
