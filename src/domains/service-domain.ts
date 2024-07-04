import { signal, Signal } from "@preact/signals-core";

export type DomainSignal<T> = Signal<T>;

// { count:0, name: 'John' } => T
export class SignalsDomain<T extends { [K in keyof T]: any }> {
  // create signal
  createSignal(payload: T[keyof T]) {
    return signal(payload);
  }

  // update signal
  updateSignal<U extends T[keyof T]>(signal: DomainSignal<U>, payload: U) {
    signal.value = payload;
  }
}
