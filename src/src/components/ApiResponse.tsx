import * as R from 'ramda';
import * as React from 'react';
import JSONTree from 'react-json-tree';

export interface IApiResponseProps {
  api: any;
  shouldExpandNode?: (keyPath: Array<string | number>, data: [any] | {}, level: number) => boolean;
}

export default class ApiResponse extends React.Component<IApiResponseProps, any> {
  public renderApiResponse() {
    return R.not(R.isEmpty(this.props.api)) ? (
      <>
        <h1>Api response</h1>
        <JSONTree data={this.props.api} theme="bright" shouldExpandNode={this.props.shouldExpandNode} />
      </>
    ) : null;
  }

  public render() {
    return this.renderApiResponse();
  }
}
