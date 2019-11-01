import React from 'react';
import { pick } from 'lodash';
import { connect } from 'react-redux';
import StreamForm from './StreamForm';
import { fetchStream, editStream } from '../../actions';


class StreamEdit extends React.Component {
  componentDidMount() {
    const {
      match: {
        params: {
          id,
        },
      },
      fetchStream,
    } = this.props;

    fetchStream(id);
  }

  onSubmit = (formValues) => {
    const { 
      match: { 
        params: { 
          id,
        },
      },
      editStream,
    } = this.props;

    editStream(id, formValues);
  };

  render() {
    if (!this.props.stream) {
      return <div>Loading ...</div>
    }

    return (
      <div>
        <h3>Edit a Stream</h3>
        <StreamForm 
          onSubmit={this.onSubmit}
          initialValues={pick(this.props.stream, 'title', 'description')}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id],
  };
};

export default connect(mapStateToProps, { fetchStream, editStream })(StreamEdit);
