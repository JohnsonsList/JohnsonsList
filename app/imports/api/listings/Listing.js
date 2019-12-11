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
  clothes: {
    type: Array,
    optional: true,
  },
  'clothes.$': {
    type: String,
    optional: true,
    allowedValues: ['men', 'women', 'top', 'bottom', 'shoes', 'accessories'],
  },
  electronics: {
    type: Array,
    optional: true,
  },
  'electronics.$': {
    type: String,
    optional: true,
    allowedValues: ['computers', 'photography', 'accessories', 'television', 'games'],
  },
  dormitory: {
    type: Array,
    optional: true,
  },
  'dormitory.$': {
    type: String,
    optional: true,
    allowedValues: ['self care', 'appliances', 'home decor', 'plants'],
  },
  outdoors: {
    type: Array,
    optional: true,
  },
  'outdoors.$': {
    type: String,
    optional: true,
    allowedValues: ['sports & fitness', 'camping & hiking', 'transportation', 'recreation'],
  },
  school: {
    type: Array,
    optional: true,
  },
  'school.$': {
    type: String,
    optional: true,
    allowedValues: ['stationery', 'backpacks', 'textbooks'],
  },
}, { tracker: Tracker });

/** Attach this schema to the collection. */
Listings.attachSchema(ListingsSchema);

/** Make the collection and schema available to other code. */
export { Listings, ListingsSchema };
