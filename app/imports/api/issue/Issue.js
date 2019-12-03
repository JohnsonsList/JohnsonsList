import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

/** Define a Mongo collection to hold the data. */
const Issues = new Mongo.Collection('Issues');

/** Define a schema to specify the structure of each document in the collection. */
const IssueSchema = new SimpleSchema({
  problem: String,
  description: String,
  user: String,
}, { tracker: Tracker });

/** Attach this schema to the collection. */
Issues.attachSchema(IssueSchema);

/** Make the collection and schema available to other code. */
export { Issues, IssueSchema };
