import * as React from "react";
import "./style.scss";
import listStore from "./store";

export default class NotFound extends React.Component<{}, {}> {
  // static propTypes = {}
  // static defaultProps = {}
  // state = {}

  render() {
    return (
      <div id="list-widget">
        list-widget
        {this._renderListWidget()}
      </div>
    );
  }

  private _renderListWidget = () => {
    return listStore.list.length > 0
    ? this._renderList()
    : this._renderListItemForm();
  }

  private _renderList = () => {
    return (
      <div>List</div>
    )
  }

  private _renderListItemForm = () => {
    return (
      <div>List Item Form</div>
    )
  }
}
