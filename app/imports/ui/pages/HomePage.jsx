import React from 'react';
import { Container, Input } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import TitleBar from '../components/TitleBar';
import Footer from '../components/Footer';


/** A simple static component to render some text for the landing page. */
class HomePage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      search: '',
      show: 'disabled',
    };
  }

  operation() {
    this.setState({ show: 'active' });
  }

  updateSearch(event) {
    // console.log(event.target.value);
    this.setState({ search: event.target.value });
  }

  handleClick() {
    this.props.history.push({ pathname: '/store', state: this.state.search });
  }

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

                <div className="fade-in three">
                  <Input
                      type='text'
                      value={this.state.search}
                      onChange={this.updateSearch.bind(this)}
                      placeholder='Search...'
                      action={{
                        icon: 'search',
                        onClick: () => this.handleClick(),
                      }}
                  />
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
HomePage.propTypes = {
  history: PropTypes.array,
};

export default withRouter(HomePage);
