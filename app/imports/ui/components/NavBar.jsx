import React from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { withRouter, NavLink } from 'react-router-dom';
import { Menu, Dropdown, Icon } from 'semantic-ui-react';

/** The NavBar appears at the top of every page. Rendered by the App Layout component. UPDATED */
class NavBar extends React.Component {
  render() {
    const menuStyle = { marginBottom: '0px', backgroundColor: '#fafafa' };
    return (
        <div className='NavBar'>
          <Menu style={menuStyle} attached="top" borderless>
            <Menu.Item>
              <Dropdown style={{ color: '#024731' }} icon='bars'>
                <Dropdown.Menu>
                  <Dropdown.Item as={NavLink} activeclassname='' text='Men' exact to="/home"/>
                  <Dropdown.Item as={NavLink} activeclassname='' text='Women' exact to='/home'/>
                </Dropdown.Menu>
              </Dropdown>
            </Menu.Item>
                  <Menu.Item style={{ color: '#024731' }} as={NavLink} activeclassname="active"
                       exact to="/store">Main Store</Menu.Item>
                  <Menu.Item style={{ color: '#024731' }} as={NavLink} activeclassname="active"
                             exact to="/clothing">Clothing</Menu.Item>
                  <Menu.Item style={{ color: '#024731' }} as={NavLink} activeclassname="active"
                             exact to="/dormitory">Dormitory</Menu.Item>
            <Menu.Item style={{ color: '#024731' }} as={NavLink} activeclassname="active"
                       exact to="/electronics">Electronics</Menu.Item>
                  <Menu.Item style={{ color: '#024731' }} as={NavLink} activeclassname="active"
                             exact to="/supplies">Supplies</Menu.Item>
                  {this.props.currentUser ? (
                      // eslint-disable-next-line react/jsx-key
                  <Menu.Item
                      as={NavLink}
                      activeclassNAme="active"
                      exact to="/add"
                      key='add'
                      style={{ color: '#024731' }}
                      position='right'><Icon name='tag'/>Sell an Item</Menu.Item>
                  ) : ''}
          </Menu></div>
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
