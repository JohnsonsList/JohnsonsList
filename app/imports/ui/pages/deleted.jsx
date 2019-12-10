import React from 'react';
import { Header, Loader } from 'semantic-ui-react';

/** Render a Not Found page if the user enters a URL that doesn't match any route. */
class NotFound extends React.Component {
  render() {
    const pageStyle = { paddingTop: '20px', paddingBottom: '50px' };
    return (
        <div style={pageStyle}>
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

export default NotFound;
