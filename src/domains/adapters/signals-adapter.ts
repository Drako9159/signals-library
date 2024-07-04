import { DomainSignal, SignalsDomain } from "../service-domain";

export type Signal<T> = DomainSignal<T>;

export class SignalsAdapter<T extends { [K in keyof T]: any }> {
  signalDomain: SignalsDomain<T>;

  constructor() {
    this.signalDomain = new SignalsDomain<T>();
  }

  createSignal(payload: T[keyof T]) {
    return this.signalDomain.createSignal(payload);
  }

  updateSignal(signal: Signal<T[keyof T]>, payload: T[keyof T]) {
    this.signalDomain.updateSignal(signal, payload);
  }
}
