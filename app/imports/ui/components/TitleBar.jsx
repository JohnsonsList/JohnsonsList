import React from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { withRouter, NavLink } from 'react-router-dom';
import { Menu, Dropdown, Image, Icon } from 'semantic-ui-react';
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
    const trigger = (
        <Image src='/images/matthew.png' avatar/>
    );
    const menuStyle = {
      marginBottom: '0px',
      backgroundColor: '#fafafa',
      color: '#024731',
      borderBottom: '1px solid #f0f0f0' };
    return (
        <Menu style={menuStyle} className='ui borderless top fixed menu' inverted>
          <Menu.Item as={NavLink} activeClassName="" exact to="/home">
            <Image size='small' src='/images/JL-logo.png' to="/home"/>
          </Menu.Item>
          <a className='not-menu-item'
             href='/#/store'>
            <p className='not-menu-item'>
              STORE
            </p>
          </a>
            <p className='menu-space'>
              STORE
            </p>
          <a className='not-menu-item'
             href='/#/add'>
          <p className='not-menu-item'>
            ADD AN ITEM
          </p>
          </a>
          <Menu.Item position='right' className='store-icon' onClick={'/#/'}>
            <Icon name='search'/>
          </Menu.Item>
          <Menu.Item float="right">
            <Dropdown
              trigger={trigger}
              style={{ color: '#024731' }}
              pointing='top right'>
              <Dropdown.Menu centered>
                <Dropdown.Item icon='user' text={this.props.currentUser} as={NavLink} exact to='/profile'/>
                <Dropdown.Item icon='heart' text='Your Listings' as={NavLink} exact to='/list'/>
                <Dropdown.Item icon='star' text='Saved Items' as={NavLink} exact to='/saved'/>
              <div className='ui divider'/>
                {Roles.userIsInRole(Meteor.userId(), 'admin') ? (
                ''
                ) : <Dropdown.Item icon='chat' text='Provide Feedback' as={NavLink} exact to='/feed'/> }
                {Roles.userIsInRole(Meteor.userId(), 'admin') ? (
                <Dropdown.Item icon='chat' text='All Listings' as={NavLink} exact to='/admin'/>
                ) : ''}
                {Roles.userIsInRole(Meteor.userId(), 'admin') ? (
                <Dropdown.Item icon='chat' text='User Complaints' as={NavLink} exact to='/issues'/>
                ) : ''}
                {Roles.userIsInRole(Meteor.userId(), 'admin') ? (
                    <Dropdown.Item icon='chat' text='Website Feedback' as={NavLink} exact to='/feedback'/>
                ) : ''}
                <Dropdown.Item icon='sign-out' text='Logout' as={NavLink} exact to='/signout'/>
              </Dropdown.Menu>
            </Dropdown>
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
