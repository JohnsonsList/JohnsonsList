import React from 'react';
import PropTypes from 'prop-types';
import { Container, Image, Grid, Header, Divider, Card } from 'semantic-ui-react';
import 'uniforms-bridge-simple-schema-2'; // required for Uniforms
import NavBar from '../components/NavBar';
import TitleBar from '../components/TitleBar';
import Footer from '../components/Footer';

/** Renders the Page for adding a document. */
class Profile extends React.Component {

  /** Render the form. Use Uniforms: https://github.com/vazco/uniforms */
  render() {
    const profStyle = { paddingTop: '130px', fontFamily: 'Roboto' };
    return (
        <div>
          <TitleBar/>
          <NavBar/>
          <div id='prof-middle'>
            <Container>
              <Grid>
                <Grid.Column width={5}>
             <Image src='/images/matthew.png' size='medium' circular/>
                </Grid.Column>
                <Grid.Column width={5}>
                  <Header as='h2' style={ profStyle }>
                    {this.props.currentUser}why isn&apos;t the name showing up?
                  </Header>
                  <p id='profText'>maybe something will go here(maybe email)</p>
                </Grid.Column>
              </Grid>
              <Divider fluid/>
              <p>
                Maybe another tab can be here showing things on sale/liked/etc.
              </p>
            <Divider fluid/>
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
  items: PropTypes.string,
};

export default Profile;
