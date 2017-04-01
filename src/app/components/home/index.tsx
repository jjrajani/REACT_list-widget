import * as React from "react";
import "./style.scss";

export default class Home extends React.Component<{}, {}> {
  // static propTypes = {}
  // static defaultProps = {}
  // state = {}

  render() {
    return (
      <div id="home">
        <div className="main-content">
          <p>
            To get started, edit <code>src/components/app/index.tsx</code> and save to reload.
          </p>
        </div>
      </div>
    );
  }
}
