import { SignalsManager } from "./service-manager";

export type SignalsState<T = {}> = { [K in keyof T]: any };

export function initSignalsManager<T extends SignalsState<T>>(defaultState: T) {
  return new SignalsManager(defaultState);
}
