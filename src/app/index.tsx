import * as React from "react";
import "./styles/style.scss";
import Header from "./header/";
import Footer from "./footer/";

class App extends React.Component<{}, {}> {
  render() {
    return (
      <div id="router-output">
        <Header title={"React template Pre-packed with..."}/>
        <div className="main-content-wrapper">
          {this.props.children}
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
