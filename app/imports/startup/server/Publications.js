import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import { Listings } from '../../api/listings/Listing';
import { Issues } from '../../api/issue/Issue';
import { Feedback } from '../../api/Feedback/Feedback';
import { StudentData } from '../../api/studentdata/StudentData.js';
import { EnrollmentData } from '../../api/enrollmentdata/EnrollmentData.js';

/** This subscription publishes only the documents associated with the logged in user */
Meteor.publish('Listings', function publish() {
  if (this.userId) {
    return Listings.find();
  }
  return this.ready();
});

Meteor.publish('MyListings', function publish() {
  if (this.userId) {
    const username = Meteor.users.findOne(this.userId).username;
    return Listings.find({ owner: username });
  }
  return this.ready();
});

/** This subscription publishes all documents regardless of user, but only if the logged in user is the Admin. */
Meteor.publish('ListingsAdmin', function publish() {
  if (this.userId && Roles.userIsInRole(this.userId, 'admin')) {
    return Listings.find();
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

Meteor.publish('StudentData', function publishStudentData() {
  return StudentData.find();
});

Meteor.publish('EnrollmentData', function publishEnrollmentData() {
  return EnrollmentData.find();
});
