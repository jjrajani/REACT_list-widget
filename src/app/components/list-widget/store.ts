import { observable, extendObservable } from "mobx";
// computed
import { IListItem } from "./interfaces";

interface IListStore {

}

export class ListStore implements IListStore {
  @observable public list: Array<IListItem> = new Array<IListItem>();

  constructor() {
    this.list = [
      {
        title: "First Ever",
        description: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
      }
    ]

    extendObservable(this, {
      length: () => this.list.length
    });
  }

  public saveItem = (item: IListItem) => {
    this.list.push(item);
  }

  public trash = (item: IListItem, index: number) => {
    this.list = this.list.filter((item: IListItem, i: number) => {
      return i !== index;
    });
  }
}

const listStore = new ListStore();
export default listStore;
