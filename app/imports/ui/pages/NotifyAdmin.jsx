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
import NavBar from '../components/NavBar';
import TitleBar from '../components/TitleBar';
import Footer from '../components/Footer';

/** Create a schema to specify the structure of the data to appear in the form. */
const formSchema = new SimpleSchema({
  problem: String,
  description: String,
  user: String,
});

/** Renders the Page for adding a document. */
class NotifyAdmin extends React.Component {

  /** On submit, insert the data. */
  submit(data, formRef) {
    const { problem, description, user } = data;
    const owner = Meteor.user().username;
    Issues.insert({ problem, description, user, owner },
      (error) => {
        if (error) {
          swal('Error', error.message, 'error');
        } else {
          swal('Success', 'Notification sent!', 'success');
          formRef.reset();
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
          <NavBar/>
          <Container>
              <Grid container centered style={formStyle}>
                <Grid.Column>
                  <Header as="h2" textAlign="center" inverted>Notify Admin</Header>
                  <AutoForm ref={ref => {
                    fRef = ref;
                  }} schema={formSchema} onSubmit={data => this.submit(data, fRef)}>
                    <Segment>
                      <TextField name='problem' placeholder='The Issue being created.'/>
                      <TextField name='user' placeholder='Username of user creating the issue.'/>
                      <LongTextField name='description' placeholder='Description of the issue.'/>
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
