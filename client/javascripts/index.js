if (Meteor.isClient) {
  Template["index"].onCreated(function() {
    Session.set('userName', '');
  });

  Template["index"].helpers({
    isLogIn: function () {
      return Session.get('userName');
    }
  });
}