import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Table, Header, Loader } from 'semantic-ui-react';
import { Issues } from '/imports/api/issue/Issue';
import IssuesList from '/imports/ui/components/IssuesList';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import TitleBar from '../components/TitleBar';

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class IssueAdmin extends React.Component {

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
          <NavBar/>
          <Container style={pageStyle}>
            <Header as="h2" textAlign="center">User Submitted Complaints</Header>
            <Table celled>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Issue</Table.HeaderCell>
                  <Table.HeaderCell>Description of issue</Table.HeaderCell>
                  <Table.HeaderCell>Who is issue is about</Table.HeaderCell>
                  <Table.HeaderCell>User who submitted</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {this.props.issue.map((issue) => <IssuesList key={issue._id} issue={issue}/>)}
              </Table.Body>
            </Table>
          </Container>
          <Footer/>
        </div>
    );
  }
}

/** Require an array of Stuff documents in the props. */
IssueAdmin.propTypes = {
  issue: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe('IssueAdmin');
  return {
    issue: Issues.find({}).fetch(),
    ready: subscription.ready(),
  };
})(IssueAdmin);
