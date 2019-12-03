import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Loader, Card, Image } from 'semantic-ui-react';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { _ } from 'meteor/underscore';
import { categoriesName, Categories } from '../../api/categories/Categories';
import { stuffsName } from '../../api/stuff/Stuff';
import { StuffCategories, stuffCategoriesName } from '../../api/stuff/stuffCategories';

/** Returns the Profiles and Projects associated with the passed Interest. */
function getCategoriesData(name) {
  const stuff = _.pluck(StuffCategories.find({ categories: name }).fetch(), 'stuff');
  // console.log(_.extend({ }, data, { interests, projects: projectPictures }));
  return _.extend({ }, { name, stuff });
}

/** Component for layout out an Interest Card. */
const MakeCard = (props) => (
    <Card>
      <Card.Content>
        <Card.Header style={{ marginTop: '0px' }}>{props.categories.name}</Card.Header>
      </Card.Content>
      <Card.Content extra>
        {_.map(props.categories.stuff, (p, index) => <Image key={index} circular size='mini' src={p}/>)}
      </Card.Content>
    </Card>
);

MakeCard.propTypes = {
  categories: PropTypes.object.isRequired,
};

/** Renders the Interests as a set of Cards. */
class CategoriesPage extends React.Component {

  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  /** Render the page once subscriptions have been received. */
  renderPage() {
    const categories = _.pluck(Categories.find().fetch(), 'name');
    const categoriesData = categories.map(categories => getCategoriesData(categories));
    return (
        <Container>
          <Card.Group>
            {_.map(categoriesData, (categories, index) => <MakeCard key={index} categories={categories}/>)}
          </Card.Group>
        </Container>
    );
  }
}

Categories.propTypes = {
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  // Ensure that minimongo is populated with all collections prior to running render().
  const sub1 = Meteor.subscribe(stuffsName);
  const sub2 = Meteor.subscribe(stuffCategoriesName);
  const sub3 = Meteor.subscribe(categoriesName);
  return {
    ready: sub1.ready() && sub2.ready() && sub3.ready(),
  };
})(CategoriesPage);
