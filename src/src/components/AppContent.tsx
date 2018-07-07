import * as React from 'react';

import * as toastr from 'toastr';
import { ApiService } from '../services/ApiService';
import { AuthService } from '../services/AuthService';

import AuthContent from './AuthContent';
import Buttons from './Buttons';

export default class AppContent extends React.Component<any, any> {
  public authService: AuthService;
  public apiService: ApiService;

  constructor(props: any) {
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

  public render() {
    return (
      <>
        <Buttons
          login={this.login}
          logout={this.logout}
          renewToken={this.renewToken}
          getUser={this.getUser}
          callApi={this.callApi}
        />

        <AuthContent api={this.state.api} user={this.state.user} />
      </>
    );
  }
}
