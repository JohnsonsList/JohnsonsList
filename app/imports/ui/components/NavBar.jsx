import React from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { withRouter, NavLink } from 'react-router-dom';
import { Menu, Dropdown, Icon } from 'semantic-ui-react';
import { Roles } from 'meteor/alanning:roles';

/** The NavBar appears at the top of every page. Rendered by the App Layout component. UPDATED */
class NavBar extends React.Component {
  render() {
    return (
        <div className='NavBar'>
          <Menu attached="top" borderless>
            <Menu.Item>
              <Dropdown icon='bars'>
                <Dropdown.Menu>
                  <Dropdown.Item as={NavLink} activeclassname='' text='Men' exact to="/home"/>
                  <Dropdown.Item as={NavLink} activeclassname='' text='Women' exact to='/home'/>
                </Dropdown.Menu>
              </Dropdown>
            </Menu.Item>
            <Menu.Item>|</Menu.Item>
                  <Menu.Item as={NavLink} activeclassname="active"
                             exact to="/store">Clothing</Menu.Item>
                  <Menu.Item>|</Menu.Item>
                  <Menu.Item as={NavLink} activeclassname="active"
                             exact to="/list">Dormitory</Menu.Item>
                  <Menu.Item>|</Menu.Item>
                  <Menu.Item as={NavLink} activeclassname="active"
                             exact to="/add">Supplies</Menu.Item>
                  <Menu.Item>|</Menu.Item>
                  {this.props.currentUser ? (
                      // eslint-disable-next-line react/jsx-key
                  <Menu.Item
                      as={NavLink}
                      activeclassNAme="active"
                      exact to="/add"
                      key='add'
                      position='right'><Icon name='tag'/>Create a Listing</Menu.Item>
                  ) : ''}
            {Roles.userIsInRole(Meteor.userId(), 'admin') ? (
                <Menu.Item as={NavLink} activeclassname="active" exact to="/admin" key='admin'>Admin</Menu.Item>
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
