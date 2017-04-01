import * as React from "react";
import "./style.scss";

export interface Link {

};

interface IFooterProps {

}

class Footer extends React.Component<IFooterProps, {}> {

  render() {
    return (
      <div id="footer">
        <a href="https://github.com/jjrajani" target="_blank">humdrum</a>
      </div>
    );
  }
}

export default Footer;
