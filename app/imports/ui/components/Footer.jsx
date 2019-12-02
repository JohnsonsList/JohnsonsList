import React from 'react';
import { Grid, List } from 'semantic-ui-react';

/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
class Footer extends React.Component {
  render() {
    return (
        <div className="footer-background">
          <Grid container columns="1">
            <Grid.Column>
              A Manoa Flea Market Project
              <hr/>
              <List>
                <List.Item>Area 52 Raid Squad</List.Item>
                <List.Item>University of Hawaii</List.Item>
                <List.Item>Honolulu, HI 96822</List.Item>
                <List.Item>
                  {/* eslint-disable-next-line react/jsx-no-target-blank */}
                  <a href={'https://johnsonslist.github.io/'} target="_blank">Our Home Page</a>
                </List.Item>
              </List>
            </Grid.Column>
          </Grid>
        </div>
    );
  }
}

export default Footer;
