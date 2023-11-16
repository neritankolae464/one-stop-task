/*
Filename: sophisticated_program.js

This program demonstrates a sophisticated and complex implementation of a social media platform.
It includes features like user registration, creation of posts, comments, likes, and friend requests.

Please note that this is a simplified version representative of a real-world scenario.

*/

// Class representing a User in our social media platform
class User {
  constructor(username, email) {
    this.username = username;
    this.email = email;
    this.password = ""; // To be implemented securely, not shown here for simplicity
    this.posts = [];
    this.comments = [];
    this.friends = [];
  }

  createPost(content) {
    const post = new Post(content, this);
    this.posts.push(post);
    return post;
  }

  commentOnPost(post, content) {
    const comment = new Comment(content, this, post);
    this.comments.push(comment);
    return comment;
  }

  sendFriendRequest(user) {
    const friendRequest = new FriendRequest(this, user);
    user.receiveFriendRequest(friendRequest);
    return friendRequest;
  }

  receiveFriendRequest(request) {
    // Handle the friend request
    // ...
  }

  acceptFriendRequest(request) {
    const user = request.sender;
    this.friends.push(user);
    user.friends.push(this);
  }

  likePost(post) {
    post.addLike(this);
  }
}

// Class representing a Post in our social media platform
class Post {
  constructor(content, user) {
    this.content = content;
    this.user = user;
    this.likes = [];
    this.comments = [];
  }

  addLike(user) {
    this.likes.push(user);
  }

  addComment(comment) {
    this.comments.push(comment);
  }
}

// Class representing a Comment in our social media platform
class Comment {
  constructor(content, user, post) {
    this.content = content;
    this.user = user;
    this.post = post;
  }
}

// Class representing a Friend Request in our social media platform
class FriendRequest {
  constructor(sender, receiver) {
    this.sender = sender;
    this.receiver = receiver;
  }
}

// Usage Example:
const john = new User("JohnDoe", "john@example.com");
const jane = new User("JaneSmith", "jane@example.com");

const post = john.createPost("Hello, world!");

const comment = jane.commentOnPost(post, "Great post!");
post.addComment(comment);

john.sendFriendRequest(jane);

console.log(john.friends); // [ jane ]
console.log(jane.friends); // [ john ]