import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import { Listings } from '/imports/api/listings/Listing';
import Listing from '/imports/ui/components/Listing';
import { withTracker } from 'meteor/react-meteor-data';
import React, { Component } from 'react';
import { _ } from 'meteor/underscore';
import { Container, Grid, Menu, Input, Sidebar } from 'semantic-ui-react';
import TitleBar from '../components/TitleBar';
import Footer from '../components/Footer';

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
      clothing: false,
      electronics: false,
      dormitory: false,
      supplies: false,
      outdoors: false,
      men: false,
      women: false,
      top: false,
      bottom: false,
      shoes: false,
      accessories: false,
    };
  }

  showClothing() {
    this.setState({ clothing: !this.state.clothing });
  }

  showMen() {
    this.setState({ men: !this.state.men });
  }

  showWomen() {
    this.setState({ women: !this.state.women });
  }

  showTop() {
    this.setState({ top: !this.state.top });
  }

  showBottom() {
    this.setState({ bottom: !this.state.bottom });
  }

  showShoes() {
    this.setState({ shoes: !this.state.shoes });
  }

  showAccessories() {
    this.setState({ accessories: !this.state.accessories });
  }

  showElectronics() {
    this.setState({ electronics: !this.state.electronics });
  }

  showDormitory() {
    this.setState({ dormitory: !this.state.dormitory });
  }

  showSchool() {
    this.setState({ supplies: !this.state.supplies });
  }

  showOutdoors() {
    this.setState({ outdoors: !this.state.outdoors });
  }

  updateSearch(event) {
    // console.log(event.target.value);
    this.setState({ search: event.target.value });
  }

  handleAnimationChange =
      (animation) => () => this.setState((prevState) => ({ animation, visible: !prevState.visible }))

  render() {

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
          <p className='side-bar-main-item'>Main Categories</p>
          <a onClick={this.showClothing.bind(this)}>
            <p className='side-bar-items'
               onClick={this.showClothing.bind(this)}>
              Clothing ({(this.props.listings.filter((items) => items.categories === 'clothing')).length})
            </p>
          </a>
          <a onClick={this.showElectronics.bind(this)}>
            <p className='side-bar-items'
               onClick={this.showElectronics.bind(this)}>
              Electronics ({(this.props.listings.filter((items) => items.categories === 'electronics')).length})
            </p>
          </a>
          <a onClick={this.showDormitory.bind(this)}>
            <p className='side-bar-items'
               onClick={this.showDormitory.bind(this)}>
              Dormitory ({(this.props.listings.filter((items) => items.categories === 'dormitory')).length})
            </p>
          </a>
          <a onClick={this.showOutdoors.bind(this)}>
            <p className='side-bar-items'
               onClick={this.showOutdoors.bind(this)}>
              Outdoors ({(this.props.listings.filter((items) => items.categories === 'outdoors')).length})
            </p>
          </a>
          <a onClick={this.showSchool.bind(this)}>
            <p className='side-bar-items'
               onClick={this.showSchool.bind(this)}>
              School ({(this.props.listings.filter((items) => items.categories === 'school')).length})
            </p>
          </a>
          <p className='side-bar-main-item'>Clothing</p>
          <a onClick={this.showMen.bind(this)}>
            <p className='side-bar-items'
               onClick={this.showMen.bind(this)}>
              Men ({(this.props.listings.filter((items) => _.contains((items.clothes), 'men'))).length})
            </p>
          </a>
          <a onClick={this.showWomen.bind(this)}>
            <p className='side-bar-items'
               onClick={this.showWomen.bind(this)}>
              Women ({(this.props.listings.filter((items) => _.contains((items.clothes), 'women'))).length})
            </p>
          </a>
          <a onClick={this.showTop.bind(this)}>
            <p className='side-bar-items'
               onClick={this.showTop.bind(this)}>
              Tops ({(this.props.listings.filter((items) => _.contains((items.clothes), 'top'))).length})
            </p>
          </a>
          <a onClick={this.showBottom.bind(this)}>
            <p className='side-bar-items'
               onClick={this.showBottom.bind(this)}>
              Bottoms ({(this.props.listings.filter((items) => _.contains((items.clothes), 'bottom'))).length})
            </p>
          </a>
          <a onClick={this.showShoes.bind(this)}>
            <p className='side-bar-items'
               onClick={this.showShoes.bind(this)}>
              Shoes ({(this.props.listings.filter((items) => _.contains((items.clothes), 'shoes'))).length})
            </p>
          </a>
          <a onClick={this.showAccessories.bind(this)}>
            <p className='side-bar-items'
               onClick={this.showAccessories.bind(this)}>
              Accessories ({(this.props.listings.filter((items) => _.contains((items.clothes), 'accessories'))).length})
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

    const { animation, dimmed, direction, visible } = this.state;
    const vertical = direction === 'bottom' || direction === 'top';

    let filteredItems = this.props.listings.filter(
        (items) => items.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1 ||
            items.categories.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1,
    );

    if (this.state.clothing) {
      filteredItems = filteredItems.filter((items) => items.categories === 'clothing');
    }

    if (this.state.men) {
      filteredItems = filteredItems.filter((items) => _.contains((items.clothes), 'men'));
    }

    if (this.state.women) {
      filteredItems = filteredItems.filter((items) => _.contains((items.clothes), 'women'));
    }

    if (this.state.top) {
      filteredItems = filteredItems.filter((items) => _.contains((items.clothes), 'top'));
    }

    if (this.state.bottom) {
      filteredItems = filteredItems.filter((items) => _.contains((items.clothes), 'bottom'));
    }

    if (this.state.shoes) {
      filteredItems = filteredItems.filter((items) => _.contains((items.clothes), 'shoes'));
    }

    if (this.state.accessories) {
      filteredItems = filteredItems.filter((items) => _.contains((items.clothes), 'accessories'));
    }

    if (this.state.electronics) {
      filteredItems = filteredItems.filter((items) => items.categories === 'electronics');
    }

    if (this.state.dormitory) {
      filteredItems = filteredItems.filter((items) => items.categories === 'dormitory');
    }

    if (this.state.supplies) {
      filteredItems = filteredItems.filter((items) => items.categories === 'school');
    }

    if (this.state.outdoors) {
      filteredItems = filteredItems.filter((items) => items.categories === 'outdoors');
    }

    let title;
    if (this.state.clothing === true) {
      title = 'CLOTHING';
    } else if (this.state.electronics === true) {
      title = 'ELECTRONICS';
    } else if (this.state.dormitory === true) {
      title = 'DORMITORY';
    } else if (this.state.outdoors === true) {
      title = 'OUTDOORS';
    } else if (this.state.supplies === true) {
      title = 'SCHOOL';
    } else {
      title = 'ALL LISTINGS';
    }

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
              <p>SHOP: {title}</p>
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
