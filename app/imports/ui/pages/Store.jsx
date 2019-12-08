import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import { Listings } from '/imports/api/listings/Listing';
import Listing from '/imports/ui/components/Stuff';
import { withTracker } from 'meteor/react-meteor-data';
import React, { Component } from 'react';
import { Container, Grid, Menu, Input, Sidebar } from 'semantic-ui-react';
import TitleBar from '../components/TitleBar';
import Footer from '../components/Footer';

const VerticalSidebar = ({ animation, direction }) => (
    <Sidebar
        id='sidebar'
        as={Menu}
        animation={animation}
        direction={direction}
        vertical
        visible
        width='thin'
    >
      <p className='side-bar-main-item'>Clothing</p>
      <a>
        <p className='side-bar-items'>
          Men
        </p>
      </a>
      <a>
        <p className='side-bar-items'>
          Women
        </p>
      </a>
      <a>
        <p className='side-bar-items'>
          Tops
        </p>
      </a>
      <a>
        <p className='side-bar-items'>
          Bottoms
        </p>
      </a>
      <a>
        <p className='side-bar-items'>
          Shoes
        </p>
      </a>
      <a>
        <p className='side-bar-items'>
          Accessories
        </p>
      </a>
      <p className='side-bar-main-item'>Electronics</p>
      <a>
        <p className='side-bar-items'>
          Laptops & Desktops
        </p>
      </a>
      <a>
        <p className='side-bar-items'>
          Photography
        </p>
      </a>
      <a>
        <p className='side-bar-items'>
          Accessories
        </p>
      </a>
      <a>
        <p className='side-bar-items'>
          Televsion
        </p>
      </a>
      <a>
        <p className='side-bar-items'>
          Games
        </p>
      </a>
      <p className='side-bar-main-item'>Dormitory</p>
      <a>
        <p className='side-bar-items'>
          Self Care
        </p>
      </a>
        <a>
          <p className='side-bar-items'>
            Appliances
          </p>
        </a>
        <a>
        <p className='side-bar-items'>
          Home Decor
        </p>
      </a>
      <a>
        <p className='side-bar-items'>
          Plants
        </p>
      </a>
      <p className='side-bar-main-item'>Outdoors</p>
      <a>
        <p className='side-bar-items'>
          Sports & Fitness
        </p>
      </a>
      <a>
        <p className='side-bar-items'>
          Camping & Hiking
        </p>
      </a>
      <a>
        <p className='side-bar-items'>
          Transportation
        </p>
      </a>
      <a>
        <p className='side-bar-items'>
          Recreation
        </p>
      </a>
      <p className='side-bar-main-item'>School</p>
      <a>
        <p className='side-bar-items'>
          Stationary & Supplies
        </p>
      </a>
      <a>
        <p className='side-bar-items'>
          Backpacks
        </p>
      </a>
      <a>
        <p className='side-bar-items'>
          Laptops
        </p>
      </a>
    </Sidebar>
);

VerticalSidebar.propTypes = {
  animation: PropTypes.string,
  direction: PropTypes.string,
  visible: PropTypes.bool,
};

class Store extends Component {
  state = {
    animation: 'push',
    direction: 'left',
    dimmed: false,
    visible: true,
  }

  constructor() {
    super();
    this.state = {
      search: '',
      sidebar: true,
    };
  }

  updateSearch(event) {
    // console.log(event.target.value);
    this.setState({ search: event.target.value });
  }

  handleAnimationChange =
      (animation) => () => this.setState((prevState) => ({ animation, visible: !prevState.visible }))

  render() {
    const { animation, dimmed, direction, visible } = this.state;
    const vertical = direction === 'bottom' || direction === 'top';
    const filteredItems = this.props.listings.filter(
        (items) => items.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1 ||
            items.categories.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1,
    );
    const cardStyle = {
      paddingTop: '30px',
      // paddingLeft: '100px',
      marginBottom: '50px !important',
    };
    const pageStyle = { paddingTop: '20px' };

    return (
        <div className='background'>
          <TitleBar/>
          <div id='store-test'>

            <div id='store-headline'>
              <p>SHOP: ALL LISTINGS</p>
            </div>

            <div id='store-search'>
            <Input
                type='text'
                value={this.state.search}
                onChange={this.updateSearch.bind(this)}
                placeholder='Search...'
                icon='search'
            />
            </div>

            <div id='store-content'>
              <Container fluid style={pageStyle}>
                <Sidebar.Pushable>
                  {vertical ? null : (
                      <VerticalSidebar
                          animation={animation}
                          direction={direction}
                          visible={visible}
                      />
                  )}

                  <Sidebar.Pusher dimmed={dimmed && visible}>
                    <Grid>
                      {filteredItems.map((listings) =>
                          <Grid.Column width={4} style={cardStyle}>
                            <Listing
                              key={listings._id}
                              listings={listings}/>
                          </Grid.Column>)}
                    </Grid>
                  </Sidebar.Pusher>
                </Sidebar.Pushable>
              </Container>
            </div>
          </div>
          <Footer/>
        </div>
    );
  }
}

/** Require an array of Stuff documents in the props. */
Store.propTypes = {
  listings: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe('Listings');
  return {
    listings: Listings.find({}).fetch(),
    ready: subscription.ready(),
  };
})(Store);
