import React from 'react';
import { Container, Search } from 'semantic-ui-react';
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
              <Search
                  type='text'
                  value={this.state.search}
                  onChange={this.updateSearch.bind(this)}
                  placeholder='Search...'
                  icon='search'
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

export default HomePage;
