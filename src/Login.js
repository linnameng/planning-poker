import React from 'react';
import './Login.css';

function Login() {
  return (
    <div className="Login">
      <div className="Login-form-container">
        <div className="uk-align-center Login-form">
        <span uk-icon="icon: users; ratio: 5" className="uk-margin"></span>
        <form>
          <fieldset className="uk-fieldset">
            <div className="uk-margin">
              <div className="uk-inline">
                <span className="uk-form-icon" uk-icon="icon: user"></span><input className="uk-input" type="text" placeholder="Username"></input>
              </div>
            </div>
            <div className="uk-margin">
              <div className="uk-inline">    
                <span className="uk-form-icon uk-form-icon-flip" uk-icon="icon: lock"></span>
                <input className="uk-input" type="text" placeholder="Password"></input>
              </div>
            </div>
          </fieldset>
          <div className="uk-inline">
            <button className="uk-button uk-button-primary uk-width-1-1 uk-margin-small-bottom">Login</button>
          </div>
        </form>
        </div>
      </div>
     </div>
  );
}

export default Login;