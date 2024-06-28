import { DomainSignal, SignalDomain } from "../service-domain";

export type Signal<T> = DomainSignal<T>;

export class SignalsAdapter<T extends { [K in keyof T]: any }> {
  constructor(private signalDomain: SignalDomain<T>) {}

  createSignal(payload: T[keyof T]) {
    return this.signalDomain.createSignal(payload);
  }

  updateSignal(signal: Signal<T[keyof T]>, payload: T[keyof T]) {
    this.signalDomain.updateSignal(signal, payload);
  }
}
