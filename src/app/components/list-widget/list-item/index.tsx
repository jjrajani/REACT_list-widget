import * as React from "react";
import "./style.scss";
import { IListItem } from "../interfaces";

interface IListItemProps {
  item: IListItem;
}

export default class ListItem extends React.Component<IListItemProps, {}> {
  // static propTypes = {}
  // static defaultProps = {}
  // state = {}

  render() {
    let item = this.props.item;
    return (
      <div className="list-item">
        <p className="title">{item.title}</p>
        <p className="description">{item.description}</p>
      </div>
    );
  }
}
