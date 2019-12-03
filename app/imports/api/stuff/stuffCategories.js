import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

/** The name of the collection and the global publication. */
const stuffCategoriesName = 'StuffCategories';

/** Define a Mongo collection to hold the data. */
const StuffCategories = new Mongo.Collection(stuffCategoriesName);

/** Define a schema to specify the structure of each document in the collection. */
const StuffCategorySchema = new SimpleSchema({
  categories: {
    type: String,
    allowedValues: ['clothing', 'dormitory', 'electronics', 'supplies'],
    defaultValue: 'clothing',
  },
}, { tracker: Tracker });

/** Attach this schema to the collection. */
StuffCategories.attachSchema(StuffCategorySchema);

/** Make the collection and schema available to other code. */
export { StuffCategories, StuffCategorySchema, stuffCategoriesName };
