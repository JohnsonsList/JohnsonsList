import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Header } from 'semantic-ui-react';
import SOBar from '../components/SOBar';

/** After the user clicks the "Signout" link in the NavBar, log them out and display this page. */
export default class Signout extends React.Component {
  render() {
    Meteor.logout();
    return (
        <div>
          <SOBar/>
      <Header as="h2" textAlign="center">
        <p>You are signed out.</p>
      </Header>
        </div>
    );
  }
}
