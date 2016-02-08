// Template.ideaItem.helpers({
//   commentsCount: function() {
//     return Comments.find({postId:this._id}).count();
//   }
// });
//
// //handles events
// Template.ideaItem.events({
//   'click':function() {
//   Session.set('selected_idea', this._id);
// },
//   'click a.yes':function() {
//     if(Meteor.user()) {
//       var postId = Ideas.findOne({_id:this._id})
//       if ($.inArray(Meteor.userId(), postId.voted) !== -1) {
//         return "Voted";
//       } else {
//         var ideaId = Session.get('selected_idea');
//         Ideas.update(ideaId, {$inc: {'score': 1 }});
//         Ideas.update(ideaId, {$addToSet: {voted : Meteor.userId()}});
//       }
//    }
// },
//   'click a.no':function() {
//     if (Meteor.user()) {
//       var postId = Ideas.findOne({_id:this._id})
//       if ($.inArray(Meteor.userId(), postId.voted) !== -1) {
//         return "Ok";
//       } else {
//         var ideaId = Session.get('selected_idea');
//         Ideas.update(ideaId, {$inc: {'score': -1 }});
//         Ideas.update(ideaId, {$addToSet: {voted : Meteor.userId()}});
//         if (postId.score <= -3) {
//           Ideas.remove({_id:this._id})
//         }
//       }
//     }
//   }
// });
Template.ideaItem.events({
 	'click':function() {
 		Session.set('selected_idea', this._id);
 	},

 	'click a.yes':function() {
 		if(Meteor.user()) {
 			var postId = Ideas.findOne({_id:this._id})
 			if ($.inArray(Meteor.userId(), postId.voted) !== -1) {
 				console.log('User already voted');
 			} else {
 				var ideaId = Session.get('selected_idea');
 				console.log('Voting');
 				Ideas.update(ideaId, {$inc: {'score': 1 }});
 				Ideas.update(ideaId, {$addToSet: {voted : Meteor.userId()}});
 			}
 		}
 	},

  //TODO: user can only delete posts that they have created
  //TEMPORARY DELETE FUNCTION 
  'click a.delete':function() {
    if (Meteor.user()) {
      console.log('user post' _id:this._id 'removed')
      Ideas.remove({_id:this._id})
    }
  },

 	'click a.no':function() {
 		if (Meteor.user()) {
 			var postId = Ideas.findOne({_id:this._id})
 			if ($.inArray(Meteor.userId(), postId.voted) !== -1) {
 				console.log('User already voted');
 			} else {
 				var ideaId = Session.get('selected_idea');
 				console.log('Voting');
 				Ideas.update(ideaId, {$inc: {'score': -1 }});
 				Ideas.update(ideaId, {$addToSet: {voted : Meteor.userId()}});
 				if (postId.score <= -3) {
 					console.log('delete');
 					Ideas.remove({_id:this._id})
 				}
 			}
 		}
 	}
 });

 Template.ideaItem.helpers({
 	commentsCount: function() {
 		return Comments.find({postId:this._id}).count();
 	}
 });
