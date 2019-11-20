import React from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { withRouter, NavLink } from 'react-router-dom';
import { Menu, Dropdown } from 'semantic-ui-react';
import { Roles } from 'meteor/alanning:roles';
import Container from 'semantic-ui-react/dist/commonjs/elements/Container';

/** The NavBar appears at the top of every page. Rendered by the App Layout component. UPDATED */
class NavBar extends React.Component {
  render() {
    return (
        <div className='NavBar'>
          <Menu attached="top" borderless>
            <Menu.Item>
              <Dropdown icon='bars'>
                <Dropdown.Menu>
                  <Dropdown.Item as={NavLink} activeClassName=" " text='Home Page' exact to="/"/>
                  <Dropdown.Item text='Profile Page'/>
                  <Dropdown.Item text='Cart'/>
                  <Dropdown.Item text='Notify Admin'/>
                  <Dropdown.Item text='Clothing'/>
                  <Dropdown.Item text='Dorm Stuff'/>
                  <Dropdown.Item text='Supplies'/>
                  <Dropdown.Divider/>
                  <Dropdown.Item text='Feedback Page'/>
                </Dropdown.Menu>
              </Dropdown>
            </Menu.Item>
            {this.props.currentUser ? (
                // eslint-disable-next-line react/jsx-key
                [<Container>
                  <Menu.Item as={NavLink} activeClassName="active" exact to="/add" key='add'>ADD
                    ITEM</Menu.Item>
                  <Menu.Item as={NavLink} activeClassName="active" exact to="/add" key='add'>NEW</Menu.Item>
                  <Menu.Item as={NavLink} activeClassName="active" exact to="/add" key='add'>DEALS</Menu.Item>
                  <Menu.Item as={NavLink} activeClassName="active" exact to="/list" key='list'>YOUR SHOP</Menu.Item>
                  <Menu.Item as={NavLink} activeClassName="active" exact to="/add" key='add'>SELL</Menu.Item>
                  <Dropdown item text="SAVED LISTINGS" icon="star" pointing="top right">
                    <Dropdown.Menu>
                      <Dropdown.Item>Your cart is currently empty.</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Container>]
            ) : ''}
            {Roles.userIsInRole(Meteor.userId(), 'admin') ? (
                <Menu.Item as={NavLink} activeClassName="active" exact to="/admin" key='admin'>Admin</Menu.Item>
            ) : ''}</Menu></div>
    );
  }
}

/** Declare the types of all properties. */
NavBar.propTypes = {
  currentUser: PropTypes.string,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
const NavBarContainer = withTracker(() => ({
  currentUser: Meteor.user() ? Meteor.user().username : '',
}))(NavBar);

/** Enable ReactRouter for this component. https://reacttraining.com/react-router/web/api/withRouter */
export default withRouter(NavBarContainer);
