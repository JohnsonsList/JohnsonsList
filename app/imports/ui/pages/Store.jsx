import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Header, Loader, Input, Grid } from 'semantic-ui-react';
import { Stuffs } from '/imports/api/stuff/Stuff';
import Stuff from '/imports/ui/components/Stuff';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import NavBar from '../components/NavBar';
import TitleBar from '../components/TitleBar';
import Footer from '../components/Footer';

/** Renders a table containing all of the Stuff documents. Use <Stuff> to render each row. */
class Store extends React.Component {

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
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  /** Render the page once subscriptions have been received. */
  renderPage() {
    const filteredItems = this.props.stuffs.filter(
        (items) => items.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1 ||
            items.categories.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1,
    );
    // const cardStyle = {
    //   paddingTop: '50px',
    //   paddingLeft: '20px',
    //   paddingRight: '20px',
    //   marginBottom: '15px !important',
    //   backgroundColor: '#fcfbfb',
    //   shadow: 'none',
    //   boxShadow: 'none' };
    const pageStyle = { paddingTop: '50px' };
    return (
        <div className='background'>
          <TitleBar/>
          <NavBar/>
          <Container>
            <Header as="h2" textAlign="center" inverted>Store</Header>
            <Input
                type='text'
                value={this.state.search}
                onChange={this.updateSearch.bind(this)}
                placeholder='Search...'
                icon='search'
            />
            <Grid>
              {filteredItems.map((stuff) =>
                  <Grid.Column width={4} style={pageStyle}><Stuff
                  key={stuff._id}
                  stuff={stuff}/>
                  </Grid.Column>)}
            </Grid>
          </Container>
          <Footer/>
        </div>
    );
  }
}

/** Require an array of Stuff documents in the props. */
Store.propTypes = {
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
})(Store);
