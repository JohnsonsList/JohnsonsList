import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Table, Header, Loader } from 'semantic-ui-react';
import { Feedback } from '/imports/api/Feedback/Feedback';
import FeedbackList from '/imports/ui/components/FeedbackList';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import Footer from '../components/Footer';
import TitleBar from '../components/TitleBar';

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class FeedbackAdmin extends React.Component {

  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  /** Render the page once subscriptions have been received. */
  renderPage() {
    const pageStyle = { paddingTop: '20px', paddingBottom: '300px' };
    return (
        <div className="background">
          <TitleBar/>
          <Container style={pageStyle}>
            <Header as="h2" textAlign="center">User Submitted Feedback</Header>
            <Table celled>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Thoughts on website</Table.HeaderCell>
                  <Table.HeaderCell>Description of why they think that</Table.HeaderCell>
                  <Table.HeaderCell>User who submitted</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {this.props.feedback.map((feedback) => <FeedbackList key={feedback._id} feedback={feedback}/>)}
              </Table.Body>
            </Table>
          </Container>
          <Footer/>
        </div>
    );
  }
}

/** Require an array of Stuff documents in the props. */
FeedbackAdmin.propTypes = {
  feedback: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe('FeedbackAdmin');
  return {
    feedback: Feedback.find({}).fetch(),
    ready: subscription.ready(),
  };
})(FeedbackAdmin);
