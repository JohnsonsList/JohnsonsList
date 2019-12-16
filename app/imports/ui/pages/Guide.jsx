import React from 'react';
import { Container, Menu, Header, Grid, Image, Divider } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import TitleBar from '../components/TitleBar';
import Footer from '../components/Footer';

/** A simple static component to render some text for the landing page. */
class Guide extends React.Component {

  constructor() {
    super();
    this.state = {
      sell: true,
      buy: false,
    };
  }

  showOther() {
    this.setState({ sell: !this.state.sell });
  }

  render() {
    return (
        <div>
          <TitleBar/>
          <div id='guide-page'>
            {this.state.sell === true ?
              <Menu id='guide-menu'>
                <Menu.Item float="middle">
              <a onClick={this.showOther.bind(this)}
                  id='navigation-buy'>
                <p onClick={this.showOther.bind(this)}
                    className='navigation'>
                  DISPLAY HOW TO BUY AN ITEM
              </p>
              </a>
                </Menu.Item>
              </Menu>
            : <Menu id='guide-menu'>
                  <Menu.Item float="middle">
                    <a onClick={this.showOther.bind(this)}
                       id='navigation-buy'>
                      <p onClick={this.showOther.bind(this)}
                         className='navigation'>
                        DISPLAY HOW TO SELL AN ITEM
                      </p>
                    </a>
                  </Menu.Item>
                </Menu> }
            {this.state.sell === true ?
            <div id='guide-selling'>
            <Container>
                <div>
                  <Header className='guide-header'
                          as='h1'>GUIDE: SELLING AN ITEM</Header>
                </div>
              <div>
                <Grid centered>
                  <Grid.Column width={10}>
                    <Image className='guide-images' size='big' src='/images/create-listing.png'/>
                  </Grid.Column>
                  <Grid.Column width={6}>
                    <Header className='guide-words' as='h2'>
                      Step 1 - Create a Listing
                    </Header>
                    <hr/>
                    <p className='guide-words'>Create a listing and fill out the appropriate information.</p>
                  </Grid.Column>
                </Grid>
                <Grid centered>
                  <Grid.Column width={6}>
                    <Header className='guide-words' as='h2'>
                      Step 2 - Get Contacted
                    </Header>
                    <hr/>
                    <p className='guide-words'>
                      Wait for someone of interest to contact you about the listing you made.</p>
                  </Grid.Column>
                  <Grid.Column width={10}>
                    <Image className='guide-images'floated='right' size='big' src='/images/get-contacted.png'/>
                  </Grid.Column>
                </Grid>
                <Grid centered>
                  <Grid.Column width={10}>
                    <Image className='guide-images' floated='right' size='big' src='/images/selling-item.png'/>
                  </Grid.Column>
                  <Grid.Column width={6}>
                    <Header className='guide-words' as='h2'>
                      Step 3 - Sell the Item
                    </Header>
                    <hr/>
                    <p className='guide-words'>Meet up with the individual that contacted you and sell the item!</p>
                  </Grid.Column>
                </Grid>
              </div>
            </Container>
            </div>
          : <div id='guide-buying'>
                  <Container>
                    <div>
                      <Header className='guide-header'
                              as='h1'>GUIDE: BUYING AN ITEM</Header>
                    </div>
                    <div>
                      <Grid centered>
                        <Grid.Column width={10}>
                          <Image className='guide-images' size='big' src='/images/find-listing.png'/>
                        </Grid.Column>
                        <Grid.Column width={6}>
                          <Header className='guide-words' as='h2'>
                            Step 1 - Find a Listing
                          </Header>
                          <hr/>
                          <p className='guide-words'>
                            Look around the store and encounter a listing that piques your interest.</p>
                        </Grid.Column>
                      </Grid>
                      <Grid centered>
                        <Grid.Column width={6}>
                          <Header className='guide-words' as='h2'>
                            Step 2 - Contact the Seller
                          </Header>
                          <hr/>
                          <p className='guide-words'>Contact information will be provided to let you be
                            able to contact the owner and arrange a deal.</p>
                        </Grid.Column>
                        <Grid.Column width={10}>
                          <Image className='guide-images' floated='right' size='big' src='/images/contact.png'/>
                        </Grid.Column>
                      </Grid>
                      <Grid centered>
                        <Grid.Column width={10}>
                          <Image className='guide-images' floated='right' size='big' src='/images/buy.png'/>
                        </Grid.Column>
                        <Grid.Column width={6}>
                          <Header className='guide-words' as='h2'>
                            Step 3 - Buy the Item
                          </Header>
                          <hr/>
                          <p className='guide-words'>
                            Meet up with the individual that you contacted and buy the item!</p>
                        </Grid.Column>
                      </Grid>
                    </div>
                  </Container>
                </div> }
          </div>
          <Footer/>
        </div>
    );
  }
}

/** Declare the types of all properties. */
Guide.propTypes = {
  history: PropTypes.array,
};

export default withRouter(Guide);
