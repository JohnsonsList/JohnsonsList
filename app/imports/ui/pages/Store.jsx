import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import { Stuffs } from '/imports/api/stuff/Stuff';
import Stuff from '/imports/ui/components/Stuff';
import { withTracker } from 'meteor/react-meteor-data';
import React, { Component } from 'react';
import { Container, Grid, Icon, Menu, Sidebar } from 'semantic-ui-react';
import TitleBar from '../components/TitleBar';
import Footer from '../components/Footer';

const VerticalSidebar = ({ animation, direction, visible }) => (
    <Sidebar
        id='sidebar'
        as={Menu}
        animation={animation}
        direction={direction}
        vertical
        visible={visible}
        width='thin'
    >
      <p className='side-bar-main-item'>Clothing</p>
      <a className='side-bar-items'
         href='#/store'>
        {/* onClick={this.handleClick.bind(this)} */}
        <p className='side-bar-items'>
          Men
        </p>
      </a>
      <a className='side-bar-items'
         href='/#/store'>
        <p className='side-bar-items'>
          Women
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
    visible: false,
  }

  constructor() {
    super();
    this.state = {
      search: '',
      sidebar: false,
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
    const filteredItems = this.props.stuffs.filter(
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

            <div id='toggle'>
              <Icon id='filter-list-icon' name='list'/>
              <a onClick={this.handleAnimationChange('push')}>Toggle Filters</a>
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
                      {filteredItems.map((stuff) =>
                          <Grid.Column width={4} style={cardStyle}>
                            <Stuff
                              key={stuff._id}
                              stuff={stuff}/>
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
  stuffs: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe('Stuff');
  return {
    stuffs: Stuffs.find({}).fetch(),
    ready: subscription.ready(),
  };
})(Store);
