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
        <button className="btn btn-primary" style={{ margin: '10px' }} onClick={props.login}>
          Login
        </button>
        <button className="btn btn-secondary" style={{ margin: '10px' }} onClick={props.getUser}>
          Get User info
        </button>
        <button className="btn btn-warning" style={{ margin: '10px' }} onClick={props.callApi}>
          Call API
        </button>
        <button className="btn btn-success" style={{ margin: '10px' }} onClick={props.renewToken}>
          Renew Token
        </button>
        <button className="btn btn-dark" style={{ margin: '10px' }} onClick={props.logout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Buttons;
