import React from 'react';
import PropTypes from 'prop-types';
import { withTracker } from 'meteor/react-meteor-data';
import { withRouter } from 'react-router-dom';
import { Listings } from '/imports/api/listings/Listing';
import { Grid, Segment, Header, Container } from 'semantic-ui-react';
import AutoForm from 'uniforms-semantic/AutoForm';
import TextField from 'uniforms-semantic/TextField';
import LongTextField from 'uniforms-semantic/LongTextField';
import NumField from 'uniforms-semantic/NumField';
import SelectField from 'uniforms-semantic/SelectField';
import SubmitField from 'uniforms-semantic/SubmitField';
import ErrorsField from 'uniforms-semantic/ErrorsField';
import swal from 'sweetalert';
import { Meteor } from 'meteor/meteor';
import 'uniforms-bridge-simple-schema-2'; // required for Uniforms
import SimpleSchema from 'simpl-schema';
import TitleBar from '../components/TitleBar';
import Footer from '../components/Footer';
import MultiSelectField from '../forms/MultiSelectField';

/** Create a schema to specify the structure of the data to appear in the form. */
const formSchema = new SimpleSchema({
  name: String,
  email: String,
  image: String,
  description: String,
  price: Number,
  condition: {
    type: String,
    allowedValues: ['excellent', 'good', 'fair', 'poor'],
    defaultValue: 'good',
  },
  categories: {
    type: String,
    allowedValues: ['clothing', 'dormitory', 'electronics', 'school', 'outdoors'],
    defaultValue: 'clothing',
  },
  clothes: {
    type: Array,
  },
  'clothes.$': {
    type: String,
    optional: true,
    allowedValues: ['men', 'women', 'top', 'bottom', 'shoes', 'accessories'],
  },
  electronics: {
    type: Array,
  },
  'electronics.$': {
    type: String,
    optional: true,
    allowedValues: ['computers', 'photography', 'accessories', 'television', 'games'],
  },
  dormitory: {
    type: Array,
  },
  'dormitory.$': {
    type: String,
    optional: true,
    allowedValues: ['self care', 'appliances', 'home decor', 'plants'],
  },
  outdoors: {
    type: Array,
  },
  'outdoors.$': {
    type: String,
    optional: true,
    allowedValues: ['sports & fitness', 'camping & hiking', 'transportation', 'recreation'],
  },
  school: {
    type: Array,
  },
  'school.$': {
    type: String,
    optional: true,
    allowedValues: ['stationery', 'backpacks', 'laptops'],
  },
});

/** Renders the Page for adding a document. */
class AddListing extends React.Component {

  /** On submit, insert the data. */
  submit(data, formRef) {
    const { name, email, image, description, price, condition,
      categories, clothes, electronics, dormitory, outdoors, school } = data;
    const owner = Meteor.user().username;
    Listings.insert({ name, email, image, description, price, condition,
          categories, clothes, electronics, dormitory, outdoors, school, owner },
      (error) => {
        if (error) {
          swal('Error', error.message, 'error');
        } else {
          swal('Success', 'Item added successfully', 'success');
          formRef.reset();
        }
      });
  }

  /** Render the form. Use Uniforms: https://github.com/vazco/uniforms */
  render() {
    let fRef = null;
    const formStyle = { paddingTop: '75px', paddingBottom: '50px' };
    const submitStyle = { marginTop: '20px' };

    return (
        <div className='background'>
          <TitleBar/>
          <Container>
              <Grid container centered style={formStyle}>
                <Grid.Column>
                  <Header as="h2" textAlign="center" id='thin-font'>Add Item to Store</Header>
                  <AutoForm ref={ref => {
                    fRef = ref;
                  }} schema={formSchema} onSubmit={data => this.submit(data, fRef)}>
                    <Segment>
                      <TextField name='name' label='Item Name' placeholder='Name of item to sell.'/>
                      <TextField
                        name='email'
                        label='Contact Info'
                        placeholder='Enter your preferred form of contact (Ex. phone number or email address)'/>
                      <TextField name='image' placeholder='Insert the url to the image.'/>
                      <LongTextField name='description' placeholder='Give a description of the item.'/>
                      <Grid columns="4">
                        <Grid.Column><NumField name='price' decimal={true} icon='dollar' iconLeft/></Grid.Column>
                        <Grid.Column><SelectField name='condition'/></Grid.Column>
                        <Grid.Column><SelectField name='categories' label='Main Category'/></Grid.Column>
                        <Grid.Column><MultiSelectField name='clothes'/></Grid.Column>
                        <Grid.Column><MultiSelectField name='electronics'/></Grid.Column>
                        <Grid.Column><MultiSelectField name='dormitory'/></Grid.Column>
                        <Grid.Column><MultiSelectField name='outdoors'/></Grid.Column>
                        <Grid.Column><MultiSelectField name='school'/></Grid.Column>
                      </Grid>
                      <SubmitField value='Submit' style={submitStyle}/>
                      <ErrorsField/>
                    </Segment>
                  </AutoForm>
                </Grid.Column>
              </Grid>
          </Container>
          <Footer/>
        </div>
    );
  }
}

/** Declare the types of all properties. */
AddListing.propTypes = {
  currentEmail: PropTypes.string,
};

// this is required to make the name show up
/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
const AddListingContainer = withTracker(() => ({
  currentEmail: Meteor.user() ? Meteor.user().emails[0].address : '',
}))(AddListing);


export default withRouter(AddListingContainer);
