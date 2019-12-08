import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Table, Header, Loader } from 'semantic-ui-react';
import { Listings } from '/imports/api/listings/Listing';
import StuffItemAdmin from '/imports/ui/components/StuffItemAdmin';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import Footer from '../components/Footer';
import TitleBar from '../components/TitleBar';

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class ListingsAdmin extends React.Component {

  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  /** Render the page once subscriptions have been received. */
  renderPage() {
    const pageStyle = { paddingTop: '100px', paddingBottom: '100px' };
    return (
        <div className="background">
          <TitleBar/>
          <Container style={pageStyle}>
            <Header as="h2" textAlign="center">All Listings</Header>
            <Table celled>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Name</Table.HeaderCell>
                  <Table.HeaderCell>Quantity</Table.HeaderCell>
                  <Table.HeaderCell>Condition</Table.HeaderCell>
                  <Table.HeaderCell>Owner</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {this.props.listings.map((listings) => <StuffItemAdmin key={listings._id} listings={listings}/>)}
              </Table.Body>
            </Table>
          </Container>
          <Footer/>
        </div>
    );
  }
}

/** Require an array of Stuff documents in the props. */
ListingsAdmin.propTypes = {
  listings: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe('ListingsAdmin');
  return {
    listings: Listings.find({}).fetch(),
    ready: subscription.ready(),
  };
})(ListingsAdmin);
