import * as React from "react";
import "./style.scss";
import { observer } from "mobx-react";
import listStore from "../store";
import { IListItem, ListItem } from "../interfaces";

interface IListItemFormProps {
  item?: IListItem;
}

interface IListItemFormState {
  title: string;
  description: string;
}

@observer
export default class ListItemForm extends React.Component<IListItemFormProps, IListItemFormState> {
  // static propTypes = {}
  // static defaultProps = {}
  // state = {}

  constructor(props: IListItemFormProps) {
    super(props);
    let _item = this.props.item || new ListItem();
    this.state = {
      title: _item.title || "",
      description: _item.description || "",
    };
    this._handleChange = this._handleChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  render() {
    return (
      <div id="list-widget-form">
        <h3 className="title">
          {this.props.item ? "Edit List Item" : "New List Item"}
        </h3>
        <div className="list-form-wrapper">
          <form onSubmit={this._handleSubmit}>
            <fieldset>
              <label htmlFor="title">Title:</label>
              <input
                type="text"
                name="title"
                id="title"
                value={this.state.title}
                onChange={this._handleChange}
                required={true}
              />
            </fieldset>
            <fieldset>
              <label htmlFor="description">Description:</label>
              <input
                type="text"
                name="description"
                id="description"
                value={this.state.description}
                onChange={this._handleChange}
                required={true}
              />
            </fieldset>
            <fieldset>
              <button type="submit">
                {this.props.item ? "Update List Item" : "Add List Item"}
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    );
  }

  private _handleChange = (e: any) => {
    e.preventDefault();
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState({[name]: value});
  }

  private _handleSubmit = (e: any) => {
    e.preventDefault();
    listStore.saveItem(this.state);
  }
}
