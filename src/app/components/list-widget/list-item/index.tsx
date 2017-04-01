import * as React from "react";
import "./style.scss";
import { IListItem } from "../interfaces";

interface IListItemProps {
  item: IListItem;
  index: number;
}

export default class ListItem extends React.Component<IListItemProps, {}> {
  // static propTypes = {}
  // static defaultProps = {}
  // state = {}

  render() {
    let item = this.props.item;
    return (
      <div className="list-item">
        <h6 className="index">{this.props.index + 1}</h6>
        <p>
          <span className="before">{item.title}</span>
          <span className="content">{item.description}</span>
        </p>
      </div>
    );
  }
}
