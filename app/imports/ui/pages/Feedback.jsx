import React from 'react';
import { Issues } from '/imports/api/issue/Issue';
import { Grid, Segment, Header, Container } from 'semantic-ui-react';
import AutoForm from 'uniforms-semantic/AutoForm';
import TextField from 'uniforms-semantic/TextField';
import LongTextField from 'uniforms-semantic/LongTextField';
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
  thoughts: String,
  description: String,
});

/** Renders the Page for adding a document. */
class NotifyAdmin extends React.Component {

  /** On submit, insert the data. */
  submit(data, formRef) {
    const { thoughts, description } = data;
    const owner = Meteor.user().username;
    Issues.insert({ thoughts, description, owner },
      (error) => {
        if (error) {
          swal('Error', error.message, 'error');
        } else {
          swal('Success', 'Notification sent! Redirecting you back to the homepage..', 'success');
          formRef.reset();
          // add in code to redirect TODO
        }
      });
  }

  /** Render the form. Use Uniforms: https://github.com/vazco/uniforms */
  render() {
    let fRef = null;
    const formStyle = { paddingTop: '20px', paddingBottom: '50px' };
    return (
        <div className='background'>
          <TitleBar/>
          <Container>
              <Grid container centered style={formStyle}>
                <Grid.Column>
                  <Header as="h2" textAlign="center">
                    Have any thoughts about the website? Post it here!
                  </Header>
                  <AutoForm ref={ref => {
                    fRef = ref;
                  }} schema={formSchema} onSubmit={data => this.submit(data, fRef)}>
                    <Segment>
                      <TextField
                          name='thoughts'
                          placeholder='The Issue being created.'/>
                      <LongTextField
                          name='description'
                          placeholder='Give us some thoughts on why you feel the way you do.'/>
                      <SubmitField value='Submit'/>
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

export default NotifyAdmin;
