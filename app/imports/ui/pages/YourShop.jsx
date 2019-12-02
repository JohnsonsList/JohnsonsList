import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Header, Loader, Input, Card } from 'semantic-ui-react';
import { Stuffs } from '/imports/api/stuff/Stuff';
import Stuff from '/imports/ui/components/Stuff';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import NavBar from '../components/NavBar';
import TitleBar from '../components/TitleBar';
import Footer from '../components/Footer';

/** Renders a table containing all of the Stuff documents. Use <Stuff> to render each row. */
class ListStuff extends React.Component {

  constructor() {
    super();
    this.state = {
      search: '',
    };
  }

  updateSearch(event) {
    // console.log(event.target.value);
    this.setState({ search: event.target.value });
  }

  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Loading data</Loader>;
  }

  /** Render the page once subscriptions have been received. */
  renderPage() {
    const filteredItems = this.props.stuffs.filter(
        (items) => items.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1,
    );
    const cardStyle = { paddingTop: '30px', paddingBottom: '50px' };
    const pageStyle = { paddingTop: '20px' };
    return (
        <div class="ui card" className="background">
          <TitleBar/>
          <NavBar/>
          <Container style={pageStyle}>
            <h1>Your shop</h1>
            <div className="ui card" style={cardStyle}>
              <div className="image">
                <img src="https://react.semantic-ui.com/images/avatar/large/matthew.png"/>
              </div>
              <div className="content">
                <div className="header">Matthew</div>
                <div className="meta"><span className="date"><Input
                    type='text'
                    value={this.state.search}
                    onChange={this.updateSearch.bind(this)}
                    placeholder='Search...'
                    icon='search'
                />{filteredItems.map((stuff) => <Stuff
                    key={stuff._id}
                    stuff={stuff}/>)}</span></div>
              </div>
              <div className="extra content">
                <a>
                  <i aria-hidden="true" className="user icon"></i>
                  22 Friends
                </a>
              </div>
            </div>
          </Container>
          <Footer/>
        </div>
    );
  }
}

/** Require an array of Stuff documents in the props. */
ListStuff.propTypes = {
  stuffs: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe('Stuff');
  return {
    stuffs: Stuffs.find({}).fetch(),
    ready: subscription.ready(),
  };
})(ListStuff);
