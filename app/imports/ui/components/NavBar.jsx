import React from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { withRouter, NavLink } from 'react-router-dom';
import { Menu, Dropdown, Header } from 'semantic-ui-react';
import { Roles } from 'meteor/alanning:roles';
import Container from 'semantic-ui-react/dist/commonjs/elements/Container';

/** The NavBar appears at the top of every page. Rendered by the App Layout component. UPDATED*/
class NavBar extends React.Component {
  render() {
    const menuStyle = { marginBottom: '10px', backgroundColor: 'green' };
    return (
      <Menu style={menuStyle} attached="top" borderless inverted>
        <Menu.Item as={NavLink} activeClassName="" exact to="/">
            <Dropdown text='Dropdown Menu'>
              <Dropdown.Menu>
                <Dropdown.Item text='Home Page' />
                <Dropdown.Item text='Profile Page'/>
                <Dropdown.Item text='Cart'/>
                <Dropdown.Item text='Notify Admin'/>
                <Dropdown.Item text='Clothing' />
                <Dropdown.Item icon='Dorm Stuff'/>
                <Dropdown.Item icon='Supplies'/>
                <Dropdown.Divider />
                <Dropdown.Item text='Feedback Page' />
                <Dropdown.Item text='Sign-In' />
                <Dropdown.Item text='Sign-Out' />
              </Dropdown.Menu>
          </Dropdown>
          <Header inverted as='h1'>JohnsonsList</Header>
        </Menu.Item>
        {this.props.currentUser ? (
          [   <Container>
              <Menu.Item as={NavLink} activeClassName="active" exact to="/add" key='add'>ADD ITEM</Menu.Item>
              <Menu.Item as={NavLink} activeClassName="active" exact to="/add" key='add'>NEW</Menu.Item>
              <Menu.Item as={NavLink} activeClassName="active" exact to="/add" key='add'>DEALS</Menu.Item>
              <Menu.Item as={NavLink} activeClassName="active" exact to="/list" key='list'>YOUR SHOP</Menu.Item>
              <Menu.Item as={NavLink} activeClassName="active" exact to="/add" key='add'>SELL</Menu.Item>
              <Dropdown item text="MY CART 0" icon="shop" pointing="top right">
                <Dropdown.Menu>
                  <Dropdown.Item>cart is currently empty.</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
          </Container>
            ]
        ) : ''}
        {Roles.userIsInRole(Meteor.userId(), 'admin') ? (
            <Menu.Item as={NavLink} activeClassName="active" exact to="/admin" key='admin'>Admin</Menu.Item>
        ) : ''}
        <Menu.Item position="right">
          {this.props.currentUser === '' ? (
            <Dropdown text="Login" pointing="top right" icon={'user'}>
              <Dropdown.Menu>
                <Dropdown.Item icon="user" text="Sign In" as={NavLink} exact to="/signin"/>
                <Dropdown.Item icon="add user" text="Sign Up" as={NavLink} exact to="/signup"/>
              </Dropdown.Menu>
            </Dropdown>
          ) : (
            <Dropdown text={this.props.currentUser} pointing="top right" icon={'user'}>
              <Dropdown.Menu>
                <Dropdown.Item icon="sign out" text="Sign Out" as={NavLink} exact to="/signout"/>
              </Dropdown.Menu>
            </Dropdown>
          )}
        </Menu.Item>
      </Menu>
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
