import React from 'react';
import { Grid, List, Button } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
class Footer extends React.Component {
  render() {
    return (
        <div className="footer-background">
          <Grid container columns="2">
            <Grid.Column>
              A Manoa Flea Market Project
              <hr/>
              <List>
                <List.Item>Area 52 Raid Squad</List.Item>
                <List.Item>Universiy of Hawaii</List.Item>
                <List.Item>Honolulu, HI 96822</List.Item>
                <List.Item>
                  {/* eslint-disable-next-line react/jsx-no-target-blank */}
                  <a href={'https://johnsonslist.github.io/'} target="_blank">Our Home Page</a>
                </List.Item>
              </List>
            </Grid.Column>

            <Grid.Column>
              Not a member?
              <hr/>
              <List>
                <List.Item>Any student, faculty, or staff in the UH system can register for our website!</List.Item>
                <List.Item><Button basic inverted as={NavLink} exact to="/signup">Register</Button></List.Item>
              </List>
            </Grid.Column>
          </Grid>
        </div>
    );
  }
}

export default Footer;
