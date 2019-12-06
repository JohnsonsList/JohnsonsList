import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import { Stuffs } from '../../api/stuff/Stuff';
import { Issues } from '../../api/issue/Issue';
import { Feedback } from '../../api/Feedback/Feedback';

/** This subscription publishes only the documents associated with the logged in user */
Meteor.publish('Stuff', function publish() {
  if (this.userId) {
    return Stuffs.find();
  }
  return this.ready();
});

Meteor.publish('MyListings', function publish() {
  if (this.userId) {
    const username = Meteor.users.findOne(this.userId).username;
    return Stuffs.find({ owner: username });
  }
  return this.ready();
});

/** This subscription publishes all documents regardless of user, but only if the logged in user is the Admin. */
Meteor.publish('StuffAdmin', function publish() {
  if (this.userId && Roles.userIsInRole(this.userId, 'admin')) {
    return Stuffs.find();
  }
  return this.ready();
});

/** This subscription publishes all documents regardless of user, but only if the logged in user is the Admin. */
Meteor.publish('IssueAdmin', function publish() {
  if (this.userId && Roles.userIsInRole(this.userId, 'admin')) {
    return Issues.find();
  }
  return this.ready();
});

/** This subscription publishes all documents regardless of user, but only if the logged in user is the Admin. */
Meteor.publish('FeedbackAdmin', function publish() {
  if (this.userId && Roles.userIsInRole(this.userId, 'admin')) {
    return Feedback.find();
  }
  return this.ready();
});
