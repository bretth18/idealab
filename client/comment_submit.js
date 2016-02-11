Template.commentSubmit.events({
  'submit form': function(e, template) {
    e.preventDefault();
    var $body = $(e.target).find('[name=body]');
    var comment = {
      body: $body.val(),
      postId: template.data._id,
      submitted: new Date(),
      user: Meteor.userId()
    };
    //define our comment user to be appended
    var commentUser = e.target.Meteor.userId();

    var commentBody = e.target.body.value;
    // Check if the comment is not empty
    if (commentBody == "") {
      alert("You can’t insert empty comment. Try to comment something nice instead.")
    } else {
      //call our commentInsert function to append data
      Meteor.call('commentInsert', comment, Meteor.userId());
      //call our commentUserInsert to append userId to the individual comment thread.
      Meteor.call('commentUserInsert', Meteor.userId());
    }
    // clear input field
    e.target.body.value = "";
  }
});
