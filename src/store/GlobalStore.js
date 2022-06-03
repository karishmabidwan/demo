import { makeAutoObservable } from "mobx"
import { data } from "../utils";

class GlobalStore {
    data = data;

    constructor() {
        makeAutoObservable(this)
    }

    getById(id) {
        return this.data.find((e)=> e.id === id);
    }

}

export const globalStore = new GlobalStore();
