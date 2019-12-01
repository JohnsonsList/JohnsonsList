import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Loader } from 'semantic-ui-react';
import SOPBar from '../components/SOPBar';

/** After the user clicks the "Signout" link in the NavBar, log them out and display this page. */
export default class Signout extends React.Component {
  render() {
    Meteor.logout();
    return (
        <div>
          <SOPBar/>
          <div id='out-page'>
          <div id='signed-out'>
            <Container>
              <div id='redirect'>
        <p>You have been signed out.</p>
        <p>Redirecting you back to the home page...</p>
              </div>
        <Loader large active inline='centered' />
            </Container>
          </div>
          {/* code below -- refreshes the page to be redirected after a certain amount of time */}
          <meta httpEquiv="refresh" content = "3; url=/#/" />
        </div>
        </div>
    );
  }
}
