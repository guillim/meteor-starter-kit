Router.map(function() {
  this.route("home", {
    path: "/",
    layoutTemplate: "homeLayout"
  });
  return this.route("dashboard", {
    path: "/dashboard",
    waitOn: function() {
      return [subs.subscribe('posts')];
    },
    data: function() {
      return {
        posts: Posts.find({}, {
          sort: {
            createdAt: -1
          }
        }).fetch()
      };
    }
  });
});
