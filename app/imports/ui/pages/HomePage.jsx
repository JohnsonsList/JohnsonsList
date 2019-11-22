import React from 'react';
import { Grid, Image } from 'semantic-ui-react';
import NavBar from '../components/NavBar';

/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
  render() {
    const gridStyle = { height: '400px' };
    return (
        <div className='landing'>
          <NavBar/>
          <Grid verticalAlign='middle' textAlign='center' container style={gridStyle}>

            <Grid.Column width={4}>
              <Image size='medium' circular src="/images/JL-logo2.png"/>
            </Grid.Column>

            <Grid.Column width={8} inverted>
              <h3>A sales website dedicated to new incoming and current University of Hawaii students. This proprietary
                website helps in giving every University of Hawaii college student an opportunity to purchase items with
                also enabling other students to sell their unneeded stuff.</h3>
            </Grid.Column>
          </Grid>
        </div>
    );
  }
}

export default Landing;
