import * as React from "react";
import "./style.scss";

interface IHeaderProps {
  mode: string;
  switchMode: Function;
}

export default class Header extends React.Component<IHeaderProps, {}> {
  // static propTypes = {}
  // static defaultProps = {}
  // state = {}

  private modes: any = { };

  constructor(props: IHeaderProps) {
    super(props);
    this.modes = {
      list: this._listHeader(),
      newItem: this._newItemHeader(),
      editItem: <div className="list-header"><p>Edit Item</p></div>,
    }
  }

  render() {
    return this.modes[this.props.mode]
  }

  private _listHeader = () => {
    return (
      <div className="list-header">
        <p>humdrum's List Widget</p>
        <button className="add" onClick={this.props.switchMode.bind(this, "newItem")}></button>
      </div>
    )
  }

  private _newItemHeader = () => {
    return (
      <div className="list-header">
        <button className="back" onClick={this.props.switchMode.bind(this, "list")}></button>
        <p>New Item</p>
      </div>
    )
  }

}
