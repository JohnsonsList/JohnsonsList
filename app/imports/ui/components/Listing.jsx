import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Card, Image, Label } from 'semantic-ui-react';
import { _ } from 'meteor/underscore';
import PropTypes from 'prop-types';
import { withRouter, Link, NavLink } from 'react-router-dom';
// import { Roles } from 'meteor/alanning:roles';

/** Renders a single row in the List Listing table. See pages/MyListing.jsx. */
class Listing extends React.Component {
  render() {

    const labelStyle = { marginBottom: '5px',
      marginRight: '5px',
      marginTop: '0px',
      marginLeft: '0px' };

    return (
        <Link
        to={`/details/${this.props.listings._id}`}>
        <Card
            link
            className='limitCard'
            centered>
          <Image
              centered
              className='cardImage'
              size='small'
              src={this.props.listings.image}
          />
          <Card.Content>
            <Card.Header style={{ paddingBottom: '10px' }}>{this.props.listings.name}</Card.Header>
            <Card.Meta>Condition: {this.props.listings.condition}</Card.Meta>
            <Card.Meta>Price: ${this.props.listings.price}</Card.Meta>
            <Card.Meta>Contact Info: {this.props.listings.email}</Card.Meta>
            <Card.Meta style={{ paddingTop: '10px' }}>
              <Label style={labelStyle} color='teal'>{this.props.listings.categories}</Label>
              {/* eslint-disable-next-line eqeqeq */}
              {this.props.listings.categories === 'clothing' ?
              _.map(this.props.listings.clothes,
              (clothes, index) => <Label style={labelStyle} key={index} color='red'>{clothes}</Label>)
              : '' }
              {this.props.listings.categories === 'electronics' ?
              _.map(this.props.listings.electronics,
              (electronics, index) => <Label style={labelStyle} key={index} color='red'>{electronics}</Label>)
              : '' }
              {this.props.listings.categories === 'dormitory' ?
              _.map(this.props.listings.dormitory,
              (dormitory, index) => <Label style={labelStyle} key={index} color='red'>{dormitory}</Label>)
              : '' }
              {this.props.listings.categories === 'outdoors' ?
              _.map(this.props.listings.outdoors,
              (outdoors, index) => <Label style={labelStyle} key={index} color='red'>{outdoors}</Label>)
              : '' }
              {this.props.listings.categories === 'school' ?
              _.map(this.props.listings.school,
              (school, index) => <Label style={labelStyle} key={index} color='red'>{school}</Label>)
              : '' }
            </Card.Meta>
          </Card.Content>
          <Card.Content extra>
            <Card.Meta>
              {this.props.listings.owner}
              {this.props.listings.owner !== Meteor.user().username ?
                    <NavLink
                        id='report'
                        to='/notif'
                        exact
                        activeClassName=''>
                    Report Listing
                    </NavLink>
              : '' }
              {this.props.listings.owner === Meteor.user().username ?
              <Link className='edit' to={`/edit/${this.props.listings._id}`}>Edit</Link>
              : '' }
            </Card.Meta>
          </Card.Content>
        </Card>
    </Link>
    );
  }
}

/** Require a document to be passed to this component. */
Listing.propTypes = {
  listings: PropTypes.object.isRequired,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(Listing);
