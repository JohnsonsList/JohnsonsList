import React from 'react';
import { Header, Loader } from 'semantic-ui-react';
import SOPBar from '../components/SOPBar';

/** Render a Not Found page if the user enters a URL that doesn't match any route. */
class Deleted extends React.Component {
  render() {
    const pageStyle = { paddingTop: '100px', paddingBottom: '50px' };
    return (
        <div style={pageStyle}>
          <SOPBar/>
          <Header as="h2" textAlign="center">
            <p>You&apos;ve successfully deleted the item!</p>
            <p>Redirecting you to back to the store page...</p>
          </Header>
          <Loader large active inline='centered' />
          <meta httpEquiv="refresh" content = "5; url=/#/store" />
        </div>
    );
  }
}

export default Deleted;
