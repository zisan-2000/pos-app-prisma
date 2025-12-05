import Dexie from "dexie";

export class PosDexie extends Dexie {
  products!: Dexie.Table<{ id: string }, string>;

  constructor() {
    super("pos-app");
    this.version(1).stores({
      products: "id",
    });
  }
}

export const dexieDb = new PosDexie();

