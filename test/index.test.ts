import { describe, it, expect } from "bun:test";
import { SignalsState, initSignalsManager } from "../src";

type DefaultState = { counter: number; test: string };

describe("should", () => {
  const defaultState: SignalsState<DefaultState> = {
    counter: 0,
    test: "",
  };
  const signalsManager = initSignalsManager<DefaultState>(defaultState);

  it("should create a new instance of SignalsManager", () => {
    expect(signalsManager).toBeDefined();
  });

  it("should throw an error if the instance already exists", () => {
    try {
      expect(initSignalsManager(defaultState)).toThrow(
        "SignalsManager instance already exists"
      );
    } catch (error) {}
  });

  it("should have been initialize with the default state", () => {
    const counterSignal = signalsManager.getSignal("counter");
    expect(counterSignal.value).toBe(0);
  });

  it("should update the signal value", () => {
    signalsManager.updateSignal("counter", 1);
    const counterSignal = signalsManager.getSignal("counter");
    expect(counterSignal.value).toBe(1);
  });
});
