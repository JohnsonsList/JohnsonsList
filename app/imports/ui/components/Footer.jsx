import React from 'react';
import { Grid, List, Input, Button, Icon } from 'semantic-ui-react';

/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
class Footer extends React.Component {
  render() {
    return (
        <div className="footer-background">
          <Grid container>
            <Grid.Column floated='left'>
              <List>
                <List.Item>About us</List.Item>
                <List.Item>Help</List.Item>
              </List>
            </Grid.Column>

            <Grid.Column width={4} floated='left'>
              <List>
                <List.Item>Sign up for the latest updates</List.Item>
                <List.Item>
                  <Input placeholder="Enter email address" />
                  <Button color="black">Join</Button>
                </List.Item>
              </List>
            </Grid.Column>

            <Grid.Column width={3} floated='right'>
              <List>
                <List.Item>Follow us</List.Item>
                <List.Item>
                  <Icon padded inverted name="facebook f"/>
                  <Icon padded inverted name="instagram"/>
                  <Icon padded inverted name="twitter"/>
                </List.Item>
              </List>
            </Grid.Column>
          </Grid>
        </div>
    );
  }
}

export default Footer;
