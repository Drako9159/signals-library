import { Signal, SignalsAdapter, SignalsDomain } from "./domains";

export class ServiceManager<T extends { [K in keyof T]: any }> {
  // global state
  signalsCollection = new Map<string, Signal<T[keyof T]>>();
  

  constructor(private signalsAdapter: SignalsAdapter<T>) {}
  createSignal(payload: T[keyof T]) {
    return this.signalsAdapter.createSignal(payload);
  }

  updateSignal(signal: Signal<T[keyof T]>, payload: T[keyof T]) {
    this.signalsAdapter.updateSignal(signal, payload);
  }
}
