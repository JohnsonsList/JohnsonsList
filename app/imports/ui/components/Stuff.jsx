import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';

/** Renders a single row in the List Stuff table. See pages/MyListing.jsx. */
class Stuff extends React.Component {
  render() {
    return (
        <Card centered>
          <Card.Content>
            <Image
                size='large'
                src={this.props.stuff.image}
            />
            <Card.Header>{this.props.stuff.name}</Card.Header>
            <Card.Meta>Qty: {this.props.stuff.quantity}</Card.Meta>
            <Card.Meta>{this.props.stuff.owner}</Card.Meta>
            <Card.Meta>{this.props.stuff.condition}</Card.Meta>
          </Card.Content>
          <Card.Content extra>
            <Link to={`/edit/${this.props.stuff._id}`}>Edit</Link>
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
