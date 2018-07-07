import * as React from 'react';

interface IButtonsProps {
  login: () => void;
  getUser: () => void;
  callApi: () => void;
  renewToken: () => void;
  logout: () => void;
}

const Buttons: React.SFC<IButtonsProps> = props => {
  return (
    <div className="row">
      <div className="col-md-12 text-center" style={{ marginTop: '30px' }}>
        <button className="btn btn-primary btn-login" style={{ margin: '10px' }} onClick={props.login}>
          Login
        </button>
        <button className="btn btn-secondary btn-getuser" style={{ margin: '10px' }} onClick={props.getUser}>
          Get User info
        </button>
        <button className="btn btn-warning btn-getapi" style={{ margin: '10px' }} onClick={props.callApi}>
          Call API
        </button>
        <button className="btn btn-success btn-renewtoken" style={{ margin: '10px' }} onClick={props.renewToken}>
          Renew Token
        </button>
        <button className="btn btn-dark btn-logout" style={{ margin: '10px' }} onClick={props.logout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Buttons;
