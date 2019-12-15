import React from 'react';
import { Container, Grid, Button } from 'semantic-ui-react';

/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
class Footer extends React.Component {
  render() {
    return (
        <div className="footer-background">
          <Container style={{ paddingBottom: '2em' }}>
            {/* eslint-disable-next-line react/jsx-no-target-blank */}
            <Grid Columns={2}>
              <Grid.Column width={7}>
                <a href='https://johnsonslist.github.io/'><Button
                    floated='right' circular icon='github'/></a>
              </Grid.Column>
              <Grid.Column width={9}>
                <div className='left floated'>A Manoa Flea Market Project</div>
              </Grid.Column>
            </Grid>
            <hr/>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            <div style={{ paddingTop: '30px', textAlign: 'center' }}>Area 52 Raid Squad • University of Hawai'i at Manoa
              • Honolulu, HI
              96822
            </div>
          </Container>
        </div>
    );
  }
}

export default Footer;
