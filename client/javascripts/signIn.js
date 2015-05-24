if (Meteor.isClient) {

  Template.signIn.onRendered(function() {
   
     $('input').on('keypress',function(event){
            if(event.keyCode == "13")    
            {
                var userName = $('#inputName').val();
                if (userName != "") {
                  Session.set('userName', userName);
                  onlineUsers.insert({
                    userOnline: userName
                  });
                }
            }
    });
});

  Template.signIn.events({
    'click button': function () {
      var userName = $('#inputName').val();
      if (userName != "") {
        Session.set('userName', userName);
        onlineUsers.insert({
          userOnline: userName
        });
      }
    }
  });
}