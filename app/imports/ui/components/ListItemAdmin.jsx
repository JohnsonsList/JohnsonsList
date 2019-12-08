import React from 'react';
import { Table } from 'semantic-ui-react';
import PropTypes from 'prop-types';

/** Renders a single row in the List Stuff (Admin) table. See pages/ListStuffAdmin.jsx. */
class ListingsAdmin extends React.Component {
  render() {
    return (
        <Table.Row>
          <Table.Cell>{this.props.listings.name}</Table.Cell>
          <Table.Cell>{this.props.listings.price}</Table.Cell>
          <Table.Cell>{this.props.listings.condition}</Table.Cell>
          <Table.Cell>{this.props.listings.owner}</Table.Cell>
        </Table.Row>
    );
  }
}

/** Require a document to be passed to this component. */
ListingsAdmin.propTypes = {
  listings: PropTypes.object.isRequired,
};

export default ListingsAdmin;
