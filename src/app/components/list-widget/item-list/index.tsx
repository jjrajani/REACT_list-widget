import * as React from "react";
import "./style.scss";
import { IListItem } from "../interfaces";
import ListItem from "../list-item";

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
    console.log('items', this.props.items)
  }

  render() {
    return (
      <div id="item-list">
        {this._renderItems()}
      </div>
    );
  }

  private _renderItems = () => {
    let items: Array<any> = this.props.items.map((item, i) => {
      return <ListItem item={item} key={i}/>
    });
    return <ul>{items}</ul>
  }
}
