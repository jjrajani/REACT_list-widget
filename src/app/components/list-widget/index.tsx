import * as React from "react";
import { observer } from "mobx-react";
import "./style.scss";
import listStore from "./store";
import ListItemForm from "./form";
import ItemList from "./item-list";
import Header from "./header";

interface IListWidgetState {
  mode: string;
}

@observer
export default class ListWidget extends React.Component<{}, IListWidgetState> {
  // static propTypes = {}
  // static defaultProps = {}
  // state = {}

  constructor (props: any) {
    super(props);
    let m = listStore.list.length > 0 ? "list" : "newItem";
    this.state = {mode: m};
  }

  render() {
    return (
      <div id="list-widget">
      <Header mode={this.state.mode} switchMode={this._switchMode}/>
        {this._renderListWidget()}
        <p className="footer">a list widget brought to you by humdrum.</p>
      </div>
    );
  }

  private _renderListWidget = () => {
    return (this.state.mode === "list")
    ? <ItemList items={listStore.list}/>
    : <ListItemForm />;
  }

  private _switchMode = (newMode: string) => {
    this.setState({mode: newMode});
  }
}
