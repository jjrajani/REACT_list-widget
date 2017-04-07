import { ListStore } from "../store";
import { IListItem } from "../interfaces";
import { observable } from "mobx";
import { } from "jest";

describe("List Store", () => {
  const listStore = new ListStore();

  const items: Array<IListItem> = [
    {
      title: "first",
      description: "all the way to the palce there was ebfore the tings thate s thwer vhewer."
    },
    {
      title: "second",
      description: "and then back to where it all began cause thats where it all came from."
    }
  ];

  it("has a list that is an observable array", () => {
    expect(listStore.list).toEqual(observable([
      {
        title: "First Ever",
        description: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
      }
    ]));
  });

  it("has an @ computed function that returns the length of the list", () => {
    expect(listStore["length"]()).toEqual(1);
    listStore.list.push({
      title: "second",
      description: "second second second second"
    });
    expect(listStore["length"]()).toEqual(2);
  });

  it("can add things to the list", () => {
    listStore.list = [];

    expect(listStore["length"]()).toEqual(0);
    listStore.saveItem(items[0]);
    expect(listStore["length"]()).toEqual(1);
    listStore.saveItem(items[1]);
    expect(listStore["length"]()).toEqual(2);
  });

  it("can remove things from the list" ,() => {
    expect(listStore["length"]()).toEqual(2);
    listStore.trash(items[0], 0);
    expect(listStore["length"]()).toEqual(1);
    expect(listStore.list[0] === items[1]);
    listStore.trash(items[0], 0);
    expect(listStore["length"]()).toEqual(0);
  })


})
