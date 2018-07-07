import * as React from 'react';
import ApiResponse from './ApiResponse';
import UserProfile from './UserProfile';

export interface IAuthContentProps {
  api: any;
  user: any;
}

export default class AuthContent extends React.Component<IAuthContentProps, any> {
  public shouldExpandNode = (keyPath: Array<string | number>, data: [any] | {}, level: number) => {
    return true;
  };

  public render() {
    return (
      <div className="row">
        <div className="col-md-6">
          <UserProfile user={this.props.user} shouldExpandNode={this.shouldExpandNode} />
        </div>
        <div className="col-md-6">
          <ApiResponse api={this.props.api} shouldExpandNode={this.shouldExpandNode} />
        </div>
      </div>
    );
  }
}
