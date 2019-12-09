import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

/** Define a Mongo collection to hold the data. */
const Listings = new Mongo.Collection('Listings');

/** Define a schema to specify the structure of each document in the collection. */
const ListingsSchema = new SimpleSchema({
  name: String,
  email: String,
  image: String,
  description: String,
  price: Number,
  owner: String,
  condition: {
    type: String,
    allowedValues: ['excellent', 'good', 'fair', 'poor'],
    defaultValue: 'good',
  },
  categories: {
    type: String,
    allowedValues: ['clothing', 'dormitory', 'electronics', 'school', 'outdoors'],
    defaultValue: 'clothing',
  },
}, { tracker: Tracker });

/** Attach this schema to the collection. */
Listings.attachSchema(ListingsSchema);

/** Make the collection and schema available to other code. */
export { Listings, ListingsSchema };
