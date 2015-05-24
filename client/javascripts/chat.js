if (Meteor.isClient) {

Template["chat"].onRendered(function() {
    windowHeight = $(window).height();
    headerHeight = $('.header').height();
    inputHeight = $('.inputText').height();
    chatHeight = windowHeight - headerHeight - inputHeight - 25;
    $('.chatBody').height(chatHeight);

    $(document).on('focus', 'input', function(){
        $('.chatBody').animate({scrollTop: $('.chatBody')[0].scrollHeight}, 800);
    });
     $(window).on('beforeunload', function() {
        var userName = Session.get("userName");
        Meteor.call('removeUser', userName);
    });

     $(window).on( "pagecontainerremove", function() {
        var userName = Session.get("userName");
        Meteor.call('removeUser', userName);
    });

     $(window).on("pagehide",function(event){
        var userName = Session.get("userName");
        Meteor.call('removeUser', userName);
     });

     $('.chatInput').on('keypress',function(event){
            if(event.keyCode == "13")    
            {
                var text = $('.chatInput').val();
                if (text != "") {
                    chatCollection.insert({
                        userName: Session.get("userName"),
                        message: text
                    });
                    $('.chatBody').animate({scrollTop: $('.chatBody')[0].scrollHeight}, 800);
                }
                $('.chatInput').val('');
            }
    });
});

Template.chat.helpers({
    userNumber: function() {
        return onlineUsers.find().count();
    },
    messages: function() {
        return chatCollection.find();
    }
});

Template.chat.events({
    'click .send': function() {
        var text = $('.chatInput').val();
        if (text != "") {
            chatCollection.insert({
                userName: Session.get("userName"),
                message: text
        });
            $('.chatBody').animate({scrollTop: $('.chatBody')[0].scrollHeight}, 800);
    }
    $('.chatInput').val('');
    }
});

}
