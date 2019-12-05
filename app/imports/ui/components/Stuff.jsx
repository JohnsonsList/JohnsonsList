import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Card, Image, Label } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter, Link, NavLink } from 'react-router-dom';
// import { Roles } from 'meteor/alanning:roles';

/** Renders a single row in the List Stuff table. See pages/MyListing.jsx. */
class Stuff extends React.Component {
  render() {
    return (
        <Card className='limitCard' centered>
          <Image
              centered
              className='limit'
              size='small'
              src={this.props.stuff.image}
          />
          <Card.Content>
            <Card.Header style={{ paddingBottom: '10px' }}>{this.props.stuff.name}</Card.Header>
            <Card.Meta>Condition: {this.props.stuff.condition}</Card.Meta>
            <Card.Meta>Price: ${this.props.stuff.price}</Card.Meta>
            <Card.Meta>Contact Info: {this.props.stuff.email}</Card.Meta>
            <Card.Meta style={{ paddingTop: '10px' }}>
              <Label color='teal'>{this.props.stuff.categories}</Label>
            </Card.Meta>
          </Card.Content>
          <Card.Content extra>
            <Card.Meta>
              {this.props.stuff.owner}
              {this.props.stuff.owner !== Meteor.user().username ?
                    <NavLink
                        id='report'
                        to='/notif'
                        exact
                        activeClassName=''>
                    Report Listing
                    </NavLink>
              : '' }
              {this.props.stuff.owner === Meteor.user().username ?
              <Link className='edit' to={`/edit/${this.props.stuff._id}`}>Edit</Link>
              : '' }
            </Card.Meta>
          </Card.Content>
        </Card>
    );
  }
}

/** Require a document to be passed to this component. */
Stuff.propTypes = {
  stuff: PropTypes.object.isRequired,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(Stuff);
