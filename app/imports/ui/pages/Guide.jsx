import React from 'react';
import { Container, Menu } from 'semantic-ui-react';
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
          <div id='guide-page'>
            <div>
              <Menu id='guide-menu'>
                <Menu.Item>
                <a className='navigation-space'>
                  <p className='navigation-space'>
                    ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
                    ||||||||||||||||||||||||||||||||||||||||
                  </p>
                </a>
              <a className='navigation'
                 href='#icons'>
                <p className='navigation'>
                Icon Meaning
              </p>
              </a>
                <a className='navigation-space'>
                  <p className='navigation-space'>
                    |||||||
                  </p>
              </a>
              <a className='navigation'
                 href='#sell-buy'>
                <p className='navigation'>
                  How to purchase/sell
                </p>
              </a>
                </Menu.Item>
              </Menu>
            </div>
            <div id='icons'>
            <Container>
                <div className="guide-help">

                </div>
            </Container>
            </div>
            <div id='sell-buy'>
              <Container>
                <div className="guide-help">

                </div>
              </Container>
            </div>
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
