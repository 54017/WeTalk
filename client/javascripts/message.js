if (Meteor.isClient) {
Template.message.onRendered(function() {
     $('.chatBody').animate({scrollTop: $('.chatBody')[0].scrollHeight}, 800);
});

  Template["message"].helpers({
    left: function() {
        return this.userName != Session.get("userName");
    },
    system: function() {
    	return this.userName == "system";
    }
  });
}