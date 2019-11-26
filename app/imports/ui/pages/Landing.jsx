import React from 'react';
import { Grid, Image, Container } from 'semantic-ui-react';
import SOBar from '../components/SOBar';
import SOFooter from '../components/SOFooter';

/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
  render() {
    const gridStyle = { height: '600px' };
    return (
        <div className='landing'>
          <SOBar/>
          <Container>
          <Grid verticalAlign='middle' textAlign='center' container style={gridStyle}>
            <Grid.Column width={5}>
              <Image size='medium' circular src="/images/JL-logo2.png"/>
              <h3>Visual Studio Code Test.</h3>
            </Grid.Column>
            <Grid.Column width={8}>
            </Grid.Column>
          </Grid>
          </Container>
          <Container>
          <Grid.Column>
            <div className="landing-block">
              <h1>test</h1>
            </div>
          </Grid.Column>
          </Container>
          <SOFooter/>
        </div>
    );
  }
}

export default Landing;
