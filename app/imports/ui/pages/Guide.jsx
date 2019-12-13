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
          <nav>
          <div id='guide-page'>
            <div>
              <Menu id='guide-menu'>
                <Menu.Item></Menu.Item>
                <Menu.Item></Menu.Item>
                <Menu.Item></Menu.Item>
                <Menu.Item></Menu.Item>
                <Menu.Item></Menu.Item>
                <Menu.Item></Menu.Item>
                <Menu.Item></Menu.Item>
                <Menu.Item></Menu.Item>
                <Menu.Item></Menu.Item>
                <Menu.Item></Menu.Item>
                <Menu.Item></Menu.Item>
                <Menu.Item></Menu.Item>
                <Menu.Item></Menu.Item>
                <Menu.Item></Menu.Item>
                <Menu.Item></Menu.Item>
                <Menu.Item></Menu.Item>
                <Menu.Item float="middle">
              <a className='navigation'
                 href='#icons'>
                <p className='navigation'>
                Icon Meaning
              </p>
              </a>
                </Menu.Item>
                <Menu.Item position='right'>
              <a className='navigation'
                 href='#sell-buy'>
                <p className='navigation'>
                  How to Purchase & Sell
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
          </nav>
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
