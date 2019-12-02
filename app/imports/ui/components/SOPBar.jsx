import React from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { withRouter, NavLink } from 'react-router-dom';
import { Menu, Image } from 'semantic-ui-react';

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
    const menuStyle = { marginBottom: '0px', backgroundColor: '#FFFFFF',
      WebkitBoxShadow: '0 8px 8px -8px #D6C8B7',
      MozBoxShadow: '0 8px 8px -8px #D6C8B7',
      boxShadow: '0 8px 8px -8px #D6C8B7' };
    return (
        <div id='SUbar'>
        <Menu style={menuStyle} className="ui borderless top fixed menu" inverted>
          <Menu.Item as={NavLink} activeClassName="" exact to="/">
            <Image size='small' src='/images/JL-logo.png' to="/"/>
          </Menu.Item>
        </Menu>
        </div>
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
