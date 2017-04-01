import { observable } from "mobx";

interface IListStore {

}

interface IListItem {
  title: string;
  description: string;
}

class ListStore implements IListStore {
  @observable public list: Array<IListItem> = new Array<IListItem>();

}

const listStore = new ListStore();
export default listStore;
