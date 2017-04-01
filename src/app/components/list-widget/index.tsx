import * as React from "react";
import { observer } from "mobx-react";
import "./style.scss";
import listStore from "./store";
import ListItemForm from "./form";
import ItemList from "./item-list";

@observer
export default class ListWidget extends React.Component<{}, {}> {
  // static propTypes = {}
  // static defaultProps = {}
  // state = {}

  constructor (props: any) {
    super(props);
  }

  render() {
    return (
      <div id="list-widget">
        {this._renderListWidget()}
        <p className="footer">a list widget brought to you by humdrum.</p>
      </div>
    );
  }

  private _renderListWidget = () => {
    return listStore.length > 0
    ? <ItemList items={listStore.list}/>
    : <ListItemForm />;
  }
}
