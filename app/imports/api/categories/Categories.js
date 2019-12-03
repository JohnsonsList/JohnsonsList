import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

/** The name of the collection and the global publication. */
const categoriesName = 'Categories';

/** Define a Mongo collection to hold the data. */
const Categories = new Mongo.Collection(categoriesName);

/**
 * Define a schema to specify the structure of each document in the collection.
 * Names must be unique.
 * */
const CategorySchema = new SimpleSchema({
  name: { type: String, index: true, unique: true },
}, { tracker: Tracker });

/** Attach this schema to the collection. */
Categories.attachSchema(CategorySchema);

/** Make the collection and schema available to other code. */
export { Categories, CategorySchema, categoriesName };
