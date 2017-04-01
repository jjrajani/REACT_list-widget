import { observable } from "mobx";
import { IListItem } from "./interfaces";

interface IListStore {

}

class ListStore implements IListStore {
  @observable public list: Array<IListItem> = new Array<IListItem>();

  // constructor() {
  //   this.list = [{description: "First ever.", title: "First Ever"}]
  // }
}

const listStore = new ListStore();
export default listStore;
