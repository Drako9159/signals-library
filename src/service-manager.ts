import { Signal, SignalsAdapter } from "./domains";

export class SignalsManager<T extends { [K in keyof T]: any }> {
  // global state
  signalsCollection = new Map<keyof T, Signal<T[keyof T]>>();
  signalsAdapter: SignalsAdapter<T>;

  constructor(defaultState: T) {
    this.signalsAdapter = new SignalsAdapter<T>();

    // aggregate for each key value, create signal and add to collection
    for (const key in defaultState) {
      this.signalsCollection.set(
        key,
        this.signalsAdapter.createSignal(defaultState[key])
      );
    }
  }

  getSignal<U extends T[keyof T]>(key: keyof T): Signal<U> {
    const foundSignal = this.signalsCollection.get(key);
    if (!foundSignal) {
      throw new Error(`Signal ${String(key)} not found`);
    }
    return foundSignal;
  }

  updateSignal(key: keyof T, payload: T[keyof T]) {
    const foundSignal = this.getSignal(key);
    this.signalsAdapter.updateSignal(foundSignal, payload);
  }
}
