import React from 'react';

const GoogleButton = ({ isSignedIn, onClick }) => {
  return (
    <button 
      className="ui red google button"
      style={{ margin: '5px' }}
      onClick={onClick}
    >
      <i className="google icon" />
      { isSignedIn ? 'Sign Out' : 'Sign In' }
    </button>
  );
};

export default GoogleButton;
