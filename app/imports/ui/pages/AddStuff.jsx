import React from 'react';
import PropTypes from 'prop-types';
import { withTracker } from 'meteor/react-meteor-data';
import { withRouter } from 'react-router-dom';
import { Stuffs } from '/imports/api/stuff/Stuff';
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
    allowedValues: ['clothing', 'dormitory', 'electronics', 'supplies'],
    defaultValue: 'clothing',
  },
});

/** Renders the Page for adding a document. */
class AddStuff extends React.Component {

  /** On submit, insert the data. */
  submit(data, formRef) {
    const { name, email, image, description, price, condition, categories } = data;
    const owner = Meteor.user().username;
    Stuffs.insert({ name, email, image, description, price, condition, categories, owner },
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
                  <Header as="h2" textAlign="center">Add Item to Store</Header>
                  <AutoForm ref={ref => {
                    fRef = ref;
                  }} schema={formSchema} onSubmit={data => this.submit(data, fRef)}>
                    <Segment>
                      <TextField name='name' placeholder='Name of item to sell.'/>
                      <TextField name='email' label='Contact Info' placeholder={this.props.currentEmail}/>
                      <TextField name='image' placeholder='Insert the url to the image.'/>
                      <LongTextField name='description' placeholder='Give a description of the item.'/>
                      <Grid columns="3">
                        <Grid.Column><NumField name='price' decimal={true} icon='dollar' iconLeft/></Grid.Column>
                        <Grid.Column><SelectField name='condition'/></Grid.Column>
                        <Grid.Column><SelectField name='categories'/></Grid.Column>
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
AddStuff.propTypes = {
  currentEmail: PropTypes.string,
};

// this is required to make the name show up
/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
const AddStuffContainer = withTracker(() => ({
  currentEmail: Meteor.user() ? Meteor.user().emails[0].address : '',
}))(AddStuff);


export default withRouter(AddStuffContainer);
