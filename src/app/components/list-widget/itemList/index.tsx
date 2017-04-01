import * as React from "react";
import "./style.scss";
import { IListItem } from "../interfaces";

interface IItemListProps {
  items: Array<IListItem>;
}

interface IItemListState {

}

export default class ItemList extends React.Component<IItemListProps, IItemListState> {
  // static propTypes = {}
  // static defaultProps = {}
  // state = {}

  constructor(props: IItemListProps) {
    super(props);
  }

  render() {
    return (
      <div id="item-list">
        item list
      </div>
    );
  }
}
