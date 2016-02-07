Template.ideasList.helpers({
  ideas: function() {
    return Ideas.find({}, {sort : {score: -1}});
  }
});
