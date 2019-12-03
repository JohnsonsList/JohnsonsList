import { Meteor } from 'meteor/meteor';
import { Stuffs } from '../../api/stuff/Stuff.js';
import { Issues } from '../../api/issue/Issue.js';

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
function addData2(data) {
  console.log(`  Adding: ${data.name} (${data.owner})`);
  Issues.insert(data);
}

/** Initialize the collection if empty. */
if (Issues.find().count() === 0) {
  if (Meteor.settings.defaultIssue) {
    console.log('Creating default data.');
    Meteor.settings.defaultIssue.map(data => addData2(data));
  }
}