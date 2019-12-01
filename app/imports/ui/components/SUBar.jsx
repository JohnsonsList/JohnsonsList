import React from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { withRouter, NavLink } from 'react-router-dom';
import { Menu, Image } from 'semantic-ui-react';
import { Roles } from 'meteor/alanning:roles';

/** The NavBar appears at the top of every page. Rendered by the App Layout component. UPDATED */
class TitleBar extends React.Component {

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

  render() {
    const color = { color: '#41a6de' };
    const color2 = { color: '#000000' };
    const menuStyle = { marginBottom: '0px', backgroundColor: '#FFFFFF' };
    return (
        <Menu style={menuStyle} className="ui borderless top fixed menu" inverted>
          <Menu.Item as={NavLink} activeClassName="" exact to="/">
            <Image size='small' src='/images/JL-logo.png' to="/"/>
          </Menu.Item>
          {Roles.userIsInRole(Meteor.userId(), 'admin') ? (
              <Menu.Item as={NavLink} activeClassName="active" exact to="/admin" key='admin'>Admin</Menu.Item>
          ) : ''}
          <Menu.Item position='right' style={color2}>Already have an account?</Menu.Item>
          <Menu.Item>
                <Menu.Item style={color} as={NavLink} exact to='/signin'>Log In
                </Menu.Item>
          </Menu.Item>
        </Menu>
    );
  }
}

/** Declare the types of all properties. */
TitleBar.propTypes = {
  currentUser: PropTypes.string,
  items: PropTypes.string,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
const TitleBarContainer = withTracker(() => ({
  currentUser: Meteor.user() ? Meteor.user().username : '',
}))(TitleBar);

/** Enable ReactRouter for this component. https://reacttraining.com/react-router/web/api/withRouter */
export default withRouter(TitleBarContainer);
