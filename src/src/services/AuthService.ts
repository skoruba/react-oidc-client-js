import { Log, User, UserManager } from 'oidc-client';

import { Constants } from '../helpers/Constants';

export class AuthService {
  public userManager: UserManager;

  constructor() {
    const settings = {
      authority: process.env.REACT_APP_STS_AUTHORITY,
      client_id: 'React.Spa',
      redirect_uri: window.location.origin + '/signin-callback.html',
      silent_redirect_uri: window.location.origin + '/silent-renew.html',
      post_logout_redirect_uri: window.location.origin,
      response_type: 'code',
      scope: Constants.clientScope
    };

    this.userManager = new UserManager(settings);

    Log.logger = console;
    Log.level = Log.INFO;
  }

  public getUser(): Promise<User | null> {
    return this.userManager.getUser();
  }

  public login(): Promise<void> {
    return this.userManager.signinRedirect();
  }

  public renewToken(): Promise<User> {
    return this.userManager.signinSilent();
  }

  public logout(): Promise<void> {
    return this.userManager.signoutRedirect();
  }
}
