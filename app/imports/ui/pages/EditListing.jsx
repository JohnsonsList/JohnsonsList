import React from 'react';
import { Grid, Loader, Header, Segment } from 'semantic-ui-react';
import { Listings, ListingsSchema } from '/imports/api/listings/Listing';
import swal from 'sweetalert';
import AutoForm from 'uniforms-semantic/AutoForm';
import TextField from 'uniforms-semantic/TextField';
import LongTextField from 'uniforms-semantic/LongTextField';
import NumField from 'uniforms-semantic/NumField';
import SelectField from 'uniforms-semantic/SelectField';
import SubmitField from 'uniforms-semantic/SubmitField';
import HiddenField from 'uniforms-semantic/HiddenField';
import ErrorsField from 'uniforms-semantic/ErrorsField';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import 'uniforms-bridge-simple-schema-2'; // required for Uniforms
import MultiSelectField from '../forms/MultiSelectField';
import TitleBar from '../components/TitleBar';
import Footer from '../components/Footer';

/** Renders the Page for editing a single document. */
class EditListing extends React.Component {

  /** On successful submit, insert the data. */
  submit(data) {
    const { name, email, image, description, price, condition,
      categories, clothes, electronics, dormitory, outdoors, school, _id } = data;
    // eslint-disable-next-line max-len
    Listings.update(_id, { $set: { name, email, image, description, price, condition,
        categories, clothes, electronics, dormitory, outdoors, school } }, (error) => (error ?
        swal('Error', error.message, 'error') :
        swal('Success', 'Item updated successfully', 'success')));
  }

  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  /** Render the form. Use Uniforms: https://github.com/vazco/uniforms */
  renderPage() {
    const formStyle = { paddingTop: '20px', paddingBottom: '50px' };
    const submitStyle = { marginTop: '20px' };
    return (
        <div className="background">
          <TitleBar/>
          <div id='edit-page'>
          <Grid container centered style={formStyle}>
            <Grid.Column>
              <Header as="h2" textAlign="center">Edit Listing Information</Header>
              <AutoForm schema={ListingsSchema} onSubmit={data => this.submit(data)} model={this.props.doc}>
                <Segment>
                  <TextField name='name'/>
                  <TextField name='email'/>
                  <TextField name='image'/>
                  <LongTextField name='description'/>
                  <Grid columns="3">
                    <Grid.Column><NumField name='price' decimal={true} icon='dollar' iconLeft/></Grid.Column>
                    <Grid.Column><SelectField name='condition'/></Grid.Column>
                    <Grid.Column><SelectField name='categories'/></Grid.Column>
                    <Grid.Column><MultiSelectField name='clothes'/></Grid.Column>
                    <Grid.Column><MultiSelectField name='electronics'/></Grid.Column>
                    <Grid.Column><MultiSelectField name='dormitory'/></Grid.Column>
                    <Grid.Column><MultiSelectField name='outdoors'/></Grid.Column>
                    <Grid.Column><MultiSelectField name='school'/></Grid.Column>
                  </Grid>
                  <SubmitField value='Submit' style={submitStyle}/>
                  <ErrorsField/>
                  <HiddenField name='owner'/>
                </Segment>
              </AutoForm>
            </Grid.Column>
          </Grid>
          </div>
          <Footer/>
        </div>
    );
  }
}

/** Require the presence of a Stuff document in the props object. Uniforms adds 'model' to the props, which we use. */
EditListing.propTypes = {
  doc: PropTypes.object,
  model: PropTypes.object,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(({ match }) => {
  // Get the documentID from the URL field. See imports/ui/layouts/App.jsx for the route containing :_id.
  const documentId = match.params._id;
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe('Listings');
  return {
    doc: Listings.findOne(documentId),
    ready: subscription.ready(),
  };
})(EditListing);
