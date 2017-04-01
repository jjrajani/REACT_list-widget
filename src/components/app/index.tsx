import * as React from "react";
import "./style.scss";
import Header from "../header";

class App extends React.Component<{}, {}> {
  render() {
    return (
      <div className="app">
        <Header title={"React template Pre-packed with..."}/>
        <p className="app-intro">
          To get started, edit <code>src/components/app/index.tsx</code> and save to reload.
        </p>
        {this.props.children}
      </div>
    );
  }
}

export default App;
