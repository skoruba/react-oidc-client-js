import * as R from 'ramda';
import * as React from 'react';
import JSONTree from 'react-json-tree';

export interface IUserProfileProps {
  user: any;
  shouldExpandNode?: (keyPath: Array<string | number>, data: [any] | {}, level: number) => boolean;
}

export default class UserProfile extends React.Component<IUserProfileProps, any> {
  public renderUserDetail() {
    return R.not(R.isEmpty(this.props.user)) && R.not(R.isNil(this.props.user)) ? (
      <>
        <h1>User profile</h1>
        <JSONTree data={this.props.user} theme="bright" shouldExpandNode={this.props.shouldExpandNode} />
      </>
    ) : null;
  }

  public render() {
    return this.renderUserDetail();
  }
}
