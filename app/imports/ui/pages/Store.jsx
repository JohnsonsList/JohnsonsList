import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Loader, Input, Grid } from 'semantic-ui-react';
import { Stuffs } from '/imports/api/stuff/Stuff';
import Stuff from '/imports/ui/components/Stuff';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
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
    const cardStyle = {
      paddingTop: '30px',
      // paddingLeft: '100px',
      marginBottom: '50px !important',
    };
    const pageStyle = { paddingTop: '20px' };
    return (
        <div className='background'>
          <TitleBar/>
          <Container>
            <Input
                id='search'
                type='text'
                value={this.state.search}
                onChange={this.updateSearch.bind(this)}
                icon='search'
                placeholder='Search...'
                fluid
            />
          </Container>
          <Container>
            <Input
                id='search'
                type='text'
                value={this.state.search}
                onChange={this.updateSearch.bind(this)}
                placeholder='Search...'
                icon='search'
                fluid
            />
          </Container>
            <Container>
              <Input
                  id='search'
                  type='text'
                  icon='search'
                  value={this.state.search}
                  onChange={this.updateSearch.bind(this)}
                  placeholder='Search...'
                  fluid
              />
            </Container>
          <div id='store-content'>
          <Container style={pageStyle}>
            <Grid>
              {filteredItems.map((stuff) =>
                  <Grid.Column width={4} style={cardStyle}><Stuff
                  key={stuff._id}
                  stuff={stuff}/>
                  </Grid.Column>)}
            </Grid>
          </Container>
          </div>
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
