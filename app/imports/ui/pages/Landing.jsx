import React from 'react';
import { Grid, Button, Container, Icon, Menu, Segment } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import SOBar from '../components/SOBar';
import SOFooter from '../components/SOFooter';


/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state;
    const gridStyle = { height: '600px' };
    return (
        <div className='landing'>
          <SOBar/>
          <Container>
          <Grid verticalAlign='middle' textAlign='left' container style={gridStyle}>
            <Grid.Column width={6}>
              <h2>A convenient website to buy and sell goods for UH campus life</h2>
              <h3 color={ 'white' } >Sign up to browse and shop with other students right now</h3>
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
            <Menu pointing secondary>
              <Menu.Item name='SELLING'
                         active={activeItem === 'SELLING'}
                         onClick={this.handleItemClick}/>
              <Menu.Item name='BUYING'
                         active={activeItem === 'BUYING'}
                         onClick={this.handleItemClick}/>
            </Menu>
             <Segment id='test' basic>Why is this like this?</Segment>
              <h1 align='center'>WHY JOHNSONSLIST WORKS</h1>
            <Grid>
              <Grid.Column textAlign='left' width={4}>
                <Icon.Group size='huge'>
                <Icon color='grey' name='registered'/>
                <Icon color='grey' corner name='check'/>
                </Icon.Group>
                <h4>Only verified UH students can sign up and use the website</h4>
              </Grid.Column>
              <Grid.Column width={3}>
                <h4>Test yeah idk why it works</h4>
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
