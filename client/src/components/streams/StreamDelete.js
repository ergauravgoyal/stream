import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Modal from "../Modal";
import history from "../../history";
import { deleteStream, fetchStream } from "../../actions";

class StreamDelete extends Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }
  deleteStream = () => {};
  renderActions = () => {
    const { id } = this.props.match.params;
    return (
      <React.Fragment>
        <button
          className="ui button negative"
          onClick={() => this.props.deleteStream(id)}
        >
          Delete
        </button>
        <Link to="/" className="ui button">
          Cancel
        </Link>
      </React.Fragment>
    );
  };

  renderContent = () => {
    if (!this.props.stream) {
      return "Are you sure you want to delete this stream ?";
    } else {
      return `Are you sure you want to delete the stream with title: ${
        this.props.stream.title
      } ?`;
    }
  };
  render() {
    console.log(this.props);

    return (
      <Modal
        title="Delete Stream"
        content={this.renderContent()}
        onDismiss={() => history.push("/")}
        onDelete={this.deleteStream}
        actions={this.renderActions()}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id]
  };
};
export default connect(
  mapStateToProps,
  {
    deleteStream,
    fetchStream
  }
)(StreamDelete);
