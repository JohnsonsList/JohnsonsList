import React from 'react';
import { Container, Segment, Image } from 'semantic-ui-react';
import 'uniforms-bridge-simple-schema-2'; // required for Uniforms
import NavBar from '../components/NavBar';
import TitleBar from '../components/TitleBar';
import Footer from '../components/Footer';

/** Renders the Page for adding a document. */
class Profile extends React.Component {

  /** Render the form. Use Uniforms: https://github.com/vazco/uniforms */
  render() {
    return (
        <div>
          <TitleBar/>
          <NavBar/>
          <div id='prof-middle'>
            <Container>
            <Segment floated='left'>
             <Image src='/images/matthew.png' size='medium' circular/>
            </Segment>
            </Container>
          </div>
          <Footer/>
        </div>
    );
  }
}

export default Profile;
