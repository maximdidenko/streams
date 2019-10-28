import React from 'react';
import { connect } from 'react-redux';
import GoogleButton from './GoogleButton';
import { signIn, signOut } from '../actions'

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load('client:auth2', this.setAuthInstance);
  }

  setAuthInstance = async () => {
    await window.gapi.client.init({
      clientId: '363443903621-v1ndvqm4ijh79r1no83imdca3cn8suni.apps.googleusercontent.com',
      scope: 'email'
    });

    this.auth = window.gapi.auth2.getAuthInstance();
    this.setAuthState(this.auth.isSignedIn.get());
    this.auth.isSignedIn.listen(this.setAuthState);
  };

  setAuthState = (isSignedIn) => {
    const { 
      signIn, 
      signOut, 
    } = this.props;
  
    isSignedIn ? signIn(this.auth.currentUser.get().getId()) : signOut();
  };

  handleClick = () => {
    if (this.props.isSignedIn) {
      this.auth.signOut();
    } else {
      this.auth.signIn();
    }
  };

  render() {
    return (
      <GoogleButton
        isSignedIn={this.props.isSignedIn}
        onClick={this.handleClick}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isSignedIn: state.auth.isSignedIn,
  };
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
