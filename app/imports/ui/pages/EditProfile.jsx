import React from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { Container, Image, Grid, Header, Input } from 'semantic-ui-react';
import 'uniforms-bridge-simple-schema-2'; // required for Uniforms
import { withRouter } from 'react-router-dom';
import TitleBar from '../components/TitleBar';
import Footer from '../components/Footer';
import Profile from '../pages/Profile';

/** Renders the Page for adding a document. */
class EditProfile extends React.Component {

  constructor(props) {
    super(props);
    this.state = { email: false, redirect: false };
  }

  edit() {
    this.setState({ editing: true });
  }

  save() {
    this.setState({
      editing: false,
    });
  }

  /** Render the form. Use Uniforms: https://github.com/vazco/uniforms */
  render() {

    const profStyle = { paddingTop: '80px', fontFamily: 'Roboto' };
    const fontStyle = { fontFamily: 'Roboto' };

    return (
        <div>
          <TitleBar/>
          <div id='prof-middle'>
            <Container>
              <Grid>
                <Grid.Column width={5}>
                  <Image src='/images/matthew.png' size='medium' circular/>
                </Grid.Column>
                <Grid.Column width={5}>
                  <Header as='h2' style={ profStyle }>
                    Full name:  {this.props.currentFirst} {this.props.currentLast}
                  </Header>
                  <Header as='h2' style={ fontStyle } >
                    Username:  {this.props.currentUser}
                  </Header>
                  <Header as='h2' style={ fontStyle }>
                    E-mail:  {this.props.currentEmail}
                  </Header>
                </Grid.Column>
              </Grid>
            </Container>
          </div>
          <Footer/>
        </div>
    );
  }
}

/** Declare the types of all properties. */
Profile.propTypes = {
  currentUser: PropTypes.string,
  currentFirst: PropTypes.string,
  currentLast: PropTypes.string,
  items: PropTypes.string,
  currentEmail: PropTypes.string,
};

// this is required to make the name show up
/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
const ProfileContainer = withTracker(() => ({
  currentUser: Meteor.user() ? Meteor.user().username : '',
  currentEmail: Meteor.user() ? Meteor.user().emails[0].address : '',
  currentFirst: Meteor.user() ? Meteor.user().profile.first : '',
  currentLast: Meteor.user() ? Meteor.user().profile.last : '',
}))(EditProfile);


export default withRouter(ProfileContainer);

// Edit Profile Page
// import React from 'react';
// import { Grid, Segment, Header, Form, Loader } from 'semantic-ui-react';
// import AutoForm from 'uniforms-semantic/AutoForm';
// import TextField from 'uniforms-semantic/TextField';
// import DateField from 'uniforms-semantic/DateField';
// import LongTextField from 'uniforms-semantic/LongTextField';
// import SelectField from 'uniforms-semantic/SelectField';
// import SubmitField from 'uniforms-semantic/SubmitField';
// import swal from 'sweetalert';
// import { _ } from 'meteor/underscore';
// import PropTypes from 'prop-types';
// import { withTracker } from 'meteor/react-meteor-data';
// import { Meteor } from 'meteor/meteor';
// import 'uniforms-bridge-simple-schema-2'; // required for Uniforms
// import MultiSelectField from '../forms/MultiSelectField';
// import RadioField from '../forms/RadioField';
// import { StudentFormSchema as formSchema, gpa2String, gpa2Number } from '../forms/StudentFormInfo';
// import { StudentData } from '../../api/studentdata/StudentData';
// import { EnrollmentData } from '../../api/enrollmentdata/EnrollmentData';
//
// /** Renders the Page for editing a document. */
// class EditProfile extends React.Component {
//
//   /** On submit, try to insert the data. If successful, reset the form. */
//   submit(data) {
//     let updateError;
//     const studentId = this.props.studentDoc._id;
//     const enrollmentId = this.props.enrollmentDoc._id;
//     const { name, email, bio, level, gpa, enrolled, hobbies, major } = data;
//     StudentData.update(studentId, { $set: { name, email, bio, level, gpa: gpa2Number(gpa), hobbies, major } },
//         (error) => { updateError = error; });
//     if (updateError) {
//       swal('Error', updateError.message, 'error');
//     } else {
//       EnrollmentData.update(enrollmentId, { $set: { enrolled } },
//           (error) => { updateError = error; });
//       if (updateError) {
//         swal('Error', updateError.message, 'error');
//       } else {
//         swal('Success', 'The student record was updated.', 'success');
//       }
//     }
//   }
//
//   /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
//   render() {
//     return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
//   }
//
//   /** Render the form. Use Uniforms: https://github.com/vazco/uniforms */
//   renderPage() {
//     // Build the model object that Uniforms will use to fill in the form.
//     const model = _.extend({}, this.props.studentDoc, this.props.enrollmentDoc);
//     model.gpa = gpa2String(model.gpa);
//     return (
//         <Grid container centered>
//     <Grid.Column>
//     <Header as="h2" textAlign="center">Edit Student Profile</Header>
//     <AutoForm schema={formSchema} onSubmit={data => this.submit(data)} model={model}>
//         <Segment>
//         <Form.Group widths={'equal'}>
//         <TextField name='name' showInlineError={true} placeholder={'Your name'}/>
//     <TextField name='email' showInlineError={true} placeholder={'Your email'}/>
//     </Form.Group>
//     <LongTextField name='bio' showInlineError={true} placeholder={'A bit about you'}/>
//     <Form.Group widths={'equal'}>
//         <SelectField name='level' showInlineError={true} />
//     <SelectField name='gpa' showInlineError={true} placeholder={'Select one'} />
//     <DateField name='enrolled' showInlineError={true}/>
//     </Form.Group>
//     <MultiSelectField name='hobbies' showInlineError={true} placeholder={'Select hobbies (optional)'}/>
//     <RadioField name='major' inline showInlineError={true}/>
//     <SubmitField value='Update'/>
//         </Segment>
//         </AutoForm>
//         </Grid.Column>
//         </Grid>
//       );
//     }
// }
//
//
// /** Require a studentdata and enrollment doc.  Uniforms adds 'model' to the props, which we use. */
// EditProfile.propTypes = {
//   studentDoc: PropTypes.object,
//   enrollmentDoc: PropTypes.object,
//   model: PropTypes.object,
//   ready: PropTypes.bool.isRequired,
// };
//
// /** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
// export default withTracker(({ match }) => {
//   // Get the email from the URL field. See imports/ui/layouts/App.jsx for the route containing :email.
//   const email = match.params.email;
//   // Request StudentData and Enrollment docs. Won't be locally available until ready() returns true.
//   const studentDataSubscription = Meteor.subscribe('StudentData');
//   const enrollmentDataSubscription = Meteor.subscribe('EnrollmentData');
//   return {
//     studentDoc: StudentData.findOne({ email }),
//     enrollmentDoc: EnrollmentData.findOne({ email }),
//     ready: studentDataSubscription.ready() && enrollmentDataSubscription.ready(),
//   };
// })(EditProfile);
