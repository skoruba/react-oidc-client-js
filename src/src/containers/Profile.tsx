import * as React from 'react';

import JSONTree from 'react-json-tree';
import * as toastr from 'toastr';
import { ApiService } from '../services/ApiService';
import { AuthService } from '../services/AuthService';

import * as R from 'ramda';

export interface IProfileProps {
  profile?: any;
}

export default class Profile extends React.Component<IProfileProps, any> {
  public authService: AuthService;
  public apiService: ApiService;

  constructor(props: IProfileProps) {
    super(props);

    this.authService = new AuthService();
    this.apiService = new ApiService();
    this.state = { user: {}, api: {} };
  }

  public componentDidMount() {
    this.getUser();
  }

  public login = () => {
    this.authService.login();
  };

  public callApi = () => {
    this.apiService
      .callApi()
      .then(data => {
        this.setState({ api: data.data });
        toastr.success('Api return successfully data, check in section - Api response');
      })
      .catch(error => {
        toastr.error(error);
      });
  };

  public renewToken = () => {
    this.authService
      .renewToken()
      .then(user => {
        toastr.success('Token has been sucessfully renewed. :-)');
        this.getUser();
      })
      .catch(error => {
        toastr.error(error);
      });
  };

  public logout = () => {
    this.authService.logout();
  };

  public getUser = () => {
    this.authService.getUser().then(user => {
      if (user) {
        toastr.success('User has been successfully loaded from store.');
      } else {
        toastr.info('You are not logged in.');
      }

      this.setState({ user });
    });
  };

  public shouldExpandNode = (keyPath: Array<string | number>, data: [any] | {}, level: number) => {
    return true;
  };

  public renderUserDetail() {
    return R.not(R.isEmpty(this.state.user)) && R.not(R.isNil(this.state.user)) ? (
      <>
        <h1>User detail</h1>
        <JSONTree data={this.state.user} theme="bright" shouldExpandNode={this.shouldExpandNode} />
      </>
    ) : null;
  }
  public renderApiResponse() {
    return R.not(R.isEmpty(this.state.api)) ? (
      <>
        <h1>Api response</h1>
        <JSONTree data={this.state.api} theme="bright" shouldExpandNode={this.shouldExpandNode} />
      </>
    ) : null;
  }

  public render() {
    return (
      <>
        <div className="row">
          <div className="col-md-12 text-center" style={{ marginTop: '30px' }}>
            <button className="btn btn-primary" style={{ margin: '10px' }} onClick={this.login}>
              Login
            </button>
            <button className="btn btn-secondary" style={{ margin: '10px' }} onClick={this.getUser}>
              Get User info
            </button>
            <button className="btn btn-warning" style={{ margin: '10px' }} onClick={this.callApi}>
              Call API
            </button>
            <button className="btn btn-success" style={{ margin: '10px' }} onClick={this.renewToken}>
              Renew Token
            </button>

            <button className="btn btn-dark" style={{ margin: '10px' }} onClick={this.logout}>
              Logout
            </button>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">{this.renderUserDetail()}</div>
          <div className="col-md-6">{this.renderApiResponse()}</div>
        </div>
      </>
    );
  }
}
