if (Meteor.isServer) {
  	Meteor.publish("onliners", function() {
  		return onlineUsers.find();
  	});
  	Meteor.publish("chatCollection", function() {
  		return chatCollection.find();
  	});

  	Meteor.methods({
  		removeUser: function (userName) {
  			onlineUsers.remove({
            				userOnline: userName
       			 })
  			console.log(userName);
  		}
	});
}