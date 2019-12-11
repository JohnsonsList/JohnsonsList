import React from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { Container, Image, Grid, Header, Divider } from 'semantic-ui-react';
import 'uniforms-bridge-simple-schema-2'; // required for Uniforms
import { withRouter } from 'react-router-dom';
import TitleBar from '../components/TitleBar';
import Footer from '../components/Footer';
import  { Redirect } from 'react-router-dom'

/** Renders the Page for adding a document. */
class Profile extends React.Component {

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
    const ProtectedComponent = () => {
      if (authFails)
        return <Redirect to='/EditProfile'  />
    }
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
                  <button className="ui active button" onClick={this.edit}>
                    <i className="user icon"></i>Edit Profile
                  </button>
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
}))(Profile);


export default withRouter(ProfileContainer);

// Create Profile code
// import React from 'react';
// import { Grid, Segment, Header, Form, Message } from 'semantic-ui-react';
// import AutoForm from 'uniforms-semantic/AutoForm';
// import TextField from 'uniforms-semantic/TextField';
// import DateField from 'uniforms-semantic/DateField';
// import LongTextField from 'uniforms-semantic/LongTextField';
// import SelectField from 'uniforms-semantic/SelectField';
// import SubmitField from 'uniforms-semantic/SubmitField';
// import swal from 'sweetalert';
// import 'uniforms-bridge-simple-schema-2'; // required for Uniforms
// import MultiSelectField from '../forms/MultiSelectField';
// import RadioField from '../forms/RadioField';
// import { StudentFormSchema as formSchema, gpa2Number } from '../forms/StudentFormInfo';
// import { StudentData } from '../../api/studentdata/StudentData';
// import { EnrollmentData } from '../../api/enrollmentdata/EnrollmentData';
// import { Redirect } from 'react-router-dom';
//
// /** Renders the Page for adding a document. */
// class Profile extends React.Component {
//
//   constructor(props) {
//     super(props);
//     this.state = { email: false, redirect: false };
//   }
//
//   /** On submit, try to insert the data. If successful, reset the form. */
//   submit(data, formRef) {
//     let insertError;
//     const { name, email, bio, level, gpa, enrolled, hobbies, major } = data;
//     StudentData.insert({ name, email, bio, level, gpa: gpa2Number(gpa), hobbies, major },
//         (error) => { insertError = error; });
//     if (insertError) {
//       swal('Error', insertError.message, 'error');
//     } else {
//       EnrollmentData.insert({ email, enrolled },
//           (error) => { insertError = error; });
//       if (insertError) {
//         swal('Error', insertError.message, 'error');
//       } else {
//         swal('Success', 'The student record was created.', 'success');
//         this.setState({ email });
//         // this.setState( { redirect: true });
//         formRef.reset();
//       }
//     }
//   }
//
//   /** Render the form. Use Uniforms: https://github.com/vazco/uniforms */
//   render() {
//     let fRef = null;
//     // if (this.state.redirect) {
//     //   return <Redirect exact to='/DisplayProfile'/>;
//     // }
//       return (
//         <Grid container centered>
//           <Grid.Column>
//             <Header as="h2" textAlign="center">Create Student Profile</Header>
//             <AutoForm ref={ref => { fRef = ref; }} schema={formSchema} onSubmit={data => this.submit(data, fRef)}>
//               <Segment>
//                 <Form.Group widths={'equal'}>
//                   <TextField name='name' showInlineError={true} placeholder={'Your name'}/>
//                   <TextField name='email' showInlineError={true} placeholder={'Your email'}/>
//                 </Form.Group>
//                 <LongTextField name='bio' showInlineError={true} placeholder={'A bit about you'}/>
//                 <Form.Group widths={'equal'}>
//                   <SelectField name='level' showInlineError={true} />
//                   <SelectField name='gpa' showInlineError={true} placeholder={'Select one'} />
//                   <DateField name='enrolled' showInlineError={true}/>
//                 </Form.Group>
//                 <MultiSelectField name='hobbies' showInlineError={true} placeholder={'Select hobbies (optional)'}/>
//                 <RadioField name='major' inline showInlineError={true}/>
//                 <SubmitField value='Submit'/>
//               </Segment>
//             </AutoForm>
//             {this.state.email ? <Message>Edit <a href={`/#/EditProfile/${this.state.email}`}>this data</a></Message> : ''}
//           </Grid.Column>
//         </Grid>
//     );
//   }
// }
//
// export default Profile;
//
// // import React from 'react';
// // import PropTypes from 'prop-types';
// // import { Meteor } from 'meteor/meteor';
// // import { withTracker } from 'meteor/react-meteor-data';
// // import { Container, Image, Grid, Header, Divider } from 'semantic-ui-react';
// // import 'uniforms-bridge-simple-schema-2'; // required for Uniforms
// // import { withRouter } from 'react-router-dom';
// // import TitleBar from '../components/TitleBar';
// // import Footer from '../components/Footer';
// //
// // /** Renders the Page for adding a document. */
// // class Profile extends React.Component {
// //
// //   edit() {
// //     this.setState({
// //       editing: true,
// //     });
// //   }
// //
// //   save() {
// //     this.setState({
// //       editing: false,
// //     });
// //   }
// //
// //   /** Render the form. Use Uniforms: https://github.com/vazco/uniforms */
// //   render() {
// //
// //     const profStyle = { paddingTop: '80px', fontFamily: 'Roboto' };
// //     const fontStyle = { fontFamily: 'Roboto' };
// //
// //     return (
// //         <div>
// //           <TitleBar/>
// //           <div id='prof-middle'>
// //             <Container>
// //               <Grid>
// //                 <Grid.Column width={5}>
// //              <Image src='/images/matthew.png' size='medium' circular/>
// //                 </Grid.Column>
// //                 <Grid.Column width={5}>
// //                   <Header as='h2' style={ profStyle }>
// //                     Full name:  {this.props.currentFirst} {this.props.currentLast}
// //                   </Header>
// //                   <Header as='h2' style={ fontStyle } >
// //                     Username:  {this.props.currentUser}
// //                   </Header>
// //                   <Header as='h2' style={ fontStyle }>
// //                     E-mail:  {this.props.currentEmail}
// //                   </Header>
// //                   <Header as='h2' style={ fontStyle }>
// //                     Posted Items:  {this.props.items}
// //                   </Header>
// //                   <button className="ui active button" onClick={this.edit} basic>
// //                     <i className="user icon"></i>
// //                     Edit Profile
// //                   </button>
// //                 </Grid.Column>
// //               </Grid>
// //               <Divider fluid/>
// //               <p>
// //
// //               </p>
// //             <Divider fluid/>
// //             </Container>
// //           </div>
// //           <Footer/>
// //         </div>
// //     );
// //   }
// // }
// //
// // /** Declare the types of all properties. */
// // Profile.propTypes = {
// //   currentUser: PropTypes.string,
// //   currentFirst: PropTypes.string,
// //   currentLast: PropTypes.string,
// //   items: PropTypes.string,
// //   currentEmail: PropTypes.string,
// // };
// //
// // // this is required to make the name show up
// // /** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
// // const ProfileContainer = withTracker(() => ({
// //   currentUser: Meteor.user() ? Meteor.user().username : '',
// //   currentEmail: Meteor.user() ? Meteor.user().emails[0].address : '',
// //   currentFirst: Meteor.user() ? Meteor.user().profile.first : '',
// //   currentLast: Meteor.user() ? Meteor.user().profile.last : '',
// // }))(Profile);
// //
// //
// // export default withRouter(ProfileContainer);
