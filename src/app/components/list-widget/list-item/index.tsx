import * as React from "react";
import "./style.scss";
import listStore from "../store";
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
        <h6 className="trash" onClick={listStore.trash.bind(this, item, this.props.index)}>trash</h6>
      </div>
    );
  }
}
