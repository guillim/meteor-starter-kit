Posts.allow({
  insert: function(userId, doc) {
    return userId === doc.owner;
  },
  update: function(userId, doc, fields, modifier) {
    return userId === doc.owner;
  },
  remove: function(userId, doc) {
    return userId === doc.owner;
  }
});

Meteor.users.allow({
  update: function(userId, doc, fieldNames, modifier) {
    if (userId === doc._id && !doc.username && fieldNames.length === 1 && fieldNames[0] === 'username') {
      return true;
    } else {
      return false;
    }
  }
});
