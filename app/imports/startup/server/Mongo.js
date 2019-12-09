import { Meteor } from 'meteor/meteor';
import { Stuffs } from '../../api/stuff/Stuff.js';
import { Issues } from '../../api/issue/Issue.js';
import { Feedback } from '../../api/Feedback/Feedback.js';

/* eslint-disable no-console */

/** Initialize the database with a default data document. */
function addData(data) {
  console.log(`  Adding: ${data.name} (${data.owner})`);
  Stuffs.insert(data);
}

/** Initialize the collection if empty. */
if (Stuffs.find().count() === 0) {
  if (Meteor.settings.defaultData) {
    console.log('Creating default data.');
    Meteor.settings.defaultData.map(data => addData(data));
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
    console.log('Creating default data.');
    Meteor.settings.defaultIssue.map(data => addIssue(data));
  }
}

/** Initialize the database with a default data document. */
function addFeedback(data) {
  console.log(`  Adding: ${data.name} (${data.owner})`);
  Feedback.insert(data);
}

/** Initialize the collection if empty. */
if (Feedback.find().count() === 0) {
  if (Meteor.settings.defaultFeedback) {
    console.log('Creating default data.');
    Meteor.settings.defaultFeedback.map(data => addFeedback(data));
  }
}
