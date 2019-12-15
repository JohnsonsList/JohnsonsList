import { Meteor } from 'meteor/meteor';
import { Listings } from '../../api/listings/Listing.js';
import { Issues } from '../../api/issue/Issue.js';
import { Feedbacks } from '../../api/Feedback/Feedback.js';

/* eslint-disable no-console */

/** Initialize the database with a default data document. */
function addListing(data) {
  console.log(`  Adding: ${data.name} (${data.owner})`);
  Listings.insert(data);
}

/** Initialize the collection if empty. */
if (Listings.find().count() === 0) {
  if (Meteor.settings.defaultData) {
    console.log('Creating default listings.');
    Meteor.settings.defaultData.map(data => addListing(data));
  }
}

/** Initialize the database with a default data document. */
function addIssue(data) {
  console.log(`  Adding: ${data.name} (${data.owner})`);
  Issues.insert(data);
}

/** Initialize the collection if empty. */
if (Issues.find().count() === 0) {
  if (Meteor.settings.defaultIssue) {
    console.log('Creating default issues.');
    Meteor.settings.defaultIssue.map(data => addIssue(data));
  }
}

/** Initialize the database with a default data document. */
function addFeedback(data) {
  console.log(`  Adding: ${data.name} (${data.owner})`);
  Feedbacks.insert(data);
}

/** Initialize the collection if empty. */
if (Feedbacks.find().count() === 0) {
  if (Meteor.settings.defaultFeedback) {
    console.log('Creating default feedback.');
    Meteor.settings.defaultFeedback.map(data => addFeedback(data));
  }
}
