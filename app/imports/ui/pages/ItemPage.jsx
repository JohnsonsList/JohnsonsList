import React from 'react';
import PropTypes from 'prop-types';
import { withTracker } from 'meteor/react-meteor-data';
import { Grid, Header, Container, Image, Divider, Label } from 'semantic-ui-react';
import { Meteor } from 'meteor/meteor';
import { Listings } from '/imports/api/listings/Listing';
import 'uniforms-bridge-simple-schema-2'; // required for Uniforms
import TitleBar from '../components/TitleBar';
import Footer from '../components/Footer';

/** Renders the Page for adding a document. */
class ItemPage extends React.Component {

  /** Render the form. Use Uniforms: https://github.com/vazco/uniforms */
  render() {
    const formStyle = { paddingTop: '75px', paddingBottom: '50px' };
    const spaceStyle = { paddingTop: '10px' };
    return (
        <div>
          <TitleBar/>
          <Container>
            <Grid container style={formStyle} columns={2}>
              <Grid.Column>
                <Image className='itemPageImage' src={this.props.listings.image}/>
              </Grid.Column>
              <Grid.Column>
                <Header as="h2">{this.props.listings.name}</Header>
                <Header.Subheader>by {this.props.listings.owner}</Header.Subheader>
                <Header.Subheader>Contact me at: {this.props.listings.email}</Header.Subheader>
                <Header.Subheader style={spaceStyle}>
                  <Label color='teal'>{this.props.listings.categories}</Label>
                </Header.Subheader>
                <Divider fluid/>
                <Header.Subheader>List Price: ${this.props.listings.price}</Header.Subheader>
                <Header.Subheader>Condition: {this.props.listings.condition}</Header.Subheader>
                <Header.Subheader style={spaceStyle}>{this.props.listings.description}</Header.Subheader>
              </Grid.Column>
            </Grid>
          </Container>
          <Footer/>
        </div>
    );
  }
}

/** Declare the types of all properties. */
ItemPage.propTypes = {
  listings: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

// this is required to make the name show up
/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(({ match }) => {
  const documentId = match.params._id;
  const subscription = Meteor.subscribe('Listings');
  return {
    listings: Listings.findOne(documentId),
    ready: subscription.ready(),
  };
})(ItemPage);
