import * as React from "react";
import "./style.scss";
import listStore from "./store";
import ListItemForm from "./form";
import ItemList from "./itemList";

export default class NotFound extends React.Component<{}, {}> {
  // static propTypes = {}
  // static defaultProps = {}
  // state = {}

  render() {
    return (
      <div id="list-widget">
        {this._renderListWidget()}
      </div>
    );
  }

  private _renderListWidget = () => {
    return listStore.list.length > 0
    ? <ItemList items={listStore.list}/>
    : <ListItemForm />;
  }
}
