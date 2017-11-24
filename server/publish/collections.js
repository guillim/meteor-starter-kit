// You'll want to replace these functions. They publish the whole
// collection which is problematic after your app grows
Meteor.publish('posts', function() {
  return Posts.find();
});

Meteor.publish('user', function() {
  return Meteor.users.find({
    _id: this.userId
  });
});
