import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import { Stuffs } from '/imports/api/stuff/Stuff';
import Stuff from '/imports/ui/components/Stuff';
import { withTracker } from 'meteor/react-meteor-data';
import React, { Component } from 'react';
import { Container, Grid, Header, Icon, Image, Input, Menu, Segment, Sidebar } from 'semantic-ui-react';
import TitleBar from '../components/TitleBar';
import Footer from '../components/Footer';


const HorizontalSidebar = ({ animation, direction, visible }) => (
    <Sidebar
        as={Segment}
        animation={animation}
        direction={direction}
        visible={visible}
    >
      <Grid textAlign='center'>
        <Grid.Row columns={1}>
          <Grid.Column>
            <Header as='h3'>New Content Awaits</Header>
          </Grid.Column>
        </Grid.Row>
        <Grid columns={3} divided>
          <Grid.Column>
            <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
          </Grid.Column>
          <Grid.Column>
            <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
          </Grid.Column>
          <Grid.Column>
            <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
          </Grid.Column>
        </Grid>
      </Grid>
    </Sidebar>
);

HorizontalSidebar.propTypes = {
  animation: PropTypes.string,
  direction: PropTypes.string,
  visible: PropTypes.bool,
};

const VerticalSidebar = ({ animation, direction, visible }) => (
    <Sidebar
        id='sidebar'
        as={Menu}
        animation={animation}
        direction={direction}
        icon='labeled'
        vertical
        visible={visible}
        width='thin'
    >
      <a className='side-bar-items'
         href='/#/store'>
        {/* onClick={this.handleClick.bind(this)} */}
        <p className='not-menu-item'>
          STORE
        </p>
      </a>
      <p className='menu-space'>
        SPACE
      </p>
      <a className='not-menu-item'
         href='/#/add'>
        <p className='not-menu-item'>
          ADD AN ITEM
        </p>
      </a>
    </Sidebar>
);

VerticalSidebar.propTypes = {
  animation: PropTypes.string,
  direction: PropTypes.string,
  visible: PropTypes.bool,
};

class SidebarExampleTransitions extends Component {
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
          <Container>
            <Input
                id='search'
                type='text'
                value={this.state.search}
                onChange={this.updateSearch.bind(this)}
                icon='search'
                placeholder='Search...'
                fluid
            />
          </Container>
          <Container>
            <Input
                id='search'
                type='text'
                value={this.state.search}
                onChange={this.updateSearch.bind(this)}
                placeholder='Search...'
                icon='search'
                fluid
            />
          </Container>
          <Container>
            <Input
                id='search'
                type='text'
                icon='search'
                value={this.state.search}
                onChange={this.updateSearch.bind(this)}
                placeholder='Search...'
                fluid
            />
          </Container>
          <div id='store-test'>

          <div id='toggle'>
          <a
            onClick={this.handleAnimationChange('push')}>
            <Icon name='list'/>Toggle Filters</a>
          </div>

              <div id='store-content'>
                <Container fluid style={pageStyle}>
                  <Sidebar.Pushable>
                    {vertical ? (
                        <HorizontalSidebar
                            animation={animation}
                            direction={direction}
                            visible={visible}
                        />
                    ) : null}
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
                        <Grid.Column width={4} style={cardStyle}><Stuff
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
SidebarExampleTransitions.propTypes = {
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
})(SidebarExampleTransitions);
