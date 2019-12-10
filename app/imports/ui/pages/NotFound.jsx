import React from 'react';
import { Header, Loader } from 'semantic-ui-react';

/** Render a Not Found page if the user enters a URL that doesn't match any route. */
class NotFound extends React.Component {
  render() {
    const pageStyle = { paddingTop: '20px', paddingBottom: '50px' };
    const fontStyle = { fontFamily: 'lato !important' };
    return (
        <div style={pageStyle}>
          <Header as="h2" textAlign="center" style={fontStyle}>
            <p>Uh oh! This seems like a faulty link.</p>
            <p>Redirecting you to the home page...</p>
          </Header>
          <Loader large active inline='centered'/>
          <meta httpEquiv="refresh" content="5; url=/#/"/>
        </div>
    );
  }
}

export default NotFound;
