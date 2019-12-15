import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

/** Define a Mongo collection to hold the data. */
const Feedbacks = new Mongo.Collection('Feedback');

/** Define a schema to specify the structure of each document in the collection. */
const FeedbackSchema = new SimpleSchema({
  thoughts: String,
  description: String,
  owner: String,
}, { tracker: Tracker });

/** Attach this schema to the collection. */
Feedbacks.attachSchema(FeedbackSchema);

/** Make the collection and schema available to other code. */
export { Feedbacks, FeedbackSchema };
