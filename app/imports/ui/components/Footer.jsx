import React from 'react';
import { Grid, List, Input, Button, Icon } from 'semantic-ui-react';

/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
class Footer extends React.Component {
  render() {
    const itemPad = { paddingTop: '10px' };
    return (
        <div className="footer-background">
          <Grid container>
            <Grid.Column width={2}>
              <List>
                <List.Item style={itemPad}>About us</List.Item>
                <List.Item>Help</List.Item>
              </List>
            </Grid.Column>

            <Grid.Column width={4}>
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
                <List.Item style={itemPad}>Follow us</List.Item>
                <List.Item>
                  <Icon inverted name="facebook f"/>
                  <Icon inverted name="instagram"/>
                  <Icon inverted name="twitter"/>
                </List.Item>
              </List>
            </Grid.Column>
          </Grid>
        </div>
    );
  }
}

export default Footer;
