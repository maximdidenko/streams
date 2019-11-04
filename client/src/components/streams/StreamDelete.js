import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Modal from '../Modal';
import { 
  deleteStream, 
  fetchStream, 
} from '../../actions';

class StreamDelete extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  renderActions() {
    return (
      <React.Fragment>
        <button 
          className="ui negative button"
          onClick={this.onDelete}
        >
          Delete
        </button>
        <Link 
          className="ui button"
          to="/"
        >
          Cancel
        </Link>
      </React.Fragment>
    );
  }

  onDismiss = () => {
    this.props.history.push('/');
  };

  onDelete = () => {
    this.props.deleteStream(this.props.match.params.id);
  };

  renderContent() {
    if (!this.props.stream) {
      return 'Are you sure you want to delete this stream?';
    }

    return `Are you sure you want to delete ${this.props.stream.title}?`
  }

  render() {
    return (
      <Modal
        title="Delete Stream"
        actions={this.renderActions()}
        onDismiss={this.onDismiss}
      >
        {this.renderContent()}
      </Modal>
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
    fetchStream, 
    deleteStream,
  })(StreamDelete);
