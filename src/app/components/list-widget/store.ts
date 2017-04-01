import { observable, computed } from "mobx";
import { IListItem } from "./interfaces";

interface IListStore {

}

class ListStore implements IListStore {
  @observable public list: Array<IListItem> = new Array<IListItem>();

  constructor() {
    this.list = [{description: "First ever.", title: "First Ever"}]
  }

  @computed get length() {
    return this.list.length;
  }

  public saveItem = (item: IListItem) => {
    this.list.push(item);
  }
}

const listStore = new ListStore();
export default listStore;
