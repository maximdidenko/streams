import React from 'react';
import Modal from '../Modal';

const StreamDelete = () => {
  const actions = (
    <React.Fragment>
      <button className="ui negative button">Delete</button>
      <button className="ui button">Cancel</button>
    </React.Fragment>
  );

  return (
    <div>
      Stream Delete
      <Modal
        title="Delete Stream"
        actions={actions}
      >
        Are you sure you want to delete this stream?
      </Modal>
    </div>
  );
};

export default StreamDelete;
