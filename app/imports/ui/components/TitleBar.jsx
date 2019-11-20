import React from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { withRouter, NavLink } from 'react-router-dom';
import { Menu, Dropdown, Image, Card, Container, Input, Item } from 'semantic-ui-react';
import { Roles } from 'meteor/alanning:roles';

/** The NavBar appears at the top of every page. Rendered by the App Layout component. UPDATED */
class TitleBar extends React.Component {
  render() {
    const menuStyle = { marginBottom: '0px', backgroundColor: '#024731' };
    return (
        <Menu style={menuStyle} attached="top" borderless inverted>
          <Menu.Item as={NavLink} activeClassName="" exact to="/">
            <Image size='small' src='/images/JL-logo2.png' to="/"/>
          </Menu.Item>
          <Menu.Item>
          </Menu.Item>
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

  renderPage() {
    const filteredItems = this.props.items.filter(
        (items) => items.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1,
    );
    // eslint-disable-next-line no-unused-expressions
    <Container className>
      <Input
          type='text'
          value={this.state.search}
          onChange={this.updateSearch.bind(this)}
      />

      <Card.Group>
        {filteredItems.map((item, index) => <Item key={index} item={item}/>)}
      </Card.Group>
    </Container>;
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
