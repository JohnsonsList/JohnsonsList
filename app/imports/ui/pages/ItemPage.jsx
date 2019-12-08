import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import { Listings } from '/imports/api/listings/Listing';
import { withTracker } from 'meteor/react-meteor-data';
import React, { Component } from 'react';
import { Card, Container, Image, Label, Rating } from 'semantic-ui-react';
import TitleBar from '../components/TitleBar';
import Footer from '../components/Footer';

class ItemPage extends Component {
 render() {
   return (
   <div>
    <TitleBar/>
    <div id='item-page'>
      <div id='save-icon'>
          <Rating size='huge' icon='star' defaultRating={0} maxRating={1} />
      </div>
    <Container>
      <Card
          className='limitCard'
          centered>
        <Image
            centered
            className='limit'
            size='small'
            src={this.props.listings.image}
        />
        <Card.Content>
          <Card.Header style={{ paddingBottom: '10px' }}>{this.props.listings.name}</Card.Header>
          <Card.Meta>Condition: {this.props.listings.condition}</Card.Meta>
          <Card.Meta>Price: ${this.props.listings.price}</Card.Meta>
          <Card.Meta>Contact Info: {this.props.listings.email}</Card.Meta>
          <Card.Meta style={{ paddingTop: '10px' }}>
            <Label color='teal'>{this.props.listings.categories}</Label>
          </Card.Meta>
        </Card.Content>
        <Card.Content extra>
        </Card.Content>
      </Card>
    </Container>
    </div>
    <Footer/>
   </div>
    );
  }
}

/** Require an array of Stuff documents in the props. */
ItemPage.propTypes = {
  listings: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe('Listings');
  return {
    listings: Listings.find({}).fetch(),
    ready: subscription.ready(),
  };
})(ItemPage);