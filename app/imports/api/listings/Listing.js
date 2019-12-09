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
  },
  'clothes.$': {
    type: String,
    optional: true,
    allowedValues: ['men', 'women', 'top', 'bottom', 'shoes', 'accessories'],
  },
  electronics: {
    type: Array,
  },
  'electronics.$': {
    type: String,
    optional: true,
    allowedValues: ['computers', 'photography', 'accessories', 'television', 'games'],
  },
  dormitory: {
    type: Array,
  },
  'dormitory.$': {
    type: String,
    optional: true,
    allowedValues: ['self care', 'appliances', 'home decor', 'plants'],
  },
  outdoors: {
    type: Array,
  },
  'outdoors.$': {
    type: String,
    optional: true,
    allowedValues: ['sports & fitness', 'camping & hiking', 'transportation', 'recreation'],
  },
  school: {
    type: Array,
  },
  'school.$': {
    type: String,
    optional: true,
    allowedValues: ['stationery', 'backpacks'],
  },
}, { tracker: Tracker });

/** Attach this schema to the collection. */
Listings.attachSchema(ListingsSchema);

/** Make the collection and schema available to other code. */
export { Listings, ListingsSchema };
