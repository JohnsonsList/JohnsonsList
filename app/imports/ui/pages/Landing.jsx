import React from 'react';
import { Grid, Button, Container, Icon, Tab, Image, Header } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import SOBar from '../components/SOBar';
import SOFooter from '../components/SOFooter';


/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const gridStyle = { height: '600px' };
    const listStyle = { paddingLeft: '50px' };
    const tabStyle = {
      border: 'none',
      boxShadow: 'none',
      color: '#000000',
      backgroundColor: '#fcfbfb' };
    const panes = [
      {
        menuItem: 'SELLING',
        render: () => <Tab.Pane attached={false} style={ tabStyle }>
          <Grid centered>
            <Grid.Column width={5}>
          <Image style={ listStyle } size='medium' src='/images/listing.jpg'/>
            </Grid.Column>
            <Grid.Column width={5}>
          <Header as='h2'>
            Create Listing
          </Header>
              <hr/>
              <p>Create a listing and fill out the appropriate information.</p>
            </Grid.Column>
          </Grid>
          <Grid centered>
            <Grid.Column width={5}>
              <Header as='h2'>
                Get Contacted
              </Header>
              <hr/>
              <p>Wait for someone of interest to contact you about the listing you made.</p>
            </Grid.Column>
            <Grid.Column width={5}>
              <Image style={ listStyle } floated='right'
                     size='medium' src='/images/waiting.jpg'/>
            </Grid.Column>
          </Grid>
          <Grid centered>
            <Grid.Column width={5}>
              <Image style={ listStyle } floated='right'
                     size='medium' src='/images/sell.jpg'/>
            </Grid.Column>
            <Grid.Column width={5}>
              <Header as='h2'>
                Sell the Item
              </Header>
              <hr/>
              <p>Meet up with the individual that contacted you and sell the item!</p>
            </Grid.Column>
          </Grid>
        </Tab.Pane>,
      },
      {
        menuItem: 'BUYING',
        render: () => <Tab.Pane attached={false} style={ tabStyle }>
          <Grid centered>
            <Grid.Column width={5}>
              <Image style={ listStyle } size='medium' src='/images/find.jpg'/>
            </Grid.Column>
            <Grid.Column width={5}>
              <Header as='h2'>
                Find a List You Like
              </Header>
              <hr/>
              <p>Look around the store and encounter a listing that piques your interest.</p>
            </Grid.Column>
          </Grid>
          <Grid centered>
            <Grid.Column width={5}>
              <Header as='h2'>
                Contact the Seller
              </Header>
              <hr/>
              <p>Contact information will be provided to let you be
                able to contact the owner and arrange a deal.</p>
            </Grid.Column>
            <Grid.Column width={5}>
              <Image style={ listStyle } floated='right'
                     size='medium' src='/images/contact.jpg'/>
            </Grid.Column>
          </Grid>
          <Grid centered>
            <Grid.Column width={5}>
              <Image style={ listStyle } floated='right'
                     size='medium' src='/images/buy.jpg'/>
            </Grid.Column>
            <Grid.Column width={5}>
              <Header as='h2'>
                Buy the Item
              </Header>
              <hr/>
              <p>Meet up with the individual that you contacted and buy the item!</p>
            </Grid.Column>
          </Grid>
        </Tab.Pane>,
      },
    ];
    return (
        <div className='landing'>
          <SOBar/>
          <Container>
          <Grid verticalAlign='middle' textAlign='left' container style={gridStyle}>
            <Grid.Column width={6}>
              <h2>A convenient website to buy and sell goods for UH campus life</h2>
              <h3 color={ 'white' } >Sign up now to browse and shop with other students right now</h3>
              <Button color='green' as={NavLink} exact to='/signup'>
                <Icon name='envelope'/>Sign up with UH email</Button>
            </Grid.Column>
            <Grid.Column width={8}>
            </Grid.Column>
          </Grid>
          </Container>

          <div className='features'>
          <Container className='ui fluid container'>
          <Grid.Column width={20}>
              <h1 align='center'>HOW IT WORKS</h1>
            <Container>
              <Tab menu={{ secondary: true, pointing: true }} panes={panes} />

              <h1 align='center'>WHY JOHNSONSLIST WORKS</h1>
            <Grid centered>
              <Grid.Column textAlign='left' width={4}>
                <Icon.Group size='huge'>
                <Icon color='grey' name='registered'/>
                <Icon color='grey' corner name='check'/>
                </Icon.Group>
                <h4>Only verified UH students can sign up and use Johnsonslist</h4>
              </Grid.Column>
              <Grid.Column width={4}>
                <Icon color='grey' size='huge' name='student'/>
                <h4>A website designed for students and used only by them with constant input</h4>
              </Grid.Column>
              <Grid.Column width={4}>
                <Icon color='grey' size='huge' name='eye'/>
                <h4>Johnsonslist is monitored by admins to look at reports and remove anything inappropriate</h4>
              </Grid.Column>
            </Grid>
            </Container>
          </Grid.Column>
            </Container>
          </div>

          <Container className='ui fluid container'>
            <SOFooter/>
          </Container>
        </div>
    );
  }
}

export default Landing;
