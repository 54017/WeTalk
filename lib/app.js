if (Meteor.isClient) {
	Meteor.subscribe("onliners");
	Meteor.subscribe("chatCollection");
}
chatCollection = new Meteor.Collection("chatColl");
onlineUsers = new Meteor.Collection("online");

chatCollection.allow({
	insert: function() {
		return true;
	}
});

onlineUsers.allow({
	insert: function() {
		return true;
	},
	remove: function() {
		return true;
	}
});
