import React from 'react';
import { Container } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import TitleBar from '../components/TitleBar';
import Footer from '../components/Footer';

/** A simple static component to render some text for the landing page. */
class Guide extends React.Component {

  render() {

    return (
        <div>
          <TitleBar/>
          <div id='home-page'>
            <Container>
              <div id='home-mid'>
                <div className="fade-in one">
                  Welcome to Johnsonslist.
                </div>

                <div className="fade-in two">
                  Discover a whole world of items.
                </div>

                <div className="fade-in three" style={{ borderRadius: '500rem' }}>
                </div>
              </div>
            </Container>
          </div>
          <Footer/>
        </div>
    );
  }
}

/** Declare the types of all properties. */
Guide.propTypes = {
  history: PropTypes.array,
};

export default withRouter(Guide);
