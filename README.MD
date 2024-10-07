# Signals Library

## Available for any frontend library

# bun starter

## Getting Started

Click the [Use this template](https://github.com/wobsoriano/bun-lib-starter/generate) button to create a new repository with the contents starter.

OR

Run `bun create wobsoriano/bun-lib-starter ./my-lib`.

## Setup

```bash
# install dependencies
bun install

# test the app
bun test

# build the app, available under dist
bun run build
```

## License

MIT

## Usability

1. Clone or download the repository
2. Install the required dependencies
3. Import the necessary modules into your project

The SignalsManager class provides methods for creating, retrieving, and updating signals. 

````Typescript
import { SignalsManager } from "./signals_manager";

// Define your default state
const defaultState = {
    // Define your state properties here with their default values
    count: 0;
}

// Initialize the Signals Manager
const signalsManager = new SignalsManager(defaultState);

// Now you can add, retrieve, and update signals as needed
// Only the signal declared at the "defaultState" object, if you try to use any key that is not already provided an error will ocurred

````
Initialize the Signals Manager using the initSignalsManager function: 

````Typescript
import { initSignalsManager, SignalsState } from "./init";

// Define the keys you want to use for your signals
enum StateProperties = {
    "COUNT" = "count"
} as const;

// Define the Default Signals State type you will use
type DefaultState = SignalsState<{ [StateProperties.COUNT]: number }>;


// Define your default state
const defaultState: SignalsState<DefaultState> = {
    // Define your state properties here with their default values
    StateProperties.COUNT: 0,
}

// Initialize the Signals Manager
const signalsManager = initSignalsManager(defaultState)

// Now you can start using the Signals Manager

````

To retrieve a signal from the manager, use the getSignal method:

````Typescript
const mySignal = signalsManager.getSignal("propertyName");
````
Update a signal in the manager, use the updateSignal method

````Typescript
signalsManager.updateSignal("propertyName", payload)
````

