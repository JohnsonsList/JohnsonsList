import React from 'react';
import { Table } from 'semantic-ui-react';
import PropTypes from 'prop-types';

/** Renders a single row in the List Stuff (Admin) table. See pages/ListStuffAdmin.jsx. */
class FeedbackList extends React.Component {
  render() {
    return (
        <Table.Row>
          <Table.Cell>{this.props.feedback.thoughts}</Table.Cell>
          <Table.Cell>{this.props.feedback.description}</Table.Cell>
          <Table.Cell>{this.props.feedback.owner}</Table.Cell>
        </Table.Row>
    );
  }
}

/** Require a document to be passed to this component. */
FeedbackList.propTypes = {
  feedback: PropTypes.object.isRequired,
};

export default FeedbackList;
