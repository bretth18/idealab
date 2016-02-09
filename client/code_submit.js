Template.ideasSubmit.events({
  'submit .codeSubmitForm': function(event) {
    event.preventDefault();
    var idea = event.target.idea.value; //get idea value

    //check if idea is empty
    if(idea == "") {
      alert("You can't insert an empty idea. Try to write something intelligent.");
    }
    else {

      Meteor.call('ideaInsert', idea);
      Router.go('codeList');
    }
  }
});
