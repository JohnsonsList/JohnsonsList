import React from 'react';
import { Table } from 'semantic-ui-react';
import PropTypes from 'prop-types';

/** Renders a single row in the List Stuff (Admin) table. See pages/ListStuffAdmin.jsx. */
class IssuesList extends React.Component {
  render() {
    return (
        <Table.Row>
          <Table.Cell>{this.props.issue.problem}</Table.Cell>
          <Table.Cell>{this.props.issue.description}</Table.Cell>
          <Table.Cell>{this.props.issue.user}</Table.Cell>
          <Table.Cell>{this.props.issue.owner}</Table.Cell>
        </Table.Row>
    );
  }
}

/** Require a document to be passed to this component. */
IssuesList.propTypes = {
  issue: PropTypes.object.isRequired,
};

export default IssuesList;
