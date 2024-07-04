import { SignalsManager } from "./service-manager";

export type SignalsState<T = {}> = { [K in keyof T]: any };

let signalsManager: SignalsManager<any>;

export function initSignalsManager<T extends SignalsState<T>>(
  defaultState: T
): SignalsManager<T> {
  if (signalsManager) {
    throw new Error(`SignalsManager instance already exists`);
  }

  signalsManager = new SignalsManager(defaultState);
  return signalsManager;
}
